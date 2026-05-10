import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Code Constellation" className="footer-logo-img" />
                            <span className="footer-logo-text">Code Constellation</span>
                        </div>
                        <p className="footer-description">
                            AI-first product studio building apps, automation, and systems for ambitious teams.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h3 className="column-title">Get in touch</h3>
                        <div className="contact-details">
                            <p><strong>Email:</strong> <a href="mailto:codeconstellation.business@gmail.com">codeconstellation.business@gmail.com</a></p>
                            <p><strong>WhatsApp:</strong> <a href="https://wa.me/919047734581">+91 90477 34581</a></p>
                            <p><strong>Location:</strong> Tamil Nadu, India · Working globally</p>
                            <p><strong>Hours:</strong> Mon-Fri, 10:00-19:00 IST</p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="column-title">Studio</h3>
                        <nav className="column-links">
                            <a href="#home">Home</a>
                            <a href="#services">Services</a>
                            <a href="#work">Work</a>
                            <a href="#process">Process</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">© {year} Code Constellation. Precision Engineered.</p>
                    <div className="footer-bottom-badge">
                        <span className="bottom-dot" />
                        Production Ready
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
