import { MdEmail } from 'react-icons/md';
import Link from '../ui/Link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-8">
      <div className='flex margin-right-auto'>
        <div className='text-left text-xs content-center'>
          &copy; {new Date().getFullYear()} Carlos Macias. All rights reserved.  
        </div>
        <div className='flex justify-center' style={{ flexGrow: 0.66 }} >
          <Link href="https://github.com/cmaciasv" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="inline-block mr-4">
            <FaGithub size={32} />
          </Link>
          <Link href="mailto:Carlos.Macias23@gmail.com?subject=Hello!" target="_blank" rel="noopener noreferrer" aria-label="Email Me" className='inline-block mr-4'>
            <MdEmail size={32} />
          </Link>
          <Link href="https://linkedin.com/in/carlosamacias" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className='inline-block mr-4'>
            <FaLinkedin size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;