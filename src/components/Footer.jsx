import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/marte-business/";
const CONTACT_EMAIL = "sales.marte.com@gmail.com";

function Footer({ onOpenConsultation }) {
  return (
    <footer className="footer" id="contact">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo-wrap" href="#top" aria-label="MARTÉ home">
              <img src="/logo/marte-logo-transparent.png" alt="MARTÉ" />
            </a>
            <p>
              CRM and growth services, brought together under one accountable partner. Empowering businesses across EMEA and LATAM.
            </p>
            <div className="footer-quick-action">
              <button
                type="button"
                className="footer-consultation-btn"
                onClick={() => {
                  if (onOpenConsultation) onOpenConsultation();
                }}
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          <div className="footer-contact">
            <span className="eyebrow">GET IN TOUCH</span>
            
            {/* Email with Mailbox Icon */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="footer-contact-link footer-email-link"
              aria-label="Email MARTÉ"
            >
              <div className="contact-icon-bubble">
                <Mail size={18} />
              </div>
              <div className="contact-link-text">
                <small>Direct Inquiries</small>
                <span>{CONTACT_EMAIL}</span>
              </div>
            </a>

            {/* LinkedIn with Transparent Logo */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link footer-linkedin-link"
              aria-label="MARTÉ on LinkedIn"
            >
              <div className="contact-icon-bubble linkedin-bubble">
                <Linkedin size={18} />
              </div>
              <div className="contact-link-text">
                <small>Company Page</small>
                <span>Follow MARTÉ on LinkedIn</span>
              </div>
              <ArrowUpRight size={15} className="link-external-arrow" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MARTÉ. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#services">Services</a>
            <span>•</span>
            <a href="#expertise">Expertise</a>
            <span>•</span>
            <a href="#clients">Clients</a>
            <span>•</span>
            <a href="#lead-form">Contact</a>
          </div>
          <span>CRM • GROWTH SERVICES</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
