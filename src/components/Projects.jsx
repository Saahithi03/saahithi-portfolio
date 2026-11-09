import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map((p) => (
        <article key={p.name} className="entry">
          <p className="meta">{p.period}</p>
          <div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <ul className="chips" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {p.link && (
              <a className="text-link" href={p.link}>
                View project
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
