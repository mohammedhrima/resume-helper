import "./App.css";
import { ResumeProvider } from "./context/ResumeContext";
import LanguageToggle from "./components/LanguageToggle";
import HeaderForm from "./components/HeaderForm";
import SectionToggles from "./components/SectionToggles";
import EntryPicker from "./components/EntryPicker";
import SimplePicker from "./components/SimplePicker";
import LatexOutput from "./components/LatexOutput";
import { latexToPlain } from "./utils/text";

function Panel({ title, hint, children }) {
  return (
    <section className="panel">
      <h2>
        {title}
        {hint && <span className="hint">{hint}</span>}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <ResumeProvider>
      <div className="app">
        <header className="topbar">
          <div className="brand">
            <span className="logo">📄</span>
            <div>
              <h1>Résumé Builder</h1>
              <p>Pick what to include and generate an Overleaf-ready LaTeX résumé.</p>
            </div>
          </div>
          <LanguageToggle />
        </header>

        <main className="layout">
          <div className="controls">
            <Panel title="Header">
              <HeaderForm />
            </Panel>
            <Panel title="Sections" hint="what appears in the résumé">
              <SectionToggles />
            </Panel>
            <Panel title="Experience">
              <EntryPicker kind="experiences" />
            </Panel>
            <Panel title="Projects">
              <EntryPicker kind="projects" />
            </Panel>
            <Panel title="Skills">
              <SimplePicker
                kind="skills"
                render={(s, l) => `${latexToPlain(s.category[l])}: ${s.items}`}
              />
            </Panel>
            <Panel title="Education">
              <SimplePicker
                kind="education"
                render={(e, l) => `${e.school} — ${latexToPlain(e.degree[l])} (${e.date[l]})`}
              />
            </Panel>
            <Panel title="Languages">
              <SimplePicker kind="languages" render={(x, l) => `${x.name[l]} — ${x.level[l]}`} />
            </Panel>
            <Panel title="Certifications">
              <SimplePicker kind="certifications" render={(c, l) => c.name[l]} />
            </Panel>
          </div>

          <aside className="preview">
            <LatexOutput />
          </aside>
        </main>
      </div>
    </ResumeProvider>
  );
}
