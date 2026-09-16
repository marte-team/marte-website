import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const companyLinks = [
  { label: "CRM Management", href: "#crm-management" },
  { label: "Services", href: "#services" },
  { label: "Our Expertise", href: "#expertise" }
];

const mainLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setCompanyOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="nav-logo" onClick={closeMenu}>
          <img src="/logo/marte-logo.svg" alt="MARTÉ" />
        </a>

        <nav className={`desktop-nav ${mobileOpen ? "mobile-active" : ""}`}>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => setCompanyOpen((current) => !current)}
              type="button"
            >
              Our Company
              <ChevronDown
                size={15}
                className={companyOpen ? "rotate-icon" : ""}
              />
            </button>

            <div className={`dropdown-menu ${companyOpen ? "show" : ""}`}>
              {companyLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="dropdown-item"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {mainLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen((current) => !current)}
          type="button"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;