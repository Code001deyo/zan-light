import { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft, FaPlay, FaImage } from 'react-icons/fa';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ImageWithFallback = memo(({ src, alt, className, fill, sizes, quality = 85, priority = false, placeholder = "blur", blurDataURL, loading, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setImgSrc('/Images/logo.png'); // Fallback to logo
  };

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-800`} {...props}>
        <FaImage className="text-gold-400 text-4xl opacity-50" />
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
});

ImageWithFallback.displayName = 'ImageWithFallback';

const stats = [
  { id: 1, value: 50, label: 'Happy Clients', suffix: '+' },
  { id: 2, value: 100, label: 'Projects Completed', suffix: '+' },
  { id: 3, value: 8, label: 'Months Experience', suffix: '+' },
  { id: 4, value: 5.0, label: 'Average Rating', suffix: '' },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'ZAN E-lite captured our wedding day perfectly!',
    rating: 5,
    image: '/Images/wedding.jpg'
  },
  {
    id: 2,
    name: 'Michael Ochieng',
    role: 'Business Owner',
    content: 'Professional, creative, and delivered beyond expectations.',
    rating: 5,
    image: '/Images/product.jpg'
  },
  {
    id: 3,
    name: 'Grace Mwende',
    role: 'Graduate',
    content: 'The graduation photos turned out amazing!',
    rating: 5,
    image: '/Images/graduation.jpg'
  }
];

const slides = [
  {
    src: '/Images/camera.jpg',
    alt: 'Professional Camera',
    title: 'Capture Life\'s Perfect Moments',
    subtitle: 'Professional photography and videography services that tell your unique story.'
  },
  {
    src: '/Images/wedding-1.jpg',
    alt: 'Wedding Celebration',
    title: 'Your Dream Wedding Awaits',
    subtitle: 'From intimate ceremonies to grand celebrations - we make your special day unforgettable.'
  },
  {
    src: '/Images/graduation.jpg',
    alt: 'Graduation Ceremony',
    title: 'Celebrate Your Achievement',
    subtitle: 'Mark your milestone with stunning graduation photos that capture your success and joy.'
  },
  {
    src: '/Images/product.jpg',
    alt: 'Product Photography',
    title: 'Elevate Your Brand',
    subtitle: 'Professional product photography and brand visuals that make your business shine.'
  },
  {
    src: '/Images/wedding.jpg',
    alt: 'Wedding Photography',
    title: 'Where Art Meets Emotion',
    subtitle: 'Creating timeless memories with artistic vision and cutting-edge technology.'
  }
];

const AnimatedStat = memo(({ value, label, suffix }) => {
  const [display, setDisplay] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setDisplay(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <motion.div 
      className="text-center p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-200 group"
      whileHover={{ scale: 1.02 }}
    >
      <span className="text-4xl md:text-5xl font-bold text-gradient block mb-2">
        {display}{suffix}
      </span>
      <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-200">
        {label}
      </span>
    </motion.div>
  );
});

AnimatedStat.displayName = 'AnimatedStat';

const TestimonialCarousel = memo(() => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={testimonials[index].image}
                alt={testimonials[index].name}
                fill
                className="object-cover"
                sizes="96px"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <FaQuoteLeft className="text-gold-400 text-3xl mb-4 mx-auto md:mx-0" />
              <p className="text-lg text-white mb-6 italic">"{testimonials[index].content}"</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div>
                  <span className="font-bold text-gold-400 text-lg">{testimonials[index].name}</span>
                  <p className="text-gray-400 text-sm">{testimonials[index].role}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, i) => (
          <button 
            key={i} 
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === index ? 'bg-gold-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
            }`} 
            onClick={() => setIndex(i)} 
          />
        ))}
      </div>
    </div>
  );
});

TestimonialCarousel.displayName = 'TestimonialCarousel';

const HeroBgCarousel = memo(() => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), 8000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <ImageWithFallback
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            quality={85}
            priority={current === 0}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current + '-text'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              {slides[current].title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="btn btn-primary text-lg px-8 py-4">
                View Portfolio <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/reels" className="btn glass text-white hover:bg-white/20 text-lg px-8 py-4">
                <FaPlay className="mr-2" /> Watch Reel
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              i === current 
                ? 'bg-gold-400 border-gold-400 scale-125' 
                : 'bg-transparent border-white/50 hover:border-white'
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
});

HeroBgCarousel.displayName = 'HeroBgCarousel';

export default function Home() {
  const portfolioImages = useMemo(() => [
    "/Images/wedding.jpg",
    "/Images/graduation.jpg", 
    "/Images/camera.jpg"
  ], []);

  return (
    <>
      <Head>
        <title>ZAN E-lite Visuals | Professional Photography & Videography Kenya</title>
        <meta name="description" content="Kenyan-based photography and videography company creating high-quality visual content since April 2024. Specializing in weddings, portraits, events, and professional media production." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/Images/camera.jpg" as="image" />
        <link rel="preload" href="/Images/wedding-1.jpg" as="image" />
        <link rel="preload" href="/Images/graduation.jpg" as="image" />
        <link rel="preload" href="/Images/product.jpg" as="image" />
        <link rel="preload" href="/Images/wedding.jpg" as="image" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBgCarousel />
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <ImageWithFallback
                    src="/Images/graduation.jpg"
                    alt="About ZAN E-lite Visuals"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <span className="text-gold-400 font-medium mb-3 sm:mb-4 inline-block tracking-wider uppercase text-xs sm:text-sm">Who We Are</span>
              <h2 className="heading-lg mb-6 sm:mb-8 text-gradient">
                Capturing Life's Precious Moments
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-300 text-responsive leading-relaxed">
                <p>
                  <span className="text-gold-400 font-semibold">ZAN E-lite Visuals</span> is a Kenyan-based photography and videography company dedicated to creating high-quality visual content that captures stories, moments, and creativity.
                </p>
                <p>
                  Since launching on <span className="text-gold-400 font-medium">30th April 2024</span>, we blend artistic vision with modern technology to deliver visuals that are striking, timeless, and tailored to your needs.
                </p>
              </div>
              <Link href="/about" className="btn btn-primary mt-6 sm:mt-8 inline-flex items-center touch-target">
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AnimatedStat value={stat.value} label={stat.label} suffix={stat.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-gold-400 font-medium mb-3 sm:mb-4 inline-block tracking-wider uppercase text-xs sm:text-sm">Our Work</span>
            <h2 className="heading-lg mb-4 sm:mb-6 text-gradient">
              Featured Portfolio
            </h2>
          </motion.div>
          
          <div className="grid-responsive-3 mb-8 sm:mb-12">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={src}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Featured ${i+1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  loading={i === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary text-responsive px-6 sm:px-8 py-3 sm:py-4 touch-target">
              View Full Portfolio <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-gold-400 font-medium mb-3 sm:mb-4 inline-block tracking-wider uppercase text-xs sm:text-sm">Testimonials</span>
            <h2 className="heading-lg mb-4 sm:mb-6 text-gradient">
              What Our Clients Say
            </h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg mb-6 sm:mb-8 text-gradient">
              Ready to Capture Your Story?
            </h2>
            <p className="text-responsive-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Get in touch today for bookings, inquiries, or to discuss your next project.
            </p>
            <div className="mobile-flex-col gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn btn-primary text-responsive px-6 sm:px-8 py-3 sm:py-4 touch-target mobile-full-width">
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
              <a href="https://wa.me/254706190246" className="btn glass text-white hover:bg-white/20 text-responsive px-6 sm:px-8 py-3 sm:py-4 touch-target mobile-full-width">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}