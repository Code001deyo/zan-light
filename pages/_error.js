import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} Error` : 'Client Error'} | ZAN E-lite Visuals</title>
        <meta name="description" content="An error occurred while loading the page." />
      </Head>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-8">
              {statusCode || 'Error'}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {statusCode
                ? `A ${statusCode} error occurred on server`
                : 'An error occurred on client'}
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Something went wrong. Please try refreshing the page or go back to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-primary text-lg px-8 py-4">
                <FaHome className="mr-2" /> Go Home
              </Link>
              <button onClick={() => window.location.reload()} className="btn glass text-white hover:bg-white/20 text-lg px-8 py-4">
                <HiRefresh className="mr-2" /> Refresh Page
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;