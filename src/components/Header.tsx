
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">THF</h1>
            <p className="text-xs text-gray-600 -mt-1">ARCHITECTURE</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
