import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ scrollY = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Reports', to: '/reports' },
    { name: 'Contact', to: '/contact' },
    { name: 'Pricing', to: '/pricing' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? '!bg-[#1A120B]/95 !backdrop-blur-sm !shadow-xl !border-b !border-[#3C2A21]/50' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold !bg-gradient-to-r !from-[#D5CEA3] !to-[#E5E5CB] !bg-clip-text !text-transparent">
              PricePrive
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.to
                    ? '!text-[#D5CEA3]'
                    : '!text-[#E5E5CB] hover:text-[#D5CEA3]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block relative">
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] transition-transform duration-300 origin-left ${
                      location.pathname === item.to
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="px-4 py-2 text-sm font-medium !text-white bg-clip-text bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] hover:bg-gradient-to-r hover:from-[#E5E5CB] hover:to-[#D5CEA3] transition-all duration-300">
              Log in
            </Link>
            <Link to="/login" className="px-6 py-2.5 bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] !text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-[#D5CEA3]/20 transition-all duration-300">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#D5CEA3] hover:text-[#E5E5CB] transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A120B]/95 backdrop-blur-sm border-t border-[#3C2A21]/50 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.to
                    ? 'text-[#D5CEA3] bg-[#3C2A21]/30'
                    : 'text-[#E5E5CB] hover:text-[#D5CEA3] hover:bg-[#3C2A21]/20'
                } rounded-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-2 space-y-3 border-t border-[#3C2A21]/50 mt-4">
              <Link to="/login" className="w-full block px-4 py-2.5 text-base font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D5CEA3] to-[#E5E5CB] hover:from-[#E5E5CB] hover:to-[#D5CEA3] border-2 border-[#3C2A21] rounded-lg hover:border-[#D5CEA3] transition-all duration-300">
                Log in
              </Link>
              <Link to="/login" className="w-full block px-4 py-2.5 text-base font-medium text-center text-[#1A120B] bg-gradient-to-r from-[#D5CEA3] to-[#3C2A21] rounded-lg hover:shadow-md transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;