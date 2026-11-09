import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
