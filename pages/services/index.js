import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight, FaWhatsapp, FaPlay } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';
import { siteContent } from '../../lib/content';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | ZAN E-lite Visuals</title>
        <meta name="description" content="Professional photography and videography services including weddings, portraits, graduations, events, and content creation in Nairobi, Kenya." />
      </Head>

      <HeroSection 
        title="Our Services"
        subtitle="Professional photography, videography, and design services"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
            Get Quote
          </Link>
          <a href="https://wa.me/254706190246" className="btn glass text-white hover:bg-white/20 text-lg px-8 py-4">
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      </HeroSection>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Professional Creative Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {siteContent.services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group relative h-[600px] flex flex-col ${
                  service.popular ? 'ring-2 ring-gold-500/50' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-gold-500 to-gold-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}

                <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
                  {service.video ? (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={service.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <FaPlay className="w-6 h-6 text-white/80" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-md rounded-full flex items-center justify-center text-gold-400 group-hover:animate-float text-2xl">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4 flex-grow">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FaCheck className="text-gold-400 w-3 h-3 flex-shrink-0" />
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <div>
                      <span className="text-lg font-bold text-gold-400">{service.pricing}</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="btn btn-primary text-xs px-4 py-2"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your vision and requirements' },
              { step: '02', title: 'Planning', description: 'Create detailed timeline and shot list' },
              { step: '03', title: 'Production', description: 'Professional session with our team' },
              { step: '04', title: 'Delivery', description: 'Edited content delivered on time' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4 group-hover:animate-glow">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-gray-50 light:to-gold-100/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Book Your Session?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <a href="https://wa.me/254706190246" className="btn glass text-white dark:text-white light:text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-black/10 text-lg px-8 py-4">
                <FaWhatsapp className="mr-2" /> Quick Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}