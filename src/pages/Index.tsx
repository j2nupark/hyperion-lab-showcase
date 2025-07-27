import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="portfolio" aria-labelledby="portfolio-heading">
          <Portfolio />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
