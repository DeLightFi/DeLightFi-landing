import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import About from "../components/About";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Contribute from "../components/Contribute";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Features />
      <Roadmap />
      <Contribute />
      <Footer />
    </>
  );
}
