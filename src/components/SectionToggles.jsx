import { useResume } from "../context/ResumeContext";

const SECTIONS = [
  "summary",
  "experience",
  "projects",
  "skills",
  "education",
  "languages",
  "certifications",
  "hobbies",
];

export default function SectionToggles() {
  const { selection, toggleSection, data, language } = useResume();
  return (
    <div className="chips">
      {SECTIONS.map((name) => (
        <button
          key={name}
          className={selection.sections[name] ? "chip on" : "chip"}
          onClick={() => toggleSection(name)}
        >
          {data.sectionTitles[name][language].replace("\\&", "&")}
        </button>
      ))}
    </div>
  );
}
