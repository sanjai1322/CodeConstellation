import './Education.css';

const courses = [
    {
        icon: '📱',
        title: 'App Development',
        description: 'Build production-ready mobile apps with Flutter and React Native.',
    },
    {
        icon: '🤖',
        title: 'AI Systems',
        description: 'Learn to build intelligent agents, LLM integrations, and ML pipelines.',
    },
    {
        icon: '⚡',
        title: 'Automation',
        description: 'Master automated workflows, API integrations, and data pipelines.',
    },
];

const Education = () => {
    return (
        <section className="education section">
            <div className="container">
                <div className="education-layout">
                    <div className="education-text">
                        <div className="section-label">Education</div>
                        <h2 className="section-title">
                            We Also <span className="gradient-text">Teach</span> What We Build
                        </h2>
                        <p className="education-description">
                            Learn app development, AI systems, and automation from builders who ship real products.
                            We share our knowledge through courses, tutorials, and hands-on mentorship.
                        </p>
                    </div>

                    <div className="education-courses">
                        {courses.map((c, i) => (
                            <div key={i} className="course-card">
                                <div className="course-icon">{c.icon}</div>
                                <div className="course-body">
                                    <h3 className="course-title">{c.title}</h3>
                                    <p className="course-desc">{c.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
