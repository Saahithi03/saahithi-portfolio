import { profile } from "../data/resume";

const links = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">{profile.name}</a>
      <nav aria-label="Main">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
