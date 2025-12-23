
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'ar';

export const useLanguage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if path starts with /ar
    const isArabic = location.pathname.startsWith('/ar');
    const language: Language = isArabic ? 'ar' : 'en';
    const isRTL = isArabic;

    const getContent = <T extends Record<string, any>>(data: T | null | undefined, field: string): any => {
        if (!data) return '';
        if (isArabic) {
            const arField = `${field}_ar`;
            // Return Arabic content if it exists, otherwise fallback to English
            return data[arField] || data[field];
        }
        return data[field];
    };

    const switchLanguage = (targetLang: Language) => {
        const currentPath = location.pathname;

        if (targetLang === 'ar' && !isArabic) {
            // Switch to Arabic: Add /ar prefix
            navigate(`/ar${currentPath}`);
        } else if (targetLang === 'en' && isArabic) {
            // Switch to English: Remove /ar prefix
            const newPath = currentPath.replace(/^\/ar/, '') || '/';
            navigate(newPath);
        }
    };

    return { language, isRTL, getContent, switchLanguage };
};
