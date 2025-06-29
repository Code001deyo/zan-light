import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeroSection from '../../components/HeroSection';

const portfolioItems = [
  {
    id: 1,
    title: 'Elegant Wedding Ceremony',
    category: 'wedding',
    image: '/Images/wedding.jpg',
    description: 'A beautiful outdoor wedding ceremony captured with artistic flair.',
    tags: ['outdoor', 'ceremony', 'couple']
  },
  {
    id: 2,
    title: 'Graduation Celebration',
    category: 'graduation',
    image: '/Images/graduation.jpg',
    description: 'Commemorating academic achievements with professional portraits.',
    tags: ['portrait', 'achievement', 'formal']
  },
  {
    id: 3,
    title: 'Professional Camera Setup',
    category: 'commercial',
    image: '/Images/camera.jpg',
    description: 'Behind-the-scenes look at our professional equipment.',
    tags: ['equipment', 'professional', 'studio']
  },
  {
    id: 4,
    title: 'Indoor Event Coverage',
    category: 'event',
    image: '/Images/indor.jpg',
    description: 'Capturing the atmosphere of intimate indoor gatherings.',
    tags: ['indoor', 'event', 'atmosphere']
  },
  {
    id: 5,
    title: 'Outdoor Adventure Session',
    category: 'portrait',
    image: '/Images/outdoor.jpg',
    description: 'Natural light portrait session in beautiful outdoor settings.',
    tags: ['outdoor', 'natural', 'adventure']
  },
  {
    id: 6,
    title: 'Product Photography',
    category: 'commercial',
    image: '/Images/product.jpg',
    description: 'High-quality product shots for commercial use.',
    tags: ['product', 'commercial', 'studio']
  },
  {
    id: 7,
    title: 'Wedding Reception',
    category: 'wedding',
    image: '/Images/wedding-1.jpg',
    description: 'Joyful moments from the wedding reception celebration.',
    tags: ['reception', 'celebration', 'joy']
  },
  {
    id: 8,
    title: 'Romantic Wedding Portraits',
    category: 'wedding',
    image: '/Images/wedding-2.jpg',
    description: 'Intimate couple portraits on their special day.',
    tags: ['couple', 'romantic', 'intimate']
  },
  {
    id: 9,
    title: 'Graduation Portrait Session',
    category: 'graduation',
    image: '/Images/graduation1.jpg',
    description: 'Professional graduation portraits with academic regalia.',
    tags: ['portrait', 'academic', 'formal']
  }
];

const categories = [
  { id: 'all', name: 'All Work', count: portfolioItems.length },
  { id: 'wedding', name: 'Weddings', count: portfolioItems.filter(item => item.category === 'wedding').length },
  { id: 'portrait', name: 'Portraits', count: portfolioItems.filter(item => item.category === 'portrait').length },
  { id: 'graduation', name: 'Graduations', count: portfolioItems.filter(item => item.category === 'graduation').length },
  { id: 'event', name: 'Events', count: portfolioItems.filter(item => item.category === 'event').length },
  { id: 'commercial', name: 'Commercial', count: portfolioItems.filter(item => item.category === 'commercial').length }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeCategory);
    
    if (searchTerm) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return items;
  }, [activeCategory, searchTerm]);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <>
      <Head>
        <title>Portfolio | ZAN E-lite Visuals</title>
        <meta name="description" content="Explore our portfolio of professional photography and videography work including weddings, portraits, events, and commercial projects." />
      </Head>

      <HeroSection 
        title="Our Portfolio"
        subtitle="Discover our collection of captured moments, each telling a unique story through our lens"
      />

      {/* Search and Filter Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass rounded-2xl focus:ring-2 focus:ring-gold-500 focus:border-transparent placeholder-gray-400 text-white dark:text-white light:text-gray-900 transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-lg'
                    : 'glass text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => openLightbox(item)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gold-500/80 text-black text-xs font-medium rounded-full mb-2 capitalize">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-white dark:text-white light:text-gray-900">No results found</h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
                Try adjusting your search terms or browse a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary"
              >
                View All Work
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gold-400 transition-colors duration-300"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full text-white hover:text-gold-400 transition-all duration-300 hover:scale-110"
              >
                <FaArrowLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full text-white hover:text-gold-400 transition-all duration-300 hover:scale-110"
              >
                <FaArrowRight className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="mt-6 text-center">
                <span className="inline-block px-3 py-1 bg-gold-500 text-black text-sm font-medium rounded-full mb-3 capitalize">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedImage.tags.map((tag, i) => (
                    <span key={i} className="text-sm px-3 py-1 glass rounded-full text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Create Your Story?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create stunning visuals that capture your unique moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Book a Session
              </Link>
              <a href="https://wa.me/254706190246" className="btn glass text-white dark:text-white light:text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-black/10 text-lg px-8 py-4">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}