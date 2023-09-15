import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import Header from "../src/components/Header/Header";
import Gallery from "../src/components/Gallery/Gallery";
import Contacts from "../src/components/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}