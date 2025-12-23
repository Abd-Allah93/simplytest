import { getProjects } from '../lib/content';

export default function ProjectList() {
    const projects = getProjects();

    return (
        <div className="project-list">
            <h2>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project.slug} className="project border p-4 rounded-lg">
                        {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />}
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
