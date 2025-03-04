// src/components/ContactUs.jsx
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [existingData, setExistingData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  try{
    e.preventDefault();
    const updatedData = [...existingData, formData];
    setExistingData(updatedData);
    const mailtoLink = `mailto:abinayasankar2004@gmail.com?subject=New Contact Request - ${formData.name}&body=
      Name: ${formData.name}%0D%0A
      Email: ${formData.email}%0D%0A
      message: ${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    }catch(e){
      console.log(e);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong>abinayasankar2004@gmail.com</p>
          <p><strong>Phone:</strong>+91 6382353894</p>
          <p><strong>Address:</strong>Surapet, Ambattur, Chennai</p>
          <div className="map-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.279091091091!2d80.188267!3d13.1445059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f1f1f1f1f1%3A0x2b1e1e1e1e1e1e1e!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1633147340649!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" name="name" required onChange={handleChange}/>
            <input type="email" placeholder="Your Email" name="email" required  onChange={handleChange}/>
            <textarea placeholder="Your Message" name="message" required onChange={handleChange}></textarea>
            <button type="submit" onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;