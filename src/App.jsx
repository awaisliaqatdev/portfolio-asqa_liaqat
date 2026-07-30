import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Research from "./sections/Research";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Achievements from "./sections/Achievements";
import Leadership from "./sections/Leadership";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Skills />
        <Services />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
