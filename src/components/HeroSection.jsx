import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quantum1 from "/src/assets/images/quantum1.png";
import quantum2 from "/src/assets/images/quantum2.jpg";
import quantum3 from "/src/assets/images/quantum3.jpg";


const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 

  return (
    <div className="hero-container">
      <Slider {...settings}>
        <div>
          <img src={quantum1} alt="Quantum Slide 1" className="hero-image" />
        </div>
        <div>
          <img src={quantum2} alt="Quantum Slide 2" className="hero-image" />
        </div>
        <div>
          <img src={quantum3} alt="Quantum Slide 3" className="hero-image" />
        </div>
      </Slider>
      <div className="hero-text">
        <h1>AI Adoption Simplified with</h1>
        <span className="highlight">Intelligent Quantum Solutions</span>
        <p>We craft cutting-edge AI-powered quantum solutions to enhance decision-making, automate tasks, and personalize experiences.</p>
      </div>
    </div>
  );
};

export default HeroSection;
