import About from "../src/components/About/About";
import Hero from "../src/components/Hero/Hero";
import Header from "../src/components/Header/Header";
import Gallery from "../src/components/Gallery/Gallery";
import Contacts from "../src/components/Contacts/Contacts";
import Services from "../src/components/Services/Services";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Services /> */}
        {/* <Gallery /> */}
        {/* <Contacts /> */}
      </main>
    </>
  );
}
