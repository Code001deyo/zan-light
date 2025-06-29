import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaCalendarAlt, FaCheckCircle, FaExclamationTriangle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    guests: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          location: '',
          guests: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: result.message
        });
      }
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again or contact us directly via WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 8000);
    }
  };

  const services = [
    { value: 'wedding', label: 'Wedding Photography', price: 'From KSh 40,000' },
    { value: 'portrait', label: 'Portrait Session', price: 'From KSh 7,000' },
    { value: 'graduation', label: 'Graduation Photos', price: 'From KSh 5,000' },
    { value: 'event', label: 'Event Coverage', price: 'From KSh 15,000' },
    { value: 'commercial', label: 'Commercial Photography', price: 'From KSh 20,000' },
    { value: 'videography', label: 'Videography Services', price: 'From KSh 25,000' },
    { value: 'birthday', label: 'Birthday Shoots', price: 'From KSh 8,000' },
    { value: 'babyshower', label: 'Baby Showers', price: 'From KSh 8,000' },
    { value: 'ruracio', label: 'Ruracio', price: 'From KSh 25,000' },
    { value: 'graphicdesign', label: 'Graphic Design', price: 'From KSh 500' },
    { value: 'printing', label: 'Printing Services (Banners, Fliers, Photo Mounts)', price: 'From KSh 500' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <>
      <Head>
        <title>Book a Session | ZAN E-lite Visuals</title>
        <meta name="description" content="Book your professional photography or videography session with ZAN E-lite Visuals. Easy online booking with flexible scheduling options." />
      </Head>

      <HeroSection 
        title="Book Your Session"
        subtitle="Ready to capture your special moments? Fill out the form below and we'll get back to you within 24 hours"
      />

      {/* Booking Form Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass p-6 sm:p-8 rounded-3xl shadow-2xl"
              >
                <div className="mb-6 sm:mb-8">
                  <h2 className="heading-md mb-3 sm:mb-4 text-gradient">
                    Book Your Session
                  </h2>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed text-responsive">
                    Please provide as much detail as possible to help us prepare the perfect session for you.
                  </p>
                </div>

                {submitStatus.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-3 sm:gap-4 ${
                      submitStatus.success 
                        ? 'bg-green-900/50 dark:bg-green-900/50 light:bg-green-100/90 text-green-300 dark:text-green-300 light:text-green-800 border border-green-500/30 dark:border-green-500/30 light:border-green-300' 
                        : 'bg-red-900/50 dark:bg-red-900/50 light:bg-red-100/90 text-red-300 dark:text-red-300 light:text-red-800 border border-red-500/30 dark:border-red-500/30 light:border-red-300'
                    }`}
                  >
                    {submitStatus.success ? <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" /> : <FaExclamationTriangle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" />}
                    <div>
                      <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                        {submitStatus.success ? 'Booking Submitted!' : 'Submission Error'}
                      </h4>
                      <p className="text-sm sm:text-base">{submitStatus.message}</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">1</div>
                      Personal Information
                    </h3>
                    <div className="grid-responsive-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                          placeholder="+254 700 000000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">2</div>
                      Service Details
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                          Service Type <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white dark:text-white light:text-gray-900 bg-white/10 dark:bg-gray-800 light:bg-white/90 border border-white/10 dark:border-white/20 light:border-gray-300 transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label} - {service.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid-responsive-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                            Preferred Date <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                            Preferred Time
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                          Location/Venue
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                          placeholder="Where will the session take place?"
                        />
                      </div>

                      <div className="grid-responsive-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                            Number of People
                          </label>
                          <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            min="1"
                            className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                            placeholder="How many people?"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300"
                          >
                            <option value="">Select budget range</option>
                            <option value="Under KSh 15,000">Under KSh 15,000</option>
                            <option value="KSh 15,000 - 30,000">KSh 15,000 - 30,000</option>
                            <option value="KSh 30,000 - 50,000">KSh 30,000 - 50,000</option>
                            <option value="KSh 50,000 - 100,000">KSh 50,000 - 100,000</option>
                            <option value="Over KSh 100,000">Over KSh 100,000</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">3</div>
                      Additional Details
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                        Special Requests or Additional Information
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 resize-none no-zoom"
                        placeholder="Tell us about any specific requirements, style preferences, or other details that would help us prepare for your session..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                      className={`btn btn-primary text-responsive px-8 sm:px-12 py-3 sm:py-4 touch-target ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                          <span className="text-sm sm:text-base">Submitting Booking...</span>
                      </div>
                    ) : (
                      <>
                        <FaCalendarAlt className="mr-2" />
                          <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>
                    <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-3 sm:mt-4 px-4">
                      We'll respond to your booking request within 24 hours
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">Need Help?</h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 text-sm">
                  Have questions about our services or need immediate assistance? Contact us directly.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/254706190246" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-green-500/20 dark:hover:bg-green-500/20 light:hover:bg-green-100/60 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 group-hover:animate-float">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white dark:text-white light:text-gray-900 text-sm">WhatsApp</p>
                      <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">Quick response</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:zanelightvisuals@gmail.com"
                    className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-blue-500/20 dark:hover:bg-blue-500/20 light:hover:bg-blue-100/60 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover:animate-float">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white dark:text-white light:text-gray-900 text-sm">Email</p>
                      <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">Detailed inquiries</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Booking Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">Booking Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white dark:text-white light:text-gray-900 font-medium">Response Time</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">We respond to all booking requests within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white dark:text-white light:text-gray-900 font-medium">Deposit Required</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">50% deposit required to secure your booking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white dark:text-white light:text-gray-900 font-medium">Flexible Scheduling</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">We work around your schedule and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white dark:text-white light:text-gray-900 font-medium">Custom Packages</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">Tailored packages available for unique requirements</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Popular Services */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient">Popular Services</h3>
                <div className="space-y-3">
                  {services.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-white dark:text-white light:text-gray-900">{service.label}</span>
                      <span className="text-gold-400 font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}