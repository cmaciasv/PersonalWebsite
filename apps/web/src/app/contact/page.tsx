import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in-up space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-7xl">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          I&apos;m always open to new opportunities and collaborations. Whether you have a project idea, a question, or just want to connect, feel free to reach out!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:Carlos.Macias23@gmail.com"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Email Me
          </Link>
          <Link
            href="https://github.com/cmaciasv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/carlosamacias"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </main>
  );
}
