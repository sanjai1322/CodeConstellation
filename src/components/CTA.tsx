import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './CTA.css';

const CTA = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-text', {
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cta-layout',
                    start: 'top 80%',
                }
            });

            gsap.from('.cta-form-wrapper', {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cta-layout',
                    start: 'top 80%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // ... (existing submit logic)
        e.preventDefault();

        if (!formRef.current) return;

        setStatus('submitting');
        const form = formRef.current;
        const data = new FormData(form);

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="cta section">
            <div className="container">
                <div className="cta-layout">
                    <div className="cta-text">
                        <div className="section-label">Contact</div>
                        <h2 className="section-title">
                            Start a <span className="gradient-text">project</span>
                        </h2>
                        <p className="cta-description">
                            From prototype to high-performance production systems.
                            Tell us about your project and we'll get back within 24 hours.
                        </p>
                    </div>

                    <div className="cta-form-wrapper">
                        <form
                            ref={formRef}
                            className="cta-form"
                            action="https://formspree.io/f/xjkdbnbo"
                            method="POST"
                            onSubmit={handleSubmit}
                        >

                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    placeholder="you@company.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-input form-textarea"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-primary cta-submit"
                                disabled={status === 'submitting'}
                                style={status === 'success' ? { background: 'linear-gradient(135deg, #059669, #10b981)' } : undefined}
                            >
                                {status === 'idle' && 'Send Message'}
                                {status === 'submitting' && 'Sending...'}
                                {status === 'success' && "✓ Sent! We'll respond within 48 hours."}
                                {status === 'error' && 'Something went wrong. Try again.'}

                                {status === 'idle' && (
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
