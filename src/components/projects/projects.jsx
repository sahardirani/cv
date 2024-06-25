import React from "react";
import "./projects.css";

const projectsData = [
  {
    title: "Mental Health Website",
    description: "Built a Mental health website using React, Node.js, and PostgreSQL featuring self-assessment, therapy sessions, blogs, journals, workshops, and educational resources.",
    image: "https://i.pinimg.com/564x/1a/2a/d8/1a2ad83baa672f40d5d38134f1fbea0f.jpg",
    githubLink: "https://github.com/sarabousaleh/OnRamp_CapstoneProject/" // Replace with your GitHub link
  },
  {
    title: "Supermarket Web Application",
    description: "Developed a PHP supermarket web application improving user experience and product management.",
    image: "https://i.pinimg.com/564x/32/fc/d5/32fcd5df413903b95bd788e2496f04fb.jpg",
    githubLink: "https://github.com/sahardirani/Supermarket-Web-Application" 
  },
  {
    title: "Activity Club Portal",
    description: "Created an Activity Club Portal with PHP, HTML, CSS, JavaScript, Bootstrap, and MySQL, enhancing PHP skills, object-oriented programming, and teamwork.",
    image: "https://i.pinimg.com/564x/22/8c/f8/228cf89ce79312df0b623991522550ad.jpg",
    githubLink: "" 
  },
  {
    title: "Beauty Center Web Application",
    description: "Launched a PHP Beauty Center web application to boost customer interaction and online presence.",
    image: "https://i.pinimg.com/564x/0b/30/6d/0b306de0c273bede5a2a55ac2ed12358.jpg",
    githubLink: "https://github.com/sahardirani/Beauty_Salon_EcomShop" 
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="h1-design">My Projects</h1>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} image={project.image} githubLink={project.githubLink} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, githubLink }) {
  return (
    <>
    <div className="project-card">
      <div className="image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-image-overlay">
          <div className="project-details">
            <p>{description}</p>
            <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              Check GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <h2>{title}</h2>
    </div>
    
    </>
  );
}

export default Projects;