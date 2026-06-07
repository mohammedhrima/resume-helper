import { useResume } from "../context/ResumeContext";
import { latexToPlain } from "../utils/text";

export default function EntryPicker({ kind }) {
  const { data, selection, language, toggleEntry, toggleHighlight } =
    useResume();

  const titleOf = (entry) =>
    kind === "experiences"
      ? `${latexToPlain(entry.title[language])} · ${entry.company}`
      : latexToPlain(entry.title[language]);

  return (
    <div className="entries">
      {data[kind].map((entry) => {
        const state = selection[kind][entry.id];
        const highlights = entry.highlights[language];
        return (
          <div
            key={entry.id}
            className={state.included ? "entry open" : "entry"}
          >
            <label className="entry-head">
              <input
                type="checkbox"
                checked={state.included}
                onChange={() => toggleEntry(kind, entry.id)}
              />
              <span className="entry-title">{titleOf(entry)}</span>
              {kind === "experiences" && (
                <span className="entry-date">{entry.date[language]}</span>
              )}
            </label>

            {state.included && (
              <ul className="bullets">
                {highlights.map((highlight, index) => {
                  const isGroup = typeof highlight !== "string";
                  return (
                    <li key={index}>
                      <label className="bullet">
                        <input
                          type="checkbox"
                          checked={state.highlights[index]}
                          onChange={() =>
                            toggleHighlight(kind, entry.id, index)
                          }
                        />
                        <span>
                          {latexToPlain(isGroup ? highlight.text : highlight)}
                        </span>
                      </label>
                      {isGroup && (
                        <ul className="subbullets">
                          {highlight.items.map((item, j) => (
                            <li key={j}>{latexToPlain(item)}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
