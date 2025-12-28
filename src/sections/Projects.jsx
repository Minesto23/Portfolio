import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project One",
            desc: "A web application built with React and Node.js.",
            tags: ["React", "Node", "MongoDB"],
            image: "", // Placeholder
            demo: "#",
            code: "#"
        },
        {
            id: 2,
            title: "Project Two",
            desc: "E-commerce platform with real-time features.",
            tags: ["Next.js", "Stripe", "Tailwind"],
            image: "",
            demo: "#",
            code: "#"
        },
        {
            id: 3,
            title: "Project Three",
            desc: "Portfolio website template.",
            tags: ["HTML", "CSS", "JS"],
            image: "",
            demo: "#",
            code: "#"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-img"></div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demo} className="link-btn">Live Demo ↗</a>
                                    <a href={project.code} className="link-btn">GitHub ↗</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
