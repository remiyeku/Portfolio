import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import About from "@/Components/About";
import Skills from "../Components/Skills";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <main className="text=gray-400 bg-gray-950 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
