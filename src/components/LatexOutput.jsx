import { useState } from "react";
import { useResume } from "../context/ResumeContext";

export default function LatexOutput() {
  const { latex } = useResume();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(latex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const blob = new Blob([latex], { type: "application/x-tex" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.tex";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="output">
      <div className="output-bar">
        <span className="output-title">resume.tex</span>
        <div className="output-actions">
          <button className="btn" onClick={copy}>
            {copied ? "Copied!" : "Copy"}
          </button>
          <button className="btn" onClick={download}>
            Download
          </button>
          <form action="https://www.overleaf.com/docs" method="post" target="_blank">
            <input type="hidden" name="snip" value={latex} />
            <button className="btn primary" type="submit">
              Open in Overleaf
            </button>
          </form>
        </div>
      </div>
      <textarea className="code" readOnly value={latex} spellCheck={false} />
    </div>
  );
}
