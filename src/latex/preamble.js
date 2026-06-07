export const buildPreamble = (
  name,
) => String.raw`\documentclass[10pt, letterpaper]{article}

\usepackage[
    ignoreheadfoot,
    top=0.6 cm,
    bottom=0.6 cm,
    left=0.6 cm,
    right=0.6 cm,
    footskip=0 cm,
]{geometry}

\usepackage{titlesec}
\usepackage{tabularx}
\usepackage{array}
\usepackage[dvipsnames]{xcolor}
\definecolor{primaryColor}{RGB}{0, 0, 0}
\usepackage{enumitem}
\usepackage{fontawesome5}
\usepackage{amsmath}
\usepackage[
    pdftitle={${name}},
    pdfauthor={${name}},
    colorlinks=true,
    urlcolor=primaryColor
]{hyperref}

\usepackage[pscoord]{eso-pic}
\usepackage{calc}
\usepackage{bookmark}
\usepackage{lastpage}
\usepackage{changepage}
\usepackage{paracol}
\usepackage{ifthen}
\usepackage{needspace}
\usepackage{iftex}

\ifPDFTeX
    \input{glyphtounicode} \pdfgentounicode=1 \usepackage[T1]{fontenc} \usepackage[utf8]{inputenc}
    \usepackage{sourceserifpro} \usepackage{sourcesanspro}
    \renewcommand{\rmdefault}{sourceserifpro} \renewcommand{\sfdefault}{sourcesanspro}
\else
    \usepackage{fontspec} \setmainfont{Source Serif Pro}
    \setsansfont{Source Sans Pro}
\fi

\ifPDFTeX
    \input{glyphtounicode} \pdfgentounicode=1 \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc} \usepackage{lmodern}
\fi

\usepackage{charter}

\raggedright
\AtBeginEnvironment{adjustwidth}{\partopsep0pt}
\pagestyle{empty}
\setcounter{secnumdepth}{0}
\setlength{\parindent}{0pt}
\setlength{\topskip}{0pt}
\setlength{\columnsep}{0.15cm}
\pagenumbering{gobble}

\titleformat{\section}{\needspace{4\baselineskip}\bfseries\large}{}{0pt}{}[\vspace{1pt}\titlerule]
\titlespacing{\section}{ -1pt }{ 0.3 cm }{ 0.2 cm}
\renewcommand\labelitemi{$\vcenter{\hbox{\small$\bullet$}}$}
\newenvironment{highlights}{ \begin{itemize}[ topsep=0.10 cm, parsep=0.10 cm, partopsep=0pt, itemsep=0pt, leftmargin=0 cm + 10pt ]
}{ \end{itemize} }

\newenvironment{highlightsforbulletentries}{
    \begin{itemize}[ topsep=0.10 cm, parsep=0.10 cm, partopsep=0pt, itemsep=0pt, leftmargin=10pt ]
}{ \end{itemize} }
\newenvironment{onecolentry}{ \begin{adjustwidth}{ 0 cm + 0.00001 cm }{ 0 cm + 0.00001 cm }}{ \end{adjustwidth} }

\newenvironment{twocolentry}[2][]{ \onecolentry \def\secondColumn{#2} \setcolumnwidth{\fill, 8 cm} \begin{paracol}{2} }{
    \switchcolumn \raggedleft \secondColumn \end{paracol} \endonecolentry }

\newenvironment{twocolentry_}[2][]{ \onecolentry \def\secondColumn{#2} \setcolumnwidth{\fill, 4 cm} \begin{paracol}{2} }{
    \switchcolumn \raggedleft \secondColumn \end{paracol} \endonecolentry }

\newenvironment{threecolentry}[3][]{ \onecolentry \def\thirdColumn{#3} \setcolumnwidth{, \fill, 4 cm} \begin{paracol}{3}
    {\raggedright #2} \switchcolumn }{ \switchcolumn \raggedleft \thirdColumn \end{paracol} \endonecolentry }

\newenvironment{header}{ \setlength{\topsep}{0pt}\par\kern\topsep\centering\linespread{1.5} }{ \par\kern\topsep}

\let\hrefWithoutArrow\href

\begin{document}
    \newcommand{\AND}{\unskip \cleaders\copy\ANDbox\hskip\wd\ANDbox \ignorespaces }
    \newsavebox\ANDbox \sbox\ANDbox{$|$}
`;
