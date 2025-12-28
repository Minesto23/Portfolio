import '../styles/Projects.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import peerwireImg from '../assets/peerwire.png';
import animecodexImg from '../assets/animecodex.png';
import nebulasoundImg from '../assets/nebulasound.png';

const Projects = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const projects = [
        {
            id: 1,
            title: "Nebula Sound AI",
            desc: "AI-powered music recommendation system leveraging machine learning to curate personalized playlists and discover new artists.",
            tags: ["Python", "AI/ML", "Data Science"],
            image: nebulasoundImg,
            demo: "#",
            code: "https://github.com/Minesto23/Nebula-Sound-AI-Music-Recommender"
        },
        {
            id: 2,
            title: "Peerwire",
            desc: "A robust BitTorrent client implementation built from scratch, featuring support for multi-tracker announcements and peer-to-peer data exchange.",
            tags: ["Go", "Networking", "P2P Protocol"],
            image: peerwireImg,
            demo: "#",
            code: "https://github.com/Minesto23/peerwire"
        },
        {
            id: 3,
            title: "Anime Codex",
            desc: "Comprehensive anime discovery and recommendation platform. Features a modern UI for browsing titles and managing watchlists.",
            tags: ["React", "Python", "Fullstack"],
            image: animecodexImg,
            demo: "#",
            code: "https://github.com/Minesto23/Anime-Codex"
        }
    ];

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card" style={{ transitionDelay: `${index * 200}ms` }}>
                            <div className="project-img-wrapper">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="project-img" />
                                ) : (
                                    <div className="project-img-placeholder"></div>
                                )}
                            </div>
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
