import Particle from "./data/componets/Particle";
import Navbar from "./data/componets/Navbar";
import Hero from "./data/componets/Hero";
import About from "./data/componets/About";
import Skils from "./data/componets/Skils";
import Projects from "./data/componets/Projects";
import Certificates from "./data/componets/Certificates";
import Contact from "./data/componets/Contact";
import Footer from "./data/componets/Footer";

export default function Home() {
  return (
    <>
      <Particle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skils />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}