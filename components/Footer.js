import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-100 light:to-gray-200 text-gray-300 dark:text-gray-300 light:text-gray-700 pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image src="/Images/logo.png" alt="ZAN E-lite Visuals Logo" width={48} height={48} className="rounded-full inline-block align-middle" />
                <span className="text-2xl font-bold text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                  ZAN E-lite
                </span>
                <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 transition-colors duration-300">
                  Visuals
                </span>
              </Link>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400 dark:text-gray-400 light:text-gray-600">
              Kenyan-based photography and videography company creating high-quality visual content. Blending artistic vision with modern technology since April 2024.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/anyirzeph?igsh=Z3ozMHJsb3JhYTdp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-pink-400 hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/254706190246" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-green-400 hover:bg-green-500/20 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="mailto:zanelightvisuals@gmail.com" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white dark:text-white light:text-gray-900 mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-400 dark:bg-gold-400 light:bg-gold-600"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Video Reels', href: '/reels' },
                { name: 'Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Book Session', href: '/booking' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gold-400 dark:bg-gold-400 light:bg-gold-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white dark:text-white light:text-gray-900 mb-6 relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-400 dark:bg-gold-400 light:bg-gold-600"></div>
            </h4>
            <ul className="space-y-3">
              {[
                'Wedding Photography',
                'Portrait Sessions',
                'Graduation Photos',
                'Event Coverage',
                'Commercial Work',
                'Videography',
                'Graphic Design',
                'Printing Services (Banners, Fliers, Photo Mounts)'
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                    <div className="w-1 h-1 bg-gold-400 dark:bg-gold-400 light:bg-gold-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white dark:text-white light:text-gray-900 mb-6 relative">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-400 dark:bg-gold-400 light:bg-gold-600"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 text-green-400 mt-1 group-hover:animate-float">
                  <FaWhatsapp />
                </div>
                <div>
                  <a 
                    href="https://wa.me/254706190246" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-green-400 transition-colors duration-300 block"
                  >
                    +254 706 190246
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">Main WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 text-green-400 mt-1 group-hover:animate-float">
                  <FaWhatsapp />
                </div>
                <div>
                  <a 
                    href="https://wa.me/254700440330" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-green-400 transition-colors duration-300 block"
                  >
                    +254 700 440330
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">Alternative WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 text-blue-400 mt-1 group-hover:animate-float">
                  <FaEnvelope />
                </div>
                <div>
                  <a 
                    href="mailto:zanelightvisuals@gmail.com" 
                    className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-blue-400 transition-colors duration-300 block break-all"
                  >
                    zanelightvisuals@gmail.com
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">Email inquiries</span>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-5 h-5 text-red-400 mt-1 group-hover:animate-float">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 block">Nairobi, Kenya</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">Service location</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for photography tips, latest work, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-500 text-white dark:text-white light:text-gray-900 transition-all duration-300"
              />
              <button className="btn btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-800 light:border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-2">
                &copy; {currentYear} ZAN E-lite Visuals. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-500">
                Designed and Developed by <a 
                  href="https://wa.me/254700440330" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium hover:text-gold-300 dark:hover:text-gold-300 light:hover:text-gold-700 transition-colors duration-300"
                >
                  HarryDesigns
                </a>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              <Link href="/privacy-policy" className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="text-gray-600 dark:text-gray-600 light:text-gray-400">•</span>
              <Link href="/terms" className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="text-gray-600 dark:text-gray-600 light:text-gray-400">•</span>
              <Link href="/faq" className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold-400 dark:hover:text-gold-400 light:hover:text-gold-600 transition-colors duration-300">
                FAQ
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}