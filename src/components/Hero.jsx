import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <h1>
        Hi, I'm {profile.name}. I build web apps from the database to the
        browser.
      </h1>
      <p className="lead">{profile.summary}</p>
      <div className="actions">
        <a className="btn primary" href="#projects">
          See my work
        </a>
        <a className="btn" href={`mailto:${profile.email}`}>
          Email me
        </a>
      </div>
    </section>
  );
}
