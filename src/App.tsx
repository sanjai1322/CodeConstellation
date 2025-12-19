import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Approach from './components/Approach';
import Products from './components/Products';
import Education from './components/Education';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import usePremiumEffects from './hooks/usePremiumEffects';

function App() {
  // Enable premium scroll animations across all sections
  useScrollAnimations();
  // Enable premium mouse and interaction effects
  usePremiumEffects();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Approach />
        <Products />
        <Education />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
