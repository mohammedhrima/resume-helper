import React, { useContext, useEffect } from 'react';
import { ctx } from '../context/data';
import { skillsData } from '../context/script';

function Skills() {
  const { skills, updateSkills } = useContext(ctx);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (value) {
      updateSkills(value, isChecked);
    }
  };

  useEffect(() => {
    console.log("Updated skills:", skills);
  }, [skills]);

  return (
    <div id="form">
      <p>Skills</p>
      {Object.keys(skillsData).map((key) => (
        <label key={key}>
          <input type="checkbox" name="skills" value={key} onChange={handleChange}
            checked={skills.some((exp) => exp === skillsData[key])}
          /> {skillsData[key]}
        </label>
      ))}
    </div>
  );
}

export default Skills;