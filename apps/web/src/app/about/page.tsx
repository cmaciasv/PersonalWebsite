import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in-up space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-7xl">
          About Me
        </h1>
        <div className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-xl space-y-4">
          <p>
            Senior Software Engineer with over 10 years of experience building consumer-scale products and tools across gaming, AR, and SaaS. A full-stack contributor proficient in backend APIs (Rails/REST) and frontends (React/Unity), with production experience in CI/CD, accessibility (WCAG 2.2 AA), and cloud technologies (Docker/Kubernetes/GCP). Known for shipping complex features, improving reliability, and mentoring teams.
          </p>
          <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 mt-8">
            Skills
          </h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md space-y-1">
            <li><strong>Languages:</strong> C#, TypeScript/JavaScript, Ruby, Java, SQL (MySQL), MongoDB</li>
            <li><strong>Frameworks/Libraries:</strong> Unity, React, Rails</li>
            <li><strong>Cloud/DevOps & Tools:</strong> Docker, Kubernetes, GCP, Git/SVN/TFS, CI/CD, Postman</li>
            <li><strong>Testing/Quality:</strong> Automated test suites, accessibility (WCAG 2.2 AA), crash/telemetry (Bugsnag/Crittercism)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
