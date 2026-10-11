// Portfolio for Srujan Ranpise.
// Drop this in as src/App.jsx in a Vite React project. No extra dependencies needed.
// TODO: replace EMAIL, LINKEDIN and GITHUB with your real details.

const EMAIL = "your@email.com";
const LINKEDIN = "https://www.linkedin.com/in/your-handle";
const GITHUB = "https://github.com/your-handle";

const releases = [
  {
    version: "v3.0",
    when: "November 2025 to now",
    title: "Xpressbees, Associate Product Analyst",
    text: "First full-time role, working at APM scope on a 7-member product team.",
    points: [
      "Owning the product catalogue workstream, aimed at recovering revenue lost to billing disputes.",
      "Owning enterprise B2B and B2C client integrations.",
    ],
  },
  {
    version: "v2.1",
    when: "Side projects",
    title: "Tools I build for myself",
    points: [
      "Pune Transit MCP: an MCP server that lets an AI assistant book Pune Metro, PMPML and MSRTC tickets.",
      "Deploy extension: a browser extension that deploys Claude artifacts to Vercel and commits them to GitHub in one click.",
    ],
  },
  {
    version: "v2.0",
    when: "Before the first job",
    title: "DoctorsClub, founder",
    text: "Started a healthtech company and grew it to 102 doctors across Pune.",
  },
  {
    version: "v1.0",
    when: "College",
    title: "Electronics & Telecommunication Engineering, PICT",
    text: "The engineering base. I landed my first product role by cold-emailing the VP of Product.",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;700&family=Literata:opsz,wght@7..72,400;7..72,600&display=swap');
.pf{
  --bg:#F6F8FA; --ink:#0F1A24; --muted:#58677A; --rule:#D9E0E8; --blue:#2F5BFF; --on-blue:#FFFFFF; --tint:#E8EEFF;
  --display:'Familjen Grotesk','Segoe UI',system-ui,sans-serif; --body:'Literata',Georgia,serif;
  min-height:100vh; background:var(--bg); color:var(--ink); font:400 1.0625rem/1.7 var(--body);
  -webkit-font-smoothing:antialiased;
}
@media (prefers-color-scheme:dark){
  .pf{--bg:#0C131B;--ink:#EDF2F7;--muted:#9BABBD;--rule:#27364A;--blue:#7C98FF;--on-blue:#0C131B;--tint:#1A2742;}
}
.pf *,.pf *::before,.pf *::after{box-sizing:border-box;}
.pf a{color:var(--blue);text-underline-offset:3px;}
.pf a:focus-visible{outline:3px solid var(--blue);outline-offset:3px;border-radius:2px;}
.pf .wrap{max-width:960px;margin:0 auto;padding:0 clamp(1.25rem,5vw,2.5rem);}
.pf h1,.pf h2,.pf h3{font-family:var(--display);margin:0;letter-spacing:-0.025em;line-height:1.05;}
.pf .top{display:flex;justify-content:space-between;padding:1.5rem 0;font-family:var(--display);font-weight:500;}
.pf .top a{color:var(--ink);text-decoration:none;margin-left:1.5rem;}
.pf .hero{padding:clamp(2.5rem,9vw,6rem) 0 clamp(2.5rem,7vw,4.5rem);}
.pf h1{font-size:clamp(2.75rem,9vw,6rem);font-weight:700;}
.pf .sub{font-size:1.3rem;max-width:36rem;margin:1.75rem 0 0;color:var(--muted);}
.pf .latest{display:inline-block;margin-top:2rem;background:var(--tint);padding:.6rem 1rem;border-radius:6px;font-family:var(--display);font-weight:500;}
.pf .latest b{color:var(--blue);}
.pf h2{font-size:clamp(1.9rem,4vw,2.6rem);font-weight:700;padding-top:3rem;}
.pf .log{margin-top:2rem;border-top:1px solid var(--rule);}
.pf .entry{display:grid;gap:.75rem;padding:2rem 0;border-bottom:1px solid var(--rule);}
.pf .ver{font-family:var(--display);font-weight:700;font-size:1.5rem;color:var(--blue);}
.pf .when{display:block;font-family:var(--body);font-weight:400;font-size:.95rem;color:var(--muted);margin-top:.15rem;}
.pf .entry h3{font-size:1.5rem;font-weight:700;}
.pf .entry p{margin:.6rem 0 0;max-width:62ch;}
.pf .entry ul{margin:.75rem 0 0;padding-left:1.2rem;max-width:62ch;}
.pf .entry li{margin:.35rem 0;}
.pf .entry li::marker{color:var(--blue);}
.pf .contact{padding:3rem 0 4rem;}
.pf .contact p{max-width:34rem;color:var(--muted);margin:1rem 0 1.5rem;}
.pf .btn{display:inline-block;background:var(--blue);color:var(--on-blue);font-family:var(--display);font-weight:700;padding:.85rem 1.5rem;border-radius:6px;text-decoration:none;}
.pf .btn:focus-visible{outline:3px solid var(--ink);outline-offset:3px;}
.pf .links{margin-top:1.5rem;display:flex;gap:1.5rem;flex-wrap:wrap;}
.pf footer{border-top:1px solid var(--rule);padding:1.5rem 0 2.5rem;color:var(--muted);font-size:.9rem;}
@media (min-width:760px){.pf .entry{grid-template-columns:200px 1fr;gap:2.5rem;}}
`;

function Release({ version, when, title, text, points }) {
  return (
    <article className="entry">
      <div className="ver">
        {version}
        <span className="when">{when}</span>
      </div>
      <div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {points && (
          <ul>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="pf">
      <style>{css}</style>
      <div className="wrap">
        <nav className="top" aria-label="Primary">
          <span>Srujan Ranpise</span>
          <span>
            <a href="#changelog">Changelog</a>
            <a href="#contact">Contact</a>
          </span>
        </nav>

        <header className="hero">
          <h1>Srujan Ranpise</h1>
          <p className="sub">
            Product analyst in Pune. I build logistics products at Xpressbees and companies of my
            own. Here are the release notes so far, newest first.
          </p>
          <span className="latest">
            Latest release: <b>v3.0</b>, Associate Product Analyst at Xpressbees
          </span>
        </header>

        <main>
          <h2 id="changelog">Changelog</h2>
          <div className="log">
            {releases.map((r) => (
              <Release key={r.version} {...r} />
            ))}
          </div>

          <section className="contact" id="contact">
            <h2>Get in touch</h2>
            <p>Open to conversations about product, logistics and early-stage ideas.</p>
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <div className="links">
              <a href={LINKEDIN}>LinkedIn</a>
              <a href={GITHUB}>GitHub</a>
            </div>
          </section>
        </main>

        <footer>Srujan Ranpise, Pune</footer>
      </div>
    </div>
  );
}