import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Activities", href: "/#activities" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleHome = () => {
    setOpen(false);
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHash = (e, href) => {
    setOpen(false);
    e.preventDefault();
    const id = href.slice(2);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={handleHome}>Dilshan Jagoda</Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? "✕" : "☰"}
      </button>
      <div className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) =>
          l.href === "/" ? (
            <Link key={l.label} to="/" onClick={handleHome}>
              {l.label}
            </Link>
          ) : (
            <a key={l.label} href={l.href} onClick={(e) => handleHash(e, l.href)}>
              {l.label}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
