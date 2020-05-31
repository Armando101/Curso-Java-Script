\LoadClass[a4paper,12pt]{article}
\input{/home/armando/Documentos/Cursos/LaTeX/Plantillas/lib/tipreqs.cls}

\RequirePackage{xcolor}

\RequirePackage{libertine} % linux libertine font
\RequirePackage[T1]{fontenc}

\RequirePackage{amsmath}
\RequirePackage{graphicx}

\RequirePackage{fancyhdr}

%%%%%%%%%% Display the month with letters %%%%%%
\newcommand{\MONTH}{%
  \ifcase\the\month
  \or Enero% 1
  \or Febrero% 2
  \or Marzo% 3
  \or Sbril% 4
  \or Mayo% 5
  \or Junio% 6
  \or Julio% 7
  \or Agosto% 8
  \or Septiembre% 9
  \or Octubre% 10
  \or Noviembre% 11
  \or Diciembre% 12
  \fi}


\RequirePackage[pages=all]{background}

\backgroundsetup{
  angle=0,
  scale=1,
  opacity=0.3,
  contents={%
    \includegraphics{/home/armando/Documentos/Cursos/LaTeX/Plantillas/img/bg/square}
  }%
}

\newcommand{\ptcSeccion}[1]{\renewcommand{\ptcSeccion}{#1}}
\newcommand{\ptcTitulo}[1]{\renewcommand{\ptcTitulo}{#1}}
\newcommand{\ptcLogoSeccion}[1]{\renewcommand{\ptcLogoSeccion}{#1}}

\newcommand{\protecoTitle}{
  \begin{minipage}[t]{0.6\textwidth}
    \vspace{0.1cm}
    \Large{\ptcSeccion}\\
    \MONTH\,de\,\the\year\\
    \textbf{\LARGE{\ptcTitulo}}\\
  \end{minipage}

}

\newcommand{\putLogo}{
  \begin{wrapfigure}{r}{0.25\textwidth} %this figure will be at the right
      \centering
      \vspace{0.1cm}
      \includegraphics[width=0.25\textwidth]{\ptcLogoSeccion}
      \vspace{-110pt} % This removes the white box on the second page
  \end{wrapfigure}
}


\DeclareFixedFont{\titlefont}{T1}{ppl}{}{}{0.5in}
%%%%%%% Seccion de header y footer %%%%%%%%%%%%%%%%%%%%

\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\includegraphics[scale=0.06]{/home/armando/Documentos/Cursos/LaTeX/Plantillas/img/proteco/proteco.png} }
\fancyhead[R]{\ptcTitulo}
\fancyfoot[C]{\footnotesize PROGRAMA DE TECNOLOGÍA EN CÓMPUTO  }
\fancyfoot[R]{\footnotesize \thepage}  % Pie derecha
\renewcommand{\footrulewidth}{0.4pt}

%%%%%%%%%% Decorar background %%%%%%%%%%%%%%

\definecolor{apuntes}{RGB}{0,79,158}


\RequirePackage{tikz}
\RequirePackage{epigraph}

\renewcommand\epigraphflush{flushright}
\renewcommand\epigraphsize{\normalsize}
\setlength\epigraphwidth{0.7\textwidth}

\newcommand\titlepagedecoration{%
\begin{tikzpicture}[remember picture,overlay,shorten >= -10pt]
\draw[opacity=0.025,white, fill=apuntes] (-15,20) circle (100pt);
\draw[opacity=0.05,white, fill=apuntes] (2,15) circle (75pt);
\draw[opacity=0.075,white, fill=apuntes] (-5,7) circle (100pt);
\draw[opacity=0.1,white, fill=apuntes] (-15,3) circle (125pt);
\draw[opacity=0.125,white, fill=apuntes] (3,-4) circle (150pt);
\end{tikzpicture}%
}