import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section id="about" />
    </>
  );
}
