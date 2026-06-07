import { useResume } from "../context/ResumeContext";

function Field({ label, value, onChange }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

export default function HeaderForm() {
  const { personal, setPersonalField, setLinkField } = useResume();
  return (
    <div className="grid2">
      <Field label="Name" value={personal.name} onChange={(v) => setPersonalField("name", v)} />
      <Field label="Email" value={personal.email} onChange={(v) => setPersonalField("email", v)} />
      <Field label="Phone" value={personal.phone} onChange={(v) => setPersonalField("phone", v)} />
      <Field
        label="Website"
        value={personal.website.text}
        onChange={(v) => setLinkField("website", "text", v)}
      />
      <Field
        label="Website URL"
        value={personal.website.url}
        onChange={(v) => setLinkField("website", "url", v)}
      />
      <Field
        label="LinkedIn"
        value={personal.linkedin.text}
        onChange={(v) => setLinkField("linkedin", "text", v)}
      />
      <Field
        label="LinkedIn URL"
        value={personal.linkedin.url}
        onChange={(v) => setLinkField("linkedin", "url", v)}
      />
      <Field
        label="GitHub"
        value={personal.github.text}
        onChange={(v) => setLinkField("github", "text", v)}
      />
      <Field
        label="GitHub URL"
        value={personal.github.url}
        onChange={(v) => setLinkField("github", "url", v)}
      />
    </div>
  );
}
