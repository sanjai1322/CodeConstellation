import './LogoStrip.css';

const LogoStrip = () => {
    const logos = ['NEUROVAULT', 'PGAIS', 'AGRISENSE', 'STELLARCORE', 'NOVASCAN'];

    return (
        <section className="logo-strip">
            <div className="container">
                <p className="eyebrow">Trusted by founders building the next generation</p>
                <div className="logos-grid">
                    {logos.map((logo) => (
                        <span key={logo} className="logo-item">{logo}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoStrip;
