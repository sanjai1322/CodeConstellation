import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
    useEffect(() => {
        // === SECTION REVEAL ANIMATIONS ===

        // All sections fade and slide up with a subtle 3D rotate
        gsap.utils.toArray('.section').forEach((section: any) => {
            gsap.fromTo(section,
                { opacity: 0, y: 100, rotateX: 5 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });

        // Section titles premium split-reveal style
        gsap.utils.toArray('.section-title').forEach((title: any) => {
            gsap.fromTo(title,
                { opacity: 0, y: 60, rotateX: -15, transformOrigin: 'top' },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%',
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
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: subtitle,
                        start: 'top 85%',
                    }
                }
            );
        });

        // === CARD STAGGER ANIMATIONS (More descriptive easing) ===

        // Service cards with float-in
        gsap.fromTo('.service-card',
            { opacity: 0, y: 80, rotateX: 10 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.services',
                    start: 'top 75%',
                }
            }
        );

        // Product cards with 3D tilt reveal
        gsap.fromTo('.product-card',
            { opacity: 0, y: 70, rotateY: -10, rotateX: 5 },
            {
                opacity: 1,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.products',
                    start: 'top 75%',
                }
            }
        );

        // Approach steps with cinematic glide
        gsap.fromTo('.approach-step',
            { opacity: 0, x: -40, filter: 'blur(10px)' },
            {
                opacity: 1,
                x: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top 70%',
                }
            }
        );

        // Education cards with soft scale-up
        gsap.fromTo('.education-card',
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.4)',
                scrollTrigger: {
                    trigger: '.education',
                    start: 'top 75%',
                }
            }
        );

        // === PREMIUM PARALLAX FOR BACKGROUNDS ===

        // Section background glow parallax (more fluid)
        gsap.utils.toArray('.section').forEach((section: any) => {
            const glow = section.querySelector('[class*="glow"]');
            if (glow) {
                gsap.to(glow, {
                    y: -100,
                    scale: 1.25,
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
            { opacity: 0, scale: 0.9, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.cta',
                    start: 'top 85%',
                }
            }
        );

        // === FOOTER REVEAL ===
        gsap.fromTo('footer',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: 'footer',
                    start: 'top 95%',
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
};

export default useScrollAnimations;
