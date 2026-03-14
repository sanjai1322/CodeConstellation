import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Creative from './components/Creative';
import CaseStudy from './components/CaseStudy';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Education from './components/Education';
import Approach from './components/Approach';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FilmPage from './components/FilmPage'; // New component we'll create
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
        <Ticker />
        <Pillars />
        <Services />
        <Creative />
        <CaseStudy />
        <Portfolio />
        <WhyUs />
        <Education />
        <Approach />
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
