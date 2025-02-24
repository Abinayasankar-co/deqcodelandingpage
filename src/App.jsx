import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import FounderPortal from "./components/FounderPortal";
import Demo from "./components/Demo";
import ContactUs from "./components/ContactUs";
import WaitListPage from "./components/WaitListPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <section id="home"><HeroSection /></section>
      <section id="features"><Features /></section>
      <section id="about"><About /></section>
      <section id="demo"><Demo /></section>
      <section id="waitlist"><WaitListPage /></section>
      <section id="founders"><FounderPortal /></section>
      <section id="contact"><ContactUs /></section>
      <Footer />
    </div>
  );
};

export default App;
