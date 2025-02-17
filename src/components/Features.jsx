import featureone from "../assets/images/feature1.jpeg";
import featuresecond from "../assets/images/feature2.jpeg";
import featurethird from "../assets/images/feature3.jpeg";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2>Our Features</h2>
        <p>Explore our cutting-edge solutions designed to enhance efficiency and drive success.</p>
        
        <div className="features-grid">
          <div className="feature-item">
            <img src={featureone} alt="Feature 1" />
            <h3>AI-Powered Automation</h3>
            <p>Streamline operations with advanced AI automation tools.</p>
          </div>
          
          <div className="feature-item">
            <img src={featuresecond} alt="Feature 2" />
            <h3>Circuit Analysis</h3>
            <p>Gain insights with real-time Circuit Analysis and visualization.</p>
          </div>
          
          <div className="feature-item">
            <img src={featurethird} alt="Feature 3" />
            <h3>Seamless Integration</h3>
            <p>Integrate effortlessly with existing business processes and systems through our API.</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Features;