import './WhyCC.css';

const usps = [
    {
        title: '4-week delivery',
        desc: 'Most agencies quote 12 weeks. We ship in 4. Real product, real users, real fast.'
    },
    {
        title: 'AI-first by default',
        desc: 'Every project gets AI capabilities baked in, not bolted on. Audit, content, automation — all included.'
    },
    {
        title: '50% refund guarantee',
        desc: "If you're not happy at the 50% milestone, we refund half. No drama, no contracts holding you hostage."
    }
];

const WhyCC = () => {
    return (
        <section id="why" className="why section">
            <div className="container">
                <p className="eyebrow">WHY CODE CONSTELLATION</p>
                <h2 className="section-title">What makes us <span className="gradient-text">different</span></h2>
                
                <div className="usp-grid">
                    {usps.map((usp, i) => (
                        <div key={i} className="usp-card card">
                            <h3 className="usp-card-title">{usp.title}</h3>
                            <p className="usp-card-desc">{usp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyCC;
