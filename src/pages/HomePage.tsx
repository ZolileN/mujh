import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import ApplicationForm from '../components/ApplicationForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem('shouldScrollToForm');
    if (shouldScroll === 'true') {
      const formElement = document.getElementById('apply');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the flag
      sessionStorage.removeItem('shouldScrollToForm');
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <ApplicationForm />
      <Contact />
      <Footer />
    </>
  );
}
