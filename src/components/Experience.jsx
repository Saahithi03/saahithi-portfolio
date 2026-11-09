import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experience.map((job) => (
        <article key={job.company} className="entry">
          <p className="meta">{job.period}</p>
          <div>
            <h3>
              {job.title}, {job.company}
            </h3>
            {job.subtitle && <p>{job.subtitle}</p>}
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {job.stack && (
              <ul className="chips" aria-label="Tech stack">
                {job.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
