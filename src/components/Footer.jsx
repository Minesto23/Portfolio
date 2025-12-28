import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-links">
                    <a href="https://github.com/minesto" className="footer-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GH</a>
                    <a href="https://linkedin.com/in/miguelmorales" className="footer-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LI</a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Miguel Morales. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
