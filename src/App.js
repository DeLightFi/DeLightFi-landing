import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import ThreeDivs from "./components/ThreeDivs";
import ThreeDivs2 from "./components/ThreeDivs2";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThreeDivs id="about" />
      <Partners />
      <ThreeDivs2 id="about2" />
      <Footer />
    </>
  );
}
