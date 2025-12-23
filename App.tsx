
import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Pages - Lazy Loaded
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AudioPlayer from './components/AudioPlayer';

const ScrollManager = ({ lenisRef }: { lenisRef: React.MutableRefObject<Lenis | null> }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle hash scrolling if present
    if (hash && lenisRef.current) {
      // slight timeout to allow layout to settle
      setTimeout(() => {
        lenisRef.current?.scrollTo(hash, { offset: 0 });
      }, 100);
      return;
    }

    // Scroll to top on route change using Lenis for consistency (only if no hash)
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenisRef]);

  return null;
};

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Refresh Lenis on window resize to update scroll dimensions
    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollManager lenisRef={lenisRef} />
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-200 font-sans selection:bg-gold selection:text-stone-950 transition-colors duration-300">
          <CustomCursor />
          <Navbar />

          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <React.Suspense fallback={
                <div className="h-screen w-full flex items-center justify-center bg-stone-50 dark:bg-stone-950 text-gold font-serif">
                  Loading...
                </div>
              }>
                <Routes>
                  {/* English Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* Arabic Routes */}
                  <Route path="/ar" element={<Home />} />
                  <Route path="/ar/projects" element={<Projects />} />
                  <Route path="/ar/about" element={<About />} />
                  <Route path="/ar/contact" element={<Contact />} />
                </Routes>
              </React.Suspense>
            </AnimatePresence>
          </main>

          <Footer />
          <AudioPlayer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

