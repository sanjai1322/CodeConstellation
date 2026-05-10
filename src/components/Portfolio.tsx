import { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

/* ── Project Data ── */
interface Project {
  name: string;
  emoji: string;
  gradient: string;
  tags: { label: string; style: string }[];
  desc: string;
  stack: string[];
  cat: string[];
  link?: string;
  featured?: boolean;
}

/* ── Flattened Array for Masonry (Order determines visual flow) ── */
const allProjects: Project[] = [
  {
    name: 'Proxima',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #0a0a2e, #1a1a4e)',
    tags: [
      { label: 'SaaS', style: 'web' },
      { label: 'Landing Page', style: 'web' },
    ],
    desc: 'Premium SaaS landing page with animated hero, scroll-reveal sections, and glassmorphism components.',
    stack: ['React', 'Framer Motion', 'Three.js'],
    cat: ['web'],
    link: 'https://proxima-saas-cc.vercel.app/',
  },
  {
    name: 'EarthPulse',
    emoji: '🌍',
    gradient: 'linear-gradient(135deg, #0a1a2e, #1a2e48)',
    tags: [
      { label: '3D Globe', style: 'data' },
      { label: 'Data Viz', style: 'data' },
    ],
    desc: 'Interactive 3D Earth globe built with Three.js + GLSL shaders. Real country data, glowing pins, atmosphere shader.',
    stack: ['Three.js', 'GLSL', 'React'],
    cat: ['data'],
    featured: true,
    link: 'https://3d-earth-livid.vercel.app/',
  },
  {
    name: 'Luxe Estate',
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #0f1f2e, #1a3348)',
    tags: [{ label: 'Real Estate', style: 'real' }],
    desc: 'Premium luxury real estate platform with high-end listings, editorial layouts, and immersive property tours.',
    stack: ['Next.js', 'Maps API'],
    cat: ['real'],
    link: 'https://luxeestatecc.vercel.app/',
  },
  {
    name: 'AI Film',
    emoji: '🎬',
    gradient: 'linear-gradient(135deg, #1a0a2e, #2e1a4e)',
    tags: [
      { label: 'AI Film', style: 'creative' },
      { label: 'Veo Generation', style: 'creative' },
    ],
    desc: 'Cinematic AI brand film generated with Veo 3.1, Whisk visuals, and Suno soundtrack.',
    stack: ['Veo 3.1', 'Whisk', 'Suno'],
    cat: ['creative'],
    link: '/ai-film',
  },
  {
    name: 'Porsche Experience',
    emoji: '🏎️',
    gradient: 'linear-gradient(135deg, #2e0a0a, #4e1a1a)',
    tags: [
      { label: 'Animated', style: 'web' },
      { label: 'Product Site', style: 'web' },
    ],
    desc: 'Cinematic animated car website with scroll-driven 3D transitions and immersive UI.',
    stack: ['GSAP', 'Three.js'],
    cat: ['web'],
    featured: true,
    link: 'https://redline-syndicate-homepage.vercel.app/',
  },
  {
    name: 'Smart Scheduler',
    emoji: '📅',
    gradient: 'linear-gradient(135deg, #1a0a2e, #2e1a4e)',
    tags: [{ label: 'Web App', style: 'web' }],
    desc: 'AI-assisted scheduling web app with smart conflict detection and automated reminders.',
    stack: ['Next.js', 'Python'],
    cat: ['web'],
    link: 'https://smart-scheduler-sable.vercel.app/',
  },
  {
    name: 'FinFlow',
    emoji: '💳',
    gradient: 'linear-gradient(135deg, #0a1a2e, #1a2e4e)',
    tags: [{ label: 'Flutter', style: 'mobile' }],
    desc: 'Dark fintech mobile UI with glassmorphism cards, transaction views, and budgeting dashboards.',
    stack: ['Flutter', 'Figma'],
    cat: ['mobile'],
  },
  {
    name: 'MediTrack',
    emoji: '🏥',
    gradient: 'linear-gradient(135deg, #0a1e2e, #1a304e)',
    tags: [
      { label: 'Flutter', style: 'mobile' },
      { label: 'Healthcare', style: 'mobile' },
    ],
    desc: 'Premium healthcare UI — appointment booking, health metrics dashboard, doctor profiles.',
    stack: ['Flutter', 'Figma'],
    cat: ['mobile'],
    featured: true,
  },
  {
    name: 'Prestige',
    emoji: '🏛️',
    gradient: 'linear-gradient(135deg, #2e1a0a, #4e2e1a)',
    tags: [
      { label: 'Luxury', style: 'real' },
      { label: 'Real Estate', style: 'real' },
    ],
    desc: 'Luxury real estate brand site with editorial photography layout and premium typography.',
    stack: ['React', 'GSAP'],
    cat: ['real'],
    link: 'https://prestigeestatescc.vercel.app/',
  },
  {
    name: 'AskDoc',
    emoji: '📄',
    gradient: 'linear-gradient(135deg, #0a2e2e, #1a4e4e)',
    tags: [{ label: 'AI App', style: 'aiapps' }],
    desc: 'PDF chat assistant powered by Gemini AI — upload documents and ask natural-language questions.',
    stack: ['Gemini', 'Next.js'],
    cat: ['aiapps'],
  },
  {
    name: 'DevPulse',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #0a2e1a, #1a4e2e)',
    tags: [{ label: 'Dashboard', style: 'data' }],
    desc: 'GitHub API + D3.js analytics dashboard with commit heatmaps, language breakdowns, and repo insights.',
    stack: ['React', 'D3.js'],
    cat: ['data'],
  },
];

/* ── Filter Definitions ── */
const filters = [
  { label: 'All', count: 11, key: 'all' },
  { label: 'Web & SaaS', count: 5, key: 'web' },
  { label: 'AI Apps', count: 1, key: 'aiapps' },
  { label: 'Mobile UI', count: 2, key: 'mobile' },
  { label: 'Data & Dev', count: 2, key: 'data' },
  { label: 'Creative AI', count: 1, key: 'creative' },
  { label: 'Real Estate', count: 2, key: 'real' },
];

/* ── Arrow SVG ── */
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Mouse tracking hook for card spotlight ── */
const useMouseSpotlight = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cards = gridRef.current?.querySelectorAll('.pf-masonry-card');
    if (!cards) return;
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  }, []);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    node.addEventListener('mousemove', handleMouseMove);
    return () => node.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return gridRef;
};

/* ── Masonry Card Component ── */
const MasonryCard = ({ project, active }: { project: Project; active: string }) => {
  const dimmed = active !== 'all' && !project.cat.includes(active);
  const isInternal = project.link?.startsWith('/');
  
  const CardWrapper = project.link 
    ? (isInternal ? Link : 'a') 
    : 'div';

  const wrapperProps = project.link 
    ? { 
        ...(isInternal ? { to: project.link } : { href: project.link, target: "_blank", rel: "noopener noreferrer" }),
        className: `pf-masonry-card pf-link-card${project.featured ? ' featured' : ''}${dimmed ? ' dimmed' : ''}`
      }
    : { 
        className: `pf-masonry-card${project.featured ? ' featured' : ''}${dimmed ? ' dimmed' : ''}`
      };

  return (
    // @ts-ignore
    <CardWrapper {...wrapperProps}>
      {/* Background Bleed Effect on Hover */}
      <div className="pf-card-bleed" style={{ background: project.gradient }} />

      {/* Giant Emoji Watermark */}
      <div className="pf-card-watermark">{project.emoji}</div>

      <div className="pf-card-content">
        <div className="pf-card-tags">
          {project.tags.map((t) => (
            <span key={t.label} className={`pf-tag pf-tag-${t.style}`}>{t.label}</span>
          ))}
        </div>

        <div className="pf-card-bottom">
          <div className="pf-card-name">{project.name}</div>
          <div className="pf-card-desc">{project.desc}</div>
          <div className="pf-card-stack">
            {project.stack.map((s) => (
              <span key={s} className="pf-stack-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="pf-card-arrow"><ArrowIcon /></div>
    </CardWrapper>
  );
};

/* ============================================================
   PORTFOLIO COMPONENT
   ============================================================ */
const Portfolio = () => {
  const [active, setActive] = useState('all');
  const gridRef = useMouseSpotlight();

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <div className="portfolio-label">OUR WORK</div>
        <h2 className="portfolio-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
          Whatever You're Building, <br />
          <span className="gradient-violet">We've Built It.</span>
        </h2>
        <p className="portfolio-subtitle">
          From cinematic AI films to premium real estate platforms — every project is deployed, documented, and built to impress.
        </p>
      </div>

      <div className="portfolio-filters">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`portfolio-filter-btn${active === f.key ? ' active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
            <span className="filter-count">{f.count}</span>
          </button>
        ))}
      </div>

      <div className="portfolio-masonry" ref={gridRef}>
        {allProjects.map((project) => (
          <MasonryCard key={project.name} project={project} active={active} />
        ))}
      </div>

      <div className="portfolio-stats">
        <div className="portfolio-stat">
          <div className="portfolio-stat-number">11</div>
          <div className="portfolio-stat-label">Projects Shipped</div>
        </div>
        <div className="portfolio-stat">
          <div className="portfolio-stat-number">5</div>
          <div className="portfolio-stat-label">Domains</div>
        </div>
        <div className="portfolio-stat">
          <div className="portfolio-stat-number">100%</div>
          <div className="portfolio-stat-label">Deployed Live</div>
        </div>
        <div className="portfolio-stat">
          <div className="portfolio-stat-number">2</div>
          <div className="portfolio-stat-label">Builders</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
