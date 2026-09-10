# Nexa OS — Landing Page

Landing page statis profesional untuk Nexa OS CRM Platform.

## Deploy ke Vercel (Gratis)

### Cara 1: Drag & Drop (Paling Mudah)
1. Buka https://vercel.com/new
2. Login dengan GitHub/Google
3. Pilih **"Browse"** atau drag folder `nexa-landing/` ke area upload
4. Klik **Deploy**
5. SELESAI — URL live dalam 30 detik!

### Cara 2: Via GitHub (Recommended untuk auto-deploy)
1. Push folder `nexa-landing/` ke GitHub repo
2. Buka https://vercel.com/import
3. Import repo GitHub tersebut
4. Vercel auto-detect static HTML, klik Deploy
5. Setiap push ke `main` = auto re-deploy!

### Cara 3: Vercel CLI
```bash
npm i -g vercel
cd nexa-landing
vercel --prod
```

## Struktur
```
nexa-landing/
  index.html    # Landing page utama (single file)
  vercel.json   # Konfigurasi Vercel
  README.md     # Dokumentasi ini
```

## Link Demo
- Demo CRM: https://nexa-crm-web-xi.vercel.app/login
- Login: admin / admin123
