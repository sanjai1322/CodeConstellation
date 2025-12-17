import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
    useEffect(() => {
        // === SECTION REVEAL ANIMATIONS ===

        // All sections fade and slide up on scroll
        gsap.utils.toArray('.section').forEach((section: any) => {
            gsap.fromTo(section,
                { opacity: 0.3, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });

        // Section titles premium reveal
        gsap.utils.toArray('.section-title').forEach((title: any) => {
            gsap.fromTo(title,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                    }
                }
            );
        });

        // Section subtitles staggered reveal
        gsap.utils.toArray('.section-subtitle').forEach((subtitle: any) => {
            gsap.fromTo(subtitle,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: subtitle,
                        start: 'top 80%',
                    }
                }
            );
        });

        // === CARD STAGGER ANIMATIONS ===

        // Service cards
        gsap.fromTo('.service-card',
            { opacity: 0, y: 60, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(1.3)',
                scrollTrigger: {
                    trigger: '.services',
                    start: 'top 70%',
                }
            }
        );

        // Product cards
        gsap.fromTo('.product-card',
            { opacity: 0, y: 50, rotateY: -15 },
            {
                opacity: 1,
                y: 0,
                rotateY: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.products',
                    start: 'top 70%',
                }
            }
        );

        // Approach steps
        gsap.fromTo('.approach-step',
            { opacity: 0, x: -60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top 70%',
                }
            }
        );

        // Education cards
        gsap.fromTo('.education-card',
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.education',
                    start: 'top 70%',
                }
            }
        );

        // === PREMIUM PARALLAX FOR BACKGROUNDS ===

        // Section background glows
        gsap.utils.toArray('.section').forEach((section: any) => {
            const glow = section.querySelector('[class*="glow"]');
            if (glow) {
                gsap.to(glow, {
                    y: -50,
                    scale: 1.1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2,
                    }
                });
            }
        });

        // === CTA SECTION SPECIAL ANIMATION ===
        gsap.fromTo('.cta',
            { opacity: 0.5, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.cta',
                    start: 'top 80%',
                }
            }
        );

        // === FOOTER REVEAL ===
        gsap.fromTo('footer',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: 'footer',
                    start: 'top 90%',
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};

export default useScrollAnimations;
