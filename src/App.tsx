import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Creative from './components/Creative';
import CaseStudy from './components/CaseStudy';
import WhyUs from './components/WhyUs';
import Education from './components/Education';
import Approach from './components/Approach';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import usePremiumEffects from './hooks/usePremiumEffects';

function App() {
  useScrollAnimations();
  usePremiumEffects();

  return (
    <>
      <div className="starfield" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Pillars />
        <Services />
        <Creative />
        <CaseStudy />
        <WhyUs />
        <Education />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
