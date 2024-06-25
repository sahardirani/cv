import React from "react";
import "./experience.css";

function Experience() {
  const experienceData = [
    {
      title: "Php Full Stack Web Developer Intern",
      location: "Integrated Digital Systems",
      duration: "2023-2024",
      summary: "Created Activity Club Portal, improved PHP skills with CRUD operations and OOP, enhanced teamwork."
    },
    {
      title: ".Net Full Stack Web Developer Intern",
      location: "Integrated Digital Systems",
      duration: "June 2023 – August 2023",
      summary: "Developed Meeting Room Booking System, enhanced frontend skills with JavaScript/jQuery, created WebAPIs."
    },
    {
      title: "Technical Customer Support Intern",
      location: "Alfa",
      duration: "June 2023 – July 2023",
      summary: "Engaged in TCS activities, gained hands-on technical support experience, refined support processes."
    },
    {
      title: "General Internship",
      location: "Nokia",
      duration: "July 2022 – August 2022",
      summary: "Acquired general overview of Nokia's departments, gained basic technical knowledge of Nokia's products."
    }
  ];

  return (
    <div className="experience-container">
      <h1 className="h1-design">My Experience</h1>
      <div className="experience-grid">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h2>{item.title}</h2>
            </div>
            <p className="grey">{item.location} / {item.duration} </p>
            <p className="experience-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;