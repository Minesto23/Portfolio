import '../styles/Experience.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const experiences = [
        {
            id: 1,
            role: "Fullstack Developer",
            company: "DeTip, United States",
            date: "Aug 2023 - Current",
            description: "Engineered high-performance Django REST APIs and responsible for implementing standardized endpoints and robust authentication protocols. Leveraged Docker and PostgreSQL to optimize deployment workflows."
        },
        {
            id: 2,
            role: "Web Developer",
            company: "Self-Employed",
            date: "Jan 2020 - Jan 2022",
            description: "Designed and developed custom full-stack web solutions using React, Django, and SQL. Managed the entire development lifecycle—from UI/UX design in Figma to secure deployment using Docker and Git."
        }
    ];

    return (
        <section id="experience" className="section experience-section" ref={ref}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className={`timeline ${isVisible ? 'visible' : ''}`}>
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                            <div className="timeline-content">
                                <h3 className="role">{exp.role}</h3>
                                <h4 className="company">{exp.company}</h4>
                                <span className="date">{exp.date}</span>
                                <p className="description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
