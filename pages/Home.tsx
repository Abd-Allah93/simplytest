
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import { getHomeContent } from '../lib/content'; // Import loader

import SEO from '../components/SEO';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Home: React.FC = () => {
  const { getContent, language } = useLanguage();
  const { t } = useTranslation();
  const prefix = language === 'ar' ? '/ar' : '';

  const homeContent = getHomeContent() || {
    title: "Structural Fluidity Defined.",
    heroImage: "https://dl.dropbox.com/scl/fi/19wbei0t501px7kxatjil/Gemini_Generated_Image_234d93234d93234d.png?rlkey=wt497h4w16aizkamn253kz17q&st=8zmrqomr",
    subtitle: "Crafting the Future of Space.",
    description: "We specialize in the meticulous intersection of structural integrity and fluid aesthetic finishing. Our approach treats every project as a unique architectural dialogue, balancing heavy masonry with light, metallic luxury."
  };

  const title = getContent(homeContent, 'title');
  const subtitle = getContent(homeContent, 'subtitle');
  const description = getContent(homeContent, 'description');

  const mobileHeroImage = homeContent.heroImage ? homeContent.heroImage.replace(/(\.[\w\d_-]+)$/i, '-mobile$1') : '';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="w-full">
      <SEO
        title={`SimplyDesign | ${title}`}
        description={description}
        canonical="/"
        lang={language}
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* background overlay - gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 z-10" />

        {/* Background Visual (Placeholder Video Effect with Image) */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={mobileHeroImage} />
            <source media="(min-width: 769px)" srcSet={homeContent.heroImage} />
            <img
              src={homeContent.heroImage}
              className="w-full h-full object-cover"
              alt="Hero Architectural"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto translate-y-32">
          <motion.h1
            className="text-6xl md:text-[8vw] font-serif leading-[0.9] tracking-tight mb-8 text-white drop-shadow-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split(" ").map((word: string, i: number) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link to={`${prefix}/projects`}>
              <MagneticButton>
                {t('nav.portfolio')} <ArrowUpRight size={16} />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-12 flex items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-stone-300 dark:bg-stone-700 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{t('common.scroll_down')}</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 border-t border-stone-200 dark:border-stone-800/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold">{t('nav.about')}</span>
            <h2 className="text-4xl font-serif mt-4">{subtitle}</h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8">
            <p className="text-2xl md:text-3xl font-light text-stone-600 dark:text-stone-400 leading-relaxed">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="text-3xl font-serif text-stone-900 dark:text-white">150+</span>
                <p className="text-stone-500 text-sm uppercase tracking-widest mt-2">{t('nav.projects')} Completed</p>
              </div>
              <div>
                <span className="text-3xl font-serif text-stone-900 dark:text-white">12</span>
                <p className="text-stone-500 text-sm uppercase tracking-widest mt-2">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Ticker / Teaser */}
      <section className="bg-stone-200/50 dark:bg-stone-900/30 py-24 overflow-hidden border-y border-stone-200 dark:border-stone-800/50">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="flex gap-24 whitespace-nowrap text-[12vw] font-serif italic text-stone-300 dark:text-stone-800 uppercase leading-none"
        >
          <span>Commercial • Residential • Administrative • Hotels • Sports • Pharmacies • </span>
          <span>Commercial • Residential • Administrative • Hotels • Sports • Pharmacies • </span>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
