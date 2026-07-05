const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:3002';
const sizes = [
  { name: 'mobile-375', width: 375, height: 900 },
  { name: 'mobile-390', width: 390, height: 900 },
  { name: 'mobile-430', width: 430, height: 940 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 1000 },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9223');
  const results = [];
  for (const size of sizes) {
    const context = await browser.newContext({ viewport: { width: size.width, height: size.height } });
    const page = await context.newPage();

    await page.goto(`${BASE}/get-involved`, { waitUntil: 'networkidle' });
    const hero = await page.evaluate(() => {
      const section = document.querySelector('.get-involved-hero');
      const inner = document.querySelector('.get-involved-hero .sub-hero-inner');
      const h1 = document.querySelector('.get-involved-hero h1');
      const p = document.querySelector('.get-involved-hero .sub-hero-inner > p:not(.section-eyebrow)');
      const actions = document.querySelector('.get-involved-hero .sub-actions');
      const glow = document.querySelector('.get-involved-hero .sub-hero-glow');
      const sr = section.getBoundingClientRect();
      const ir = inner.getBoundingClientRect();
      const gr = glow.getBoundingClientRect();
      const cs = getComputedStyle(inner);
      return {
        viewport: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        sectionCenter: sr.left + sr.width / 2,
        innerCenter: ir.left + ir.width / 2,
        innerLeft: ir.left,
        innerRight: ir.right,
        textAlign: cs.textAlign,
        h1Align: getComputedStyle(h1).textAlign,
        pWidth: p.getBoundingClientRect().width,
        actionsLeft: actions.getBoundingClientRect().left,
        glowCenter: gr.left + gr.width / 2,
        glowLeft: gr.left,
      };
    });
    assert(hero.scrollWidth <= hero.viewport + 1, `${size.name}: get-involved has horizontal scroll`);
    assert(Math.abs(hero.sectionCenter - hero.viewport / 2) < 1.5, `${size.name}: hero section is not centered`);
    assert(['left', 'start'].includes(hero.textAlign) && ['left', 'start'].includes(hero.h1Align), `${size.name}: hero text is not left-aligned`);
    assert(hero.innerLeft >= -1 && hero.innerRight <= hero.viewport + 1, `${size.name}: hero group exceeds viewport`);
    assert(hero.pWidth <= 625, `${size.name}: hero description is too wide`);
    assert(Math.abs(hero.actionsLeft - hero.innerLeft) < 2, `${size.name}: CTA buttons are not aligned under text block`);
    assert(hero.glowCenter < hero.viewport * 0.5, `${size.name}: decorative circle is not on left side`);

    await page.goto(BASE, { waitUntil: 'networkidle' });
    const email = await page.evaluate(() => {
      const card = document.querySelector('.email-card-supporter');
      const prayer = document.querySelector('.prayer-request-cta');
      const panel = document.querySelector('.supporter-signup-panel');
      const input = document.querySelector('.email-card-supporter input[type="email"]');
      const button = document.querySelector('.email-card-supporter button');
      const link = document.querySelector('.prayer-request-cta a');
      const cr = card.getBoundingClientRect();
      const pr = prayer.getBoundingClientRect();
      const sr = panel.getBoundingClientRect();
      const ir = input.getBoundingClientRect();
      const br = button.getBoundingClientRect();
      const lr = link.getBoundingClientRect();
      const placeholder = getComputedStyle(input, '::placeholder').color;
      const inputBg = getComputedStyle(input).backgroundColor;
      const gridColumns = getComputedStyle(card).gridTemplateColumns;
      return {
        viewport: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        cardWidth: cr.width,
        cardLeft: cr.left,
        cardRight: cr.right,
        prayerLeft: pr.left,
        prayerRight: pr.right,
        panelLeft: sr.left,
        panelRight: sr.right,
        inputWidth: ir.width,
        buttonWidth: br.width,
        linkWidth: lr.width,
        placeholder,
        inputBg,
        gridColumns,
        centerDelta: Math.abs((pr.top + pr.height / 2) - (sr.top + sr.height / 2)),
      };
    });
    assert(email.scrollWidth <= email.viewport + 1, `${size.name}: home page has horizontal scroll`);
    assert(email.cardLeft >= -1 && email.cardRight <= email.viewport + 1, `${size.name}: email card exceeds viewport`);
    assert(email.placeholder === 'rgba(16, 17, 13, 0.62)' || email.placeholder === 'rgb(16, 17, 13)', `${size.name}: placeholder color is not the expected readable dark tone: ${email.placeholder}`);
    assert(email.inputWidth > 0 && email.buttonWidth > 0 && email.linkWidth > 0, `${size.name}: form controls are not visible`);
    if (size.width >= 981) {
      assert(email.prayerRight < email.panelLeft, `${size.name}: desktop prayer CTA is not left of signup form`);
      assert(email.centerDelta < 90, `${size.name}: desktop email card columns are not vertically aligned`);
    } else {
      assert(email.panelLeft >= email.cardLeft - 1 && email.panelRight <= email.cardRight + 1, `${size.name}: mobile signup panel is not contained`);
    }

    results.push({ size: size.name, hero, email });
    await context.close();
  }
  await browser.close();
  console.log(JSON.stringify(results.map(r => ({
    size: r.size,
    heroTextAlign: r.hero.textAlign,
    heroGlowCenter: Math.round(r.hero.glowCenter),
    viewport: r.hero.viewport,
    placeholder: r.email.placeholder,
    emailGrid: r.email.gridColumns,
    emailCardWidth: Math.round(r.email.cardWidth),
  })), null, 2));
})().catch(err => {
  console.error(err.stack || err.message);
  process.exit(1);
});
