import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useRouter } from "../router";

const companyLinks = [
  { label: "CRM Management", hash: "crm-management" },
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
  const [activeHomeSection, setActiveHomeSection] = useState("home"); // "home" or "expertise"
  const { path, navigate } = useRouter();

  const closeMenu = () => {
    setMobileOpen(false);
    setCompanyOpen(false);
  };

  // Scroll spy for Home page:
  // Once the user crosses "The MARTÉ Approach" (#approach),
  // the red underline shifts smoothly from "Home" to "Our Expertise".
  useEffect(() => {
    if (path !== "/") {
      setActiveHomeSection("");
      return;
    }

    const checkScrollPosition = () => {
      const approachEl = document.getElementById("approach");
      const whyUsEl = document.getElementById("crm-management") || document.getElementById("why-us");
      const navbarOffset = 100;

      if (approachEl) {
        const rect = approachEl.getBoundingClientRect();
        // If the bottom of The MARTÉ Approach has scrolled past the upper viewport:
        if (rect.bottom <= navbarOffset + 50) {
          setActiveHomeSection("expertise");
        } else {
          setActiveHomeSection("home");
        }
      } else if (whyUsEl) {
        const rect = whyUsEl.getBoundingClientRect();
        if (rect.top <= navbarOffset + 250) {
          setActiveHomeSection("expertise");
        } else {
          setActiveHomeSection("home");
        }
      } else {
        if (window.scrollY > 1150) {
          setActiveHomeSection("expertise");
        } else {
          setActiveHomeSection("home");
        }
      }
    };

    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [path]);

  const scrollToHashTarget = (hash) => {
    let target = document.getElementById(hash);
    if (!target && hash === "crm-management") {
      target = document.getElementById("why-us");
    }
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCompanyLinkClick = (hash) => {
    closeMenu();
    if (path !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToHashTarget(hash);
      }, 150);
    } else {
      scrollToHashTarget(hash);
    }
  };

  const handleExpertiseTopClick = () => {
    if (path !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToHashTarget("expertise");
      }, 150);
      closeMenu();
    } else {
      if (window.innerWidth <= 768) {
        setCompanyOpen((curr) => !curr);
      } else {
        scrollToHashTarget("expertise");
      }
    }
  };

  const isHomeActive = path === "/" && activeHomeSection === "home";
  const isExpertiseActive = path === "/" && activeHomeSection === "expertise";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="MARTÉ home">
          <img src="/logo/marte-logo-transparent.png" alt="MARTÉ" />
        </Link>

        <nav className={`desktop-nav ${mobileOpen ? "mobile-active" : ""}`} aria-label="Main navigation">
          {/* Quick Return to Home Tab */}
          <Link
            to="/"
            className={`nav-link ${isHomeActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* Our Expertise Dropdown / Nav Tab */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className={`nav-link dropdown-trigger ${isExpertiseActive ? "active" : ""}`}
              onClick={handleExpertiseTopClick}
              type="button"
              aria-expanded={companyOpen}
            >
              Our Expertise <ChevronDown size={15} className={companyOpen ? "rotate-icon" : ""} />
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
