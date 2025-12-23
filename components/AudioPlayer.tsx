import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { getHomeContent } from '../lib/content';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const content = getHomeContent();
  // Use CMS music file if available, otherwise fallback to default
  const musicSrc = content?.music_file || "https://dl.dropbox.com/scl/fi/xj8y6138h39clrr6a28h3/SnapInsta.to_AQO2oQSu4SctUqNdDH4LPRRhxkkvqYrQeQHiPG4_rUFleaGfFX6fIObp-EjbxI11I8ZG09wTp4fdU5UIQ2szGuk6ffzmz8U5S0_wRG0.mp3?rlkey=b25e79gvgtksuunio34x3qnek&st=ztbmgju5";

  useEffect(() => {
    // 1. Define the global interaction handler
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(e => console.log("Play failed:", e));

        // Remove listeners so this only happens once
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    // 2. Try to play immediately on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Optional: Set volume to 50%

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Success: Autoplay worked
            setIsPlaying(true);
          })
          .catch(() => {
            // Failure: Browser blocked it. Add global listeners.
            console.log("Autoplay blocked. Waiting for user interaction...");
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('keydown', handleFirstInteraction);
          });
      }
    }

    // 3. Cleanup listeners on unmount
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    // Stop the click from bubbling up to the document listener 
    // (prevents conflict if the first click is on this specific button)
    e.stopPropagation();

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Play error:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100] flex items-center gap-4">
      <audio
        ref={audioRef}
        loop
        src={musicSrc}
      />

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex gap-1 items-end h-4"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 16, 8, 12, 4] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8 + i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-[2px] bg-gold"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleAudio}
        className="p-3 bg-stone-900 border border-stone-800 rounded-full text-stone-400 hover:border-gold hover:text-gold transition-all"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default AudioPlayer;