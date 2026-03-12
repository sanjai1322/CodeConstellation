import './Products.css';

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
    return (
        <section id="products" className="products section">
            <div className="container">
                <div className="products-header">
                    <div className="section-label">Our Work</div>
                    <h2 className="section-title">
                        Digital <span className="gradient-text-primary">Showcase</span>
                    </h2>
                    <p className="section-subtitle">
                        Elite systems engineered and deployed by our studio.
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((p) => (
                        <div key={p.name} className="product-card">
                            <div className="product-banner" style={{ background: p.gradient }}>
                                <span className="product-banner-icon">{p.icon}</span>
                                <div className="product-banner-shimmer" />
                            </div>

                            <div className="product-body">
                                <div className="product-header-row">
                                    <h3 className="product-name">{p.name}</h3>
                                    {p.status === 'Live'
                                        ? <span className="status-live">Live</span>
                                        : <span className="status-soon">Soon</span>
                                    }
                                </div>
                                <p className="product-description">{p.description}</p>
                                <div className="product-tags">
                                    {p.features.map((f) => (
                                        <span key={f} className="tag">{f}</span>
                                    ))}
                                </div>
                                <button className="btn-product">
                                    Explore Product
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
