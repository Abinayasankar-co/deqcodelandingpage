import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import FounderPortal from "./components/FounderPortal";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <Features />
      <About />
      <FounderPortal />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
