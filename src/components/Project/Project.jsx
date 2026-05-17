import { useState } from 'react'
import viteLogo from '/vite.svg'

import './Project.css'

function Project() {
const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      title: 'Courier Service Management System',
      description:
        'Built a courier service management platform with parcel booking, tracking and managing users using Angular and Firebase. A secure authentication system, role-based authorization and realtime updates is also some of the features integrated by utilizing firebase functionalities.'
    },
    {
      title: 'Movie Popularity Prediction',
      description:
        'Developed a machine learning-based system to predict popularity of an upcoming movie and identify its target audience using pre-production data such as genre, cast, director, and plot. Implemented algorithms including KNN, XGBoost, and Fuzzy C-Means for prediction and audience classification.'
    },
    {
      title: 'TODO',
      description:
      'Built a responsive TODO web application with features for adding, editing, deleting, and completing tasks using MERN stack. Designed an interactive and user-friendly interfaces and implemented secure authentication using jsonwebtoken.'
    }
  ];

  return (
   
   <section id="project" className="projects-section">
    <div className='project-container'>
        <h2>My Projects</h2>
<div className='project-content'>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-header"
              onClick={() =>
                setOpenProject(openProject === index ? null : index)
              }
            >
              <h3>{project.title}</h3>
              <span className="arrow">
                {openProject === index ? '▲' : '▼'}
              </span>
            </div>

            {openProject === index && (
              <p className="project-description">
                {project.description}
              </p>
            )}
          </div>
        ))}
        </div>
        </div>
      </section>
  );

   
}
export default Project;