import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaCamera, FaUsers, FaStar, FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const teamMembers = [
  {
    id: 1,
    name: 'Zephaniah Anyir',
    role: 'Photographer, Videographer, Editor & Graphic Designer',
    image: '/Images/ZephaniahAnyir.jpg',
    bio: 'Passionate visionary who founded ZAN E-lite Visuals with a commitment to creating exceptional visual content that tells compelling stories.',
    specialties: ['Photography', 'Videography', 'Video Editing', 'Graphic Design'],
    social: {
      instagram: 'https://www.instagram.com/anyirzeph?igsh=Z3ozMHJsb3JhYTdp'
    }
  },
  {
    id: 2,
    name: 'Alvin Okochil',
    role: 'Photographer, Videographer & Editor',
    image: '/Images/AlvinOkochil.jpg',
    bio: 'Multi-talented creative professional specializing in capturing stunning visuals and bringing them to life through expert editing and post-production.',
    specialties: ['Photography', 'Videography', 'Video Editing', 'Post-Production'],
    social: {
      instagram: 'https://www.instagram.com/new_chapters_of_vin/'
    }
  },
  {
    id: 3,
    name: 'Harry Iduyo',
    role: 'Software Developer & Graphic Designer',
    image: '/Images/HarryIduyo.jpg',
    bio: 'Technology expert who combines software development skills with creative graphic design to enhance our digital presence and visual branding.',
    specialties: ['Software Development', 'Graphic Design', 'Web Development', 'Digital Solutions'],
    social: {
      instagram: 'https://www.instagram.com/trojan________horse/'
    }
  }
];

const timeline = [
  {
    year: '2024',
    title: 'Company Launch',
    description: 'ZAN E-lite Visuals officially launched on 30th April 2024, beginning our journey as a professional Kenyan photography and videography company.',
    icon: '🚀'
  },
  {
    year: '2024',
    title: 'Building Our Foundation',
    description: 'Established our core services focusing on high-quality visual content creation for individuals, brands, and businesses.',
    icon: '🏗️'
  },
  {
    year: '2024',
    title: 'Creative Portfolio Growth',
    description: 'Developed diverse portfolio showcasing wedding photography, portraits, events, and professional videography services.',
    icon: '📸'
  },
  {
    year: '2024',
    title: 'Technology Integration',
    description: 'Invested in modern photography and videography equipment to blend artistic vision with cutting-edge technology.',
    icon: '🎬'
  },
  {
    year: '2024',
    title: 'Client Success Stories',
    description: 'Built strong relationships with clients across Kenya, delivering striking and timeless visual content tailored to their needs.',
    icon: '⭐'
  },
  {
    year: '2025+',
    title: 'Future Vision',
    description: 'Continuing to grow as Kenya\'s premier visual storytelling company, expanding our creative services and technological capabilities.',
    icon: '🌟'
  }
];

const stats = [
  { id: 1, value: '50+', label: 'Happy Clients', icon: 'FaUsers' },
  { id: 2, value: '100+', label: 'Projects Completed', icon: 'FaCamera' },
  { id: 3, value: '8+', label: 'Months Experience', icon: 'FaAward' },
  { id: 4, value: '5.0', label: 'Average Rating', icon: 'FaStar' }
];

const getStatIcon = (iconName) => {
  const icons = {
    FaUsers: <FaUsers className="w-8 h-8" />,
    FaCamera: <FaCamera className="w-8 h-8" />,
    FaAward: <FaAward className="w-8 h-8" />,
    FaStar: <FaStar className="w-8 h-8" />
  };
  return icons[iconName];
};

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'ZAN E-lite captured our wedding day perfectly! The photos are absolutely stunning and truly reflect the joy of our special day.',
    rating: 5,
    image: '/Images/wedding.jpg'
  },
  {
    id: 2,
    name: 'Michael Ochieng',
    role: 'Business Owner',
    content: 'Professional, creative, and delivered beyond our expectations. The product photos significantly boosted our online sales.',
    rating: 5,
    image: '/Images/product.jpg'
  },
  {
    id: 3,
    name: 'Grace Mwende',
    role: 'Graduate',
    content: 'The graduation photos turned out amazing! The team made me feel so comfortable during the shoot. Highly recommended!',
    rating: 5,
    image: '/Images/graduation.jpg'
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | ZAN E-lite Visuals</title>
        <meta name="description" content="Learn about ZAN E-lite Visuals - our story, our team, and our passion for capturing life's most precious moments through photography and videography." />
      </Head>

      <HeroSection 
        title="Our Story"
        subtitle="Capturing moments, creating memories, and telling stories through our lens"
      />

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/Images/graduation1.jpg"
                    alt="Our Team"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-2 border-gold-500/50 rounded-3xl -z-10 group-hover:border-gold-400 transition-colors duration-300"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Capturing Life's Precious Moments
              </h2>
              <div className="space-y-6 text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-semibold">ZAN E-lite Visuals</span> is a Kenyan-based photography and videography company dedicated to creating high-quality visual content that captures stories, moments, and creativity.
                </p>
                <p>
                  Since launching on <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium">30th April 2024</span>, we have focused on helping individuals, brands, and businesses express themselves through powerful imagery and professional media production.
                </p>
                <p>
                  We blend artistic vision with modern technology to deliver visuals that are striking, timeless, and tailored to your needs. Every project is approached with creativity and precision to ensure exceptional results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 light:from-white light:via-gray-50 light:to-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                className="text-center p-6 glass rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-gold-400 flex justify-center mb-4 group-hover:animate-float">
                  {getStatIcon(stat.icon)}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
                <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm uppercase tracking-wider group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-gold-500/50 to-transparent transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-5/12 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass p-8 rounded-2xl shadow-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all duration-300 group">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 text-gold-400 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 flex items-center justify-center text-black font-bold text-lg shadow-lg animate-glow">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="md:w-5/12 text-center md:text-left">
                    <div className="md:hidden text-gold-400 font-bold text-xl mb-4">{item.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">Meet The Team</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              The Creative Minds
            </h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto text-lg">
              Our team of talented professionals is dedicated to bringing your vision to life with creativity and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-gold-500/20 text-gold-400 dark:text-gold-400 light:text-gold-600 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full glass hover:bg-gold-400/20 text-gold-400 transition-all duration-300 hover:scale-110"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium mb-4 inline-block tracking-wider uppercase text-sm">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="glass p-8 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white dark:text-white light:text-gray-900 group-hover:text-gold-400 dark:group-hover:text-gold-400 light:group-hover:text-gold-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <FaQuoteLeft className="text-gold-400/30 text-2xl mb-4" />
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold-400' : 'text-gray-600'}`} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/contact" 
              className="btn btn-primary text-lg px-8 py-4"
            >
              Book Your Session Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}