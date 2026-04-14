import Hero from "@/_sections/Hero/Hero";
import Projects from "@/_sections/Projects/Projects";
import Skills from "@/_sections/Skills/Skills";
import Experience from "@/_sections/Experience/Experience";
import Contacts from "@/_sections/Contacts/Contacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
    </div>
  );
}
