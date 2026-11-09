import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <article className="entry">
        <p className="meta">{education.period}</p>
        <div>
          <h3>{education.degree}, {education.school}</h3>
          <p>Coursework: {education.courses.join(", ")}.</p>
        </div>
      </article>
    </section>
  );
}
