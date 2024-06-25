import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_1mizwnx',
      'template_v5j8kwd',
      formData,
      'fdviwo9P2lRjsjuxw'
    ).then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }).catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    });
  };

  return (
    <div className="contact-container">
      <h1 className="h1-contact">Let's Get In Touch</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group" style={{ textAlign: "center" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
