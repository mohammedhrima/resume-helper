# Résumé Builder

A bilingual (English / French) résumé builder that generates an **Overleaf-ready LaTeX** document. Toggle the sections, experiences, projects, skills, and even individual bullet points you want, edit your header, switch language, and copy / download the `.tex` or open it straight in Overleaf to compile a PDF.

Built with **React 19 + Vite**. No backend — everything runs in the browser, and Overleaf handles the LaTeX → PDF step.

## Features

- **Bilingual** — one click switches the whole résumé between English and French (content, section titles, dates).
- **Three-level selection** — turn whole **sections** on/off, include/exclude individual **entries**, and pick which **bullet points** appear in each experience or project, so you can tailor the résumé per application.
- **Editable header** — name, email, phone, website, LinkedIn, GitHub.
- **Live LaTeX** — the `.tex` regenerates as you edit, in a fixed ATS-friendly template.
- **Export** — Copy to clipboard, Download `resume.tex`, or **Open in Overleaf**.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run lint
```

## How it works

- `src/data/resumeData.js` — all résumé content, bilingual (`{ en, fr }`) per field. Highlights can be a string or a group with nested sub-bullets. Add or edit entries here.
- `src/latex/preamble.js` — the fixed LaTeX preamble (a RenderCV-style template) emitted verbatim.
- `src/latex/generate.js` — builds the full `.tex` from the current selection, language, and header.
- `src/context/ResumeContext.jsx` — language, editable header, and the selection state; derives the LaTeX.
- `src/components/*` — language toggle, header form, section toggles, entry/skill pickers, and the output pane.

To produce a PDF, paste the output into [Overleaf](https://www.overleaf.com) (or use **Open in Overleaf**) and compile.
