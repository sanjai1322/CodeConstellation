import { useEffect } from 'react';

export const usePremiumEffects = () => {
    useEffect(() => {
        // Spotlight Hover Logic
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach((card: any) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Subtle Custom Cursor or Glow interaction could go here

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
};

export default usePremiumEffects;
