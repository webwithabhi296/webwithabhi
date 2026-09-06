import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Vector WA Logo for Favicon and App Icons
function generateLogoSvg(size = 512, isFavicon = false) {
  const cornerRadius = size * 0.24;
  const innerRadius = size * 0.20;
  const strokeWidth = size * 0.045;
  const innerInset = strokeWidth;
  const innerSize = size - innerInset * 2;
  
  // Font size adjusted for optical balance
  const fontSize = size * 0.44;
  const yPos = size * 0.65;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0B3B68"/>
        <stop offset="50%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#F47C45"/>
      </linearGradient>
      <linearGradient id="innerBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="${size * 0.04}" stdDeviation="${size * 0.05}" flood-color="#0B3B68" flood-opacity="0.4"/>
      </filter>
    </defs>
    
    <!-- Outer Gradient Border Squircle -->
    <rect x="0" y="0" width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#borderGrad)"/>
    
    <!-- Inner Dark Squircle Container -->
    <rect x="${innerInset}" y="${innerInset}" width="${innerSize}" height="${innerSize}" rx="${innerRadius}" fill="url(#innerBgGrad)"/>
    
    <!-- WA Monogram Letters -->
    <g font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" text-anchor="middle" font-size="${fontSize}" letter-spacing="-0.04em">
      <text x="${size * 0.5}" y="${yPos}">
        <tspan fill="#F47C45">W</tspan><tspan fill="#FFFFFF">A</tspan>
      </text>
    </g>
  </svg>
  `;
}

// 2. Open Graph & Twitter Card Image (1200x630) - ONLY Website Logo on Premium Minimal Brand Background
function generateOgImageSvg(width = 1200, height = 630) {
  const logoSize = 280;
  const logoX = (width - logoSize) / 2;
  const logoY = (height - logoSize) / 2;
  const cornerRadius = logoSize * 0.24;
  const innerRadius = logoSize * 0.20;
  const strokeWidth = logoSize * 0.04;
  const innerSize = logoSize - strokeWidth * 2;
  const fontSize = logoSize * 0.44;
  const yPos = logoSize * 0.65;

  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Gradients -->
      <radialGradient id="bgGlowNavy" cx="20%" cy="25%" r="60%">
        <stop offset="0%" stop-color="#0B3B68" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#0B3B68" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
      </radialGradient>
      
      <radialGradient id="bgGlowOrange" cx="80%" cy="75%" r="60%">
        <stop offset="0%" stop-color="#F47C45" stop-opacity="0.22"/>
        <stop offset="50%" stop-color="#F47C45" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
      </radialGradient>

      <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
        <stop offset="0%" stop-color="#0B3B68" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
      </radialGradient>

      <!-- Logo Gradients -->
      <linearGradient id="ogLogoBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="25%" stop-color="#0B3B68"/>
        <stop offset="70%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#F47C45"/>
      </linearGradient>

      <linearGradient id="ogLogoInnerBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0F172A"/>
        <stop offset="100%" stop-color="#020617"/>
      </linearGradient>

      <!-- Ambient Glow Behind Logo -->
      <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur"/>
      </filter>

      <!-- Drop Shadow for Logo -->
      <filter id="ogLogoShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.7"/>
        <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#0B3B68" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Base Canvas Background -->
    <rect width="${width}" height="${height}" fill="#020617"/>

    <!-- Subtle Background Lighting Effects -->
    <rect width="${width}" height="${height}" fill="url(#bgGlowNavy)"/>
    <rect width="${width}" height="${height}" fill="url(#bgGlowOrange)"/>
    <rect width="${width}" height="${height}" fill="url(#centerGlow)"/>

    <!-- Subtle Subtle Grid / Minimal Pattern -->
    <g stroke="#1E293B" stroke-width="1" stroke-opacity="0.15">
      <line x1="0" y1="157" x2="${width}" y2="157" />
      <line x1="0" y1="315" x2="${width}" y2="315" />
      <line x1="0" y1="472" x2="${width}" y2="472" />
      <line x1="300" y1="0" x2="300" y2="${height}" />
      <line x1="600" y1="0" x2="600" y2="${height}" />
      <line x1="900" y1="0" x2="900" y2="${height}" />
    </g>

    <!-- Ambient Glow beneath the Logo -->
    <circle cx="${width / 2}" cy="${height / 2}" r="160" fill="#F47C45" opacity="0.12" filter="url(#logoGlow)"/>
    <circle cx="${width / 2 - 40}" cy="${height / 2 - 30}" r="180" fill="#0B3B68" opacity="0.30" filter="url(#logoGlow)"/>

    <!-- Central WA Logo Container -->
    <g transform="translate(${logoX}, ${logoY})" filter="url(#ogLogoShadow)">
      <!-- Outer Border -->
      <rect x="0" y="0" width="${logoSize}" height="${logoSize}" rx="${cornerRadius}" fill="url(#ogLogoBorder)"/>
      
      <!-- Inner Squircle -->
      <rect x="${strokeWidth}" y="${strokeWidth}" width="${innerSize}" height="${innerSize}" rx="${innerRadius}" fill="url(#ogLogoInnerBg)"/>
      
      <!-- Monogram -->
      <g font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" text-anchor="middle" font-size="${fontSize}" letter-spacing="-0.04em">
        <text x="${logoSize * 0.5}" y="${yPos}">
          <tspan fill="#F47C45">W</tspan><tspan fill="#FFFFFF">A</tspan>
        </text>
      </g>
    </g>
  </svg>
  `;
}

async function run() {
  console.log('Generating Brand Assets...');

  // 1. Generate Favicon SVG base
  const logoSvg = generateLogoSvg(512);
  const logoBuffer = Buffer.from(logoSvg);

  // 2. Generate PNGs: 16x16, 32x32, 48x48, 180x180 (Apple Touch Icon), 512x512
  const png16 = await sharp(logoBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(logoBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(logoBuffer).resize(48, 48).png().toBuffer();
  const png180 = await sharp(logoBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(logoBuffer).resize(192, 192).png().toBuffer();
  const png512 = await sharp(logoBuffer).resize(512, 512).png().toBuffer();

  // Write PNG icons to public
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);

  // 3. Generate Multi-size favicon.ico
  const icoBuffer = await toIco([png16, png32, png48]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Also copy favicon to src/app/favicon.ico for Next.js App Router root icon support
  fs.writeFileSync(path.join(rootDir, 'src', 'app', 'favicon.ico'), icoBuffer);

  // 4. Generate OG Image (1200x630) & Twitter Image (1200x630)
  const ogSvg = generateOgImageSvg(1200, 630);
  const ogBuffer = Buffer.from(ogSvg);
  const ogPng = await sharp(ogBuffer).png({ quality: 95, compressionLevel: 8 }).toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogPng);
  fs.writeFileSync(path.join(publicDir, 'twitter-image.png'), ogPng);
  fs.writeFileSync(path.join(assetsDir, 'og-image.png'), ogPng);
  fs.writeFileSync(path.join(assetsDir, 'twitter-image.png'), ogPng);

  // 5. Generate site.webmanifest
  const manifest = {
    name: "Web With Abhi",
    short_name: "Web With Abhi",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#020617",
    background_color: "#020617",
    display: "standalone"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('All branding assets successfully created in /public and /public/assets!');
}

run().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
