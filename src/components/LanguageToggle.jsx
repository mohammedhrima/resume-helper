import { useResume } from "../context/ResumeContext";

const OPTIONS = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useResume();
  return (
    <div className="segmented">
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          className={language === opt.id ? "segment active" : "segment"}
          onClick={() => setLanguage(opt.id)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
