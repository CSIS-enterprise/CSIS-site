import React, { useEffect, useState } from 'react';
import { Shield, Menu, X, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { Youtube, Linkedin, Github } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Adjust based on utility bar height
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Início',
    href: '/'
  },
  {
    name: 'Artigos',
    href: '/blog'
  },
  {
    name: 'Valores e Fundador',
    href: '/#sobre'
  }];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div
        className={`bg-brand-dark text-white/80 py-1.5 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors flex items-center gap-1">
              
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors flex items-center gap-1">
              
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors flex items-center gap-1">
              
              <Github className="w-3.5 h-3.5" />
            </a>
            <span className="hidden sm:inline-block ml-2 text-white/50">
              Confira nossas redes sociais
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#sobre"
              className="hover:text-white transition-colors flex items-center gap-1">
              
              Saiba mais <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#carreiras"
              className="hover:text-white transition-colors flex items-center gap-1">
              
              Carreiras <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="/#contato"
              className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 font-semibold">
              
              Sofreu um incidente? <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'py-4 border-b border-brand-border'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="CSIS Logo" className="w-10 h-10 object-contain drop-shadow-md" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-navy leading-none tracking-tight">
                  CSIS
                </span>
                <span className="text-[9px] uppercase tracking-wider text-brand-slate font-bold mt-0.5 hidden sm:block">
                  CyberNorte Secure Intelligence Services
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-6">
                {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors">
                  
                    {link.name}
                  </a>
                )}
              </div>

              <div className="flex items-center gap-4">
                <button className="text-brand-navy hover:text-brand-blue transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="/#contato"
                  className="flex items-center gap-2 px-5 py-2.5 bg-brand-gold text-brand-navy text-sm font-bold rounded hover:bg-yellow-500 transition-colors shadow-sm">
                  
                  Fale conosco
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-brand-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              
              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen &&
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-brand-border shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-semibold text-brand-navy hover:text-brand-blue hover:bg-brand-ice rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </a>
            )}
              <a
              href="/#contato"
              className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 bg-brand-gold text-brand-navy text-base font-bold rounded hover:bg-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                Fale conosco
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        }
      </nav>
    </header>);

}