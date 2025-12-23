
import React from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  const { language } = useLanguage();
  const prefix = language === 'ar' ? '/ar' : '';

  const navItems = [
    { label: t('nav.studio'), path: `${prefix}/` },
    { label: t('nav.projects'), path: `${prefix}/projects` },
    { label: t('nav.about'), path: `${prefix}/#about` },
    { label: t('nav.contact'), path: `${prefix}/contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-300">
      <Link to={prefix || '/'} className="text-2xl font-serif font-bold tracking-tighter">
        <span className="text-red-600">Simply</span><span className="text-blue-600">Design</span>
      </Link>

      <div className="flex items-center gap-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group hover:text-stone-400 dark:hover:text-stone-300 transition-colors ${location.pathname === item.path ? 'text-stone-900 dark:text-white' : 'text-stone-500 dark:text-stone-400'
                }`}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        <LanguageSwitcher />
        <ThemeToggle />

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-950/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-4xl font-serif z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

import { AnimatePresence } from 'framer-motion';
export default Navbar;
