import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Open to full-stack and AI-focused roles. The fastest way to reach me is email.</p>
      <ul className="contact-list">
        <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
        {profile.linkedin && <li><a href={profile.linkedin}>LinkedIn</a></li>}
        {profile.github && <li><a href={profile.github}>GitHub</a></li>}
      </ul>
    </section>
  );
}
