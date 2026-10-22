import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const companyLinks = [
  { label: "CRM Management", href: "#crm-management" },
  { label: "Services", href: "#services" },
  { label: "Our Expertise", href: "#expertise" }
];

const mainLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact Us", href: "#lead-form" }
];

function Navbar({ onOpenConsultation }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const closeMenu = () => { setMobileOpen(false); setCompanyOpen(false); };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="nav-logo" onClick={closeMenu} aria-label="MARTÉ home">
          <img src="/logo/marte-logo-transparent.png" alt="MARTÉ" />
        </a>
        <nav className={`desktop-nav ${mobileOpen ? "mobile-active" : ""}`} aria-label="Main navigation">
          <div className="nav-dropdown" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="nav-link dropdown-trigger" onClick={() => setCompanyOpen(current => !current)} type="button" aria-expanded={companyOpen}>
              Our Company <ChevronDown size={15} className={companyOpen ? "rotate-icon" : ""} />
            </button>
            <div className={`dropdown-menu ${companyOpen ? "show" : ""}`}>
              {companyLinks.map(item => <a key={item.href} href={item.href} onClick={closeMenu} className="dropdown-item">{item.label}</a>)}
            </div>
          </div>
          {mainLinks.map(item => <a key={item.href} href={item.href} className="nav-link" onClick={closeMenu}>{item.label}</a>)}
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
        <button className="mobile-menu-button" onClick={() => setMobileOpen(current => !current)} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
export default Navbar;
