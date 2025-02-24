import AboutUsurl from "../assets/images/about-us.jpeg";
const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side: About Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <ul>
            <li>
              At Deqcode (currently under registration), we are on a mission to revolutionize quantum computing by
              developing AI-powered tools that simplify the creation and consistent maintenance of quantum circuits.
              Our solutions empower researchers and developers to optimize and build quantum circuits effectively and efficiently.
            </li>
            <li>
              Our product supports companies working on Quantum Processing Units (QPUs), enabling them to design circuits without time constraints, boosting productivity, and enhancing innovation.
            </li>
            <li>
              With a clear vision for scaling quantum computing advancements, our Minimum Viable Product (MVP) demonstrates the practical potential of our technology.
              We are committed to transforming this solution into a full-fledged commercial product that drives the next wave of breakthroughs in quantum computing.
            </li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="about-image">
          <img src={AboutUsurl} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
