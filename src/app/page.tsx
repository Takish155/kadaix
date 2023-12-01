import Image from "next/image";
import NavBar from "./NavBar";
import Hero from "./HomeComponents/Hero";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <NavBar page="home" />
      <main>
        <Hero />
        <Footer />
      </main>
    </>
  );
}
