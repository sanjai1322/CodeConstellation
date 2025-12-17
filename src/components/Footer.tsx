import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="footer-glow"></div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Code Constellation" className="footer-logo-img" />
                            <span className="footer-logo-text">Code Constellation</span>
                        </div>
                        <p className="footer-tagline">Build. Ship. Scale.</p>
                        <p className="footer-description">
                            A developer-led tech studio building production-ready apps, websites, and digital systems used in the real world.
                        </p>
                        {/* Animated Trust Tag */}
                        <div className="footer-tag">
                            <span className="tag-dot"></span>
                            <span className="tag-text">Production-Ready Builds</span>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-heading">Let's Build Together</h3>
                        <p className="footer-contact-intro">
                            Have an idea, product, or system in mind?<br />
                            We'd love to hear about it.
                        </p>
                        <div className="contact-links">
                            <a href="mailto:codeconstellation.business@gmail.com" className="contact-link">
                                <span className="contact-icon">📩</span>
                                <span className="contact-text">codeconstellation.business@gmail.com</span>
                            </a>
                            <a href="https://wa.me/919047734581" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="contact-icon">💬</span>
                                <span className="contact-text">WhatsApp <span className="fast-response">(Fast response)</span></span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h3 className="footer-heading">Explore</h3>
                        <nav className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#services">What We Do</a>
                            <a href="#products">Products</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-line"></div>
                    <div className="footer-bottom-content">
                        <p>© {currentYear} Code Constellation. Built with care. Shipped with purpose.</p>
                        <div className="footer-social">
                            <span className="social-label">Follow us</span>
                            <div className="social-links">
                                <a href="https://www.instagram.com/codeconstellation?igsh=bmRrZmg1cTZnbzlz" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                    <img src="/instagram-icon.png" alt="Instagram" className="social-icon" />
                                </a>
                                <a href="https://x.com/CodeConstella?t=2uNDW96lWijo9hDU7cI56Q&s=09" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">𝕏</a>
                                <a href="https://www.threads.net/@codeconstellation" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Threads">
                                    <img src="/threads-icon.png" alt="Threads" className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
