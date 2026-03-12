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
                            A developer-led tech studio engineering production-grade AI systems, apps, and automation for the modern era.
                        </p>
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

                    <div className="footer-column">
                        <h3 className="column-title">Connect</h3>
                        <nav className="column-links">
                            <a href="mailto:codeconstellation.business@gmail.com">Business</a>
                            <a href="https://wa.me/919047734581" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="https://www.instagram.com/codeconstellation" target="_blank" rel="noopener noreferrer">Instagram</a>
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
