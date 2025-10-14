'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in-up space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl tracking-tighter sm:text-7xl">
          About Me
        </motion.h1>
        <div className="max-w-3xl mx-auto text-lg md:text-xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-justify">
            Senior Software Engineer with over 10 years of experience building consumer-scale products and tools across gaming, AR, and SaaS. A full-stack contributor proficient in backend APIs (Rails/REST) and frontends (React/Unity), with production experience in CI/CD, accessibility (WCAG 2.2 AA), and cloud technologies (Docker/Kubernetes/GCP). Known for shipping complex features, improving reliability, and mentoring teams.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-4xl tracking-tighter mt-8 --foreground">
            Skills
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="list-disc text-left mx-auto max-w-2xl space-y-1 md:text-lg text-gray-300">
            <li><strong>Languages:</strong> C#, TypeScript/JavaScript, Ruby, Java, SQL (MySQL), MongoDB</li>
            <li><strong>Frameworks/Libraries:</strong> Unity, React, Rails</li>
            <li><strong>Cloud/DevOps & Tools:</strong> Docker, Kubernetes, GCP, Git/SVN/TFS, CI/CD, Postman</li>
            <li><strong>Testing/Quality:</strong> Automated test suites, accessibility (WCAG 2.2 AA), crash/telemetry (Bugsnag/Crittercism)</li>
          </motion.ul>
        </div>
      </div>
    </main>
  );
}
