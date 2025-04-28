
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
