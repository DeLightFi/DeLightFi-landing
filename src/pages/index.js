import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import ThreeDivs from "../components/ThreeDivs";
import ThreeDivs2 from "../components/ThreeDivs2";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThreeDivs id="about" />
      <Partners />
      <ThreeDivs2 id="about2" />
      <Section />
      <Footer />
    </>
  );
}
