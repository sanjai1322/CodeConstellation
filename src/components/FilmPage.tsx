import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import './FilmPage.css';

const FilmPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const ctx = gsap.context(() => {
            gsap.from('.film-header', {
                opacity: 0,
                y: -50,
                duration: 1.2,
                ease: 'power4.out'
            });
            gsap.from('.video-container', {
                opacity: 0,
                scale: 0.95,
                stagger: 0.3,
                duration: 1.5,
                ease: 'expo.out',
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const videos = [
        {
            id: 'URV90cScGZM',
            title: 'Indoor Realism Plants: Integrated AI Video by Code Constellation',
            desc: 'Cutting-edge cinematic visuals generated using the latest Google Veo 3.1 model.'
        },
        {
            id: 'DruXAFNv_X4',
            title: 'Stranger Things Vibe : Advanced AI Environment by Code Constellation',
            desc: 'Expansive cosmic environments created using advanced AI text-to-video diffusion.'
        }
    ];

    return (
        <div className="film-page" ref={containerRef}>
            <div className="starfield-overlay" />
            
            <button className="back-btn" onClick={() => navigate(-1)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Studio
            </button>

            <header className="film-header">
                <span className="film-label">AI FILM COLLECTION</span>
                <h1 className="film-title">Cinematic <span className="gradient-text">Mastery</span></h1>
                <p className="film-subtitle">
                    A showcase of elite AI-generated cinematography using Veo 3.1 and Cosmos.
                </p>
            </header>

            <div className="videos-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-card">
                        <div className="video-container">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-desc">{video.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="film-footer">
                <p>© 2026 Code Constellation. Precision Engineered AI Visuals.</p>
            </footer>
        </div>
    );
};

export default FilmPage;
