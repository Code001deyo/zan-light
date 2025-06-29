import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | ZAN E-lite Visuals</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-8">404</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-primary text-lg px-8 py-4">
                <FaHome className="mr-2" /> Go Home
              </Link>
              <button onClick={() => window.history.back()} className="btn glass text-white hover:bg-white/20 text-lg px-8 py-4">
                <FaArrowLeft className="mr-2" /> Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}