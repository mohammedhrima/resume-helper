import React, { useContext, useEffect } from 'react';
import { ctx } from '../context/ctx';
import { experienceData } from '../context/data';

function Experience() {
  const { experience, updateExperience } = useContext(ctx);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (value) {
      updateExperience(value, isChecked);
    }
  };

  useEffect(() => {
    console.log("Updated experience:", experience);
  }, [experience]);

  return (
    <div id="form">
      <p>Experience</p>
      {Object.keys(experienceData).map((key) => (
        <label key={key}>
          <input type="checkbox" name="experience" value={key} onChange={handleChange}
            checked={experience.some((exp) => exp.title === experienceData[key].title)}
          /> {experienceData[key].title}
        </label>
      ))}
    </div>
  );
}

export default Experience;