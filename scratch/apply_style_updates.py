with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update font import
css = css.replace(
    '@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap");',
    '@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap");'
)

# 2. Update root variables
old_vars = '''  --font-main: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "DM Mono", monospace;'''

new_vars = '''  --font-main: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-heading: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-eyebrow: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;'''

css = css.replace(old_vars, new_vars)

# 3. Update headings and eyebrows font family & uppercase
old_headings = '''.section-heading h2,
.expertise-header h2,
.about-intro h2 {
  max-width: 820px;
  margin: 0;
  font-size: clamp(38px, 4.4vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.05em;
  font-weight: 700;
}'''

new_headings = '''.section-heading h2,
.expertise-header h2,
.about-intro h2,
.dark-heading h2,
.about-header-wrap h2,
.lead-cta-copy h2,
.health-intro h2 {
  max-width: 820px;
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(32px, 3.8vw, 58px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  font-weight: 700;
  text-transform: uppercase;
}'''

css = css.replace(old_headings, new_headings)

# 4. Update hero H1 font size for 2:1 proportion
old_hero_h1 = '''.hero h1 {
  max-width: 900px;
  margin: 0 auto;
  font-size: clamp(42px, 6vw, 84px);
  line-height: 0.98;
  letter-spacing: -0.06em;
  font-weight: 800;
}'''

new_hero_h1 = '''.hero h1 {
  max-width: 680px;
  margin: 0 auto;
  font-family: var(--font-heading);
  font-size: clamp(24px, 3.2vw, 38px);
  line-height: 1.18;
  letter-spacing: -0.03em;
  font-weight: 700;
  text-transform: uppercase;
}'''

css = css.replace(old_hero_h1, new_hero_h1)

# 5. Add Space Grotesk in CAPS to .eyebrow
old_eyebrow = '''.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--red);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}'''

new_eyebrow = '''.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--red);
  font-family: var(--font-eyebrow);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}'''

css = css.replace(old_eyebrow, new_eyebrow)

# 6. Replace About Section CSS with single unified font size & quote box
about_css = '''
/* =========================
   07 / ABOUT US (UNIFIED STORYTELLING)
========================= */

.about-section {
  background: var(--white);
  padding: 110px 0;
}

.about-header-wrap {
  margin-bottom: 55px;
}

.about-header-wrap h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.05;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  margin: 0;
}

.about-story-container {
  max-width: 860px;
}

.about-narrative-paragraph {
  margin: 0 0 24px;
  color: #3b3b36;
  font-size: 16.5px;
  line-height: 1.85;
  font-weight: 400;
}

.about-core-belief-card {
  margin: 38px 0;
  padding: 26px 32px;
  background: #f8f8f5;
  border-left: 3px solid var(--red);
  border-radius: var(--radius);
}

.about-core-belief-card p {
  margin: 0;
  color: var(--black);
  font-family: var(--font-heading);
  font-size: clamp(19px, 2.2vw, 24px);
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: -0.02em;
}
'''

# Find the start of about section
import re
css = re.sub(r'/\* =+\s+07 / ABOUT US[\s\S]*?(?=/\* =+\s+08 / HEALTH CHECK)', about_css + '\n', css)

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("index.css updated successfully!")
