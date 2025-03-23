import { createContext, useState } from "react";
import { educationData, experienceData, projectData, skillsData } from "./script";

export const ctx = createContext();

export const DataProvider = ({ children }) => {
   const [education, setEducation] = useState({});
   const updateEducation = (key) => setEducation(educationData[key]);

   const [experience, setExperience] = useState([]);
   const updateExperience = (key, isChecked) => {
      setExperience(prev => {
         if (isChecked) return [...prev, experienceData[key]];
         return prev.filter((exp) => exp.title !== experienceData[key].title);
      })
   }

   const [project, setProject] = useState([]);
   const updateProject = (key, isChecked) => {
      setProject(prev => {
         if (isChecked) return [...prev, projectData[key]];
         return prev.filter((exp) => exp.title !== projectData[key].title);
      })
   }

   const [skills, setSkill] = useState([]);
   const updateSkills = (key, isChecked) => {
      setSkill(prev => {
         if (isChecked) return [...prev, skillsData[key]];
         return prev.filter((exp) => exp !== skillsData[key] );
      })
   }

   const data = {
      education, updateEducation,
      experience, updateExperience,
      project, updateProject,
      skills, updateSkills
   };
   return (
      <ctx.Provider value={data}>
         {children}
      </ctx.Provider>
   );
}
