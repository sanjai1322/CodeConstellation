import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        name: 'Orbit Focus',
        description: 'A beautiful productivity & focus app with cosmic themes, ambient sounds, and planetary environments.',
        status: 'Live',
        icon: '🌍',
        features: ['Focus Timer', 'Cosmic Themes', 'Ambient Sounds'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
        name: 'More Apps Coming',
        description: "We're constantly building and launching new products. AI tools, productivity apps, and more.",
        status: 'Soon',
        icon: '✨',
        features: ['AI Tools', 'Productivity', 'Automation'],
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    },
];

const Products = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.product-card',
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.products-grid',
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="products" className="products section" ref={sectionRef}>
            <div className="products-bg">
                <div className="products-glow-1"></div>
                <div className="products-glow-2"></div>
            </div>

            <div className="container">
                <h2 className="section-title">
                    Our <span className="gradient-text">Products</span>
                </h2>
                <p className="section-subtitle">
                    We don't just build for clients — we build and ship our own products too.
                </p>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.name} className="product-card">
                            <div className="product-glow" style={{ background: product.gradient }}></div>
                            <div className="product-content">
                                <div className="product-header">
                                    <div className="product-icon-wrapper">
                                        <span className="product-icon">{product.icon}</span>
                                        <div className="icon-glow" style={{ background: product.gradient }}></div>
                                    </div>
                                    <span className={`product-status ${product.status.toLowerCase()}`}>
                                        <span className="status-dot"></span>
                                        {product.status}
                                    </span>
                                </div>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-features">
                                    {product.features.map((feature) => (
                                        <span key={feature} className="product-feature">{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
