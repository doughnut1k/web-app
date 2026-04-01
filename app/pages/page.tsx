import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <section id="about" className="h-screen flex flex-col justify-center px-6">
        <About />
        <Contact />
      </section>
    </>
  );
}