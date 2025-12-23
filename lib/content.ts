/// <reference types="vite/client" />
import fm from 'front-matter';

// Read all markdown files
const blogFiles = import.meta.glob('/content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
});

const homeFile = import.meta.glob('/content/pages/home.md', {
    eager: true,
    query: '?raw',
    import: 'default'
});

const projectFiles = import.meta.glob('/content/projects/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
});

// Helper interface for front-matter result
interface MarkdownContent<T> {
    attributes: T;
    body: string;
}

// Parse blog posts
export function getBlogPosts() {
    return Object.entries(blogFiles).map(([filepath, content]) => {
        const { attributes, body } = fm(content as string);
        // Explicitly cast attributes to any or expected type
        const data = attributes as any;

        const slug = filepath.split('/').pop()?.replace('.md', '') || '';
        return {
            slug,
            title: data.title,
            date: data.date,
            description: data.description,
            image: data.image,
            body
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Parse home page
export function getHomeContent() {
    const content = Object.values(homeFile)[0];
    if (!content) return null;
    const { attributes } = fm(content as string);
    const data = attributes as any;

    return {
        title: data.title,
        title_ar: data.title_ar,
        heroImage: data.hero_image,
        subtitle: data.subtitle,
        subtitle_ar: data.subtitle_ar,
        description: data.description,
        description_ar: data.description_ar
    };
}

// Parse projects
export function getProjects() {
    return Object.entries(projectFiles).map(([filepath, content]) => {
        const { attributes, body } = fm(content as string);
        const data = attributes as any;

        const slug = filepath.split('/').pop()?.replace('.md', '') || '';
        return {
            id: slug, // Using slug as ID
            slug,
            title: data.title,
            title_ar: data.title_ar,
            image: data.image,
            description: data.description,
            description_ar: data.description_ar,
            sector: data.sector || 'OTHER',
            year: data.year || new Date().getFullYear().toString(),
            location: data.location || 'Unknown',
            link: data.link,
            body,
            body_ar: data.body_ar
        };
    });
}
