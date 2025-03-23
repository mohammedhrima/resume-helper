import React, { useContext, useEffect } from 'react';
import { ctx } from '../context/data';
import { projectData } from '../context/script';

function Project() {
  const { project, updateProject } = useContext(ctx);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (value) {
      updateProject(value, isChecked);
    }
  };

  useEffect(() => {
    console.log("Updated project:", project);
  }, [project]);

  return (
    <div id="form">
      <p>Project</p>
      {Object.keys(projectData).map((key) => (
        <label key={key}>
          <input type="checkbox" name="project" value={key} onChange={handleChange}
            checked={project.some((exp) => exp.title === projectData[key].title)}
          /> {projectData[key].title}
        </label>
      ))}
    </div>
  );
}

export default Project;