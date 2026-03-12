import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = () =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0;

export const usePremiumEffects = () => {
    useEffect(() => {
        const isTouch = isTouchDevice();

        // ═══════════════════════════════════════════
        // DESKTOP-ONLY EFFECTS (mouse-driven)
        // ═══════════════════════════════════════════
        if (!isTouch) {
            // 1. MOUSE SPOTLIGHT — radial glow follows cursor on cards
            const handleMouseMove = (e: MouseEvent) => {
                const cards = document.querySelectorAll<HTMLElement>(
                    '.pillar-card, .service-card, .why-card, .course-card, .case-card, .cta-form-wrapper, .creative-card, .approach-card'
                );
                cards.forEach((card) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            };

            // 2. 3D TILT — cards subtly tilt toward cursor
            const tiltCards = document.querySelectorAll<HTMLElement>(
                '.pillar-card, .service-card, .case-card, .creative-card'
            );

            const handleTiltMove = (e: MouseEvent) => {
                const card = e.currentTarget as HTMLElement;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            };

            const handleTiltLeave = (e: MouseEvent) => {
                (e.currentTarget as HTMLElement).style.transform = '';
            };

            tiltCards.forEach((card) => {
                card.addEventListener('mousemove', handleTiltMove);
                card.addEventListener('mouseleave', handleTiltLeave);
            });

            // 3. MAGNETIC BUTTONS
            const magneticBtns = document.querySelectorAll<HTMLElement>(
                '.btn-primary, .navbar-cta'
            );

            const handleMagnetMove = (e: MouseEvent) => {
                const btn = e.currentTarget as HTMLElement;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            };

            const handleMagnetLeave = (e: MouseEvent) => {
                (e.currentTarget as HTMLElement).style.transform = '';
            };

            magneticBtns.forEach((btn) => {
                btn.addEventListener('mousemove', handleMagnetMove);
                btn.addEventListener('mouseleave', handleMagnetLeave);
            });

            // 5. PARALLAX DEPTH — hero orbs follow cursor
            const handleParallax = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                const orb = document.querySelector<HTMLElement>('.hero-orb');
                const orb2 = document.querySelector<HTMLElement>('.hero-orb-2');
                if (orb) orb.style.transform = `translateX(calc(-50% + ${x * 30}px)) translateY(${y * 20}px)`;
                if (orb2) orb2.style.transform = `translate(${x * -20}px, ${y * -15}px)`;
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousemove', handleParallax);

            // CLEANUP (desktop)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mousemove', handleParallax);
                tiltCards.forEach((card) => {
                    card.removeEventListener('mousemove', handleTiltMove);
                    card.removeEventListener('mouseleave', handleTiltLeave);
                });
                magneticBtns.forEach((btn) => {
                    btn.removeEventListener('mousemove', handleMagnetMove);
                    btn.removeEventListener('mouseleave', handleMagnetLeave);
                });
            };
        }

        // ═══════════════════════════════════════════
        // TOUCH/MOBILE — Auto-play scroll-triggered animations
        // Cards get a spotlight glow + subtle lift when they scroll into view
        // ═══════════════════════════════════════════
        if (isTouch) {
            const allCards = document.querySelectorAll<HTMLElement>(
                '.pillar-card, .service-card, .why-card, .course-card, .case-card, .cta-form-wrapper, .creative-card, .approach-card'
            );

            allCards.forEach((card) => {
                // Simulate a spotlight sweep across the card on scroll
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    onEnter: () => {
                        // Activate glow border + subtle lift
                        card.classList.add('touch-active');
                        // Animate spotlight position from left to right
                        gsap.fromTo(card,
                            { '--mouse-x': '0px', '--mouse-y': '50%' } as any,
                            {
                                '--mouse-x': `${card.offsetWidth}px`,
                                '--mouse-y': '50%',
                                duration: 1.2,
                                ease: 'power2.inOut',
                            } as any
                        );
                    },
                    onLeave: () => {
                        card.classList.remove('touch-active');
                    },
                    onEnterBack: () => {
                        card.classList.add('touch-active');
                    },
                    onLeaveBack: () => {
                        card.classList.remove('touch-active');
                    },
                });
            });

            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        }
    }, []);

    // ═══════════════════════════════════════════
    // 4. ANIMATED COUNTERS — always active (both desktop + touch)
    // ═══════════════════════════════════════════
    useEffect(() => {
        const countUpObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const text = el.textContent || '';
                        const match = text.match(/^(\d+)/);
                        if (match) {
                            const target = parseInt(match[1]);
                            const suffix = text.replace(match[1], '');
                            let current = 0;
                            const step = Math.max(1, Math.ceil(target / 40));
                            const interval = setInterval(() => {
                                current += step;
                                if (current >= target) {
                                    current = target;
                                    clearInterval(interval);
                                }
                                el.textContent = `${current}${suffix}`;
                            }, 30);
                        }
                        countUpObserver.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.stat-number, .case-stat-value').forEach((el) => {
            countUpObserver.observe(el);
        });

        return () => countUpObserver.disconnect();
    }, []);
};

export default usePremiumEffects;
