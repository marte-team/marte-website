const LINKEDIN_URL = "#";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src="/logo/marte-logo.svg" alt="MARTÉ" />
            </div>

            <p>
              CRM systems, marketing automation, growth, and deliverability,
              brought together under one partner.
            </p>
          </div>

          <div className="footer-contact">
            <span className="eyebrow">CONTACT US</span>

            <a href="mailto:sales.marte.com@gmail.com">
              sales.marte.com@gmail.com
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MARTÉ. All rights reserved.</span>

          <span>CRM • AUTOMATION • GROWTH</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;