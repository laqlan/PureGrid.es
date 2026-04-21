import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl animate-wave" />
        <div className="absolute right-0 bottom-[-12rem] h-[420px] w-[900px] rounded-full bg-cyan-400/20 blur-3xl animate-wave-delay" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />
      </div>
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+34 695 727 512" />
    </div>
  );
}
