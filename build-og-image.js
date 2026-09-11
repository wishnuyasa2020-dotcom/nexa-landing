const fs = require('fs');
const path = require('path');
const sharp = require('c:/Users/wishn/Documents/Codex/nexa-crm-web/node_modules/sharp');

async function generateOgImage() {
  const outDir = __dirname;
  const logoPath = path.join(outDir, 'logo.png');
  const logoBuf = fs.readFileSync(logoPath);
  const logoBase64 = logoBuf.toString('base64');

  const width = 1200;
  const height = 630;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04080F" />
      <stop offset="50%" stop-color="#070E1A" />
      <stop offset="100%" stop-color="#0A1526" />
    </linearGradient>

    <!-- Accent Gradients -->
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D68F" />
      <stop offset="100%" stop-color="#4D9FFF" />
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00D68F" />
      <stop offset="100%" stop-color="#4D9FFF" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(17, 30, 51, 0.75)" />
      <stop offset="100%" stop-color="rgba(12, 22, 38, 0.85)" />
    </linearGradient>

    <!-- Filters -->
    <filter id="blurGlow1" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="90" />
    </filter>
    <filter id="blurGlow2" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="110" />
    </filter>
  </defs>

  <style>
    .font-inter { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .brand-title { font-weight: 900; font-size: 32px; fill: #FFFFFF; letter-spacing: -0.5px; }
    .brand-mos { fill: #00D68F; }
    .badge-text { font-size: 14px; font-weight: 700; fill: #00D68F; letter-spacing: 1.2px; }
    .hero-h1 { font-size: 54px; font-weight: 800; fill: #FFFFFF; line-height: 1.15; letter-spacing: -1.5px; }
    .hero-h2 { font-size: 46px; font-weight: 800; fill: url(#textGrad); line-height: 1.2; letter-spacing: -1px; }
    .hero-desc { font-size: 22px; font-weight: 400; fill: #94A3B8; line-height: 1.5; }
    .card-title { font-size: 18px; font-weight: 700; fill: #FFFFFF; }
    .card-desc { font-size: 13.5px; font-weight: 500; fill: #94A3B8; }
    .url-text { font-size: 18px; font-weight: 700; fill: #00D68F; letter-spacing: 0.5px; }
  </style>

  <!-- Deep Dark Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Ambient Blurred Orbs -->
  <circle cx="150" cy="120" r="220" fill="#00D68F" opacity="0.18" filter="url(#blurGlow1)" />
  <circle cx="1080" cy="480" r="260" fill="#4D9FFF" opacity="0.22" filter="url(#blurGlow2)" />
  <circle cx="600" cy="300" r="180" fill="#A78BFA" opacity="0.08" filter="url(#blurGlow1)" />

  <!-- Grid Tech Lines Pattern (Subtle) -->
  <g opacity="0.06" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="200" x2="1200" y2="200" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="500" x2="1200" y2="500" />
    <line x1="200" y1="0" x2="200" y2="630" />
    <line x1="400" y1="0" x2="400" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="800" y1="0" x2="800" y2="630" />
    <line x1="1000" y1="0" x2="1000" y2="630" />
  </g>

  <!-- Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" />

  <!-- Top Header Row: Logo & Brand -->
  <g transform="translate(80, 75)">
    <!-- Official Logo Image -->
    <image href="data:image/png;base64,${logoBase64}" x="0" y="0" width="54" height="54" />
    <text x="68" y="38" class="font-inter brand-title">Nexa<tspan class="brand-mos">MOS</tspan></text>
  </g>

  <!-- Top Right Live Badge -->
  <g transform="translate(850, 78)">
    <rect width="270" height="42" rx="21" fill="rgba(0, 214, 143, 0.08)" stroke="rgba(0, 214, 143, 0.3)" stroke-width="1" />
    <circle cx="24" cy="21" r="5" fill="#00D68F" />
    <text x="40" y="26" class="font-inter badge-text">EVIDENCE-BASED CRM</text>
  </g>

  <!-- Main Headline Block -->
  <g transform="translate(80, 210)">
    <text x="0" y="0" class="font-inter hero-h1">CRM yang Tahu Kapan Bertindak,</text>
    <text x="0" y="58" class="font-inter hero-h2">dan Kepada Siapa Harus Bicara.</text>
    <text x="0" y="112" class="font-inter hero-desc">
      Sistem Operasi Pipeline Penjualan &amp; Otomasi WhatsApp Khusus LPK, Bimbel &amp; Vokasi
    </text>
  </g>

  <!-- Bottom Row: 3 Feature Pills & Domain Badge -->
  <g transform="translate(80, 465)">
    <!-- Feature Pill 1 -->
    <g transform="translate(0, 0)">
      <rect width="250" height="80" rx="14" fill="url(#cardGrad)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
      <rect x="0" y="0" width="4" height="80" rx="2" fill="#00D68F" />
      <text x="22" y="33" class="font-inter card-title">🎯 Pipeline Berbasis Bukti</text>
      <text x="22" y="58" class="font-inter card-desc">Validasi FNAR tanpa asumsi</text>
    </g>

    <!-- Feature Pill 2 -->
    <g transform="translate(270, 0)">
      <rect width="260" height="80" rx="14" fill="url(#cardGrad)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
      <rect x="0" y="0" width="4" height="80" rx="2" fill="#4D9FFF" />
      <text x="22" y="33" class="font-inter card-title">⚡ Smart WA Routing</text>
      <text x="22" y="58" class="font-inter card-desc">Hemat biaya Service Window</text>
    </g>

    <!-- Feature Pill 3 -->
    <g transform="translate(550, 0)">
      <rect width="240" height="80" rx="14" fill="url(#cardGrad)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1" />
      <rect x="0" y="0" width="4" height="80" rx="2" fill="#A78BFA" />
      <text x="22" y="33" class="font-inter card-title">🏢 B2B + B2C Dual Pipeline</text>
      <text x="22" y="58" class="font-inter card-desc">Sekolah Mitra &amp; Siswa</text>
    </g>

    <!-- Domain Right Pill -->
    <g transform="translate(830, 15)">
      <rect width="210" height="50" rx="12" fill="rgba(0, 214, 143, 0.12)" stroke="rgba(0, 214, 143, 0.35)" stroke-width="1" />
      <text x="32" y="32" class="font-inter url-text">nexamos.cloud ↗</text>
    </g>
  </g>
</svg>`;

  const svgBuf = Buffer.from(svg);
  const pngPath = path.join(outDir, 'og-image.png');

  await sharp(svgBuf)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(pngPath);

  const stats = fs.statSync(pngPath);
  console.log('Generated og-image.png successfully:', stats.size, 'bytes');
}

generateOgImage().catch(err => {
  console.error(err);
  process.exit(1);
});
