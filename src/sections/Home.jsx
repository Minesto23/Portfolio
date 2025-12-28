import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home" className="section home-section">
            <div className="container home-container">
                <div className="home-content">
                    <h1 className="hero-title">
                        <span className="typing-wrapper"><span className="typing-text type-2">Hi, I'm <span className="text-gradient">Miguel Morales</span></span></span>
                        <br />
                        <span className="typing-wrapper"><span className="typing-text type-3 text-gradient" style={{ fontSize: '3rem', fontWeight: '700' }}>aka Minesto</span></span>
                        <br />
                        <span className="typing-wrapper"><span className="typing-text type-4">Software Engineer.</span></span>
                    </h1>
                    <div className="typing-wrapper description-wrapper">
                        <p className="hero-description fade-in-text">
                            Specialized in Python, Django, and React. I build scalable backend solutions
                            and modern web applications.
                        </p>
                    </div>
                    <div className="cta-buttons fade-in-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="home-visual">
                    {/* Abstract visual or user image placeholder */}
                    <div className="visual-circle"></div>
                    {/* You could add a real image here later */}
                </div>
            </div>
        </section>
    );
};

export default Home;
