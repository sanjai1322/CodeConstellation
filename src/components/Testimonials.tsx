import './Testimonials.css';

const testimonials = [
    {
        quote: "Code Constellation delivered our AI MVP in 3 weeks. Sharp instincts, fast execution, premium output.",
        name: "Subhiksha",
        role: "Co-creator, NeuroVault"
    },
    {
        quote: "They turned our research notebook into a production-ready dashboard. Actually understood the science.",
        name: "PGAIS Team Lead",
        role: "Exoplanet Atmospheric Analysis Project"
    },
    {
        quote: "The cleanest agency intake process I've seen. From scope to delivery in 14 days.",
        name: "Beta Client",
        role: "Web development project, Q1 2026"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What clients say</h2>
                    <p className="eyebrow">Real feedback from teams we've shipped for.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <blockquote key={i} className="testimonial-card">
                            <p className="quote">"{t.quote}"</p>
                            <cite>
                                <strong className="name">{t.name}</strong>
                                <span className="role">{t.role}</span>
                            </cite>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
