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
    <h3>AI-Driven Circuit Optimization</h3>
    <p>Enhance quantum circuit performance with our AI-powered tools that dynamically adapt to evolving hardware specifications.</p>
  </div>
  
  <div className="feature-item">
    <img src={featuresecond} alt="Feature 2" />
    <h3>Real-Time Error Mitigation</h3>
    <p>Identify and correct quantum errors on-the-fly, ensuring robust and reliable quantum computations.</p>
  </div>
  
  <div className="feature-item">
    <img src={featurethird} alt="Feature 3" />
    <h3>Cross-Platform Compatibility</h3>
    <p>Seamlessly integrate with leading quantum computing platforms, providing flexibility and scalability for diverse quantum applications.</p>
  </div>
</div>
</div>
      
    </section>
  );
};

export default Features;