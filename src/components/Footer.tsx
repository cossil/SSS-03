import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">South Side Sun</h3>
            <p>Expert solar energy consulting for homes, small businesses, and rural properties in Florida.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-300">Services</a></li>
              <li><a href="/projects" className="hover:text-yellow-300">Projects</a></li>
              <li><a href="/blog" className="hover:text-yellow-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300"><Facebook /></a>
              <a href="#" className="hover:text-yellow-300"><Twitter /></a>
              <a href="#" className="hover:text-yellow-300"><Instagram /></a>
              <a href="mailto:info@southsidesun.com" className="hover:text-yellow-300"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 South Side Sun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;