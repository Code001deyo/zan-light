import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaArrowLeft, FaTimes, FaShare, FaDownload } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

export default function Reels() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRefs = useRef({});

  const videos = [
    {
      id: 1,
      title: 'Instagram Reels & Content Creation',
      description: 'Dynamic and engaging content for social media platforms, featuring creative storytelling and visual appeal.',
      src: '/Images/instagram reels.mp4',
      thumbnail: '/Images/podcast.jpg',
      category: 'Social Media',
      duration: '2:30',
      service: 'Content Video Shoots'
    },
    {
      id: 2,
      title: 'Professional Videography Showcase',
      description: 'A showcase of our professional videography work including weddings, events, and corporate videos.',
      src: '/Images/videography.mp4',
      thumbnail: '/Images/camera-2.jpg',
      category: 'Videography',
      duration: '3:45',
      service: 'Event Videography'
    },
    {
      id: 3,
      title: 'Podcast Recording Setup',
      description: 'Behind-the-scenes look at our professional podcast recording and production capabilities.',
      src: '/Images/podcast recording.mp4',
      thumbnail: '/Images/podcast.jpg',
      category: 'Production',
      duration: '1:15',
      service: 'Content Video Shoots'
    }
  ];

  const togglePlay = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(prev => ({ ...prev, [videoId]: true }));
      } else {
        video.pause();
        setIsPlaying(prev => ({ ...prev, [videoId]: false }));
      }
    }
  };

  const toggleMute = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(prev => ({ ...prev, [videoId]: video.muted }));
    }
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <>
      <Head>
        <title>Video Reels | ZAN E-lite Visuals</title>
        <meta name="description" content="Watch our latest video reels showcasing professional videography, content creation, and behind-the-scenes footage from ZAN E-lite Visuals." />
        <meta property="og:title" content="Video Reels | ZAN E-lite Visuals" />
        <meta property="og:description" content="Professional videography and content creation reels" />
        <meta property="og:type" content="video.other" />
      </Head>

      <HeroSection 
        title="Video Reels"
        subtitle="Explore our latest videography work and creative content"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn btn-primary text-lg px-8 py-4">
            Our Video Services
          </Link>
          <Link href="/contact" className="btn glass text-white dark:text-white light:text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-100/80 text-lg px-8 py-4">
            Get Quote
          </Link>
        </div>
      </HeroSection>

      {/* Video Gallery */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-white light:to-gray-50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden">
                  <video
                    ref={(el) => videoRefs.current[video.id] = el}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    poster={video.thumbnail}
                    preload="metadata"
                    onPlay={() => setIsPlaying(prev => ({ ...prev, [video.id]: true }))}
                    onPause={() => setIsPlaying(prev => ({ ...prev, [video.id]: false }))}
                    onLoadedMetadata={(e) => {
                      setIsMuted(prev => ({ ...prev, [video.id]: e.target.muted }));
                    }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => togglePlay(video.id)}
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        {isPlaying[video.id] ? (
                          <FaPause className="w-6 h-6" />
                        ) : (
                          <FaPlay className="w-6 h-6 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Top Controls */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleMute(video.id)}
                        className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        {isMuted[video.id] ? (
                          <FaVolumeMute className="w-4 h-4" />
                        ) : (
                          <FaVolumeUp className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => openVideoModal(video)}
                        className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <FaExpand className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="bg-gold-500/80 px-2 py-1 rounded-md font-medium">
                          {video.category}
                        </span>
                        <span className="bg-black/50 px-2 py-1 rounded-md">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white dark:text-white light:text-gray-900">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 text-sm leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-400 dark:text-gold-400 light:text-gold-600 font-medium text-sm">
                      {video.service}
                    </span>
                    <button
                      onClick={() => openVideoModal(video)}
                      className="text-gold-400 dark:text-gold-400 light:text-gold-600 hover:text-gold-300 dark:hover:text-gold-300 light:hover:text-gold-700 transition-colors duration-300 text-sm font-medium"
                    >
                      Watch Full →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-gold-900/20 via-black to-gold-900/20 dark:from-gold-900/20 dark:via-black dark:to-gold-900/20 light:from-gold-100/50 light:via-gray-50 light:to-gold-100/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Create Your Own Reel?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with professional videography and content creation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-primary text-lg px-8 py-4">
                Book Video Session
              </Link>
              <a href="https://wa.me/254706190246" className="btn glass text-white dark:text-white light:text-gray-900 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-100/80 text-lg px-8 py-4">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {selectedVideo.category} • {selectedVideo.duration}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <FaExpand className="w-4 h-4" />
                    </button>
                    <button
                      onClick={closeVideoModal}
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-800">
                <p className="text-gray-300 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-400 font-medium">
                    {selectedVideo.service}
                  </span>
                  <div className="flex gap-3">
                    <Link href="/contact" className="btn btn-primary text-sm px-6 py-2">
                      Get Similar Video
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 