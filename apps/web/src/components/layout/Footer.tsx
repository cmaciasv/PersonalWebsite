import Link from '../ui/Link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Carlos Macias</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/cmaciasv" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub size={32} />
          </Link>
          <Link href="https://linkedin.com/in/carlosamacias" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;