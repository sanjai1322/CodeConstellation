import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        // Staggered Navbar Reveal
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
        tl.fromTo('.navbar-logo', { opacity: 0, x: -30 }, { opacity: 1, x: 0, delay: 0.2 })
            .fromTo('.navbar-menu li', { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1 }, '-=0.7')
            .fromTo('.navbar-cta', { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=1');
    }, { scope: containerRef });

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav ref={navRef} className={`navbar spotlight-card ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container" ref={containerRef}>
                <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.png" alt="Code Constellation" className="logo-image" />
                    <span className="logo-text">Code Constellation</span>
                </a>

                <ul className="navbar-menu">
                    <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a href="#services" onClick={() => scrollToSection('services')}>What We Do</a></li>
                    <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
                    <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>

                <a href="#contact" className="navbar-cta" onClick={() => scrollToSection('contact')}>
                    <span className="cta-glow"></span>
                    <span className="cta-text">Work With Us</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
