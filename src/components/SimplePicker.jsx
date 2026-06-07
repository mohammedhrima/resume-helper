import { useResume } from "../context/ResumeContext";

export default function SimplePicker({ kind, render }) {
  const { data, selection, language, toggleSimple } = useResume();
  return (
    <div className="entries">
      {data[kind].map((item) => (
        <label key={item.id} className="entry-head simple">
          <input
            type="checkbox"
            checked={!!selection[kind][item.id]}
            onChange={() => toggleSimple(kind, item.id)}
          />
          <span>{render(item, language)}</span>
        </label>
      ))}
    </div>
  );
}
