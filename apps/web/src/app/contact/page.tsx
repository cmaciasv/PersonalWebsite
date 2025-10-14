'use client';
import { motion } from 'framer-motion';
import Link from '../../components/ui/Link';

export default function ContactPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in-up space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl tracking-tighter sm:text-7xl">
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-gray-300 md:text-xl text-justify">
          I&apos;m always open to new opportunities and collaborations. Whether you have a project idea, a question, or just want to connect, feel free to reach out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:Carlos.Macias23@gmail.com?subject=Hello!"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover-bg-accent-dark focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Email Me
          </Link>
          <Link
            href="https://github.com/cmaciasv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover-bg-accent-dark focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/carlosamacias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover-bg-accent-dark focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
