import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu } from 'lucide-react';
import logonn from '../assets/logo.png';
// Replace with your image path

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-slate-800/90 via-blue-900/90 to-slate-800/90 backdrop-blur-md shadow-lg border-b border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-sky-400" />
              <span className="text-white font-bold text-xl">
                Inertia 2025
              </span>
            </div>
          
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Gallery', 'Events', 'Team', 'Sponsors', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                className="text-gray-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <button className="bg-sky-500/80 hover:bg-sky-400 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 backdrop-blur-sm">
              Register
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-sky-400"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-slate-800/95 via-blue-900/95 to-slate-800/95 backdrop-blur-lg shadow-lg">
            {['Workshop', 'Events', 'Team', 'Sponsors', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                className="text-gray-300 hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-sky-500/80 hover:bg-sky-400 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 backdrop-blur-sm">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;