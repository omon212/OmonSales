import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToForm = () => {
    document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-main-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-[#003366] flex items-center justify-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <path
                    d="M35 30 L55 50 L35 70 L48 70 L68 50 L48 30 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-2xl leading-none tracking-tight text-[#003366]">
                  OMON
                </span>
                <span className="text-sm leading-tight tracking-wide text-[#003366] font-normal mt-0.5">
                  LOGISTICS
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#xizmatlar"
              className="text-nav text-secondary-text hover:text-primary transition-colors"
            >
              Xizmatlar
            </a>
            <a
              href="#transportlar"
              className="text-nav text-secondary-text hover:text-primary transition-colors"
            >
              Transportlar
            </a>
            <a
              href="#sharhlar"
              className="text-nav text-secondary-text hover:text-primary transition-colors"
            >
              Sharhlar
            </a>
            <button
              onClick={scrollToForm}
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-button hover:bg-primary/90 transition-colors shadow-sm"
            >
              Xizmatdan foydalanish
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-text hover:text-primary-text focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-main-bg border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#xizmatlar"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-nav text-secondary-text hover:text-primary"
            >
              Xizmatlar
            </a>
            <a
              href="#transportlar"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-nav text-secondary-text hover:text-primary"
            >
              Transportlar
            </a>
            <a
              href="#sharhlar"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-nav text-secondary-text hover:text-primary"
            >
              Sharhlar
            </a>
            <button
              onClick={scrollToForm}
              className="w-full text-left px-3 py-2 text-nav text-primary font-medium"
            >
              Xizmatdan foydalanish
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
