import videoroll from "../assets/videos/DeqcodeaiMVP.mp4";

const Demo = () => {
  return (
    <section id="demo" className="demo-section">
      <div className="demo-container">
        <h2>Product Demo</h2>
        <p>Watch our demo video to explore our Platforms features and capabilities.</p>
        
        <div className="video-wrapper">
          <video controls>
            <source src={videoroll} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
    </section>
  );
};

export default Demo;