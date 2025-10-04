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
          className="text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-7xl"
        >
          Carlos Macias: Engineer, Creator, Problem-Solver.
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          I build software that delights users, from world-scale AR games to mission-critical financial platforms. With a passion for solving complex challenges and a love for the craft, I create impactful digital experiences. Let&apos;s build something cool together.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-accent-teal px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover-bg-accent-teal-dark focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            View My Work
          </Link>
        </div>
      </div>
    </main>
  );
}