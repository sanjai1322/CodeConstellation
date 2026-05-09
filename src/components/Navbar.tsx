import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
        tl.fromTo('.navbar-logo', { opacity: 0, x: -20 }, { opacity: 1, x: 0, delay: 0.2 })
            .fromTo('.navbar-menu li', { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.5')
            .fromTo('.navbar-cta', { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, '-=0.6');
    });

    const scrollToSection = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.png" alt="Code Constellation" className="logo-image" />
                    <span className="logo-text">Code Constellation</span>
                </a>

                <ul className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                    <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}>Work</a></li>
                    <li><a href="#culture" onClick={(e) => { e.preventDefault(); scrollToSection('culture'); }}>Culture</a></li>
                    <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                </ul>

                <a href="#contact" className="navbar-cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                    Start a Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>

                <button className={`navbar-toggle ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
