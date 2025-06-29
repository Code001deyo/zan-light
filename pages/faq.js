import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCamera, FaVideo, FaClock, FaDollarSign } from 'react-icons/fa';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const getFaqIcon = (iconName) => {
    const icons = {
      FaCamera: <FaCamera className="w-6 h-6" />,
      FaDollarSign: <FaDollarSign className="w-6 h-6" />,
      FaVideo: <FaVideo className="w-6 h-6" />,
      FaClock: <FaClock className="w-6 h-6" />
    };
    return icons[iconName];
  };

  const faqCategories = [
    {
      title: "General Services",
      icon: "FaCamera",
      questions: [
        {
          question: "What photography and videography services do you offer?",
          answer: "We specialize in wedding photography and videography, portrait sessions, graduation photos, event coverage, commercial work, content creation, and professional video production. Our services are tailored to capture your unique story and moments."
        },
        {
          question: "Do you serve areas outside Nairobi?",
          answer: "Yes, we serve clients throughout Kenya. For events outside Nairobi, additional travel costs may apply depending on the location and distance. We're happy to discuss travel arrangements for destination weddings and events."
        },
        {
          question: "What makes ZAN E-lite Visuals different from other photographers?",
          answer: "We blend artistic vision with modern technology to create striking, timeless visuals. Since launching in April 2024, we've focused on high-quality content creation that captures stories, moments, and creativity with a uniquely Kenyan perspective."
        },
        {
          question: "Do you provide both photography and videography for the same event?",
          answer: "Absolutely! We offer comprehensive packages that include both photography and videography services. This ensures consistent style and seamless coordination throughout your event."
        }
      ]
    },
    {
      title: "Booking & Pricing",
      icon: "FaDollarSign",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies based on the type of service, duration, and specific requirements. Wedding photography starts from KSh 50,000+, graduation photos from KSh 8,000+, and other services are quoted based on your needs. Contact us for a detailed quote."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking as early as possible, especially for weddings and major events. Popular dates fill up quickly. For the best availability, book 3-6 months in advance for weddings and 2-4 weeks for other sessions."
        },
        {
          question: "What's required to secure my booking?",
          answer: "To secure your date, we require a signed contract and a 50% deposit. Your date is not reserved until we receive both the contract and deposit payment."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, M-Pesa, and cash payments. Final payment is due before or on the day of your event or session."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we can discuss payment plans for larger packages. This is especially helpful for wedding clients who want to spread payments over several months."
        }
      ]
    },
    {
      title: "Event Coverage",
      icon: "FaVideo",
      questions: [
        {
          question: "How long will you stay at my event?",
          answer: "Coverage time depends on your package. Wedding packages typically include 8-12 hours of coverage. For other events, we offer hourly rates and can customize coverage to your needs."
        },
        {
          question: "Do you have backup equipment?",
          answer: "Yes, we always bring backup cameras, lenses, batteries, and memory cards to ensure your event is captured without any technical interruptions."
        },
        {
          question: "What happens if you're sick or have an emergency?",
          answer: "While extremely rare, if an emergency prevents us from attending your event, we have a network of professional photographers who can cover your event to ensure your memories are still captured."
        },
        {
          question: "Can we provide a shot list?",
          answer: "Absolutely! We encourage shot lists, especially for family photos and specific moments you want captured. We'll review your list before the event to ensure we don't miss anything important."
        },
        {
          question: "Do you need a meal during long events?",
          answer: "For events lasting 8+ hours, we do appreciate being provided with a meal. This helps us maintain energy levels to capture your entire event professionally."
        }
      ]
    },
    {
      title: "Delivery & Timeline",
      icon: "FaClock",
      questions: [
        {
          question: "How long until I receive my photos/videos?",
          answer: "Delivery times vary by service: Wedding photos take 4-6 weeks, portrait sessions 2-3 weeks, and event coverage 3-4 weeks. We provide sneak peeks within 48-72 hours for most events."
        },
        {
          question: "How will I receive my photos and videos?",
          answer: "All images and videos are delivered through a secure online gallery where you can view, download, and share your content. You'll receive an email with access instructions once your gallery is ready."
        },
        {
          question: "Can I get my photos faster if needed?",
          answer: "Yes, we offer rush delivery services for an additional fee. Rush delivery can reduce standard timelines by 50%. Contact us to discuss your specific timeline needs."
        },
        {
          question: "How many photos will I receive?",
          answer: "The number of photos depends on your service and event duration. Wedding packages typically include 500-800+ edited photos, while portrait sessions include 50-100+ images. All photos are professionally edited."
        },
        {
          question: "Do you provide unedited photos?",
          answer: "We typically only provide professionally edited photos as they represent our artistic vision and quality standards. Unedited photos may be available upon special request and additional fees."
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ | ZAN E-lite Visuals</title>
        <meta name="description" content="Frequently Asked Questions about ZAN E-lite Visuals photography and videography services, pricing, booking, and delivery timelines." />
      </Head>

      <HeroSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our photography and videography services"
      />

      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">
              Need Help?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto text-lg">
              Can't find what you're looking for? Contact us directly and we'll be happy to answer any questions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className="text-gold-400 dark:text-gold-400 light:text-gold-600 mr-4">
                    {getFaqIcon(category.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const itemIndex = `${categoryIndex}-${index}`;
                    const isOpen = openItem === itemIndex;
                    
                    return (
                      <div
                        key={index}
                        className="border-b border-gray-700 dark:border-gray-700 light:border-gray-300 last:border-b-0 pb-4 last:pb-0"
                      >
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full text-left py-4 flex justify-between items-center group focus:outline-none"
                        >
                          <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300 pr-4">
                            {faq.question}
                          </h4>
                          <div className="text-gold-400 dark:text-gold-400 light:text-gold-600 transition-transform duration-300 flex-shrink-0">
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4">
                            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-white light:to-gold-100/50 p-12 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              We're here to help! Contact us directly for personalized answers to your specific questions or to discuss your photography and videography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:zanelightvisuals@gmail.com"
                className="btn btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/254706190246"
                target="_blank"
                rel="noopener noreferrer"
                className="btn glass text-white hover:bg-white/20 dark:text-white dark:hover:bg-white/20 light:text-gray-900 light:hover:bg-black/5 text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                WhatsApp
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-700 light:border-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div>
                  <h4 className="font-semibold text-gold-400 dark:text-gold-400 light:text-gold-600 mb-2">Quick Contact</h4>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                    Phone: +254 706 190246<br />
                    WhatsApp: +254 700 440330<br />
                    Email: zanelightvisuals@gmail.com
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-400 dark:text-gold-400 light:text-gold-600 mb-2">Response Time</h4>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                    Email: Within 24 hours<br />
                    WhatsApp: Usually within 2-4 hours<br />
                    Phone: Available during business hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 