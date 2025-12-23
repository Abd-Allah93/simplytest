import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors duration-200 text-stone-600 dark:text-stone-300"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="hover:text-gold transition-colors" />
            ) : (
                <Moon size={20} className="hover:text-gold transition-colors" />
            )}
        </button>
    );
};

export default ThemeToggle;
