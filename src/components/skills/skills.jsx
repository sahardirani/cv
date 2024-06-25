import React from "react";
import "./skills.css";

const skillsData = [
  "Java","Python","C++","Dart","JavaScript","HTML5", "CSS3",  "ReactJS", 
   "NodeJS","PHP", "Flutter","SQL", "MySQL", "PostgreSQL",   
   "Android Studio", "AWS"
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="h1-design">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-title">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;