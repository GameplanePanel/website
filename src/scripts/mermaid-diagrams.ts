// Renders ```mermaid fences in docs pages as diagrams.
//
// astro.config excludes "mermaid" from Shiki, so each fence arrives as
// <pre><code class="language-mermaid">…</code></pre>. Mermaid is loaded only on
// pages that have one, and its colors come from the semantic tokens in
// global.css (never raw hex), so a diagram follows the scope it sits in.

const SELECTOR = "pre > code.language-mermaid";

function token(el: Element, name: string): string {
  return getComputedStyle(el).getPropertyValue(name).trim();
}

async function renderDiagrams(): Promise<void> {
  const blocks = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (blocks.length === 0) return;

  const { default: mermaid } = await import("mermaid");
  const scope = blocks[0];
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "base",
    fontFamily: token(scope, "--font-primary") || "inherit",
    themeVariables: {
      darkMode: token(scope, "color-scheme") !== "light",
      background: token(scope, "--terminal"),
      primaryColor: token(scope, "--card"),
      primaryTextColor: token(scope, "--foreground"),
      primaryBorderColor: token(scope, "--primary"),
      secondaryColor: token(scope, "--secondary"),
      tertiaryColor: token(scope, "--surface-secondary"),
      lineColor: token(scope, "--muted-foreground"),
      textColor: token(scope, "--foreground"),
      clusterBkg: token(scope, "--surface-secondary"),
      clusterBorder: token(scope, "--border"),
      edgeLabelBackground: token(scope, "--terminal"),
      noteBkgColor: token(scope, "--accent-soft"),
      noteTextColor: token(scope, "--accent-soft-foreground"),
      noteBorderColor: token(scope, "--primary"),
      actorBkg: token(scope, "--card"),
      actorBorder: token(scope, "--primary"),
      actorTextColor: token(scope, "--foreground"),
      signalColor: token(scope, "--muted-foreground"),
      signalTextColor: token(scope, "--foreground"),
      labelBoxBkgColor: token(scope, "--card"),
      labelTextColor: token(scope, "--foreground"),
    },
  });

  for (const [index, code] of blocks.entries()) {
    const pre = code.parentElement;
    if (pre === null) continue;
    const source = code.textContent ?? "";
    try {
      const { svg } = await mermaid.render(`mermaid-diagram-${index}`, source);
      const figure = document.createElement("figure");
      figure.className = "mermaid-diagram";
      figure.innerHTML = svg;
      pre.replaceWith(figure);
    } catch (error) {
      // Leave the source visible; a broken diagram must not hide the docs.
      console.error("mermaid render failed", error);
    }
  }
}

void renderDiagrams();
