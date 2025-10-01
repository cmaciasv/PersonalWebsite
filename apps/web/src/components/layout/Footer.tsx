import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <nav className="container mx-auto flex justify-center space-x-4">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</Link>
      </nav>
    </footer>
  );
}
