import { getBlogPosts } from '../lib/content';

export default function BlogList() {
    const posts = getBlogPosts();

    return (
        <div className="blog-list">
            <h2>Blog Posts</h2>
            <div className="grid gap-6">
                {posts.map(post => (
                    <article key={post.slug} className="blog-post border p-4 rounded-lg">
                        {post.image && <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />}
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <time className="text-gray-500 block mb-2">{new Date(post.date).toLocaleDateString()}</time>
                        <p className="text-gray-700">{post.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
