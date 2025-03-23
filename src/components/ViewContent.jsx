import React, { useContext, useEffect } from 'react';
import { ctx } from '../context/data';

function ViewContent() {
   const { education, experience, project, skills } = useContext(ctx);

   useEffect(() => {
      console.log("Updated content:", { education, experience, project, skills });
   }, [education, experience, project, skills]);

   return (
      <div id="view-content">
         {/* Education Section */}
         {education.title && (
            <section className="section">
               <h2>Education</h2>
               <div className="card">
                  <h3>{education.title}</h3>
                  <p className="date">{education.date}</p>
                  <ul>
                     {education.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                     ))}
                  </ul>
               </div>
            </section>
         )}

         {/* Experience Section */}
         {experience.length > 0 && (
            <section className="section">
               <h2>Experience</h2>
               {experience.map((exp, index) => (
                  <div className="card" key={index}>
                     <h3>{exp.title}</h3>
                     <p className="date">{exp.date}</p>
                     <ul>
                        {exp.details.map((detail, i) => (
                           <li key={i}>{detail}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </section>
         )}

         {/* Projects Section */}
         {project.length > 0 && (
            <section className="section">
               <h2>Projects</h2>
               {project.map((proj, index) => (
                  <div className="card" key={index}>
                     <h3>{proj.title}</h3>
                     <p>{proj.description}</p>
                     <div className="technologies">
                        {proj.technologies.map((tech, i) => (
                           <span key={i} className="tech-tag">{tech}</span>
                        ))}
                     </div>
                  </div>
               ))}
            </section>
         )}

         {/* Skills Section */}
         {skills.length > 0 && (
            <section className="section">
               <h2>Skills</h2>
               <div className="skills-list">
                  {skills.map((skill, index) => (
                     <span key={index} className="skill-tag">{skill}</span>
                  ))}
               </div>
            </section>
         )}
      </div>
   );
}

export default ViewContent;