import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col space-y-5 p-2 lg:p-6 bg-[#8d5a3a] rounded-l-md z-50">
      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-800 transition-transform transform hover:scale-110" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-500 transition-transform transform hover:scale-110" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-red-700 transition-transform transform hover:scale-110" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
        <FaPinterestP className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-yellow-800 transition-transform transform hover:scale-110" />
      </Link>
    </div>
  );
}
