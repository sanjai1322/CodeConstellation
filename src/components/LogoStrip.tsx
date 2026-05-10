import './LogoStrip.css';

const LogoStrip = () => {
    const logos = ['NEUROVAULT', 'PGAIS', 'AGRISENSE', 'STELLARCORE', 'NOVASCAN', 'CODE CONSTELLATION'];

    return (
        <section className="logo-strip">
            <div className="container">
                <p className="eyebrow">Trusted by founders building the next generation</p>
                <div className="logos-row">
                    {logos.map((logo, index) => (
                        <span key={logo} className="logo-item">
                            {logo}
                            {index < logos.length - 1 && <span className="logo-dot">·</span>}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoStrip;
