import { useState, useEffect } from "react";
import Product from "../assets/images/product.png";


const WaitListPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", purpose: "" });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#waitlist") {
      setShowModal(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:abinayasankar2004@gmail.com?subject=New Contact Request - ${formData.name}&body=
    Name: ${formData.name}%0D%0A
    Email: ${formData.email}%0D%0A
    message: ${formData.purpose}`;
    window.location.href = mailtoLink;
    setFormData({
     name: '',
     email: '',
     purpose: '',
    });
    console.log("Form Data Submitted:", formData);
    alert("Thank you for joining the waitlist!");
    setFormData({ name: "", email: "", purpose: "" });
    setShowModal(false);
  };

  return (
    <section className="waitlist-section">
      <div className="product-display">
        <h2>Quantum Circuit Generator</h2>
        <img src={Product} alt="Product" />
       
        <p>Unleash Our Potential First.</p>
        <button className="join-waitlist-btn" onClick={() => setShowModal(true)}>Join Waitlist</button>
      </div>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Join the Waitlist</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="purpose" placeholder="Purpose " value={formData.purpose} onChange={handleChange} required></textarea>
              <button type="submit" className="submit-btn">Submit</button>
              <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
     
    </section>
  );
};

export default WaitListPage;