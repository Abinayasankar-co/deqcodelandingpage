// src/components/FounderPortal.jsx
import founder1 from "../assets/images/founder1.png";
import founder2 from "../assets/images/founder2.jpg";

const founders = [
  {
    id: 1,
    name: "Chockalingam T",
    role: "Co-Founders",
    image: founder1,
    linkedin: "https://www.linkedin.com/in/chockalingam1947/"
  },
  {
    id: 2,
    name: "Abinayasankar M",
    role: "Co-Founders",
    image: founder2,
    linkedin: "https://www.linkedin.com/in/abinayasankar-m-a3b590235/"
  }
];

const FounderPortal = () => {
  return (
    <section id="founders" className="founder-section">
      <h2>Meet Our Team</h2>
      <p>Our leaders are dedicated to innovation and excellence.</p>
      <div className="founders-container">
        {founders.map((founder) => (
          <div key={founder.id} className="founder-card">
            <img src={founder.image} alt={founder.name} />
            <h3>{founder.name}</h3>
            <p>{founder.role}</p>
            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">
              View LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderPortal;

