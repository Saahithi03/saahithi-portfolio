import { education } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <article className="entry">
        <p className="meta">{education.period}</p>
        <div>
          <h3>
            {education.degree}, {education.school}
          </h3>
          {education.cgpa && <p>CGPA: {education.cgpa}</p>}
          <p>{education.courses.join(", ")}.</p>
        </div>
      </article>
    </section>
  );
}
