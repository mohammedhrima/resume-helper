import { buildPreamble } from "./preamble";
import {
  experiences,
  projects,
  skills,
  education,
  languages,
  certifications,
  hobbies,
  summary,
  sectionTitles,
} from "../data/resumeData";

const raw = String.raw;
const pick = (field, lang) => (field && (field[lang] ?? field.en)) ?? "";

function header(personal) {
  const contacts = [];
  if (personal.email)
    contacts.push(
      raw`\mbox{\faEnvelope\ \href{mailto:${personal.email}}{${personal.email}}}`,
    );
  if (personal.phone)
    contacts.push(
      raw`\mbox{\faPhone\ \href{tel:${personal.phone.replace(/\s/g, "")}}{${personal.phone}}}`,
    );
  if (personal.website?.url)
    contacts.push(
      raw`\mbox{\faGlobe\ \href{${personal.website.url}}{${personal.website.text}}}`,
    );
  if (personal.linkedin?.url)
    contacts.push(
      raw`\mbox{\faLinkedin\ \href{${personal.linkedin.url}}{${personal.linkedin.text}}}`,
    );
  if (personal.github?.url)
    contacts.push(
      raw`\mbox{\faGithub\ \href{${personal.github.url}}{${personal.github.text}}}`,
    );

  const sep = raw` \kern 5.0 pt \AND \kern 5.0 pt ` + "\n        ";
  return [
    raw`    \begin{header}`,
    raw`        \fontsize{18 pt}{18 pt}\selectfont \textbf{${personal.name}} \\`,
    raw`        \vspace{2 pt}`,
    raw`    \normalsize`,
    "        " + contacts.join(sep),
    raw`    \end{header}`,
  ].join("\n");
}

function highlightsBlock(items) {
  if (!items.length) return "";
  const lines = items.map((h) => {
    if (typeof h === "string") return raw`            \item ${h}`;
    const sub = h.items
      .map((s) => raw`                    \item ${s}`)
      .join("\n");
    return [
      raw`            \item ${h.text}`,
      raw`                \begin{itemize}`,
      sub,
      raw`                \end{itemize}`,
    ].join("\n");
  });
  return [
    raw`        \begin{onecolentry} \begin{highlights}`,
    ...lines,
    raw`        \end{highlights} \end{onecolentry}`,
  ].join("\n");
}

function entriesSection(title, lang, blocks, spaceAfterTitle) {
  if (!blocks.length) return "";
  const head =
    raw`    \section{${pick(title, lang)}}` +
    (spaceAfterTitle ? raw` \vspace{0.2 cm}` : "");
  return [head, blocks.join("\n")].join("\n");
}

function experienceSection(selection, lang) {
  const blocks = experiences
    .filter((e) => selection.experiences[e.id]?.included)
    .map((e) => {
      const flags = selection.experiences[e.id].highlights;
      const chosen = pick(e.highlights, lang).filter((_, i) => flags[i]);
      return [
        raw`        \begin{twocolentry}{${pick(e.date, lang)}} \textbf{${pick(e.title, lang)}}, ${e.company} \end{twocolentry} \vspace{0.10 cm}`,
        highlightsBlock(chosen),
        raw`        \vspace{0.2 cm}`,
      ]
        .filter(Boolean)
        .join("\n");
    });
  return entriesSection(sectionTitles.experience, lang, blocks, true);
}

function projectsSection(selection, lang) {
  const blocks = projects
    .filter((p) => selection.projects[p.id]?.included)
    .map((p) => {
      const flags = selection.projects[p.id].highlights;
      const chosen = pick(p.highlights, lang).filter((_, i) => flags[i]);
      const second = p.url ? raw` \href{${p.url}}{${p.urlText}}` : "";
      return [
        raw`        \begin{twocolentry}{${second}} \textbf{${pick(p.title, lang)}} \end{twocolentry} \vspace{0.10 cm}`,
        highlightsBlock(chosen),
        raw`        \vspace{0.2 cm}`,
      ]
        .filter(Boolean)
        .join("\n");
    });
  return entriesSection(sectionTitles.projects, lang, blocks, false);
}

function skillsSection(selection, lang) {
  const lines = skills
    .filter((s) => selection.skills[s.id])
    .map((s) => raw`        \textbf{${pick(s.category, lang)}:} ${s.items}`);
  if (!lines.length) return "";
  const body = lines.join(raw` \\ \vspace{0.10 cm}` + "\n");
  return [raw`    \section{${pick(sectionTitles.skills, lang)}}`, body].join(
    "\n",
  );
}

function educationSection(selection, lang) {
  const blocks = education
    .filter((e) => selection.education[e.id])
    .map(
      (e) =>
        raw`        \begin{${e.variant}}{${pick(e.date, lang)}} \textbf{${e.school}}, ${pick(e.degree, lang)} \end{${e.variant}}` +
        "\n" +
        raw`        \vspace{0.10 cm}`,
    );
  return entriesSection(sectionTitles.education, lang, blocks, false);
}

function summarySection(lang) {
  return [
    raw`    \section{${pick(sectionTitles.summary, lang)}}`,
    raw`        \begin{onecolentry} ${pick(summary, lang)} \end{onecolentry}`,
  ].join("\n");
}

function languagesSection(selection, lang) {
  const parts = languages
    .filter((l) => selection.languages[l.id])
    .map((l) => raw`\textbf{${pick(l.name, lang)}:} ${pick(l.level, lang)}`);
  if (!parts.length) return "";
  const body =
    "        \\begin{onecolentry} " +
    parts.join(raw` \kern 5.0 pt \AND \kern 5.0 pt `) +
    " \\end{onecolentry}";
  return [raw`    \section{${pick(sectionTitles.languages, lang)}}`, body].join(
    "\n",
  );
}

function certificationsSection(selection, lang) {
  const chosen = certifications
    .filter((c) => selection.certifications[c.id])
    .map((c) => pick(c.name, lang));
  if (!chosen.length) return "";
  return [
    raw`    \section{${pick(sectionTitles.certifications, lang)}}`,
    highlightsBlock(chosen),
  ].join("\n");
}

function hobbiesSection(lang) {
  const items = hobbies[lang] ?? hobbies.en;
  if (!items.length) return "";
  const cols = "l".repeat(items.length);
  return [
    raw`    \section{${pick(sectionTitles.hobbies, lang)}}`,
    raw`        \noindent \begin{tabular*}{\textwidth}{@{\extracolsep{\fill}}${cols}}`,
    "        " + items.join(" & ") + raw` \\`,
    raw`        \end{tabular*}`,
  ].join("\n");
}

export function generateLatex({ selection, language, personal }) {
  const lang = language;
  const parts = [buildPreamble(personal.name), header(personal)];

  if (selection.sections.summary) parts.push(summarySection(lang));
  if (selection.sections.experience)
    parts.push(experienceSection(selection, lang));
  if (selection.sections.projects) parts.push(projectsSection(selection, lang));
  if (selection.sections.skills) parts.push(skillsSection(selection, lang));
  if (selection.sections.education)
    parts.push(educationSection(selection, lang));
  if (selection.sections.languages)
    parts.push(languagesSection(selection, lang));
  if (selection.sections.certifications)
    parts.push(certificationsSection(selection, lang));
  if (selection.sections.hobbies) parts.push(hobbiesSection(lang));

  parts.push(raw`\end{document}` + "\n");
  return parts.filter(Boolean).join("\n\n");
}
