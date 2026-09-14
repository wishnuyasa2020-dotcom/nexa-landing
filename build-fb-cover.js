const fs = require('fs');
const path = require('path');
const sharp = require('c:/Users/wishn/Documents/Codex/nexa-crm-web/node_modules/sharp');

async function generateFacebookCover() {
  const outDir = __dirname;
  const logoPath = path.join(outDir, 'logo.png');
  const logoBuf = fs.readFileSync(logoPath);
  const logoBase64 = logoBuf.toString('base64');

  // Facebook Cover Dimensions:
  // Standard full canvas: 1640 x 924 (16:9 - perfect for Mobile FB app)
  // Desktop display viewport: 1640 x 624 (crops 150px top & bottom)
  const width = 1640;
  const height = 924;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712" />
      <stop offset="35%" stop-color="#050D1A" />
      <stop offset="70%" stop-color="#091527" />
      <stop offset="100%" stop-color="#040913" />
    </linearGradient>

    <!-- Neon Accent Gradients -->
    <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00D68F" />
      <stop offset="60%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>

    <linearGradient id="accentBtn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00E599" />
      <stop offset="100%" stop-color="#00B87A" />
    </linearGradient>

    <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#60A5FA" />
    </linearGradient>

    <linearGradient id="windowBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(0, 214, 143, 0.4)" />
      <stop offset="50%" stop-color="rgba(56, 189, 248, 0.2)" />
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.08)" />
    </linearGradient>

    <linearGradient id="glassCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(13, 24, 44, 0.88)" />
      <stop offset="100%" stop-color="rgba(6, 13, 26, 0.96)" />
    </linearGradient>

    <linearGradient id="metricCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(20, 36, 62, 0.75)" />
      <stop offset="100%" stop-color="rgba(11, 20, 36, 0.88)" />
    </linearGradient>

    <linearGradient id="leadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>

    <linearGradient id="prospectGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A78BFA" />
      <stop offset="100%" stop-color="#7C3AED" />
    </linearGradient>

    <linearGradient id="oppGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00D68F" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>

    <linearGradient id="custGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <!-- Atmospheric Glow Filters -->
    <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="120" />
    </filter>
    <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="140" />
    </filter>
    <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
    </filter>

    <!-- Deep Drop Shadows -->
    <filter id="windowShadow" x="-15%" y="-15%" width="130%" height="135%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#000000" flood-opacity="0.65" />
    </filter>
    <filter id="btnGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="14" flood-color="#00D68F" flood-opacity="0.38" />
    </filter>
  </defs>

  <style>
    .font-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .brand-text { font-weight: 900; font-size: 42px; fill: #FFFFFF; letter-spacing: -0.8px; }
    .brand-accent { fill: #00D68F; }
    .badge-label { font-size: 11.5px; font-weight: 700; fill: #00D68F; letter-spacing: 1.5px; text-transform: uppercase; }
    .h1-main { font-size: 44px; font-weight: 900; fill: #FFFFFF; letter-spacing: -1.4px; line-height: 1.12; }
    .h1-accent { font-size: 44px; font-weight: 900; fill: url(#neonGreen); letter-spacing: -1.4px; line-height: 1.12; }
    .lead-desc { font-size: 17px; font-weight: 400; fill: #94A3B8; line-height: 1.55; }
    .lead-bold { font-weight: 600; fill: #E2E8F0; }
    .pill-h { font-size: 13.5px; font-weight: 700; fill: #F1F5F9; }
    .pill-sub { font-size: 11px; font-weight: 500; fill: #94A3B8; }
    .card-lbl { font-size: 10px; font-weight: 700; fill: #64748B; text-spacing: 0.8px; text-transform: uppercase; }
    .card-num { font-size: 24px; font-weight: 900; fill: #FFFFFF; }
    .card-growth { font-size: 11px; font-weight: 700; fill: #00D68F; }
    .st-name { font-size: 12px; font-weight: 600; fill: #CBD5E1; }
    .st-num { font-size: 12px; font-weight: 800; fill: #FFFFFF; }
    .wa-badge { font-size: 10.5px; font-weight: 800; fill: #22C55E; letter-spacing: 0.5px; }
  </style>

  <!-- Deep Cosmic Canvas Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Ambient Light Orbs -->
  <circle cx="120" cy="200" r="300" fill="#00D68F" opacity="0.12" filter="url(#glowGreen)" />
  <circle cx="1480" cy="460" r="340" fill="#38BDF8" opacity="0.16" filter="url(#glowBlue)" />
  <circle cx="980" cy="240" r="220" fill="#A78BFA" opacity="0.08" filter="url(#glowPurple)" />
  <circle cx="800" cy="860" r="260" fill="#00D68F" opacity="0.09" filter="url(#glowGreen)" />

  <!-- High-Tech Blueprint Background Grid (Fine & Modern) -->
  <g opacity="0.035" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="150" x2="1640" y2="150" stroke-dasharray="6 8" />
    <line x1="0" y1="300" x2="1640" y2="300" />
    <line x1="0" y1="462" x2="1640" y2="462" />
    <line x1="0" y1="624" x2="1640" y2="624" />
    <line x1="0" y1="774" x2="1640" y2="774" stroke-dasharray="6 8" />
    <line x1="180" y1="0" x2="180" y2="924" />
    <line x1="420" y1="0" x2="420" y2="924" />
    <line x1="680" y1="0" x2="680" y2="924" />
    <line x1="940" y1="0" x2="940" y2="924" />
    <line x1="1200" y1="0" x2="1200" y2="924" />
    <line x1="1460" y1="0" x2="1460" y2="924" />
  </g>

  <!-- Glowing Cyan & Emerald Vector Circuits / Connection Traces -->
  <path d="M 880 730 L 980 630 L 1580 630" fill="none" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1.5" stroke-dasharray="8 6" />
  <path d="M 940 770 L 1020 690 L 1420 690" fill="none" stroke="rgba(0, 214, 143, 0.28)" stroke-width="1.5" />
  <circle cx="1020" cy="690" r="4.5" fill="#00D68F" />
  <circle cx="980" cy="630" r="4.5" fill="#38BDF8" />

  <!-- ================================================================
       SAFE ZONE CONTENT (Central Height: Y = 160 to 764 px)
       Visible seamlessly on both Mobile (16:9 full) & Desktop (820:312 crop)
       ================================================================ -->

  <!-- LEFT COLUMN: BRANDING, VALUE PROPOSITION, VALUE PILLARS & CTA -->
  <g transform="translate(100, 185)">
    <!-- 1. Category Pill Badge with Pulsing Live Dot -->
    <g transform="translate(0, 0)">
      <rect width="365" height="32" rx="16" fill="rgba(0, 214, 143, 0.08)" stroke="rgba(0, 214, 143, 0.35)" stroke-width="1.2" />
      <circle cx="18" cy="16" r="4.5" fill="#00D68F" />
      <text x="32" y="20" class="font-sans badge-label">EVIDENCE-BASED CRM · LPK &amp; VOKASI</text>
    </g>

    <!-- 2. Logo & Brand Title -->
    <g transform="translate(0, 48)">
      <!-- Soft Logo Glow -->
      <circle cx="28" cy="28" r="30" fill="#00D68F" opacity="0.2" filter="url(#glowGreen)" />
      <image href="data:image/png;base64,${logoBase64}" x="0" y="0" width="56" height="56" />
      <text x="70" y="42" class="font-sans brand-text">Nexa<tspan class="brand-accent">MOS</tspan></text>
      <rect x="268" y="18" width="102" height="24" rx="6" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
      <text x="278" y="34" class="font-sans" font-size="11" font-weight="700" fill="#94A3B8" letter-spacing="0.6">SAAS CLOUD</text>
    </g>

    <!-- 3. Primary Headline -->
    <g transform="translate(0, 146)">
      <text x="0" y="0" class="font-sans h1-main">CRM yang Tahu Kapan Bertindak,</text>
      <text x="0" y="52" class="font-sans h1-accent">dan Kepada Siapa Harus Bicara.</text>
    </g>

    <!-- 4. Sub-headline / Core Description -->
    <g transform="translate(0, 248)">
      <text x="0" y="0" class="font-sans lead-desc">
        Stop kelola ratusan prospek pakai asumsi. Hadir dengan <tspan class="lead-bold">pipeline berbasis bukti (FNAR)</tspan>,
      </text>
      <text x="0" y="26" class="font-sans lead-desc">
        Smart WhatsApp Routing, dan database privat multi-tenant untuk LPK &amp; Sekolah Vokasi.
      </text>
    </g>

    <!-- 5. 3 Value Pillars -->
    <g transform="translate(0, 314)">
      <!-- Pillar 1: FNAR -->
      <g transform="translate(0, 0)">
        <rect width="230" height="66" rx="12" fill="url(#metricCardGrad)" stroke="rgba(0, 214, 143, 0.25)" stroke-width="1" />
        <rect x="0" y="0" width="4.5" height="66" rx="2" fill="#00D68F" />
        <text x="18" y="28" class="font-sans pill-h">🎯 Validasi FNAR</text>
        <text x="18" y="49" class="font-sans pill-sub">Objektif, bukan perasaan</text>
      </g>

      <!-- Pillar 2: Smart WA -->
      <g transform="translate(245, 0)">
        <rect width="230" height="66" rx="12" fill="url(#metricCardGrad)" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1" />
        <rect x="0" y="0" width="4.5" height="66" rx="2" fill="#38BDF8" />
        <text x="18" y="28" class="font-sans pill-h">⚡ Smart WA Routing</text>
        <text x="18" y="49" class="font-sans pill-sub">Hemat biaya Meta API</text>
      </g>

      <!-- Pillar 3: Multi-tenant -->
      <g transform="translate(490, 0)">
        <rect width="230" height="66" rx="12" fill="url(#metricCardGrad)" stroke="rgba(167, 139, 250, 0.25)" stroke-width="1" />
        <rect x="0" y="0" width="4.5" height="66" rx="2" fill="#A78BFA" />
        <text x="18" y="28" class="font-sans pill-h">🛡️ Database Privat</text>
        <text x="18" y="49" class="font-sans pill-sub">Multi-tenant terisolasi</text>
      </g>
    </g>

    <!-- 6. Call To Action & Domain Badges -->
    <g transform="translate(0, 412)">
      <!-- Primary CTA Button -->
      <g filter="url(#btnGlow)">
        <rect width="186" height="46" rx="10" fill="url(#accentBtn)" />
        <text x="24" y="28" class="font-sans" font-size="14.5" font-weight="800" fill="#030712" letter-spacing="0.2">🚀 Coba Demo Live</text>
      </g>

      <!-- Domain Link Badge -->
      <g transform="translate(204, 0)">
        <rect width="195" height="46" rx="10" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
        <text x="26" y="28" class="font-sans" font-size="14" font-weight="700" fill="#38BDF8" letter-spacing="0.5">🌐 nexamos.cloud ↗</text>
      </g>

      <!-- Pilot Partner Credibility Tag -->
      <g transform="translate(418, 14)">
        <circle cx="6" cy="6" r="4" fill="#00D68F" />
        <text x="18" y="10" class="font-sans" font-size="12.5" font-weight="600" fill="#64748B">Batch 1 Closed Beta · Battle-Tested Derma Indonesia</text>
      </g>
    </g>
  </g>

  <!-- ================================================================
       RIGHT COLUMN: SLEEK GLASSMORPHIC DASHBOARD PREVIEW
       ================================================================ -->
  <g transform="translate(930, 175)" filter="url(#windowShadow)">
    <!-- Main Window Container -->
    <rect width="610" height="505" rx="18" fill="url(#glassCardGrad)" stroke="url(#windowBorder)" stroke-width="1.5" />

    <!-- Window Title Bar -->
    <rect width="610" height="42" rx="18" fill="rgba(6, 13, 26, 0.85)" />
    <!-- Traffic lights -->
    <circle cx="24" cy="21" r="5" fill="#EF4444" />
    <circle cx="40" cy="21" r="5" fill="#F59E0B" />
    <circle cx="56" cy="21" r="5" fill="#10B981" />
    <!-- Simulated Browser Address Bar -->
    <rect x="80" y="9" width="320" height="24" rx="6" fill="rgba(255, 255, 255, 0.06)" />
    <text x="94" y="25" class="font-sans" font-family="monospace" font-size="11" fill="#475569">https://crm.nexamos.cloud/pipeline</text>
    <!-- Live Badge -->
    <rect x="525" y="10" width="68" height="22" rx="11" fill="rgba(0, 214, 143, 0.12)" stroke="rgba(0, 214, 143, 0.35)" stroke-width="1" />
    <circle cx="538" cy="21" r="3.5" fill="#00D68F" />
    <text x="548" y="25" class="font-sans" font-size="10" font-weight="700" fill="#00D68F">LIVE</text>

    <!-- Header Content Inside Window -->
    <g transform="translate(24, 62)">
      <text x="0" y="16" class="font-sans" font-size="14" font-weight="800" fill="#F1F5F9">Command Center · Pipeline Kualifikasi FNAR</text>
      <text x="445" y="16" class="font-sans" font-size="11" font-weight="600" fill="#64748B">Periode 2026/2027</text>
    </g>

    <!-- 3 High-Impact Metrics Cards -->
    <g transform="translate(24, 98)">
      <!-- Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="176" height="74" rx="10" fill="url(#metricCardGrad)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1" />
        <text x="14" y="23" class="font-sans card-lbl">TOTAL LEADS</text>
        <text x="14" y="52" class="font-sans card-num">542</text>
        <text x="76" y="50" class="font-sans card-growth">+38% MoM</text>
      </g>

      <!-- Card 2 -->
      <g transform="translate(192, 0)">
        <rect width="176" height="74" rx="10" fill="url(#metricCardGrad)" stroke="rgba(0, 214, 143, 0.22)" stroke-width="1" />
        <text x="14" y="23" class="font-sans card-lbl">QUALIFIED PROSPECTS</text>
        <text x="14" y="52" class="font-sans card-num" fill="#00D68F">186</text>
        <text x="76" y="50" class="font-sans" font-size="11" font-weight="700" fill="#38BDF8">Bukti FNAR</text>
      </g>

      <!-- Card 3 -->
      <g transform="translate(384, 0)">
        <rect width="176" height="74" rx="10" fill="url(#metricCardGrad)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1" />
        <text x="14" y="23" class="font-sans card-lbl">VERIFIED CUSTOMERS</text>
        <text x="14" y="52" class="font-sans card-num">48</text>
        <text x="60" y="50" class="font-sans" font-size="11" font-weight="700" fill="#F59E0B">Valid DP</text>
      </g>
    </g>

    <!-- Visual Pipeline Stages (Progress Bars) -->
    <g transform="translate(24, 192)">
      <!-- Stage 1 -->
      <g transform="translate(0, 0)">
        <text x="0" y="16" class="font-sans st-name">1. Stage: Lead (Kontak Valid + Initial Interest)</text>
        <text x="502" y="16" class="font-sans st-num">142 Siswa</text>
        <rect x="0" y="24" width="562" height="8" rx="4" fill="rgba(255, 255, 255, 0.06)" />
        <rect x="0" y="24" width="460" height="8" rx="4" fill="url(#leadGrad)" />
      </g>

      <!-- Stage 2 -->
      <g transform="translate(0, 48)">
        <text x="0" y="16" class="font-sans st-name">2. Stage: Prospect (Kualifikasi FNAR Lolos)</text>
        <text x="508" y="16" class="font-sans st-num">89 Siswa</text>
        <rect x="0" y="24" width="562" height="8" rx="4" fill="rgba(255, 255, 255, 0.06)" />
        <rect x="0" y="24" width="310" height="8" rx="4" fill="url(#prospectGrad)" />
      </g>

      <!-- Stage 3 -->
      <g transform="translate(0, 96)">
        <text x="0" y="16" class="font-sans st-name">3. Stage: Opportunity (Decision Consultation)</text>
        <text x="508" y="16" class="font-sans st-num">46 Siswa</text>
        <rect x="0" y="24" width="562" height="8" rx="4" fill="rgba(255, 255, 255, 0.06)" />
        <rect x="0" y="24" width="175" height="8" rx="4" fill="url(#oppGrad)" />
      </g>

      <!-- Stage 4 -->
      <g transform="translate(0, 144)">
        <text x="0" y="16" class="font-sans st-name">4. Stage: Customer (DP Terverifikasi Keuangan)</text>
        <text x="508" y="16" class="font-sans st-num">23 Siswa</text>
        <rect x="0" y="24" width="562" height="8" rx="4" fill="rgba(255, 255, 255, 0.06)" />
        <rect x="0" y="24" width="98" height="8" rx="4" fill="url(#custGrad)" />
      </g>
    </g>

    <!-- Floating Live WhatsApp Smart Routing Widget Card -->
    <g transform="translate(20, 396)">
      <rect width="570" height="82" rx="14" fill="rgba(4, 11, 22, 0.96)" stroke="rgba(34, 197, 94, 0.38)" stroke-width="1.2" />
      <!-- WhatsApp Icon Glow & Container -->
      <rect x="16" y="16" width="50" height="50" rx="12" fill="rgba(34, 197, 94, 0.16)" />
      <!-- Vector WhatsApp Icon -->
      <path d="M 41 29 C 34.4 29 29 34.4 29 41 C 29 43.4 29.7 45.7 31 47.6 L 29 53 L 34.8 51.2 C 36.6 52.3 38.8 53 41 53 C 47.6 53 53 47.6 53 41 C 53 34.4 47.6 29 41 29 Z" fill="#22C55E" />
      <path d="M 37.5 35 C 37 35 36.3 35.3 35.8 35.9 C 35.2 36.5 33.8 37.8 33.8 40.5 C 33.8 43.2 35.7 45.8 36 46.2 C 36.3 46.6 39.8 52 45.2 54.3 C 49.7 56.2 50.6 55.4 51.5 55.3 C 52.5 55.2 54.6 54 55.1 52.7 C 55.6 51.4 55.6 50.3 55.4 50.1 C 55.2 49.9 54.8 49.7 54.1 49.3 C 53.4 48.9 50 47.2 49.4 47 C 48.8 46.8 48.4 46.7 48 47.3 C 47.6 47.9 46.5 49.3 46.1 49.7 C 45.7 50.1 45.3 50.2 44.6 49.8 C 43.9 49.4 41.7 48.7 39 46.3 C 36.9 44.4 35.5 42.1 35.1 41.4 C 34.7 40.7 35 40.3 35.4 39.9 C 35.7 39.6 36.1 39.1 36.5 38.6 C 36.9 38.1 37 37.7 37.3 37.2 C 37.6 36.7 37.4 36.3 37.2 35.9 C 37 35.5 35.8 32.5 35.3 31.3 C 34.8 30.1 34.3 30.3 33.9 30.3 L 32.7 30.3 C 32.3 30.3 31.7 30.5 31.2 31 Z" fill="#FFFFFF" transform="matrix(0.48 0 0 0.48 20 20)" />

      <!-- Text details -->
      <text x="78" y="38" class="font-sans" font-size="13.5" font-weight="800" fill="#FFFFFF">Smart WhatsApp Routing (SW Open Detection)</text>
      <text x="78" y="56" class="font-sans" font-size="11.5" font-weight="500" fill="#94A3B8">Deteksi Service Window aktif · Fallback ke Interactive/Text · Hemat 100% biaya Meta API</text>

      <!-- Status Tag -->
      <rect x="475" y="16" width="78" height="22" rx="6" fill="rgba(34, 197, 94, 0.15)" stroke="rgba(34, 197, 94, 0.3)" stroke-width="1" />
      <text x="484" y="31" class="font-sans wa-badge">● AKTIF</text>
    </g>
  </g>

  <!-- Outer Canvas Framing -->
  <rect x="24" y="24" width="1592" height="876" rx="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1.2" />
</svg>`;

  const svgBuf = Buffer.from(svg);
  const pngPath = path.join(outDir, 'facebook-cover.png');

  const outBuf = await sharp(svgBuf)
    .png({ quality: 100, compressionLevel: 7 })
    .toBuffer();
  fs.writeFileSync(pngPath, outBuf);

  const stats = fs.statSync(pngPath);
  console.log(`Successfully generated Facebook Cover at: ${pngPath}`);
  console.log(`Resolution: ${width}x${height}px | File size: ${(stats.size / 1024).toFixed(1)} KB`);

  // Exact Desktop-optimized crop (1640 x 624 px) for direct desktop banner upload
  const desktopCropPath = path.join(outDir, 'facebook-cover-desktop-crop.png');
  const cropBuf = await sharp(outBuf)
    .extract({ left: 0, top: 150, width: 1640, height: 624 })
    .png({ quality: 100, compressionLevel: 7 })
    .toBuffer();
  fs.writeFileSync(desktopCropPath, cropBuf);

  const desktopStats = fs.statSync(desktopCropPath);
  console.log(`Successfully generated Desktop Crop at: ${desktopCropPath}`);
  console.log(`Resolution: 1640x624px | File size: ${(desktopStats.size / 1024).toFixed(1)} KB`);
}

generateFacebookCover().catch(err => {
  console.error('Error generating Facebook Cover:', err);
  process.exit(1);
});
