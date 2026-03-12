import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
    useEffect(() => {
        // ═══════════════════════════════════════════
        // SMOOTH DEFAULTS
        // ═══════════════════════════════════════════
        gsap.defaults({ ease: 'power3.out' });

        // ═══════════════════════════════════════════
        // SECTION REVEALS — smooth opacity + rise
        // ═══════════════════════════════════════════
        gsap.utils.toArray('.section').forEach((section: any) => {
            gsap.fromTo(section,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 88%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });

        // Section titles — cinematic slide up
        gsap.utils.toArray('.section-title').forEach((title: any) => {
            gsap.fromTo(title,
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 90%',
                    }
                }
            );
        });

        // Section subtitles
        gsap.utils.toArray('.section-subtitle').forEach((subtitle: any) => {
            gsap.fromTo(subtitle,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: subtitle,
                        start: 'top 90%',
                    }
                }
            );
        });

        // ═══════════════════════════════════════════
        // CARD STAGGER ANIMATIONS
        // ═══════════════════════════════════════════

        // Pillar cards — stagger up
        gsap.fromTo('.pillar-card',
            { opacity: 0, y: 50, scale: 0.97 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.pillars',
                    start: 'top 82%',
                }
            }
        );

        // Service cards — stagger cascade
        gsap.fromTo('.service-card',
            { opacity: 0, y: 45, scale: 0.96 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: 'back.out(1.05)',
                scrollTrigger: {
                    trigger: '.services',
                    start: 'top 82%',
                }
            }
        );

        // Creative Studio cards — stagger with scale
        gsap.fromTo('.creative-card',
            { opacity: 0, y: 50, scale: 0.94 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.creative',
                    start: 'top 82%',
                }
            }
        );

        // Case study card — dramatic reveal
        gsap.fromTo('.case-card',
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: '.case-study',
                    start: 'top 82%',
                }
            }
        );

        // Case study tabs — stagger in
        gsap.fromTo('.case-tab',
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.case-tabs',
                    start: 'top 90%',
                }
            }
        );

        // Orbit rings — elastic pop
        gsap.fromTo('.viz-ring',
            { opacity: 0, scale: 0.5 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.15,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: '.case-viz',
                    start: 'top 85%',
                }
            }
        );

        // Stat bars — animate width
        gsap.utils.toArray('.case-bar-fill').forEach((bar: any) => {
            const target = bar.style.width;
            bar.style.width = '0%';
            gsap.to(bar, {
                width: target,
                duration: 1.4,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 92%',
                }
            });
        });

        // Why Us cards — wave stagger
        gsap.fromTo('.why-card',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: { each: 0.08, from: 'start' },
                scrollTrigger: {
                    trigger: '.why-us',
                    start: 'top 82%',
                }
            }
        );

        // Course cards — slide from right
        gsap.fromTo('.course-card',
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: '.education',
                    start: 'top 82%',
                }
            }
        );

        // Approach cards — stagger up
        gsap.fromTo('.approach-card',
            { opacity: 0, y: 45, scale: 0.96 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: 'back.out(1.08)',
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top 82%',
                }
            }
        );

        // Card node dots — pulse in
        gsap.fromTo('.card-node-dot',
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: 0.12,
                ease: 'back.out(2.5)',
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top 82%',
                }
            }
        );

        // CTA form — rise
        gsap.fromTo('.cta-form-wrapper',
            { opacity: 0, y: 40, scale: 0.97 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                scrollTrigger: {
                    trigger: '.cta',
                    start: 'top 82%',
                }
            }
        );

        // Footer — gentle rise
        gsap.fromTo('.footer',
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 95%',
                }
            }
        );

        // ═══════════════════════════════════════════
        // PARALLAX — scrub-based depth effects
        // ═══════════════════════════════════════════

        // Ticker parallax
        gsap.to('.ticker-track', {
            x: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.ticker',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        });

        // Hero content parallax
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            gsap.to(heroContent, {
                y: 80,
                opacity: 0.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
        }

        // Section labels — subtle float
        gsap.utils.toArray('.section-label').forEach((label: any) => {
            gsap.fromTo(label,
                { opacity: 0, y: 15, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: label,
                        start: 'top 92%',
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};

export default useScrollAnimations;
