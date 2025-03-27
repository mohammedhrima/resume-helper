import React, { useContext, useEffect } from 'react'
import { ctx } from '../context/ctx'
import { educationData } from '../context/data';

function Education() {
  const { education, updateEducation } = useContext(ctx)
  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      updateEducation(value);
    }
  }
  useEffect(() => {
    console.log("Updated education:", education);
  }, [education]);
  return (
    <div id="form">
      <p>Education</p>
      {Object.keys(educationData).map(key => (
          <label key={key}>
            <input type="radio" name="education" value={key}
              onChange={handleChange} checked={education.title === educationData[key].title} /> {educationData[key].title}
          </label>
        ))}
    </div>
  )
}

export default Education