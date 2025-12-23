import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { SECTORS } from '../data';
import { getProjects } from '../lib/content';
import { Sector, Project } from '../types';
import { ArrowUpRight, X, ZoomIn } from 'lucide-react'; // Added X and ZoomIn icon

import SEO from '../components/SEO';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Projects: React.FC = () => {
  const { getContent, language } = useLanguage();
  const { t } = useTranslation();

  // Use CMS data
  const projectsData = getProjects();
  // Transform to match Project interface if needed, or assume it matches (with forced casting for sector)
  const PROJECTS: Project[] = projectsData.map(p => ({
    ...p,
    title: getContent(p, 'title'),
    description: getContent(p, 'description'),
    body: getContent(p, 'body'),
    sector: p.sector as Sector
  }));

  const [activeFilter, setActiveFilter] = useState<Sector | 'ALL'>('ALL');
  const [selectedId, setSelectedId] = useState<string | number | null>(null); // New State
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.sector === activeFilter);

  // Helper to find the active project for the modal
  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <SEO
        title={`Selected Works | SimplyDesign`}
        description={t('nav.projects')} // Simplified description or add to translation
        canonical="/projects"
        lang={language}
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-serif mt-4">Selected Works</h1>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-stone-200 dark:border-stone-800 pb-8 sticky top-24 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md z-30 pt-4">
          <button
            onClick={() => setActiveFilter('ALL')}
            className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all ${activeFilter === 'ALL' ? 'bg-gold text-stone-950' : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
              }`}
          >
            All Sectors
          </button>
          {SECTORS.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveFilter(sector)}
              className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all ${activeFilter === sector ? 'bg-gold text-stone-950' : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layoutId={`card-container-${project.id}`} // Unique ID for morphing
                  layout
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-stone-900">
                    <motion.img
                      layoutId={`project-image-${project.id}`} // Image morph ID
                      src={project.image}
                      alt={getContent(project, 'image_alt') || project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/10 transition-colors duration-500" />

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div>
                        <span className="text-gold text-[10px] tracking-widest uppercase mb-1 block">{project.sector}</span>
                        <h3 className="text-white text-xl font-serif">{project.title}</h3>
                      </div>
                      <ArrowUpRight className="text-white mb-1" size={24} />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between text-stone-500 text-[10px] uppercase tracking-widest">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-stone-500 uppercase tracking-widest">No projects found in this sector.</p>
          </div>
        )}
      </div>

      {/* EXPANDED MODAL */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="relative w-full max-w-5xl bg-white dark:bg-stone-900 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 z-20 p-2 bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 rounded-full text-stone-900 dark:text-white backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div
                className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 dark:bg-stone-800 cursor-zoom-in relative group"
                onClick={(e) => { e.stopPropagation(); setIsZoomed(true); }}
              >
                <motion.img
                  layoutId={`project-image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                {/* Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <motion.div
                className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-gold text-xs tracking-[0.2em] uppercase mb-4">{selectedProject.sector}</span>
                <h2 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-white mb-8">{selectedProject.title}</h2>

                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-b border-stone-200 dark:border-stone-800 py-6">
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-widest mb-2">Location</span>
                    <span className="text-stone-700 dark:text-stone-200">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="block text-stone-500 text-[10px] uppercase tracking-widest mb-2">Year</span>
                    <span className="text-stone-700 dark:text-stone-200">{selectedProject.year}</span>
                  </div>
                </div>

                <div className="prose prose-invert dark:prose-invert prose-stone md:prose-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                  <p>
                    {/* Fallback description if your data doesn't have one */}
                    {selectedProject.description || "A comprehensive design project focused on delivering exceptional user experiences through minimalist aesthetics and functional innovation."}
                  </p>
                </div>

                {/* <div className="mt-auto pt-12">
                  <button className="flex items-center gap-2 text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                    View Case Study <ArrowUpRight size={16} />
                  </button>
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ZOOM OVERLAY */}
      <AnimatePresence>
        {isZoomed && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center overflow-hidden"
            onClick={() => setIsZoomed(false)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-none shadow-2xl touch-none"
                style={{ height: '150vh', width: 'auto' }}
                drag
                dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                dragElastic={0.1}
                draggable={false} // Prevent browser drag
              />
            </div>

            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-32 right-8 text-white/70 hover:text-white transition-colors bg-black/20 p-2 rounded-full backdrop-blur-md z-50"
            >
              <X size={32} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase pointer-events-none bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
              Drag to Pan • Click backdrop to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;