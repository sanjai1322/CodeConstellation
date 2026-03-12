import { useState } from 'react';
import './CaseStudy.css';

interface Project {
    id: string;
    label: string;
    title: string;
    accent: string;
    description: string;
    tags: string[];
    stats: { label: string; value: string; pct: number }[];
    vizType: 'orbits' | 'waveform' | 'grid' | 'leaf' | 'solar';
}

const projects: Project[] = [
    {
        id: 'agrisense',
        label: 'AI + Agriculture',
        title: 'AgriSense-PINN',
        accent: 'Physics-Informed Neural Network',
        description:
            'Physics-Informed Neural Network for precision agriculture — predicting crop health using satellite imagery and soil sensor data.',
        tags: ['PyTorch', 'PINN', 'Satellite Data', 'Precision Ag'],
        stats: [
            { label: 'Prediction Accuracy', value: '94%', pct: 94 },
            { label: 'Data Sources', value: '12+', pct: 80 },
            { label: 'Processing Speed', value: '3.2s', pct: 70 },
        ],
        vizType: 'orbits',
    },
    {
        id: 'exoplanet',
        label: 'AI + Astrophysics',
        title: 'ExoAtmos-AI',
        accent: 'Atmospheric Gas Detection',
        description:
            'Machine learning system for identifying atmospheric molecules like H₂O, CH₄, and CO₂ in exoplanet transit spectra — combining deep learning with physics-based spectral analysis.',
        tags: ['TensorFlow', 'Spectroscopy', 'CNN', 'NumPy', 'SciPy'],
        stats: [
            { label: 'Gas Detection', value: '87%', pct: 87 },
            { label: 'Molecules Tracked', value: '6+', pct: 60 },
            { label: 'Noise Reduction', value: '72%', pct: 72 },
        ],
        vizType: 'waveform',
    },
    {
        id: 'spaceweather',
        label: 'AI + Space Weather',
        title: 'SolarGuard-ML',
        accent: 'Geomagnetic Storm Prediction',
        description:
            'AI-powered platform monitoring solar activity and predicting geomagnetic disturbances using LSTM networks on historical Kp/Dst index data — protecting satellites and power grids.',
        tags: ['PyTorch', 'LSTM', 'Time-Series', 'Plotly', 'Pandas'],
        stats: [
            { label: 'Storm Prediction', value: '91%', pct: 91 },
            { label: 'Lead Time', value: '48h', pct: 85 },
            { label: 'Data Points', value: '1.2M', pct: 78 },
        ],
        vizType: 'solar',
    },
    {
        id: 'lunarenhance',
        label: 'AI + Lunar Science',
        title: 'LunarVision-DL',
        accent: 'Satellite Image Enhancement',
        description:
            'Deep learning system enhancing low-light satellite images from lunar permanently shadowed regions — revealing crater boundaries and potential water ice deposits.',
        tags: ['OpenCV', 'U-Net', 'Image Processing', 'NumPy'],
        stats: [
            { label: 'Detail Recovery', value: '89%', pct: 89 },
            { label: 'Noise Suppression', value: '76%', pct: 76 },
            { label: 'Feature Clarity', value: '4.2×', pct: 84 },
        ],
        vizType: 'grid',
    },
    {
        id: 'leafcare',
        label: 'AI + Agriculture',
        title: 'LeafCare-CNN',
        accent: 'Plant Disease Detection',
        description:
            'Convolutional neural network identifying plant leaf diseases from images — detecting bacterial spots, blight, and fungal infections for early crop protection.',
        tags: ['TensorFlow', 'Keras', 'CNN', 'OpenCV'],
        stats: [
            { label: 'Classification', value: '96%', pct: 96 },
            { label: 'Disease Classes', value: '12', pct: 65 },
            { label: 'Inference Time', value: '0.8s', pct: 90 },
        ],
        vizType: 'leaf',
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

const vizMap: Record<string, () => JSX.Element> = {
    orbits: OrbitsViz,
    waveform: WaveformViz,
    solar: SolarViz,
    grid: GridViz,
    leaf: LeafViz,
};

const CaseStudy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const project = projects[activeIndex];
    const Viz = vizMap[project.vizType];

    return (
        <section id="work" className="case-study section">
            <div className="container">
                <div className="case-header">
                    <div className="section-label">Our Work</div>
                    <h2 className="section-title">
                        Case <span className="gradient-text">Studies</span>
                    </h2>
                    <p className="section-subtitle">
                        AI-powered systems solving real scientific and engineering challenges.
                    </p>
                </div>

                {/* ── Tab Selectors ── */}
                <div className="case-tabs">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            className={`case-tab ${i === activeIndex ? 'case-tab-active' : ''}`}
                            onClick={() => setActiveIndex(i)}
                        >
                            <span className="tab-label">{p.label}</span>
                            <span className="tab-title">{p.title}</span>
                        </button>
                    ))}
                </div>

                {/* ── Active Case Card ── */}
                <div className="case-card" key={project.id}>
                    <div className="case-body">
                        <div className="case-info">
                            <h3 className="case-title">
                                {project.title.split('-')[0]}-
                                <span className="gradient-text">{project.title.split('-')[1]}</span>
                            </h3>
                            <p className="case-accent">{project.accent}</p>
                            <p className="case-desc">{project.description}</p>

                            <div className="case-tags">
                                {project.tags.map((t) => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>

                            <div className="case-stats">
                                {project.stats.map((s) => (
                                    <div key={s.label} className="case-stat-row">
                                        <div className="case-stat-header">
                                            <span className="case-stat-label">{s.label}</span>
                                            <span className="case-stat-value">{s.value}</span>
                                        </div>
                                        <div className="case-bar">
                                            <div
                                                className="case-bar-fill"
                                                style={{ width: `${s.pct}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="case-visual">
                            <Viz />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
