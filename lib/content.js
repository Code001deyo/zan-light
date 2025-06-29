export const siteContent = {
  hero: {
    title: "Experience Excellence in Photography",
    subtitle: "At ZAN E-Lite, we deliver professional, creative, and timeless imagery tailored to your unique story.",
    images: [
      "/Images/camera.jpg",
      "/Images/wedding-1.jpg",
      "/Images/graduation.jpg"
    ]
  },
  
  about: {
    title: "Capturing Life's Precious Moments",
    description: "Welcome to ZAN E-lite Visuals, where passion meets creativity. Founded in 2015, we've grown from a small photography venture to a full-service visual storytelling company.",
    image: "/Images/graduation.jpg"
  },

  stats: [
    { id: 1, value: 500, label: "Happy Clients", suffix: "+" },
    { id: 2, value: 1000, label: "Projects Completed", suffix: "+" },
    { id: 3, value: 50, label: "Awards Won", suffix: "+" },
    { id: 4, value: 5.0, label: "Average Rating", suffix: "" }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content: "ZAN E-lite captured our wedding day perfectly!",
      rating: 5,
      image: "/Images/wedding.jpg"
    },
    {
      id: 2,
      name: "Michael Ochieng",
      role: "Business Owner", 
      content: "Professional, creative, and delivered beyond expectations.",
      rating: 5,
      image: "/Images/product.jpg"
    },
    {
      id: 3,
      name: "Grace Mwende",
      role: "Graduate",
      content: "The graduation photos turned out amazing!",
      rating: 5,
      image: "/Images/graduation.jpg"
    }
  ],

  portfolio: [
    {
      id: 1,
      title: "Elegant Wedding Ceremony",
      category: "wedding",
      image: "/Images/wedding.jpg",
      description: "A beautiful outdoor wedding ceremony captured with artistic flair.",
      tags: ["outdoor", "ceremony", "couple"]
    },
    {
      id: 2,
      title: "Graduation Celebration",
      category: "graduation", 
      image: "/Images/graduation.jpg",
      description: "Commemorating academic achievements with professional portraits.",
      tags: ["portrait", "achievement", "formal"]
    },
    {
      id: 3,
      title: "Professional Camera Setup",
      category: "commercial",
      image: "/Images/camera.jpg",
      description: "Behind-the-scenes look at our professional equipment.",
      tags: ["equipment", "professional", "studio"]
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "birthday",
      image: "/Images/birthday shoots.jpg",
      description: "Fun and vibrant birthday photo sessions.",
      tags: ["birthday", "celebration", "fun"]
    },
    {
      id: 5,
      title: "Outdoor Portrait Session",
      category: "outdoor",
      image: "/Images/outdoor.jpg",
      description: "Natural light outdoor photography sessions.",
      tags: ["outdoor", "natural", "portrait"]
    },
    {
      id: 6,
      title: "Graphic Design Work",
      category: "design",
      image: "/Images/graphic design.jpg",
      description: "Custom poster and graphic design services.",
      tags: ["design", "poster", "graphics"]
    }
  ],

  services: [
    {
      id: 1,
      title: "Wedding Photography",
      icon: "💒",
      image: "/Images/wedding.jpg",
      description: "We capture the love, joy, and unforgettable moments of your special day with creativity and elegance.",
      pricing: "Starting from KSh 40,000",
      popular: true,
      features: [
        "Pre-wedding consultation",
        "Full day coverage (8-12 hours)",
        "Professional editing",
        "300+ high-resolution photos",
        "Online gallery for sharing",
        "Print release included"
      ]
    },
    {
      id: 2,
      title: "Graduation Photoshoots",
      icon: "🎓",
      image: "/Images/graduation.jpg",
      description: "Celebrate your academic milestone with stylish and memorable portraits that reflect your achievement.",
      pricing: "Starting from KSh 5,000",
      popular: false,
      features: [
        "Individual portraits",
        "Group photos with family",
        "Academic regalia styling",
        "30+ edited photos",
        "Same-day preview",
        "Rush delivery available"
      ]
    },
    {
      id: 3,
      title: "Outdoor Shoots",
      icon: "🌿",
      image: "/Images/outdoor.jpg",
      description: "Natural light, beautiful backdrops, and creative direction for personal, fashion, or lifestyle shoots.",
      pricing: "Starting from KSh 7,000",
      popular: false,
      features: [
        "1-2 hour session",
        "Multiple outfit changes",
        "Natural lighting",
        "50+ edited photos",
        "Online gallery",
        "Print options available"
      ]
    },
    {
      id: 4,
      title: "Birthday Shoots",
      icon: "🎂",
      image: "/Images/birthday shoots.jpg",
      description: "Make your birthday memories last with fun, vibrant, and personalized photo sessions.",
      pricing: "Starting from KSh 8,000",
      popular: false,
      features: [
        "Themed photo sessions",
        "Props and decorations",
        "Multiple outfit changes",
        "40+ edited photos",
        "Same-day preview",
        "Social media ready formats"
      ]
    },
    {
      id: 5,
      title: "Event Videography",
      icon: "🎥",
      image: "/Images/camera-2.jpg",
      video: "/Images/videography.mp4",
      description: "From weddings and graduations to concerts and corporate functions, we capture your most important moments with cinematic flair.",
      pricing: "Starting from KSh 25,000",
      popular: false,
      features: [
        "HD/4K video recording",
        "Professional editing",
        "Color grading",
        "Music and sound design",
        "Multiple delivery formats",
        "Drone footage available"
      ]
    },
    {
      id: 6,
      title: "Content Video Shoots",
      icon: "📹",
      image: "/Images/podcast.jpg",
      video: "/Images/instagram reels.mp4",
      description: "We help content creators, influencers, and businesses produce engaging videos for social media, marketing, and storytelling.",
      pricing: "Starting from KSh 25,000",
      popular: true,
      features: [
        "Social media content",
        "Instagram reels & TikToks",
        "YouTube videos",
        "Brand storytelling",
        "Quick turnaround",
        "Multiple format delivery"
      ]
    },
    {
      id: 7,
      title: "Baby Showers",
      icon: "🍼",
      image: "/Images/babyshower.jpg",
      description: "Capture the joy and excitement of your baby shower with beautiful, candid photos.",
      pricing: "Starting from KSh 8,000",
      popular: false,
      features: [
        "Event coverage",
        "Group and family photos",
        "Decor and details",
        "30+ edited photos",
        "Online gallery",
        "Print options available"
      ]
    },
    {
      id: 8,
      title: "Ruracio",
      icon: "🥁",
      image: "/Images/ruracio.jpg",
      description: "Traditional engagement ceremony coverage with a focus on culture and family moments.",
      pricing: "Starting from KSh 25,000",
      popular: false,
      features: [
        "Full event coverage",
        "Cultural highlights",
        "Group and family photos",
        "50+ edited photos",
        "Online gallery",
        "Video option available"
      ]
    },
    {
      id: 9,
      title: "Graphic Design",
      icon: "🎨",
      image: "/Images/graphic design.jpg",
      description: "Professional design for logos, posters, banners, business cards, and more.",
      pricing: "Starting from KSh 500",
      popular: false,
      features: [
        "Logo design",
        "Branding materials",
        "Social media graphics",
        "Business cards",
        "Flyers and posters",
        "Revisions included"
      ]
    },
    {
      id: 10,
      title: "Printing Services (Banners, Fliers, Photo Mounts)",
      icon: "🖨️",
      image: "/Images/bannerprinter.jpg",
      description: "High-quality printing for banners, fliers, photo mounts, and more. Fast turnaround and delivery in Nairobi.",
      pricing: "Starting from KSh 500",
      popular: false,
      features: [
        "Banner printing",
        "Flier printing",
        "Photo mounts",
        "Custom sizes",
        "Bulk discounts",
        "Delivery available"
      ]
    }
  ],

  contact: {
    phone: "+254 706 190246",
    email: "zanelightvisuals@gmail.com",
    instagram: "https://www.instagram.com/anyirzeph?igsh=Z3ozMHJsb3JhYTdp",
    whatsapp: "https://wa.me/254706190246",
    location: "Nairobi, Kenya"
  }
};