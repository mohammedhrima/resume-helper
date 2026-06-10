import { createContext, useContext, useMemo, useState } from "react";
import * as data from "../data/resumeData";
import { generateLatex } from "../latex/generate";

const ResumeContext = createContext(null);

const initialSelection = () => ({
  sections: {
    summary: true,
    experience: true,
    projects: true,
    skills: true,
    education: true,
    languages: true,
    certifications: true,
    hobbies: true,
  },
  experiences: Object.fromEntries(
    data.experiences.map((e) => [
      e.id,
      { included: e.defaultSelected, highlights: e.highlights.en.map(() => true) },
    ]),
  ),
  projects: Object.fromEntries(
    data.projects.map((p) => [
      p.id,
      { included: p.defaultSelected, highlights: p.highlights.en.map(() => true) },
    ]),
  ),
  education: Object.fromEntries(data.education.map((e) => [e.id, e.defaultSelected])),
  skills: Object.fromEntries(data.skills.map((s) => [s.id, s.defaultSelected])),
  languages: Object.fromEntries(data.languages.map((l) => [l.id, l.defaultSelected])),
  certifications: Object.fromEntries(data.certifications.map((c) => [c.id, c.defaultSelected])),
});

export function ResumeProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [personal, setPersonal] = useState(data.personal);
  const [selection, setSelection] = useState(initialSelection);

  const latex = useMemo(
    () => generateLatex({ selection, language, personal }),
    [selection, language, personal],
  );

  const toggleSection = (name) =>
    setSelection((s) => ({ ...s, sections: { ...s.sections, [name]: !s.sections[name] } }));

  const toggleEntry = (kind, id) =>
    setSelection((s) => ({
      ...s,
      [kind]: { ...s[kind], [id]: { ...s[kind][id], included: !s[kind][id].included } },
    }));

  const toggleHighlight = (kind, id, index) =>
    setSelection((s) => {
      const entry = s[kind][id];
      const highlights = entry.highlights.map((v, i) => (i === index ? !v : v));
      return { ...s, [kind]: { ...s[kind], [id]: { ...entry, highlights } } };
    });

  const toggleSimple = (kind, id) =>
    setSelection((s) => ({ ...s, [kind]: { ...s[kind], [id]: !s[kind][id] } }));

  const setPersonalField = (field, value) => setPersonal((p) => ({ ...p, [field]: value }));

  const setLinkField = (field, key, value) =>
    setPersonal((p) => ({ ...p, [field]: { ...p[field], [key]: value } }));

  const value = {
    data,
    language,
    setLanguage,
    personal,
    selection,
    latex,
    toggleSection,
    toggleEntry,
    toggleHighlight,
    toggleSimple,
    setPersonalField,
    setLinkField,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}

export const useResume = () => useContext(ResumeContext);
