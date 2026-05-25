import { socialLinks } from '../data/portfolio';

function NavBar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand-mark" href={import.meta.env.BASE_URL}>
        <span className="brand-mark__sigil">AD</span>
        <span>Aidan Decker</span>
      </a>

      <div className="nav-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            <span className="nav-links__icon" aria-hidden="true">
              {link.shortLabel}
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
