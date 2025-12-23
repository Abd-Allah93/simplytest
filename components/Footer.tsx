
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800/50 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 opacity-[0.02] dark:opacity-[0.02] text-[20vw] font-serif select-none pointer-events-none -mr-24 -mt-24 text-stone-900 dark:text-stone-100">
        SIMPLY
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-1">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tighter mb-8 block">
            <span className="text-red-600">Simply</span><span className="text-blue-600">Design</span>
          </Link>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Designing and delivering high-fidelity architectural spaces since 2012. We believe in structural fluidity and material excellence.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-4">Sitemap</span>
          <Link to="/" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Studio</Link>
          <Link to="/projects" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Portfolio</Link>
          <Link to="/contact" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-4">Social</span>
          <a href="#" className="flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"><Instagram size={14} /> Instagram</a>
          <a href="#" className="flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"><Linkedin size={14} /> LinkedIn</a>
          <a href="#" className="flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"><Twitter size={14} /> Twitter</a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-4">Legal</span>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Cookie Policy</a>
          <a href="#" className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-stone-600 text-[10px] uppercase tracking-widest">
          © 2024 SimplyDesign Ltd. All Rights Reserved. Crafted with Precision.
        </p>
        <button
          onClick={scrollToTop}
          className="p-4 border border-stone-200 dark:border-stone-800 rounded-full hover:border-gold hover:text-gold transition-all group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
