import Navbar from './components/Navbar.jsx';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Franchises from './components/Franchises.jsx';
import WhyUs from './components/WhyUs.jsx';
import Locations from './components/Locations.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import ApplyForm from './components/ApplyForm.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import GymPage from './components/GymPage.jsx';

export default function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/gym') {
    return <GymPage />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Franchises />
        <WhyUs />
        <Locations />
        <Process />
        <Testimonials />
        <ApplyForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
      <Analytics />
    </>
  );
}
