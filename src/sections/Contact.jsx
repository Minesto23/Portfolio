import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-desc">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <a href="mailto:minesto23@gmail.com">minesto23@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <span>Remote / Worldwide</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-textarea" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
