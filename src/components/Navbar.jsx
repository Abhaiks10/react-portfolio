import { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaEnvelope, FaFile } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#10071b] text-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <a href="/"> <div className="text-3xl font-bold">My Portfolio</div></a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-lg">
            <NavItem href="/" icon={<FaHome />} text="Home" />
            <NavItem href="/about" icon={<FaUser />} text="About Me" />
            <NavItem href="/project" icon={<FaFileAlt />} text="Projects" />
            <NavItem href="/resume" icon={<FaFile />} text="Resume" />
            <NavItem href="/contact" icon={<FaEnvelope />} text="Contact Me" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#10071b]">
          <NavItem href="/" icon={<FaHome />} text="Home" onClick={() => setIsOpen(false)} />
          <NavItem href="/about" icon={<FaUser />} text="About Me" onClick={() => setIsOpen(false)} />
          <NavItem href="/project" icon={<FaFileAlt />} text="Projects" onClick={() => setIsOpen(false)} />
          <NavItem href="/resume" icon={<FaFile />} text="Resume" onClick={() => setIsOpen(false)} />
          <NavItem href="/contact" icon={<FaEnvelope />} text="Contact Me" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ href, icon, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
  >
    {icon} {text}
  </a>
);

export default Navbar;
