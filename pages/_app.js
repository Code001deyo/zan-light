import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import '../styles/light.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Content Security Policy */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob: images.unsplash.com res.cloudinary.com; connect-src 'self' wa.me api.whatsapp.com; media-src 'self' blob:; frame-src 'none';" 
        />
        
        {/* DNS Prefetch Control */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Permissions Policy */}
        <meta 
          httpEquiv="Permissions-Policy" 
          content="camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" 
        />
        
        {/* Robots Meta for sensitive pages */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Preconnect to external domains for performance and security */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.whatsapp.com" />
        
        {/* Critical image preloading */}
        <link rel="preload" href="/Images/camera.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/Images/wedding-1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/Images/graduation.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/Images/logo.png" as="image" type="image/png" />
        
        {/* Security: Subresource Integrity for external resources */}
        <link 
          rel="dns-prefetch" 
          href="//fonts.googleapis.com" 
        />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/Images/logo.png" />
        
        {/* Disable automatic detection of possible phone numbers */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#ffc107" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Author and Copyright */}
        <meta name="author" content="ZAN E-lite Visuals" />
        <meta name="copyright" content="© 2024 ZAN E-lite Visuals. All rights reserved." />
      </Head>
      
      <div className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}