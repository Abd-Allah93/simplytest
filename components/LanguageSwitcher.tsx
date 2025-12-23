
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher: React.FC = () => {
    const { language, switchLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            <button
                onClick={() => switchLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-gold' : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'}`}
            >
                EN
            </button>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <button
                onClick={() => switchLanguage('ar')}
                className={`transition-colors ${language === 'ar' ? 'text-gold' : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'}`}
            >
                AR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
