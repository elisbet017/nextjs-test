import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import Header from "../src/components/Header/Header";
import Gallery from "../src/components/Gallery/Gallery";
import Contacts from "../src/components/Contacts/Contacts";
import Career from "../src/components/Career/Career";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Career/>
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}