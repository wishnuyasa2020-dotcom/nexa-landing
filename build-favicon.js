const fs = require('fs');
const path = require('path');
const sharp = require('c:/Users/wishn/Documents/Codex/nexa-crm-web/node_modules/sharp');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="nexaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D68F"/>
      <stop offset="100%" stop-color="#4D9FFF"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <rect x="24" y="24" width="464" height="464" rx="112" ry="112" fill="url(#nexaGrad)"/>
  <path d="M 144 124 L 214 124 L 314 286 L 314 124 L 374 124 L 374 388 L 304 388 L 204 226 L 204 388 L 144 388 Z" fill="#04080F" filter="url(#glow)"/>
</svg>`;

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const directoryEntrySize = 16;
  const headerAndDirSize = headerSize + count * directoryEntrySize;

  let currentOffset = headerAndDirSize;
  const entries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);   // Width
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1); // Height
    entry.writeUInt8(0, 2);                                     // Color palette (0 = no palette)
    entry.writeUInt8(0, 3);                                     // Reserved
    entry.writeUInt16LE(1, 4);                                  // Color planes
    entry.writeUInt16LE(32, 6);                                 // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8);                 // Image size in bytes
    entry.writeUInt32LE(currentOffset, 12);                     // Image offset
    entries.push(entry);
    currentOffset += item.buffer.length;
  }

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);      // Reserved
  icoHeader.writeUInt16LE(1, 2);      // 1 = ICO image
  icoHeader.writeUInt16LE(count, 4);  // Number of images

  return Buffer.concat([
    icoHeader,
    ...entries,
    ...pngBuffers.map(b => b.buffer)
  ]);
}

async function run() {
  const outDir = __dirname;

  // 1. Write SVG
  fs.writeFileSync(path.join(outDir, 'favicon.svg'), svgContent, 'utf8');
  console.log('Written favicon.svg');

  // 2. Generate PNGs
  const svgBuf = Buffer.from(svgContent);

  const png16 = await sharp(svgBuf).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuf).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuf).resize(48, 48).png().toBuffer();
  const png180 = await sharp(svgBuf).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuf).resize(192, 192).png().toBuffer();
  const png512 = await sharp(svgBuf).resize(512, 512).png().toBuffer();

  fs.writeFileSync(path.join(outDir, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(outDir, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(outDir, 'icon-192.png'), png192);
  fs.writeFileSync(path.join(outDir, 'icon-512.png'), png512);
  console.log('Written PNG variants');

  // 3. Generate multi-resolution ICO
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 }
  ]);

  fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuf);
  console.log('Written favicon.ico, size:', icoBuf.length, 'bytes');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
