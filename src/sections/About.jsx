import '../styles/About.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';

const About = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const skills = [
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Django", icon: "devicon-django-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
        { name: "Figma", icon: "devicon-figma-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Linux", icon: "devicon-linux-plain" }
    ];

    return (
        <section id="about" className="section about-section" ref={ref}>
            <div className={`container about-container ${isVisible ? 'visible' : ''}`}>
                <div className="about-image hidden-left">
                    <div className="img-placeholder">
                        <img src={profileImg} alt="Miguel Morales" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
                    </div>
                </div>
                <div className="about-content hidden-right">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        A proficient Software Engineer with a BSc in Software Engineering and substantial experience
                        in backend and full-stack development. I have demonstrated expertise in designing and
                        implementing scalable solutions using Python, Django, and SQL databases.
                    </p>
                    <p className="about-text">
                        I am focused on building secure REST APIs and robust authentication protocols.
                        Committed to continuous learning and leveraging analytical problem-solving abilities
                        to deliver measurable results and foster innovation.
                    </p>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="skill-item" title={skill.name} style={{ transitionDelay: `${index * 50}ms` }}>
                                <i className={skill.icon} style={{ fontSize: '2.5rem' }}></i>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
