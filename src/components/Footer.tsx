import React from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-main-bg border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-[#003366] flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8"/>
                  <path d="M35 30 L55 50 L35 70 L48 70 L68 50 L48 30 Z" fill="currentColor"/>
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
            <p className="text-small text-secondary-text max-w-xs">
              O'zbekiston bo'ylab ishonchli, tezkor va xavfsiz yuk tashish xizmatlari.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-button text-primary-text mb-6">Tezkor havolalar</h4>
            <ul className="space-y-4">
              <li><a href="#xizmatlar" className="text-small text-secondary-text hover:text-primary transition-colors">Xizmatlar</a></li>
              <li><a href="#transportlar" className="text-small text-secondary-text hover:text-primary transition-colors">Transportlar</a></li>
              <li><a href="#sharhlar" className="text-small text-secondary-text hover:text-primary transition-colors">Mijozlar fikri</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-button text-primary-text mb-6">Bog'lanish</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-small text-secondary-text">
                <Phone size={18} className="text-primary" />
                <a href="tel:+998998992112" className="hover:text-primary transition-colors">+998 99 899 2112</a>
              </li>
              <li className="flex items-center gap-3 text-small text-secondary-text">
                <Send size={18} className="text-primary" />
                <a href="https://t.me/omonlogistic_bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@omonlogistic_bot</a>
              </li>
              <li className="flex items-start gap-3 text-small text-secondary-text">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>O'zbekiston Respublikasi</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-secondary-text">
            &copy; {new Date().getFullYear()} OMON LOGISTICS. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
