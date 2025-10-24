"use client";

import Link from '../components/ui/Link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="animate-fade-in-up space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl tracking-tighter sm:text-7xl"
        >
          <p className='inline-block'>Hi, I&apos;m&nbsp;</p> 
          <p className='inline-block text-white'> Carlos Macias</p>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl tracking-tighter sm:text-5xl"
        >
          Engineer, Creator, Problem-Solver
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-left text-gray-300">
          I build software that delights users, from world-scale AR games to mission-critical financial platforms. With a passion for solving complex challenges and a love for the craft, I create impactful digital experiences. Let&apos;s build something cool together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 flex items-center justify-center">
          <Link
            href="/projects"
            className="no-underline inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover-bg-accent-dark"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </main>
  );
}