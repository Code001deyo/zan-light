import nodemailer from 'nodemailer';

// Security: Input validation and sanitization functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone);
};

const validateDate = (date) => {
  const dateObj = new Date(date);
  const now = new Date();
  return dateObj instanceof Date && !isNaN(dateObj) && dateObj > now;
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .substring(0, 1000); // Limit length
};

const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  return name.length >= 2 && name.length <= 100 && /^[a-zA-Z\s\-'\.]+$/.test(name);
};

// Security: Rate limiting simulation
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 booking requests per window (stricter than contact)

const isRateLimited = (ip) => {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  
  // Clean old requests
  const validRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  return false;
};

export default async function handler(req, res) {
  // Security: Method validation
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  // Security: Get client IP for rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  
  // Security: Rate limiting
  if (isRateLimited(clientIP)) {
    return res.status(429).json({
      success: false,
      message: 'Too many booking requests. Please try again later.'
    });
  }

  // Security: Input validation and sanitization
  const { name, email, phone, service, date, time, location, guests, budget, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !service || !date) {
    return res.status(400).json({ 
      success: false,
      message: 'Name, email, phone, service, and date are required' 
    });
  }

  // Validate name
  if (!validateName(name)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid name format'
    });
  }

  // Validate email
  if (!validateEmail(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Validate phone
  if (!validatePhone(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid phone format'
    });
  }

  // Validate date
  if (!validateDate(date)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid date or date must be in the future'
    });
  }

  // Sanitize all inputs
  const sanitizedData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    phone: sanitizeInput(phone),
    service: sanitizeInput(service),
    date: sanitizeInput(date),
    time: time ? sanitizeInput(time) : null,
    location: location ? sanitizeInput(location) : null,
    guests: guests ? sanitizeInput(guests) : null,
    budget: budget ? sanitizeInput(budget) : null,
    message: message ? sanitizeInput(message) : null
  };

  // Security: Validate optional message length if provided
  if (sanitizedData.message && (sanitizedData.message.length > 1000)) {
    return res.status(400).json({
      success: false,
      message: 'Message is too long (max 1000 characters)'
    });
  }

  // Security: Check for spam patterns
  const spamPatterns = [
    /viagra/gi,
    /casino/gi,
    /lottery/gi,
    /bitcoin/gi,
    /cryptocurrency/gi,
    /click here/gi,
    /urgent/gi,
    /congratulations/gi
  ];

  const textToCheck = `${sanitizedData.name} ${sanitizedData.message || ''}`;
  const isSpam = spamPatterns.some(pattern => pattern.test(textToCheck));

  if (isSpam) {
    return res.status(400).json({
      success: false,
      message: 'Booking contains suspicious content'
    });
  }

  // Security: Validate service type (whitelist)
  const allowedServices = [
    'wedding',
    'portrait', 
    'graduation',
    'event',
    'commercial',
    'videography',
    'birthday',
    'babyshower',
    'ruracio',
    'graphicdesign',
    'printing'
  ];

  if (!allowedServices.includes(sanitizedData.service)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid service type selected'
    });
  }

  try {
    // Security: Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('BOOKING FORM - EMAIL NOT CONFIGURED:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        service: sanitizedData.service,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Booking received! We will contact you via WhatsApp or phone within 24 hours. For urgent matters, please WhatsApp us directly at +254 706 190246.' 
      });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Security: Escape HTML in email content
    const escapeHtml = (text) => {
      if (!text) return '';
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };

    // Email content for booking with escaped HTML
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'zanelightvisuals@gmail.com',
      subject: `New Booking Request: ${escapeHtml(sanitizedData.name)} - ${escapeHtml(sanitizedData.service)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ffc107; margin-bottom: 20px; text-align: center;">🎉 New Booking Request</h2>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">👤 Client Information</h3>
              <p><strong>Name:</strong> ${escapeHtml(sanitizedData.name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(sanitizedData.email)}" style="color: #ffc107;">${escapeHtml(sanitizedData.email)}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${escapeHtml(sanitizedData.phone)}" style="color: #ffc107;">${escapeHtml(sanitizedData.phone)}</a></p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">📸 Service Details</h3>
              <p><strong>Service:</strong> <span style="color: #ffc107; font-weight: bold;">${escapeHtml(sanitizedData.service)}</span></p>
              <p><strong>Date:</strong> ${escapeHtml(sanitizedData.date)}</p>
              <p><strong>Time:</strong> ${escapeHtml(sanitizedData.time || 'Not specified')}</p>
              <p><strong>Location:</strong> ${escapeHtml(sanitizedData.location || 'Not specified')}</p>
              <p><strong>Number of Guests:</strong> ${escapeHtml(sanitizedData.guests || 'Not specified')}</p>
              <p><strong>Budget:</strong> ${escapeHtml(sanitizedData.budget || 'Not specified')}</p>
            </div>
            
            ${sanitizedData.message ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #ffc107; padding-bottom: 5px;">💬 Additional Message</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${escapeHtml(sanitizedData.message).replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            ` : ''}
            
            <div style="background-color: #ffc107; color: #000; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0;">🎯 Next Steps:</h4>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Contact client within 24 hours</li>
                <li>Confirm availability for ${escapeHtml(sanitizedData.date)}</li>
                <li>Discuss package details and pricing</li>
                <li>Send booking contract if agreed</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This booking request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
              <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
                Client IP: ${clientIP.substring(0, 10)}... | From ZAN E-lite Visuals booking system
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
NEW BOOKING REQUEST

Client Information:
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}

Service Details:
Service: ${sanitizedData.service}
Date: ${sanitizedData.date}
Time: ${sanitizedData.time || 'Not specified'}
Location: ${sanitizedData.location || 'Not specified'}
Number of Guests: ${sanitizedData.guests || 'Not specified'}
Budget: ${sanitizedData.budget || 'Not specified'}

${sanitizedData.message ? `Additional Message:\n${sanitizedData.message}\n` : ''}

Next Steps:
- Contact client within 24 hours
- Confirm availability for ${sanitizedData.date}
- Discuss package details and pricing
- Send booking contract if agreed

---
This booking request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
Client IP: ${clientIP}
From ZAN E-lite Visuals booking system
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Booking request submitted successfully! We will contact you within 24 hours to confirm details.' 
    });
    
  } catch (error) {
    console.error('Booking email error:', error.message);
    
    // Security: Log for manual follow-up without sensitive data
    console.log('BOOKING REQUEST - REQUIRES MANUAL FOLLOW-UP:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      service: sanitizedData.service,
      date: sanitizedData.date,
      timestamp: new Date().toISOString(),
      ip: clientIP.substring(0, 10) + '...'
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'There was an error submitting your booking. Please contact us directly via WhatsApp or phone.' 
    });
  }
} 