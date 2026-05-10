import { useState, useRef, useCallback, useEffect } from 'react';
import './CaseStudy.css';

interface Project {
    id: string;
    label: string;
    title: string;
    accent: string;
    description: string;
    tags: string[];
    stats: { label: string; value: string; pct: number }[];
    impact: string;
    vizType: 'orbits' | 'waveform' | 'grid' | 'leaf' | 'solar';
}

const projects: Project[] = [
    {
        id: 'agrisense',
        label: 'AI Automation',
        title: 'AgriSense-AI',
        accent: 'Precision Agriculture System',
        description:
            'Predictive modeling for crop health using satellite imagery and real-time soil data.',
        tags: [],
        stats: [
            { label: 'Built In', value: '3 Weeks', pct: 100 },
        ],
        impact: '',
        vizType: 'orbits',
    },
    {
        id: 'exoplanet',
        label: 'Research Tools',
        title: 'ExoAtmos-ML',
        accent: 'Scientific Data Dashboard',
        description:
            'Production-ready dashboard for identifying atmospheric molecules in exoplanet spectra.',
        tags: [],
        stats: [
            { label: 'Deployment', value: '14 Days', pct: 100 },
        ],
        impact: '',
        vizType: 'waveform',
    },
    {
        id: 'novascan',
        label: 'Internal Product',
        title: 'NovaScan-AI',
        accent: 'Automated Audit Platform',
        description:
            'AI-powered website audit tool providing structural and content feedback in seconds.',
        tags: [],
        stats: [
            { label: 'Audit Time', value: '45s', pct: 95 },
        ],
        impact: '',
        vizType: 'solar',
    },
];

/* ── Visualization Components ── */
const OrbitsViz = () => (
    <div className="case-viz orbits-viz">
        <div className="viz-center-dot" />
        {[100, 150, 200].map((r, i) => (
            <div key={i} className="viz-ring" style={{ width: r, height: r }} />
        ))}
    </div>
);

const WaveformViz = () => (
    <div className="case-viz waveform-viz">
        <svg viewBox="0 0 200 80" className="waveform-svg">
            <path
                d="M0,40 Q10,10 20,40 T40,40 T60,40 Q70,15 80,40 T100,40 T120,40 Q130,20 140,40 T160,40 T180,40 Q190,25 200,40"
                fill="none"
                stroke="rgba(96,165,250,0.5)"
                strokeWidth="1.5"
            />
            <path
                d="M0,40 Q10,55 20,40 T40,40 T60,40 Q70,60 80,40 T100,40 T120,40 Q130,50 140,40 T160,40 T180,40 Q190,55 200,40"
                fill="none"
                stroke="rgba(37,99,235,0.3)"
                strokeWidth="1"
            />
            {[30, 70, 100, 140, 170].map((x, i) => (
                <line
                    key={i}
                    x1={x}
                    y1={15 + i * 3}
                    x2={x}
                    y2={65 - i * 3}
                    stroke="rgba(96,165,250,0.15)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                />
            ))}
        </svg>
    </div>
);

const SolarViz = () => (
    <div className="case-viz solar-viz">
        <div className="solar-core" />
        <div className="solar-flare solar-flare-1" />
        <div className="solar-flare solar-flare-2" />
        <div className="solar-flare solar-flare-3" />
    </div>
);

const GridViz = () => (
    <div className="case-viz grid-viz">
        {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`grid-cell ${i % 3 === 0 ? 'grid-cell-lit' : ''}`} />
        ))}
    </div>
);

const LeafViz = () => (
    <div className="case-viz leaf-viz">
        <svg viewBox="0 0 100 120" className="leaf-svg">
            <path
                d="M50,10 Q75,30 70,60 Q65,90 50,110 Q35,90 30,60 Q25,30 50,10Z"
                fill="none"
                stroke="rgba(96,165,250,0.4)"
                strokeWidth="1.5"
            />
            <path
                d="M50,10 L50,110"
                stroke="rgba(96,165,250,0.25)"
                strokeWidth="1"
            />
            <path d="M50,35 L35,50" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <path d="M50,35 L65,50" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <path d="M50,55 L32,68" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <path d="M50,55 L68,68" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <path d="M50,75 L36,85" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <path d="M50,75 L64,85" stroke="rgba(96,165,250,0.2)" strokeWidth="0.8" />
            <circle cx="42" cy="55" r="5" fill="rgba(59,130,246,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.8" />
            <circle cx="58" cy="70" r="4" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.25)" strokeWidth="0.8" />
        </svg>
    </div>
);

const vizMap: Record<string, () => React.JSX.Element> = {
    orbits: OrbitsViz,
    waveform: WaveformViz,
    solar: SolarViz,
    grid: GridViz,
    leaf: LeafViz,
};

const CaseStudy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const project = projects[activeIndex];
    const Viz = vizMap[project.vizType];

    // ── Swipe handling with real-time tracking ──
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchCurrentX = useRef(0);
    const isSwiping = useRef(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (isAnimating) return;
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchCurrentX.current = e.touches[0].clientX;
        isSwiping.current = false;
    }, [isAnimating]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (isAnimating) return;
        const deltaX = e.touches[0].clientX - touchStartX.current;
        const deltaY = e.touches[0].clientY - touchStartY.current;
        touchCurrentX.current = e.touches[0].clientX;

        // Lock into horizontal swipe once threshold met
        if (!isSwiping.current && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
            isSwiping.current = true;
        }

        if (isSwiping.current && cardRef.current) {
            // Elastic resistance: card follows finger at 60% speed, with friction at edges
            const isAtEdge = (deltaX > 0 && activeIndex === 0) || (deltaX < 0 && activeIndex === projects.length - 1);
            const resistance = isAtEdge ? 0.15 : 0.6;
            const translateX = deltaX * resistance;
            const rotate = (deltaX * resistance) / 40; // subtle tilt
            const opacity = 1 - Math.min(Math.abs(deltaX) / 600, 0.3);
            const scale = 1 - Math.min(Math.abs(deltaX) / 2000, 0.03);

            cardRef.current.style.transition = 'none';
            cardRef.current.style.transform = `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`;
            cardRef.current.style.opacity = `${opacity}`;
        }
    }, [isAnimating, activeIndex]);

    const changeProject = useCallback((newIndex: number, direction: 'left' | 'right') => {
        if (isAnimating || newIndex === activeIndex) return;
        setIsAnimating(true);
        setSwipeDirection(direction);

        // Phase 1: slide current card OUT softly
        if (cardRef.current) {
            const exitX = direction === 'left' ? -20 : 20; // Subtle shift, not 120%
            cardRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
            cardRef.current.style.transform = `translateX(${exitX}px) scale(0.98)`;
            cardRef.current.style.opacity = '0';
        }

        // Phase 2: switch content and animate IN from opposite side
        setTimeout(() => {
            setActiveIndex(newIndex);
            // Reset will happen via the useEffect below
            setTimeout(() => {
                setIsAnimating(false);
                setSwipeDirection(null);
            }, 600); // Give ample time for the entrance transition to finish before unlocking
        }, 300);
    }, [isAnimating, activeIndex]);

    const handleTouchEnd = useCallback((e: React.TouchEvent) => {
        if (isAnimating) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;

        if (isSwiping.current && Math.abs(deltaX) > 50) {
            if (deltaX < 0 && activeIndex < projects.length - 1) {
                changeProject(activeIndex + 1, 'left');
                return;
            } else if (deltaX > 0 && activeIndex > 0) {
                changeProject(activeIndex - 1, 'right');
                return;
            }
        }

        // Snap-back with spring physics
        if (cardRef.current) {
            cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
            cardRef.current.style.transform = '';
            cardRef.current.style.opacity = '';
        }
        isSwiping.current = false;
    }, [isAnimating, activeIndex, changeProject]);

    // Handle tab clicks with direction awareness
    const handleTabClick = useCallback((newIndex: number) => {
        if (newIndex === activeIndex || isAnimating) return;
        const direction = newIndex > activeIndex ? 'left' : 'right';
        changeProject(newIndex, direction);
    }, [activeIndex, isAnimating, changeProject]);

    // Animate new card IN softly when activeIndex changes
    useEffect(() => {
        if (cardRef.current && swipeDirection) {
            const enterFrom = swipeDirection === 'left' ? 20 : -20; // Subtle entrance shift
            cardRef.current.style.transition = 'none';
            cardRef.current.style.transform = `translateX(${enterFrom}px) scale(0.98)`;
            cardRef.current.style.opacity = '0';

            // Force reflow, then animate to final position
            void cardRef.current.offsetHeight;
            cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease';
            cardRef.current.style.transform = 'translateX(0) scale(1)';
            cardRef.current.style.opacity = '1';
        }
    }, [activeIndex, swipeDirection]);

    return (
        <section id="work" className="case-study section">
            <div className="container">
                <div className="case-header">
                    <div className="section-label">Our Work</div>
                    <h2 className="section-title">
                        Selected <span className="gradient-text">work</span>
                    </h2>
                    <p className="section-subtitle">
                        AI-powered systems solving real scientific and engineering challenges.
                    </p>
                </div>

                {/* ── Tab Selectors ── */}
                <div className="case-tabs">
                    {projects.map((p, i) => (
                        <a
                            key={p.id}
                            href="#"
                            className={`case-tab ${i === activeIndex ? 'case-tab-active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleTabClick(i); }}
                        >
                            <span className="tab-label">{p.label}</span>
                            <span className="tab-title">{p.title}</span>
                        </a>
                    ))}
                </div>

                {/* ── Active Case Card (swipeable) ── */}
                <div
                    ref={cardRef}
                    className="case-card"
                    key={project.id}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="case-body">
                        <div className="case-info">
                            <h3 className="case-title">
                                {project.title.split('-')[0]}-
                                <span className="gradient-text">{project.title.split('-')[1]}</span>
                            </h3>
                            <p className="case-accent">{project.accent}</p>
                            <p className="case-desc">{project.description}</p>

                            <div className="case-stats">
                                {project.stats.map((s) => (
                                    <div key={s.label} className="case-stat-row">
                                        <div className="case-stat-header">
                                            <span className="case-stat-label">{s.label}</span>
                                            <span className="case-stat-value">{s.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a href="#contact" className="case-link" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                View case study →
                            </a>
                            </div>

                        <div className="case-visual">
                            <Viz />
                        </div>
                    </div>
                </div>

                {/* ── Swipe Indicator (mobile) ── */}
                <div className="swipe-indicator">
                    <div className="swipe-dots">
                        {projects.map((_, i) => (
                            <span
                                key={i}
                                className={`swipe-dot ${i === activeIndex ? 'swipe-dot-active' : ''}`}
                                onClick={() => setActiveIndex(i)}
                                role="button"
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                    <span className="swipe-hint">Swipe to explore</span>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;

