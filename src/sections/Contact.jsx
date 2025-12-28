import { useState } from 'react';
import '../styles/Contact.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:minestopro@gmail.com?subject=${subject}&body=${body}`;

        // Optional: Reset form or show success message (though mailto opens external client)
        alert('Opening your email client to send the message...');
    };

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className={`container contact-container ${isVisible ? 'visible' : ''}`}>
                <div className="contact-info">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-desc">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <a href="mailto:minestopro@gmail.com">minestopro@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <span>Remote / Germany</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
