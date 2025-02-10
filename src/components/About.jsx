import AboutUsurl from "../assets/images/about-us.jpeg";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side: About Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are a technology-driven company focused on innovation and excellence.
            Our mission is to provide high-quality solutions that empower businesses
            to achieve their goals. With a team of experienced professionals, we strive
            to deliver cutting-edge technology and superior customer service.
          </p>
          <p>
            Our expertise spans various domains, including artificial intelligence,
            machine learning, software development, and cloud computing. We believe
            in the power of technology to transform industries and improve lives.
          </p>
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