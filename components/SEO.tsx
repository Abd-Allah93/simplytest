
import React from 'react';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "A high-end construction and fit-out firm specializing in architectural fluid designs.",
    image = "/og-image.jpg",
    canonical
}) => {
    // Ensure standard JavaScript string interpolation
    const siteUrl = "https://simplytest.pages.dev";
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : undefined;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {fullCanonical && <link rel="canonical" href={fullCanonical} />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </>
    );
};

export default SEO;

