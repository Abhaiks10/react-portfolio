import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1625] text-center text-pink-100 py-6 px-4 md:px-12 flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
        <p>
          &copy; 2025&lt;/&gt; with <span className="text-red-400">❤️</span> by Abhai K S · All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/Abhaiks10" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-white text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/abhai-ks" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white text-xl" />
          </a>
          <a href="https://www.instagram.com/abhaiiii___/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
