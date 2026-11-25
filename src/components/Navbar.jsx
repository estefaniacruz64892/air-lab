const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cursos", label: "Cursos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar__brand">Air Lab</span>
      <nav aria-label="Navegación principal">
        <ul className="navbar__links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
