import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useRouter } from "../router";

const companyLinks = [
  { label: "CRM Management", hash: "services" },
  { label: "Services", hash: "services" },
  { label: "Our Expertise", hash: "expertise" }
];

const mainLinks = [
  { label: "About Us", to: "/aboutus" },
  { label: "Our Clients", to: "/clients" },
  { label: "Contact Us", to: "/contact" }
];

function Navbar({ onOpenConsultation }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const { path, navigate } = useRouter();

  const closeMenu = () => {
    setMobileOpen(false);
    setCompanyOpen(false);
  };

  const handleCompanyLinkClick = (hash) => {
    closeMenu();
    if (path !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="MARTÉ home">
          <img src="/logo/marte-logo-transparent.png" alt="MARTÉ" />
        </Link>

        <nav className={`desktop-nav ${mobileOpen ? "mobile-active" : ""}`} aria-label="Main navigation">
          <div
            className="nav-dropdown"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => setCompanyOpen((current) => !current)}
              type="button"
              aria-expanded={companyOpen}
            >
              Our Company <ChevronDown size={15} className={companyOpen ? "rotate-icon" : ""} />
            </button>
            <div className={`dropdown-menu ${companyOpen ? "show" : ""}`}>
              {companyLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleCompanyLinkClick(item.hash)}
                  className="dropdown-item"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {mainLinks.map((item) => {
            const isActive = path === item.to || (item.to === "/aboutus" && path === "/about");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            className="nav-cta-button"
            onClick={() => {
              closeMenu();
              if (onOpenConsultation) onOpenConsultation();
            }}
          >
            <span>Book a Free Consultation</span>
            <ArrowUpRight size={15} />
          </button>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen((current) => !current)}
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
