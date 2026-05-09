import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Portfolio from './components/Portfolio';
import StudioCulture from './components/StudioCulture';
import Strategy from './components/Strategy';
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
        <Ticker />
        <Services />
        <CaseStudy />
        <Portfolio />
        <StudioCulture />
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
