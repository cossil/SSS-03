import React, { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-8 w-8" />
          <span className="text-xl font-bold">South Side Sun</span>
        </Link>
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0`}>
          <Link to="/" className="block md:inline-block py-2 hover:text-yellow-300">Home</Link>
          <Link to="/about" className="block md:inline-block py-2 hover:text-yellow-300">About Us</Link>
          <Link to="/services" className="block md:inline-block py-2 hover:text-yellow-300">Services</Link>
          <Link to="/projects" className="block md:inline-block py-2 hover:text-yellow-300">Projects</Link>
          <Link to="/blog" className="block md:inline-block py-2 hover:text-yellow-300">Blog</Link>
          <Link to="/calculator" className="block md:inline-block py-2 hover:text-yellow-300">Solar Calculator</Link>
          <Link to="/contact" className="block md:inline-block py-2 hover:text-yellow-300">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;