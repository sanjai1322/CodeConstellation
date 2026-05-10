import './Strategy.css';

const features = [];

const steps = [
    { num: '01', title: 'Discovery', desc: 'We map requirements and perform a technical audit.' },
    { num: '02', title: 'Design', desc: 'We create system architecture and UI prototypes.' },
    { num: '03', title: 'Build', desc: 'We develop the full-stack system with AI integration.' },
    { num: '04', title: 'Ship', desc: 'We deploy via CI/CD and begin rapid iteration.' },
];

const Strategy = () => {
    return (
        <section id="process" className="strategy section">
            <div className="container">
                <div className="strategy-layout">
                    <div className="strategy-left">
                        <div className="section-label">Process</div>
                        <h2 className="section-title">
                            How we <span className="gradient-text">work</span>
                        </h2>
                        <p className="section-subtitle">
                            We combine deep technical expertise with a product-first mindset to build 
                            high-impact digital systems.
                        </p>
                        
                    </div>
                    
                    <div className="strategy-right">
                        <div className="process-timeline">
                            {steps.map((step, i) => (
                                <div key={i} className="process-step">
                                    <div className="process-num">{step.num}</div>
                                    <div className="process-info">
                                        <h4 className="process-title">{step.title}</h4>
                                        <p className="process-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
