import nodemailer from 'nodemailer';

// Security: Input validation and sanitization
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone);
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

// Security: Rate limiting simulation (in production, use Redis or similar)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per window

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
      message: 'Too many requests. Please try again later.'
    });
  }

  // Security: Input validation and sanitization
  const { name, email, phone, service, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false,
      message: 'Name, email, and message are required' 
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

  // Validate phone if provided
  if (phone && !validatePhone(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid phone format'
    });
  }

  // Sanitize inputs
  const sanitizedData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    phone: phone ? sanitizeInput(phone) : null,
    service: service ? sanitizeInput(service) : null,
    message: sanitizeInput(message)
  };

  // Security: Validate message length
  if (sanitizedData.message.length < 10 || sanitizedData.message.length > 1000) {
    return res.status(400).json({
      success: false,
      message: 'Message must be between 10 and 1000 characters'
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

  const isSpam = spamPatterns.some(pattern => 
    pattern.test(sanitizedData.message) || pattern.test(sanitizedData.name)
  );

  if (isSpam) {
    return res.status(400).json({
      success: false,
      message: 'Message contains suspicious content'
    });
  }

  try {
    // Security: Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('CONTACT FORM - EMAIL NOT CONFIGURED:', {
        name: sanitizedData.name,
        email: sanitizedData.email,
        service: sanitizedData.service,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received! We will contact you via WhatsApp or phone within 24 hours. For urgent matters, please WhatsApp us directly at +254 706 190246.' 
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

    // Email content with escaped HTML
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'zanelightvisuals@gmail.com',
      subject: `New Contact Form: ${escapeHtml(sanitizedData.name)} - ${escapeHtml(sanitizedData.service || 'General Inquiry')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #ffc107; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Contact Information:</h3>
              <p><strong>Name:</strong> ${escapeHtml(sanitizedData.name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(sanitizedData.email)}" style="color: #ffc107;">${escapeHtml(sanitizedData.email)}</a></p>
              <p><strong>Phone:</strong> ${escapeHtml(sanitizedData.phone || 'Not provided')}</p>
              <p><strong>Service:</strong> ${escapeHtml(sanitizedData.service || 'Not specified')}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107;">
                <p style="margin: 0; line-height: 1.6; color: #555;">${escapeHtml(sanitizedData.message).replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from the ZAN E-lite Visuals contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
              <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">
                Client IP: ${clientIP.substring(0, 10)}...
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || 'Not provided'}
Service: ${sanitizedData.service || 'Not specified'}

Message:
${sanitizedData.message}

---
This message was sent from the ZAN E-lite Visuals contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
Client IP: ${clientIP}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully! We will respond within 24 hours.' 
      });
    
  } catch (error) {
    console.error('Email error:', error.message);
    
    // Security: Log for manual follow-up without sensitive data
    console.log('CONTACT FORM - REQUIRES MANUAL FOLLOW-UP:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      service: sanitizedData.service,
      timestamp: new Date().toISOString(),
      ip: clientIP.substring(0, 10) + '...'
    });
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please contact us via WhatsApp or phone.' 
    });
  }
}