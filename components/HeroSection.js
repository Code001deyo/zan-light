import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  '/Images/camera.jpg',
  '/Images/wedding-1.jpg',
  '/Images/graduation.jpg',
];

const HeroSection = memo(({ title, subtitle, children }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % heroImages.length), 8000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[current]}
            alt="Hero Background"
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
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      
      <div className="container-custom text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            {subtitle}
          </p>
          <div className="px-4">
            {children}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-200 ${
              i === current 
                ? 'bg-gold-400 border-gold-400 scale-125' 
                : 'bg-transparent border-white/50 hover:border-white'
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;