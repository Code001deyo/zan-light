import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
      const response = await fetch('/api/contact', {
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
        message: 'Network error. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 6000);
    }
  };

  const contactInfo = [
    {
      icon: 'FaWhatsapp',
      title: 'WhatsApp',
      content: '+254 706 190246',
      link: 'https://wa.me/254706190246',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: 'FaEnvelope',
      title: 'Email',
      content: 'zanelightvisuals@gmail.com',
      link: 'mailto:zanelightvisuals@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: 'FaInstagram',
      title: 'Instagram',
      content: '@anyirzeph',
      link: 'https://www.instagram.com/anyirzeph?igsh=Z3ozMHJsb3JhYTdp',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20'
    },
    {
      icon: 'FaMapMarkerAlt',
      title: 'Location',
      content: 'Nairobi, Kenya',
      link: '#',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    }
  ];

  const getContactIcon = (iconName) => {
    const icons = {
      FaWhatsapp: <FaWhatsapp className="w-6 h-6" />,
      FaEnvelope: <FaEnvelope className="w-6 h-6" />,
      FaInstagram: <FaInstagram className="w-6 h-6" />,
      FaMapMarkerAlt: <FaMapMarkerAlt className="w-6 h-6" />
    };
    return icons[iconName];
  };

  return (
    <>
      <Head>
        <title>Contact Us | ZAN E-lite Visuals</title>
        <meta name="description" content="Get in touch with ZAN E-lite Visuals for professional photography and videography services." />
      </Head>

      <HeroSection 
        title="Get In Touch"
        subtitle="Ready to capture your special moments? Send us a message directly"
      >
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a href="https://wa.me/254706190246" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300">
            <FaWhatsapp /> +254 706 190246
          </a>
          <a href="mailto:zanelightvisuals@gmail.com" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
            <FaEnvelope /> zanelightvisuals@gmail.com
          </a>
        </div>
      </HeroSection>

      {/* Contact Cards */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <div className="grid-responsive-4">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="glass p-4 sm:p-6 rounded-2xl text-center hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-3 sm:mb-4 ${item.color} group-hover:animate-float`}>
                  {getContactIcon(item.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                  {item.title}
                </h3>
                {item.link !== '#' ? (
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300 break-all text-sm sm:text-base"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm sm:text-base">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="heading-lg mb-4 sm:mb-6 text-gradient">Send Us a Message</h2>
              <p className="text-responsive-lg text-gray-300 dark:text-gray-300 light:text-gray-700 px-4">
                Your message will be sent directly to zanelightvisuals@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl"
            >
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
                      {submitStatus.success ? 'Message Sent!' : 'Sending Error'}
                    </h4>
                    <p className="text-sm sm:text-base">{submitStatus.message}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid-responsive-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                      placeholder="zeph anyir"
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
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                      placeholder="zanelightvisuals@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid-responsive-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 no-zoom"
                      placeholder="+254 700 000000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white dark:text-white light:text-gray-900 bg-white/10 dark:bg-gray-800 light:bg-white/90 border border-white/10 dark:border-white/20 light:border-gray-300 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Portrait Session">Portrait Session</option>
                      <option value="Graduation Photos">Graduation Photos</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Commercial Photography">Commercial Photography</option>
                      <option value="Videography">Videography</option>
                      <option value="Birthday Shoots">Birthday Shoots</option>
                      <option value="Baby Showers">Baby Showers</option>
                      <option value="Ruracio">Ruracio</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Printing Services">Printing Services (Banners, Fliers, Photo Mounts)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 dark:text-gray-300 light:text-gray-700 mb-2">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-500 light:placeholder-gray-400 text-white dark:text-white light:text-gray-900 bg-white/5 dark:bg-white/5 light:bg-white/90 border border-white/10 dark:border-white/10 light:border-gray-300 transition-all duration-300 resize-none no-zoom"
                    placeholder="Tell us about your project, preferred dates, budget, or any questions you have..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary text-responsive px-8 sm:px-12 py-3 sm:py-4 touch-target ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span className="text-sm sm:text-base">Sending Message...</span>
                      </div>
                    ) : (
                      <>
                        <FaEnvelope className="mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mt-3 sm:mt-4 px-4">
                    Message will be delivered directly to zanelightvisuals@gmail.com
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-gray-50 light:to-gold-100/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-md mb-4 sm:mb-6 text-gradient">
              Need Immediate Response?
            </h2>
            <p className="text-responsive-lg text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              For urgent inquiries or quick questions, contact us directly
            </p>
            <div className="mobile-flex-col gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a 
                href="https://wa.me/254706190246" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-500 text-white text-responsive px-6 sm:px-8 py-3 sm:py-4 touch-target mobile-full-width"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp Now
              </a>
              <a 
                href="tel:+254706190246"
                className="btn glass text-white dark:text-white light:text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-100/80 text-responsive px-6 sm:px-8 py-3 sm:py-4 touch-target mobile-full-width"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}