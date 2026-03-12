import './Ticker.css';

const capabilities = [
    'AI Agents', 'Mobile Apps', 'Web Systems', 'Automation',
    'UI/UX Design', 'LLM Integration', 'Flutter', 'React',
    'Next.js', 'Python', 'Cloud Deploy', 'API Design',
    'Data Pipelines', 'Computer Vision', 'Full-Stack',
];

const Ticker = () => {
    // Double the array for seamless infinite scroll
    const items = [...capabilities, ...capabilities];

    return (
        <section className="ticker">
            <div className="ticker-track">
                {items.map((item, i) => (
                    <span key={i} className="ticker-item">
                        {item}
                        <span className="ticker-dot">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Ticker;
