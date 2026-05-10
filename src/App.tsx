import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import Strategy from './components/Strategy';
import WhyCC from './components/WhyCC';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FilmPage from './components/FilmPage';
import useScrollAnimations from './hooks/useScrollAnimations';
import usePremiumEffects from './hooks/usePremiumEffects';

function MainSite() {
  useScrollAnimations();
  usePremiumEffects();

  return (
    <>
      <div className="starfield" />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <CaseStudy />
        <Testimonials />
        <WhyCC />
        <Strategy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/ai-film" element={<FilmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
