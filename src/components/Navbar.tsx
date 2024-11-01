import { BookOpen, LogIn, UserPlus, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Timer } from './Timer';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-indigo-600 font-bold text-xl transform transition-transform hover:scale-105"
          >
            <BookOpen className="w-6 h-6 animate-pulse" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CourseOrbit
            </span>
          </Link>
          
          <div className="hidden sm:block">
            <Timer />
          </div>

          {!isDashboard && (
            <div className="hidden sm:flex items-center gap-4">
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link 
                to="/signup" 
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <UserPlus className="w-5 h-5" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}

          <button 
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && !isDashboard && (
          <div className="sm:hidden py-4 border-t animate-slideDown">
            <div className="flex flex-col gap-4">
              <Timer />
              <Link 
                to="/login" 
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 px-2 py-1 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link 
                to="/signup" 
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="w-5 h-5" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}