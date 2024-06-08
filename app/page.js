import About from "./components/About";
import Contact from "./components/Contact";
import { Gallery } from "./components/Gallery";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}
