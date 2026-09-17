/**
 * NexaMOS Landing Page - Internationalization (i18n) Engine
 * Supported Languages: 'id' (Bahasa Indonesia - Default), 'en' (English)
 */

const I18N_DATA = {
  id: {
    // Meta & Document
    page_title: "NexaMOS - CRM Berbasis Bukti untuk LPK, Lembaga Pendidikan & Bisnis Multi-Sektor",
    
    // Navigation
    nav_features: "Fitur",
    nav_innovations: "Inovasi",
    nav_how: "Cara Kerja",
    nav_pricing: "Harga",
    nav_proof: "Testimoni",
    nav_blog: "Blog",
    nav_demo_btn: "Demo &#8599;",
    nav_start_btn: "Mulai Gratis",
    nav_menu_btn: "&#9776; Menu",
    nav_demo_live: "Demo Live &#8599;",

    // Hero Section
    hero_tag: "&#128994; Live &middot; Battle-Tested di Lapangan &middot; Siap Multi-Sektor",
    hero_title: "CRM yang Tahu<br><span class=\"g\">Kapan Harus Bertindak</span><br><span class=\"b\">Kepada Siapa</span>",
    hero_sub: "Stop kelola ratusan prospek pakai grup WA dan spreadsheet yang kacau. NexaMOS hadir dengan <strong>pipeline berbasis bukti</strong>, Smart WhatsApp Routing, dan otomasi nurturing &mdash; terbukti tangguh untuk <strong>LPK &amp; Lembaga Vokasi</strong>, serta adaptif untuk <strong>Klinik, Retail, Agensi, Jasa &amp; Bisnis Multi-Sektor</strong>.",
    hero_cta_demo: "&#128640; Coba Demo &mdash; Gratis",
    hero_cta_features: "Lihat Semua Fitur &rarr;",
    hero_note: "Tidak perlu kartu kredit &middot; <a href=\"javascript:void(0)\" onclick=\"openSignupModal()\" style=\"color:var(--gr);font-weight:600;text-decoration:underline\">Daftar Akun Bisnis / Lembaga</a> &middot; <a href=\"https://crm.nexamos.cloud/login\" target=\"_blank\">Demo: admin / admin123</a>",
    
    // Hero Stats
    stat_1_label: "Modul Operasional Live",
    stat_2_label: "Prospek Dikelola Aktif",
    stat_3_label: "Penurunan Missed Follow-up",
    stat_4_label: "State Berbasis Bukti Nyata",

    // Hero Mockup
    mock_dash_period: "Dashboard &middot; Periode Aktif",
    mock_live: "&#9679; Live",
    mock_tot_lead: "Total Lead",
    mock_act_prospect: "Prospek Aktif",
    mock_customer: "Customer",
    mock_col_name: "Nama Kontak / Siswa",
    mock_col_status: "Status",
    mock_col_cro: "CRO",
    mock_col_update: "Update",
    mock_side_dash: "&#128202; Dashboard",
    mock_side_students: "&#128101; Siswa / Kontak",
    mock_side_b2b: "&#127979; Mitra B2B",
    mock_side_tasks: "&#9989; Task List",
    mock_side_chat: "&#128172; Live Chat",
    mock_side_bcast: "&#128226; Broadcast",
    mock_side_nurture: "&#129302; Nurturing",
    mock_side_tmpl: "&#128203; Template",
    mock_time_yesterday: "Kemarin",
    mock_time_2d: "2h lalu",
    mock_time_2h: "2j lalu",
    mock_time_4h: "4j lalu",

    // Closed Beta Announcement
    beta_badge_open: "PROGRAM CLOSED BETA &middot; BATCH 1 DIBUKA (KUOTA TERBATAS)",
    beta_badge_full: "CLOSED BETA BATCH 1 PENUH &middot; WAITING LIST BATCH 2 DIBUKA",
    beta_title: "Akses Terkurasi Versi Beta: Ruang Kerja CRM Privat untuk Lembaga &amp; Bisnis Terpilih",
    beta_desc: "Untuk memastikan performa database mandiri dan pendampingan implementasi intensif, akses pendaftaran Free Tier saat ini dibatasi secara bertahap melalui proses kurasi teknis bagi LPK, institusi vokasi, maupun entitas bisnis umum.",
    beta_f1_title: "Database Privat Terisolasi",
    beta_f1_desc: "Bukan database sharing. Setiap entitas bisnis/lembaga terpilih mendapatkan database mandiri privat berkecepatan tinggi tanpa bercampur dengan tenant lain.",
    beta_f2_title: "Kurasi &amp; Setup 1x24 Jam",
    beta_f2_desc: "Ruang kerja CRM disiapkan dan divalidasi langsung oleh tim teknis kami sebelum akun diserahkan, menjamin kesiapan pipeline sejak hari pertama.",
    beta_f3_title: "Kapasitas Dibatasi",
    beta_f3_desc: "Kuota pendaftaran tahap pertama dibatasi ketat demi menjaga reliabilitas server dan kualitas pendampingan operasional tim kami.",
    beta_status_notice_open: "<strong>Status:</strong> Kuota Batch 1 Sangat Terbatas &middot; Persiapan Akun Maks 1x24 Jam",
    beta_status_notice_full: "<strong style=\"color:var(--am)\">Status:</strong> Batch 1 Penuh &middot; Daftarkan Bisnis / Lembaga ke Waiting List Prioritas Batch 2 (1–2 Pekan)",
    beta_cta_btn_open: "&#128640; Ajukan Akses Beta Sekarang",
    beta_cta_btn_full: "&#128203; Masuk Waiting List Batch 2",

    // Problem vs Solution Section
    prob_label: "Masalah Yang Kita Selesaikan",
    prob_title: "CRM Generik Tidak Dirancang untuk <span style=\"color:var(--rd)\">Realitas Lapangan</span> Bisnis di Indonesia",
    prob_sub: "HubSpot dan Pipedrive tidak dirancang untuk pola transaksi Indonesia: verifikasi bukti bayar nyata, siklus kualifikasi multi-tahap (B2C &amp; B2B), serta ketergantungan penuh pada WhatsApp.",
    prob_box_tag: "&#9888;&#65039; 3 Masalah Lapangan",
    prob_box_desc: "Realitas operasional yang sering membuat konversi prospek &amp; pelanggan bocor:",
    prob_1_t: "Silo Inbox WhatsApp yang Kacau",
    prob_1_d: "CRO tidak bisa lihat chat CRO lain, tapi manager tidak bisa monitor semuanya dalam satu tampilan.",
    prob_2_t: "Tagihan Meta API Membengkak",
    prob_2_d: "Template WhatsApp dikenakan biaya meski Service Window terbuka &mdash; tidak ada yang mengoptimalkan ini otomatis.",
    prob_3_t: "Status Pipeline Berdasarkan &ldquo;Perasaan&rdquo;",
    prob_3_d: "CRO pindahkan status berdasarkan asumsi, bukan bukti. Laporan konversi tidak bisa dipercaya.",
    prob_foot: "<span>&#10008;</span> Dampak: Konversi bocor &amp; biaya iklan terbuang sia-sia",

    sol_box_tag: "&#9989; Solusi NexaMOS",
    sol_box_desc: "Pipeline Berbasis Bukti &mdash; status hanya berubah jika ada bukti nyata:",
    pipe_lead_desc: "Kontak valid + minat awal terverifikasi",
    pipe_prospect_desc: "Lulus FNAR: Fit, Need, Ability, Readiness",
    pipe_opp_desc: "Home Visit / konsultasi orang tua terlaksana",
    pipe_cust_desc: "DP terverifikasi admin keuangan",
    pipe_deliv_desc: "Pre-Core &#8594; Training / Layanan &#8594; Retention",
    sol_foot: "<span>&#10004;</span> Hasil: Validitas mutlak &amp; 100% audit-ready",

    // Tenant Adaptive Engine Showcase
    showcase_badge: "<span>&#9889;</span> Tenant-Adaptive Engine",
    showcase_title: "Satu Platform, Menyesuaikan Bahasa Bisnis Anda",
    showcase_desc: "NexaMOS secara otomatis mengadaptasi label antarmuka, alur kualifikasi, dan pipeline sesuai domain operasional tanpa perlu kustomisasi rumit.",
    showcase_c1_title: "🎓 Sektor LPK &amp; Vokasi",
    showcase_c1_desc: "Terminologi Siswa &bull; Jalur Kemitraan Sekolah &bull; Standar Kualifikasi FNAR &bull; Verifikasi DP &amp; Berkas Kerja",
    showcase_c2_title: "🏢 Bisnis &amp; Layanan Umum",
    showcase_c2_desc: "Terminologi Kontak/Klien &bull; Pipeline B2B &bull; Kualifikasi Need-Budget &bull; Verifikasi Invoice &amp; Bukti Bayar",

    // Features Section
    feat_label: "Fitur Platform",
    feat_title: "Semua yang Dibutuhkan CRO,<br>Dalam Satu Dashboard",
    feat_sub: "15 modul operasional yang tervalidasi langsung di lapangan.",
    feat_1_t: "Dual Pipeline: B2C &amp; B2B",
    feat_1_d: "Dua pipeline terpisah namun terhubung: calon pelanggan (Lead&#8594;Customer) dan mitra institusi/B2B (Target&#8594;Active Partner). Setiap transisi butuh bukti nyata.",
    feat_2_t: "Live Chat + Shared Inbox",
    feat_2_d: "Silo system: CRO lihat chatnya sendiri, Chief CRO monitor semua. Balas WA langsung dari dashboard.",
    feat_3_t: "Smart WhatsApp Routing",
    feat_3_d: "Service Window terbuka? Template otomatis dikonversi ke pesan interaktif gratis. Hemat tagihan Meta API.",
    feat_4_t: "Broadcast + Auto Nurturing",
    feat_4_d: "Kirim broadcast ke segment spesifik. Drip campaign otomatis berjalan berdasarkan stage pipeline calon pelanggan.",
    feat_5_t: "Task List + Weekly Kanban",
    feat_5_d: "SOP harian CRO terstruktur. Weekly Kanban untuk planning target. Manager monitor produktivitas real-time.",
    feat_6_t: "Manajemen Kemitraan &amp; B2B",
    feat_6_d: "Kelola hubungan sekolah atau mitra institusi B2B terpisah. Track PIC, jadwal kunjungan, MoU kerjasama, dan lead per sumber mitra.",
    feat_7_t: "Web Push Notification",
    feat_7_d: "Notifikasi real-time di browser saat ada pesan masuk atau reminder task. Tidak perlu buka WA manual.",
    feat_8_t: "Multi-Tenant BYOW",
    feat_8_d: "Setiap klien pakai App Meta &amp; nomor WA sendiri. Data terisolasi penuh, rate limit terpisah, privasi 100%.",
    feat_9_t: "Intake Audience &amp; Form Publik",
    feat_9_d: "URL unik per tenant untuk form pendaftaran publik. Consent Engine WA terintegrasi. Lead masuk langsung.",

    // Security Banner
    sec_badge: "&#128737; ENTERPRISE SECURITY &amp; AUDIT GUARDIAN",
    sec_title: "Deteksi Mutasi Kredensial Real-Time &amp; Email Security Alert ke Admin CRM",
    sec_desc: "Melindungi privasi dan integritas data institusi secara proaktif. Setiap pembaruan <strong>Username</strong> atau <strong>Password</strong> akun staf (baik mandiri maupun aksi admin) langsung terdeteksi seketika. Sistem otomatis melayangkan <strong>email peringatan audit forensik</strong> (Nama Staf, IP Address, Waktu WIB, Perangkat) ke Administrator CRM serta mencatat jejak audit imutabel di <code>events_log</code>.",
    sec_tag1: "Real-Time Credential Alert",
    sec_tag2: "Anti-Takeover Protection",
    sec_tag3: "Forensic IP &amp; User-Agent Log",
    sec_tag4: "Multi-Tenant Data Isolation",
    sec_mock_badge: "&#128737; SECURITY ALERT",
    sec_mock_time: "Baru Saja &bull; WIB",
    sec_mock_target: "Target Akun:",
    sec_mock_type: "Jenis Mutasi:",
    sec_mock_type_val: "&#128274; Password Diperbarui",
    sec_mock_email: "Email Notifikasi:",
    sec_mock_email_val: "Admin CRM Terkirim (100%)",
    sec_mock_status: "Status Pemantauan:",
    sec_mock_active: "Aktif 24/7",

    // Innovations Section
    inno_label: "Roadmap &amp; Riset Inovasi",
    inno_title: "Masa Depan Pengambilan Keputusan<br><span class=\"inno-gradient-text\">Didukung AI Komputasional &amp; Attribution</span>",
    inno_sub: "Di luar 9 modul operasional yang sudah aktif, teknologi mutakhir ini sedang kami integrasikan secara bertahap bersama mitra terpilih di program Closed Beta.",
    inno_c1_badge: "&#128274; Eksklusif Batch Beta",
    inno_c1_title: "Meta CAPI &amp; Google Offline Conversion Tracking",
    inno_c1_desc: "Menghubungkan event konversi offline di lapangan (seperti DP terverifikasi Rp1,5 jt) kembali ke Meta Ads &amp; Google Ads secara otomatis via Server-to-Server API. Algoritma iklan belajar mandiri mencari audiens dengan daya beli riil, bukan sekadar klik murah atau lead bodong.",
    inno_c1_status: "Status: <strong>Tahap Integrasi Server API Mitra Pilot</strong>",
    inno_c2_badge: "&#128104;&#8205;&#128188; Virtual CSO &amp; Riset AI",
    inno_c2_title: "Market Intelligence &amp; Strategic Choice Engine",
    inno_c2_desc: "Bukan chatbot teks generatif biasa. AI membaca jutaan log percakapan &amp; keberatan di roomchat (<em>Unscripted Objections</em>) dan radar kompetitor untuk mendiagnosis komoditisasi pasar. Memberikan rekomendasi strategis langsung ke Pemilik Bisnis: kapan harus <strong>Reposisi ke ceruk baru</strong>, bagaimana <strong>Merombak diferensiasi penawaran (Offer)</strong>, dan strategi <strong>Menembus hambatan keraguan konsumen</strong>.",
    inno_c2_status: "Status: <strong>Riset Algoritma Strategic Choice (Engine 01, 03, 05, 08)</strong>",
    inno_c3_badge: "&#9889; Segera Hadir di Dashboard",
    inno_c3_title: "Dynamic Legal &amp; Institutional Asset Engine",
    inno_c3_desc: "Draf instan perjanjian kerjasama berkekuatan hukum yang terisi otomatis dari metadata sistem. Hasilkan draf MoU Kemitraan (B2B Institusi/Sekolah) dan Perjanjian Kerahasiaan &amp; Kinerja CRO/Sales (B2I) dengan klausul proteksi data konsumen, siap cetak dan download dalam hitungan detik.",
    inno_c3_status: "Status: <strong>Draf Template Masuk Pipeline Rilis Dashboard</strong>",

    // Unfair Advantage Block
    unfair_pill: "&#129354; The Unfair Advantage",
    unfair_title: "Mengapa AI NexaMOS Tidak Pernah Berhalusinasi?",
    unfair_lead: "Kekuatan analitik AI NexaMOS tidak bertumpu pada prompt teks klise, melainkan ditenagai oleh aliran data mentah objektif langsung dari lantai operasional harian (<em>Ground Truth</em>) yang tidak pernah bisa diakses oleh software CRM biasa.",
    unfair_sub: "AI bisnis biasa (ChatGPT wrapper) sering memberi saran klise (<em>\"Tingkatkan postingan medsos\"</em>) karena buta kondisi lapangan. NexaMOS mengevaluasi strategi bisnis dari <strong>4 Fakta Empiris Lapangan</strong>:",
    unfair_f1_t: "Unscripted Objection Logs",
    unfair_f1_d: "Mendeteksi alasan penolakan jujur calon prospek &amp; konsumen di WhatsApp (misal: <em>\"LPK sebelah bisa cicil setelah kerja\"</em> atau <em>\"Vendor kompetitor tawarkan harga promo\"</em>).",
    unfair_f2_t: "Competitor Mention Tracker",
    unfair_f2_d: "Melacak seberapa sering nama brand kompetitor disebut dan perbandingan penawaran spesifik apa yang mereka bawa ke calon prospek &amp; relasi bisnis Anda.",
    unfair_f3_t: "Funnel Drop-off by Cohort",
    unfair_f3_d: "Mengidentifikasi di titik mana transaksi macet (misal: 100% antusias di awal, tetapi prospek rontok di tahap persetujuan anggaran atau penentu keputusan akhir).",
    unfair_f4_t: "Offline Conversion Truth",
    unfair_f4_d: "Mengenali profil prospek yang terbukti bayar transaksi sah (DP / Pelunasan) vs profil yang hanya berjanji manis tetapi <em>ghosting</em> di hari penentuan.",
    unfair_foot: "<strong>Output untuk Pemilik Bisnis:</strong> Rekomendasi Reposisi Pasar (Hindari Perang Harga) &middot; Rekayasa Penawaran &amp; Garansi Nilai Baru &middot; Perombakan Sudut Pandang Narasi (Rebranding).",

    // Inno Banner
    inno_banner_h4: "&#128640; Ingin Menerapkan Inovasi Ini Lebih Awal di Institusi Anda?",
    inno_banner_p: "Mitra Closed Beta mendapatkan prioritas akses ke modul atribusi iklan, asistensi AI, dan draf legal otomatis sebelum dirilis ke publik.",
    inno_banner_btn: "Daftar Batch Beta Sekarang &#8599;",

    // How It Works
    how_label: "Cara Kerja",
    how_title: "Dari Setup hingga Closing,<br>Semua Terstruktur",
    how_sub: "Bukan sekadar software &mdash; ini sistem operasi penjualan yang sudah terbukti di lapangan.",
    how_s1_t: "Daftar &amp; Setup Tenant (&#8804;30 menit)",
    how_s1_d: "Buat akun, sambungkan WhatsApp Business API (BYOW), konfigurasi tim CRO. Tidak perlu IT &mdash; interface setup dipandu step-by-step.",
    how_s2_t: "Masukkan &amp; Kualifikasi Lead",
    how_s2_d: "Import CSV, tambah manual, atau lead masuk via form publik. Setiap lead dikualifikasi dengan framework FNAR &mdash; tidak ada lagi status berdasarkan feeling.",
    how_s3_t: "Nurturing Otomatis + Live Chat",
    how_s3_d: "Drip campaign berjalan otomatis sesuai stage pipeline. CRO fokus pada percakapan berkualitas. Smart Routing memastikan pesan gratis saat Service Window terbuka.",
    how_s4_t: "Closing Berbasis Bukti &amp; Analytics",
    how_s4_d: "Setiap Customer dikonfirmasi dengan bukti pembayaran terverifikasi. Dashboard: conversion rate real, funnel velocity, leaderboard CRO &mdash; semua angka bisa dipercaya.",

    // Pricing
    price_label: "Paket Harga",
    price_title: "Mulai Gratis,<br>Scale Sesuai Kebutuhan",
    price_sub: "Tidak perlu bayar sampai benar-benar merasakan nilainya. Free tier cukup untuk memulai.",
    price_mo: "/bulan",
    price_free_desc: "Untuk mulai merasakan NexaMOS tanpa komitmen.",
    price_pro_pop: "&#9889; Paling Populer",
    price_pro_desc: "Untuk LPK, Lembaga, atau Bisnis yang mulai serius scaling. (Rp 5 Jt/tahun)",
    price_biz_desc: "Untuk institusi &amp; perusahaan berkembang dengan banyak cabang/CRO. (Rp 15 Jt/tahun)",
    price_ent_desc: "Kontrak 3 Tahun (Rp 40 Jt/thn) atau Lifetime Rp 100 Jt.",
    price_cta_free: "Mulai Gratis &rarr;",
    price_cta_pro: "Mulai Pro &rarr;",
    price_cta_biz: "Pilih Business",
    price_cta_ent: "Konsultasi Enterprise &rarr;",

    // Testimonials / Proof
    proof_label: "Hasil Nyata",
    proof_title: "Bukan Klaim &mdash; Ini Bukti dari Lapangan",
    proof_sub: "Derma Indonesia adalah pilot tenant pertama di sektor LPK/Vokasi yang memvalidasi ketangguhan seluruh 15 modul dalam operasional harian sebelum diperluas ke sektor bisnis lainnya.",
    proof_q1: "Sebelumnya kami pakai 3 grup WA dan 2 file Excel untuk 500+ prospek. Sekarang semua ter-handle dari satu dashboard &mdash; CRO kami tidak ada lagi yang lupa follow-up.",
    proof_a1_role: "LPK Program Kerja Jepang &middot; Sukabumi",
    proof_q2: "Smart WA Routing-nya luar biasa. Tagihan Meta API turun drastis karena pesan yang seharusnya kena biaya template, otomatis diubah jadi pesan biasa saat SW sudah terbuka.",
    proof_a2_role: "Chief CRO &middot; Derma Indonesia",
    proof_q3: "Pipeline berbasis buktinya mengubah cara kami berpikir. CRO tidak bisa lagi pindah status asal-asalan &mdash; setiap langkah harus ada bukti. Laporan konversi kami sekarang 100% bisa dipercaya.",
    proof_a3_role: "Operations &middot; Derma Indonesia",
    proof_stat1_label: "Penurunan missed follow-up",
    proof_stat2_label: "Modul live &amp; tervalidasi",
    proof_stat3_label: "Pilot tenant aktif (Sept 2026)",
    proof_stat4_label: "Target onboarding time",

    // Blog Highlights
    blog_label: "&#128218; Wawasan &amp; Riset",
    blog_title: "Riset &amp; Arsitektur Informasi NexaMOS",
    blog_sub: "Pelajari strategi teknis CRM berbasis bukti, arsitektur WhatsApp API, dan rekayasa AI langsung dari blog riset kami.",
    blog_loading: "Memuat artikel riset terbaru...",
    blog_view_all: "Lihat Semua Artikel di Blog &rarr;",

    // CTA Bottom Section
    cta_tag: "&#128640; Mulai Sekarang &middot; Gratis",
    cta_title: "Siap Stop Kelola Prospek<br>Pakai Excel?",
    cta_sub: "Bergabunglah dengan lembaga pendidikan &amp; pelaku bisnis yang sudah membuktikan NexaMOS di lapangan. Setup selesai dalam 30 menit.",
    cta_btn_demo: "&#127919; Coba Demo Sekarang",
    cta_btn_wa: "&#128172; Tanya via WhatsApp",
    cta_note: "Tidak perlu kartu kredit &middot; Demo: user <strong>admin</strong> / pass <strong>admin123</strong> &middot; <span style=\"opacity:0.85\">&#128260; Sandbox direset otomatis tiap Minggu 21:00 WIB</span>",

    // Footer
    footer_desc: "Platform CRM berbasis Event-Sourcing dengan validasi bukti nyata &mdash; dirancang untuk LPK, Lembaga Vokasi, dan Bisnis Multi-Sektor di Indonesia. Setiap status pipeline harus punya buktinya.",
    footer_col_product: "Produk",
    footer_col_company: "Perusahaan",
    footer_col_legal: "Legal",
    footer_about: "Tentang Nexa",
    footer_careers: "Karir",
    footer_contact: "Kontak",
    footer_privacy: "Kebijakan Privasi",
    footer_terms: "Syarat &amp; Ketentuan",
    footer_security: "Keamanan Data",
    footer_status: "Status",
    footer_copy: "&copy; 2026 NexaMOS. All rights reserved.",
    footer_made_with: "Made with &#10084;&#65039; for LPK, Lembaga &amp; Bisnis Indonesia",

    // Demo Floating Bar
    dbar_title: "<strong>Demo Live:</strong> admin / admin123",
    dbar_reset: "&#128260; Reset tiap Minggu 21:00 WIB",
    dbar_btn_demo: "Buka Demo &#8599;",
    dbar_btn_start: "Mulai Gratis &rarr;",

    // Modal Wizard - General
    modal_badge_beta: "&#9889; Closed Beta &middot; Kuota Terbatas",
    modal_badge_waitlist: "⏳ Batch 1 Penuh &middot; Waiting List Batch 2",
    modal_title_beta: "Ajukan Akses Closed Beta",
    modal_title_waitlist: "Daftar Waiting List Batch 2",
    modal_desc_beta: "Dapatkan database mandiri privat dan pendampingan implementasi CRM tanpa biaya langganan.",
    modal_desc_waitlist: "Kuota batch pertama telah penuh. Masukkan profil bisnis atau lembaga Anda untuk diprioritaskan saat batch kedua dibuka.",

    // Modal Wizard - Step 1
    modal_s1_header: "<span>&#128203;</span> Langkah 1 dari 2: Profil &amp; Kualifikasi Bisnis / Lembaga",
    modal_label_business_type: "Bisnis Anda bergerak di bidang apa? <span style=\"color:var(--gr)\">*</span>",
    modal_gw_lpk_title: "LPK / Vokasi / Kursus",
    modal_gw_lpk_sub: "Magang Jepang, Bimbel, Pelatihan Kerja, SMK Swasta",
    modal_gw_gen_title: "Bisnis Umum",
    modal_gw_gen_sub: "Klinik, Retail, Agensi, Properti, Jasa &amp; lainnya",
    modal_label_inst_type: "Jenis / Kategori Lebih Spesifik <span style=\"color:var(--gr)\">*</span>",
    modal_opt_inst_default: "-- Pilih setelah memilih tipe bisnis di atas --",
    modal_label_address: "Alamat Lengkap Operasional (Kota/Kabupaten &amp; Provinsi) <span style=\"color:var(--gr)\">*</span>",
    modal_ph_address: "Contoh: Jl. Ahmad Yani No. 45, Kota Sukabumi, Jawa Barat",
    modal_label_team_size: "Jumlah Karyawan / Tim Operasional Saat Ini <span style=\"color:var(--gr)\">*</span>",
    modal_opt_team_default: "-- Pilih Skala Tim --",
    modal_opt_team_1: "1 - 5 Orang (Fase Rintisan)",
    modal_opt_team_2: "6 - 15 Orang (Fase Berkembang)",
    modal_opt_team_3: "16 - 50 Orang (Bisnis/Lembaga Menengah)",
    modal_opt_team_4: "Lebih dari 50 Orang (Perusahaan Besar / Multi-Cabang)",
    modal_btn_next_step: "Lanjut ke Data Akun &rarr;",

    // Modal Wizard - Step 2
    modal_s2_header: "<span>&#128271;</span> Langkah 2 dari 2: Kredensial Akun &amp; Kontak PIC",
    modal_label_brand_lpk: "Nama Lembaga / LPK / Bimbel",
    modal_label_brand_gen: "Nama Bisnis / Perusahaan",
    modal_ph_brand_lpk: "Contoh: LPK Cahaya Harapan",
    modal_ph_brand_gen: "Contoh: Klinik Sehat Medika / PT Solusi Digital",
    modal_label_pic_name: "Nama Lengkap Penanggung Jawab / PIC <span style=\"color:var(--gr)\">*</span>",
    modal_ph_pic_name: "Contoh: Budi Santoso",
    modal_label_pic_email: "Email Resmi Operasional <span style=\"color:var(--gr)\">*</span>",
    modal_ph_pic_email: "nama@bisnis.com / nama@lembaga.com",
    modal_label_password: "Password Akun Baru <span style=\"color:var(--gr)\">*</span>",
    modal_ph_password: "Minimal 6 karakter",
    modal_label_wa: "Nomor WhatsApp Operasional PIC (Opsional)",
    modal_ph_wa: "08xxxxxxxxxx",
    modal_btn_back: "&larr; Kembali",
    modal_btn_submit_beta: "&#128640; Ajukan Akses Beta",
    modal_btn_submit_waitlist: "&#128203; Daftar Waiting List Prioritas",
    modal_btn_submitting: "&#9203; Mengirim Pengajuan Beta...",
    modal_already_account: "Sudah punya akun? <a href=\"https://crm.nexamos.cloud/login\" target=\"_blank\">Masuk ke Demo / CRM &#8599;</a>",

    // Modal Success
    modal_succ_badge_beta: "Permohonan Diterima & Sedang Dikurasi",
    modal_succ_badge_waitlist: "Waiting List Batch 2",
    modal_succ_title_beta: "Ruang Kerja Privat Sedang Disiapkan",
    modal_succ_title_waitlist: "Pendaftaran Anda Telah Masuk Antrean Waiting List",
    modal_succ_desc_beta: "Permohonan Closed Beta untuk <strong id=\"resBrandName\" style=\"color:var(--tx)\">{brand}</strong> telah kami terima. Untuk memastikan performa database mandiri Anda, tim teknis kami sedang memvalidasi konfigurasi CRM privat Anda (Maksimal 1x24 jam).",
    modal_succ_desc_waitlist: "Permohonan untuk <strong id=\"resBrandName\" style=\"color:var(--tx)\">{brand}</strong> telah kami catat sebagai prioritas di batch pembukaan berikutnya (diperkirakan 1–2 pekan ke depan).",
    modal_succ_spam_title: "Notifikasi &amp; Akses Login",
    modal_succ_spam_note: "Kredensial login akun Super Admin dan tautan ruang kerja privat akan dikirimkan ke email di atas setelah proses kurasi selesai. Jangan lupa periksa folder <strong>Spam / Junk</strong> atau tab <strong>Promosi</strong>.",
    modal_btn_open_webmail: "&#128236; Buka Kotak Masuk Email",
    modal_btn_close: "Tutup &amp; Kembali ke Web",
    modal_succ_foot: "NexaMOS &middot; Platform CRM Berbasis Bukti untuk LPK, Lembaga &amp; Bisnis Multi-Sektor.",

    // Alerts
    alert_select_type: "Mohon pilih tipe bisnis Anda terlebih dahulu (LPK/Vokasi atau Bisnis Umum).",
    alert_select_cat: "Mohon pilih kategori/bidang bisnis atau lembaga Anda.",
    alert_fill_addr: "Mohon isi alamat lengkap operasional Anda.",
    alert_select_team: "Mohon pilih skala jumlah karyawan/tim operasional Anda.",
    alert_fill_required: "Semua field bertanda * wajib diisi.",
    alert_pw_min: "Password minimal 6 karakter.",
    alert_server_err: "Gagal terhubung ke server NexaMOS. Periksa koneksi internet Anda atau coba beberapa saat lagi."
  },

  en: {
    // Meta & Document
    page_title: "NexaMOS - Evidence-Based CRM for Academies, Vocational & Multi-Sector Businesses",

    // Navigation
    nav_features: "Features",
    nav_innovations: "Innovations",
    nav_how: "How It Works",
    nav_pricing: "Pricing",
    nav_proof: "Testimonials",
    nav_blog: "Blog",
    nav_demo_btn: "Demo &#8599;",
    nav_start_btn: "Start Free",
    nav_menu_btn: "&#9776; Menu",
    nav_demo_live: "Live Demo &#8599;",

    // Hero Section
    hero_tag: "&#128994; Live &middot; Battle-Tested in Operations &middot; Multi-Sector Ready",
    hero_title: "The CRM That Knows<br><span class=\"g\">When to Act</span><br><span class=\"b\">And on Whom</span>",
    hero_sub: "Stop juggling hundreds of prospects across messy WhatsApp groups and spreadsheets. NexaMOS delivers an <strong>evidence-based pipeline</strong>, Smart WhatsApp Routing, and automated nurturing &mdash; battle-tested for <strong>Vocational Academies &amp; Training Institutions</strong>, and fully adaptive for <strong>Clinics, Retail, Agencies, Services &amp; Multi-Sector Businesses</strong>.",
    hero_cta_demo: "&#128640; Try Demo &mdash; Free",
    hero_cta_features: "Explore All Features &rarr;",
    hero_note: "No credit card required &middot; <a href=\"javascript:void(0)\" onclick=\"openSignupModal()\" style=\"color:var(--gr);font-weight:600;text-decoration:underline\">Register Business / Academy</a> &middot; <a href=\"https://crm.nexamos.cloud/login\" target=\"_blank\">Demo: admin / admin123</a>",

    // Hero Stats
    stat_1_label: "Live Operational Modules",
    stat_2_label: "Active Prospects Managed",
    stat_3_label: "Fewer Missed Follow-ups",
    stat_4_label: "Evidence-Based Pipeline States",

    // Hero Mockup
    mock_dash_period: "Dashboard &middot; Active Period",
    mock_live: "&#9679; Live",
    mock_tot_lead: "Total Leads",
    mock_act_prospect: "Active Prospects",
    mock_customer: "Customers",
    mock_col_name: "Contact / Student Name",
    mock_col_status: "Status",
    mock_col_cro: "CRO",
    mock_col_update: "Updated",
    mock_side_dash: "&#128202; Dashboard",
    mock_side_students: "&#128101; Contacts / Students",
    mock_side_b2b: "&#127979; B2B Partners",
    mock_side_tasks: "&#9989; Task List",
    mock_side_chat: "&#128172; Live Chat",
    mock_side_bcast: "&#128226; Broadcast",
    mock_side_nurture: "&#129302; Nurturing",
    mock_side_tmpl: "&#128203; Templates",
    mock_time_yesterday: "Yesterday",
    mock_time_2d: "2d ago",
    mock_time_2h: "2h ago",
    mock_time_4h: "4h ago",

    // Closed Beta Announcement
    beta_badge_open: "CLOSED BETA PROGRAM &middot; BATCH 1 OPEN (LIMITED SLOTS)",
    beta_badge_full: "BATCH 1 CLOSED BETA FULL &middot; BATCH 2 WAITING LIST OPEN",
    beta_title: "Curated Beta Access: Private CRM Workspaces for Selected Institutions &amp; Businesses",
    beta_desc: "To guarantee dedicated database performance and hands-on implementation guidance, Free Tier access is currently gated through technical curation for academies, vocational schools, and commercial enterprises.",
    beta_f1_title: "Isolated Dedicated Database",
    beta_f1_desc: "Never a shared database. Each selected organization receives an isolated, high-speed private database with zero cross-tenant mingling.",
    beta_f2_title: "Curation &amp; 24h Provisioning",
    beta_f2_desc: "CRM workspaces are prepared and validated directly by our engineering team before handover, guaranteeing pipeline readiness from day one.",
    beta_f3_title: "Strictly Capped Slots",
    beta_f3_desc: "First batch slots are strictly capped to uphold server peak reliability and maintain personal operational guidance from our team.",
    beta_status_notice_open: "<strong>Status:</strong> Batch 1 Slots Strictly Limited &middot; Account Setup Max 24 Hours",
    beta_status_notice_full: "<strong style=\"color:var(--am)\">Status:</strong> Batch 1 Full &middot; Register Your Business for Priority Batch 2 Waiting List (1–2 Weeks)",
    beta_cta_btn_open: "&#128640; Apply for Beta Access Now",
    beta_cta_btn_full: "&#128203; Join Batch 2 Waiting List",

    // Problem vs Solution Section
    prob_label: "The Problem We Solve",
    prob_title: "Generic CRMs Were Never Built for the <span style=\"color:var(--rd)\">Ground Reality</span> of High-Touch Sales",
    prob_sub: "Off-the-shelf CRMs like HubSpot and Pipedrive fail against real ground transaction patterns: verified payment proof, multi-gate qualification (B2C &amp; B2B), and total WhatsApp reliance.",
    prob_box_tag: "&#9888;&#65039; 3 Critical Bottlenecks",
    prob_box_desc: "Operational friction where prospect conversions and revenue constantly leak:",
    prob_1_t: "Disjointed WhatsApp Inbox Silos",
    prob_1_d: "Sales reps cannot see each other's chats, while managers lack a unified birds-eye view across the team.",
    prob_2_t: "Skyrocketing Meta API Invoices",
    prob_2_d: "WhatsApp templates incur charges even when the 24h Service Window is open &mdash; with zero automatic cost optimization.",
    prob_3_t: "Pipeline Statuses Based on \"Feelings\"",
    prob_3_d: "Reps advance lead statuses based on subjective gut feelings rather than proof. Conversion analytics cannot be trusted.",
    prob_foot: "<span>&#10008;</span> Impact: Leaking conversions &amp; wasted advertising budget",

    sol_box_tag: "&#9989; The NexaMOS Solution",
    sol_box_desc: "Evidence-Based Pipeline &mdash; statuses only advance upon verified, verifiable proof:",
    pipe_lead_desc: "Valid contact + verified initial interest",
    pipe_prospect_desc: "Passed FNAR: Fit, Need, Ability, Readiness",
    pipe_opp_desc: "Decision consultation or stakeholder interview completed",
    pipe_cust_desc: "Deposit payment verified by finance admin",
    pipe_deliv_desc: "Pre-Core &#8594; Training / Service Fulfillment &#8594; Retention",
    sol_foot: "<span>&#10004;</span> Result: Absolute data integrity &amp; 100% audit-ready",

    // Tenant Adaptive Engine Showcase
    showcase_badge: "<span>&#9889;</span> Tenant-Adaptive Engine",
    showcase_title: "One Platform, Adapting to Your Business Vernacular",
    showcase_desc: "NexaMOS dynamically tailors interface nomenclature, qualification gates, and pipeline flows to your industry domain without complex custom code.",
    showcase_c1_title: "🎓 Academies &amp; Vocational Sector",
    showcase_c1_desc: "Student Nomenclature &bull; High School B2B Pipelines &bull; FNAR Qualification Standards &bull; Down Payment &amp; Dossier Verification",
    showcase_c2_title: "🏢 Commercial &amp; Professional Services",
    showcase_c2_desc: "Contact/Client Nomenclature &bull; B2B Pipelines &bull; Need-Budget Qualification &bull; Invoice &amp; Payment Proof Verification",

    // Features Section
    feat_label: "Platform Features",
    feat_title: "Everything Your Revenue Team Needs,<br>Inside One Unified Dashboard",
    feat_sub: "15 battle-tested operational modules validated on frontline operations.",
    feat_1_t: "Dual Pipeline: B2C &amp; B2B",
    feat_1_d: "Two distinct yet interconnected pipelines: prospect customers (Lead&#8594;Customer) and B2B institutional partners (Target&#8594;Active Partner). Every step demands objective evidence.",
    feat_2_t: "Live Chat + Shared Team Inbox",
    feat_2_d: "Silo privacy system: CROs see their assigned chats, while Chief CROs monitor the entire floor. Reply to WhatsApp directly inside the dashboard.",
    feat_3_t: "Smart WhatsApp Routing",
    feat_3_d: "Service Window open? Templates automatically downgrade to free interactive messages. Drastically cut Meta API billing.",
    feat_4_t: "Broadcast + Auto Nurturing",
    feat_4_d: "Send laser-targeted broadcasts to specific segments. Automated drip campaigns trigger dynamically based on each prospect's pipeline stage.",
    feat_5_t: "Task List + Weekly Kanban",
    feat_5_d: "Structured daily standard operating procedures for reps. Weekly Kanban for quota planning. Real-time productivity leaderboard for managers.",
    feat_6_t: "B2B &amp; Partnership Management",
    feat_6_d: "Manage institutional relationships, high school tie-ups, and corporate partners. Track PICs, visit schedules, MoUs, and attributed leads.",
    feat_7_t: "Web Push Notification",
    feat_7_d: "Real-time in-browser alerts for inbound WhatsApp messages and task reminders. Never miss a time-sensitive follow-up.",
    feat_8_t: "Multi-Tenant BYOW Architecture",
    feat_8_d: "Bring Your Own WhatsApp. Each client connects their own Meta App &amp; phone number with isolated rate limits and complete data privacy.",
    feat_9_t: "Intake Audience &amp; Public Forms",
    feat_9_d: "Unique branded URLs for public registration. Integrated WhatsApp consent engine. Leads flow directly into qualification queues.",

    // Security Banner
    sec_badge: "&#128737; ENTERPRISE SECURITY &amp; AUDIT GUARDIAN",
    sec_title: "Real-Time Credential Mutation Detection &amp; Security Alerts to CRM Admins",
    sec_desc: "Proactively safeguarding institutional privacy and data integrity. Any change to staff <strong>Usernames</strong> or <strong>Passwords</strong> triggers instant automated <strong>forensic audit security alerts</strong> (Staff Name, IP Address, Timestamp, Device Fingerprint) delivered directly to CRM Administrators while logging immutable event trails in <code>events_log</code>.",
    sec_tag1: "Real-Time Credential Alert",
    sec_tag2: "Anti-Takeover Protection",
    sec_tag3: "Forensic IP &amp; User-Agent Log",
    sec_tag4: "Multi-Tenant Data Isolation",
    sec_mock_badge: "&#128737; SECURITY ALERT",
    sec_mock_time: "Just Now &bull; WIB",
    sec_mock_target: "Target Account:",
    sec_mock_type: "Mutation Type:",
    sec_mock_type_val: "&#128274; Password Updated",
    sec_mock_email: "Notification Email:",
    sec_mock_email_val: "CRM Admin Dispatched (100%)",
    sec_mock_status: "Surveillance Status:",
    sec_mock_active: "Active 24/7",

    // Innovations Section
    inno_label: "Roadmap &amp; Research Innovations",
    inno_title: "The Future of Strategic Decision-Making<br><span class=\"inno-gradient-text\">Powered by Computational AI &amp; Attribution</span>",
    inno_sub: "Beyond our 9 live operational modules, these cutting-edge capabilities are being rolled out progressively with select Closed Beta partners.",
    inno_c1_badge: "&#128274; Exclusive Beta Cohort",
    inno_c1_title: "Meta CAPI &amp; Google Offline Conversion Tracking",
    inno_c1_desc: "Feed real offline conversion milestones (such as verified customer deposits) back into Meta Ads &amp; Google Ads via Server-to-Server API. Ad algorithms learn autonomously to target prospects with genuine purchasing power rather than hollow clicks.",
    inno_c1_status: "Status: <strong>Server API Integration Stage with Pilot Partners</strong>",
    inno_c2_badge: "&#128104;&#8205;&#128188; Virtual CSO &amp; AI Research",
    inno_c2_title: "Market Intelligence &amp; Strategic Choice Engine",
    inno_c2_desc: "Not a generic text chatbot. The engine analyzes millions of conversation logs, unscripted objections, and competitor mentions to diagnose market commoditization. Delivers actionable strategic playbooks directly to Business Owners: when to <strong>reposition into new niches</strong>, how to <strong>re-engineer offer differentiation</strong>, and tactics to <strong>shatter buyer hesitation</strong>.",
    inno_c2_status: "Status: <strong>Strategic Choice Algorithm Research (Engines 01, 03, 05, 08)</strong>",
    inno_c3_badge: "&#9889; Coming Soon to Dashboard",
    inno_c3_title: "Dynamic Legal &amp; Institutional Asset Engine",
    inno_c3_desc: "Instant legally-binding contracts auto-populated from system metadata. Generate partnership MoUs (B2B School/Corporate) and rep confidentiality &amp; non-disclosure agreements (B2I) with customer data protection clauses, ready to print and export in seconds.",
    inno_c3_status: "Status: <strong>Template Drafts in Dashboard Release Pipeline</strong>",

    // Unfair Advantage Block
    unfair_pill: "&#129354; The Unfair Advantage",
    unfair_title: "Why Does NexaMOS AI Never Hallucinate?",
    unfair_lead: "NexaMOS AI analytics is not built on generic prompts. It is continuously fueled by objective raw telemetry streaming directly from frontline daily operations (<em>Ground Truth</em>) that off-the-shelf CRMs can never access.",
    unfair_sub: "Generic AI tools (ChatGPT wrappers) regurgitate shallow advice (<em>\"Post more on social media\"</em>) because they are blind to the field. NexaMOS formulates strategy from <strong>4 Empirical Ground Realities</strong>:",
    unfair_f1_t: "Unscripted Objection Logs",
    unfair_f1_d: "Captures authentic buyer hesitation points voiced directly in WhatsApp chats (e.g., <em>\"Competitor X offers payment after job placement\"</em> or <em>\"Vendor Y offered 30% discount\"</em>).",
    unfair_f2_t: "Competitor Mention Tracker",
    unfair_f2_d: "Quantifies how frequently rival brands are cited and what exact value propositions they pit against your sales team.",
    unfair_f3_t: "Funnel Drop-off by Cohort",
    unfair_f3_d: "Identifies the exact friction bottleneck where deals stall (e.g., 100% initial enthusiasm collapsing at parent consultation or budget approval).",
    unfair_f4_t: "Offline Conversion Truth",
    unfair_f4_d: "Differentiates prospect archetypes who reliably pay legitimate deposits versus those who make empty verbal promises but ghost on deadline day.",
    unfair_foot: "<strong>Output for Business Owners:</strong> Market Repositioning (Escape Price Wars) &middot; Offer Re-engineering &amp; Novel Value Guarantees &middot; Narrative Angle Transformation (Rebranding).",

    // Inno Banner
    inno_banner_h4: "&#128640; Want to Deploy These Innovations Early in Your Organization?",
    inno_banner_p: "Closed Beta partners receive early priority access to ad attribution modules, strategic AI assistance, and dynamic legal engines prior to public launch.",
    inno_banner_btn: "Join Beta Cohort Now &#8599;",

    // How It Works
    how_label: "How It Works",
    how_title: "From Setup to Closing,<br>Fully Structured &amp; Proven",
    how_sub: "Not just another tool &mdash; this is a battle-tested sales operating system.",
    how_s1_t: "Register &amp; Tenant Setup (&#8804;30 mins)",
    how_s1_d: "Create your account, connect WhatsApp Business API (BYOW), configure your sales team. Zero coding required &mdash; guided step-by-step.",
    how_s2_t: "Ingest &amp; Qualify Leads",
    how_s2_d: "Import CSV, add manually, or capture inbound leads via public forms. Every lead is evaluated through the FNAR framework &mdash; no more gut-feel assumptions.",
    how_s3_t: "Automated Nurturing + Live Chat",
    how_s3_d: "Drip campaigns trigger automatically along pipeline stages. Reps focus on high-touch conversations. Smart Routing guarantees zero-cost messages while Service Windows are open.",
    how_s4_t: "Evidence-Based Closing &amp; Analytics",
    how_s4_d: "Every Customer is confirmed through verified transaction receipts. Dashboard: real conversion rates, funnel velocity, team leaderboards &mdash; numbers you can trust.",

    // Pricing
    price_label: "Pricing Plans",
    price_title: "Start Free,<br>Scale as You Grow",
    price_sub: "Zero upfront commitment until you experience tangible pipeline ROI. The Free tier has everything you need to begin.",
    price_mo: "/month",
    price_free_desc: "To experience NexaMOS with zero financial commitment.",
    price_pro_pop: "&#9889; Most Popular",
    price_pro_desc: "For academies, institutions, or businesses scaling operations seriously. (Rp 5M/year)",
    price_biz_desc: "For growing organizations and enterprises with multiple branches/reps. (Rp 15M/year)",
    price_ent_desc: "3-Year Contract (Rp 40M/year) or Lifetime License Rp 100M.",
    price_cta_free: "Start Free &rarr;",
    price_cta_pro: "Get Pro &rarr;",
    price_cta_biz: "Choose Business",
    price_cta_ent: "Enterprise Consultation &rarr;",

    // Testimonials / Proof
    proof_label: "Real Results",
    proof_title: "Not Empty Claims &mdash; Verified Field Evidence",
    proof_sub: "Derma Indonesia served as our foundational pilot tenant in the vocational education sector, thoroughly battle-testing all 15 operational modules across daily operations before wider multi-sector rollout.",
    proof_q1: "Previously we managed 500+ prospects across 3 WhatsApp groups and 2 Excel sheets. Now everything runs out of a single dashboard &mdash; our reps never drop a follow-up.",
    proof_a1_role: "Japan Vocational Work Academy &middot; Sukabumi",
    proof_q2: "Smart WhatsApp Routing is phenomenal. Our Meta API invoice dropped substantially because messages that would normally cost template fees are converted to free interactive messages during open Service Windows.",
    proof_a2_role: "Chief CRO &middot; Derma Indonesia",
    proof_q3: "The evidence-based pipeline completely elevated our sales culture. Reps can no longer move deal stages arbitrarily &mdash; every step requires verifiable proof. Our conversion metrics are now 100% trustworthy.",
    proof_a3_role: "Operations &middot; Derma Indonesia",
    proof_stat1_label: "Drop in missed follow-ups",
    proof_stat2_label: "Modules live &amp; validated",
    proof_stat3_label: "Active pilot tenant (Sept 2026)",
    proof_stat4_label: "Target onboarding time",

    // Blog Highlights
    blog_label: "&#128218; Insights &amp; Research",
    blog_title: "NexaMOS Research &amp; Information Architecture",
    blog_sub: "Explore technical strategies on evidence-based CRMs, WhatsApp API architectures, and computational AI directly from our research blog.",
    blog_loading: "Loading latest research articles...",
    blog_view_all: "View All Articles on Blog &rarr;",

    // CTA Bottom Section
    cta_tag: "&#128640; Start Now &middot; Free",
    cta_title: "Ready to Stop Managing Leads<br>in Spreadsheets?",
    cta_sub: "Join educational institutions and modern enterprises transforming their sales velocity with NexaMOS. Full setup in under 30 minutes.",
    cta_btn_demo: "&#127919; Try Live Demo Now",
    cta_btn_wa: "&#128172; Inquire via WhatsApp",
    cta_note: "No credit card required &middot; Demo: user <strong>admin</strong> / pass <strong>admin123</strong> &middot; <span style=\"opacity:0.85\">&#128260; Sandbox auto-resets every Sunday 21:00 WIB</span>",

    // Footer
    footer_desc: "Event-sourced CRM platform with verifiable evidence gates &mdash; engineered for Academies, Vocational Schools, and Multi-Sector Enterprises in Indonesia. Every pipeline transition demands hard proof.",
    footer_col_product: "Product",
    footer_col_company: "Company",
    footer_col_legal: "Legal",
    footer_about: "About Nexa",
    footer_careers: "Careers",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_security: "Data Security",
    footer_status: "System Status",
    footer_copy: "&copy; 2026 NexaMOS. All rights reserved.",
    footer_made_with: "Made with &#10084;&#65039; for Indonesian Academies, Institutions &amp; Enterprises",

    // Demo Floating Bar
    dbar_title: "<strong>Live Demo:</strong> admin / admin123",
    dbar_reset: "&#128260; Resets every Sunday 21:00 WIB",
    dbar_btn_demo: "Open Demo &#8599;",
    dbar_btn_start: "Start Free &rarr;",

    // Modal Wizard - General
    modal_badge_beta: "&#9889; Closed Beta &middot; Limited Slots",
    modal_badge_waitlist: "⏳ Batch 1 Full &middot; Batch 2 Waiting List",
    modal_title_beta: "Apply for Closed Beta Access",
    modal_title_waitlist: "Join Batch 2 Waiting List",
    modal_desc_beta: "Secure an isolated private database and hands-on CRM implementation assistance with zero subscription cost.",
    modal_desc_waitlist: "First batch capacity is fully allocated. Enter your business or academy profile to gain priority onboarding for Batch 2.",

    // Modal Wizard - Step 1
    modal_s1_header: "<span>&#128203;</span> Step 1 of 2: Organization Profile &amp; Business Sector",
    modal_label_business_type: "What industry does your organization operate in? <span style=\"color:var(--gr)\">*</span>",
    modal_gw_lpk_title: "Academy / Vocational / Courses",
    modal_gw_lpk_sub: "Japan Internship, Tutoring, Vocational Training, Technical Schools",
    modal_gw_gen_title: "Commercial Business",
    modal_gw_gen_sub: "Clinics, Retail, Creative Agency, Real Estate, Professional Services",
    modal_label_inst_type: "Specific Business / Institution Category <span style=\"color:var(--gr)\">*</span>",
    modal_opt_inst_default: "-- Select after picking your business type above --",
    modal_label_address: "Full Operating Address (City/Regency &amp; Province) <span style=\"color:var(--gr)\">*</span>",
    modal_ph_address: "Example: Jl. Ahmad Yani No. 45, Sukabumi City, West Java",
    modal_label_team_size: "Current Operational Team / Staff Size <span style=\"color:var(--gr)\">*</span>",
    modal_opt_team_default: "-- Select Team Scale --",
    modal_opt_team_1: "1 - 5 Staff (Early / Seed Stage)",
    modal_opt_team_2: "6 - 15 Staff (Scaling / Growth Stage)",
    modal_opt_team_3: "16 - 50 Staff (Mid-Sized Organization)",
    modal_opt_team_4: "More than 50 Staff (Large Enterprise / Multi-Branch)",
    modal_btn_next_step: "Continue to Account Credentials &rarr;",

    // Modal Wizard - Step 2
    modal_s2_header: "<span>&#128271;</span> Step 2 of 2: Account Credentials &amp; PIC Contact",
    modal_label_brand_lpk: "Institution / Academy / Center Name",
    modal_label_brand_gen: "Business / Company Name",
    modal_ph_brand_lpk: "Example: Cahaya Harapan Academy",
    modal_ph_brand_gen: "Example: Medika Healthcare Clinic / Digital Solusi Ltd",
    modal_label_pic_name: "Full Name of PIC / Lead Administrator <span style=\"color:var(--gr)\">*</span>",
    modal_ph_pic_name: "Example: Budi Santoso",
    modal_label_pic_email: "Official Operational Email <span style=\"color:var(--gr)\">*</span>",
    modal_ph_pic_email: "name@company.com / admin@academy.com",
    modal_label_password: "New Account Password <span style=\"color:var(--gr)\">*</span>",
    modal_ph_password: "Minimum 6 characters",
    modal_label_wa: "Operational WhatsApp Phone (Optional)",
    modal_ph_wa: "+62 8xxxxxxxxxx",
    modal_btn_back: "&larr; Back",
    modal_btn_submit_beta: "&#128640; Apply for Beta Access",
    modal_btn_submit_waitlist: "&#128203; Join Priority Waiting List",
    modal_btn_submitting: "&#9203; Submitting Application...",
    modal_already_account: "Already registered? <a href=\"https://crm.nexamos.cloud/login\" target=\"_blank\">Login to Demo / CRM &#8599;</a>",

    // Modal Success
    modal_succ_badge_beta: "Application Received &amp; Under Curation",
    modal_succ_badge_waitlist: "Batch 2 Priority Waiting List",
    modal_succ_title_beta: "Private Workspace Being Provisioned",
    modal_succ_title_waitlist: "Your Application Has Been Queued on the Waiting List",
    modal_succ_desc_beta: "Closed Beta application for <strong id=\"resBrandName\" style=\"color:var(--tx)\">{brand}</strong> has been received. To ensure optimal private database performance, our technical team is currently validating your CRM setup (Maximum 1x24 hours).",
    modal_succ_desc_waitlist: "Application for <strong id=\"resBrandName\" style=\"color:var(--tx)\">{brand}</strong> has been recorded on the priority list for our next batch rollout (estimated in 1–2 weeks).",
    modal_succ_spam_title: "Login Credentials &amp; Workspace Access",
    modal_succ_spam_note: "Super Admin credentials and your private workspace URL will be dispatched to the email above upon completion of curation. Please verify your <strong>Spam / Junk</strong> folder or <strong>Promotions</strong> tab.",
    modal_btn_open_webmail: "&#128236; Open Email Inbox",
    modal_btn_close: "Close &amp; Return to Website",
    modal_succ_foot: "NexaMOS &middot; Evidence-Based CRM Platform for Academies, Vocational &amp; Multi-Sector Enterprises.",

    // Alerts
    alert_select_type: "Please select your business type first (Academy/Vocational or Commercial Business).",
    alert_select_cat: "Please select your specific institution or business category.",
    alert_fill_addr: "Please provide your full operating address.",
    alert_select_team: "Please select your current operational team size.",
    alert_fill_required: "All fields marked with * are required.",
    alert_pw_min: "Password must be at least 6 characters.",
    alert_server_err: "Failed to connect to NexaMOS server. Please verify your internet connection or try again shortly."
  }
};

// Localized Categories for Institution Selection
const INSTITUTION_OPTIONS_LOCALIZED = {
  id: {
    lpk: [
      { value: 'LPK Program Jepang (SSW / Magang)', label: 'LPK Program Magang & Kerja Jepang (SSW / Trainee)' },
      { value: 'LPK Program Jerman, Korea & Australia', label: 'LPK Program Jerman (Ausbildung), Korea, atau Australia' },
      { value: 'Bimbel Kedinasan / Akpol / CPNS', label: 'Bimbel Kedinasan / Akpol / Akmil / CPNS' },
      { value: 'Bimbel UTBK & Masuk PTN', label: 'Bimbel UTBK & Masuk PTN' },
      { value: 'SMK Swasta / Vokasi', label: 'SMK Swasta / Lembaga Pendidikan Vokasi' },
      { value: 'Kursus Bahasa & Sertifikasi', label: 'Kursus Bahasa Asing & Sertifikasi Keahlian' },
      { value: 'Lainnya (LPK / Vokasi)', label: 'Lainnya / Lembaga Pendidikan Terkait' }
    ],
    general: [
      { value: 'Klinik / Kesehatan / Estetika', label: 'Klinik, Rumah Sakit, atau Layanan Estetika' },
      { value: 'Retail / Toko', label: 'Retail, Toko Online / Offline' },
      { value: 'Properti / Developer', label: 'Properti, Agen Properti, atau Developer' },
      { value: 'Agensi Digital / Kreatif', label: 'Agensi Digital, Marketing, atau Kreatif' },
      { value: 'Jasa Umum / B2B', label: 'Jasa Umum, Konsultasi, atau B2B Lainnya' },
      { value: 'Kuliner / F&B', label: 'Kuliner, Restoran, atau Food & Beverage' },
      { value: 'Lainnya (Bisnis Umum)', label: 'Bisnis / Industri Lainnya' }
    ]
  },
  en: {
    lpk: [
      { value: 'LPK Program Jepang (SSW / Magang)', label: 'Japan Internship & Work Academy (SSW / Trainee)' },
      { value: 'LPK Program Jerman, Korea & Australia', label: 'Germany (Ausbildung), Korea, or Australia Academy' },
      { value: 'Bimbel Kedinasan / Akpol / CPNS', label: 'Civil Service / Police / Military Prep Academy' },
      { value: 'Bimbel UTBK & Masuk PTN', label: 'University Entrance & College Prep Academy' },
      { value: 'SMK Swasta / Vokasi', label: 'Private Vocational School / Technical College' },
      { value: 'Kursus Bahasa & Sertifikasi', label: 'Foreign Language & Skills Certification' },
      { value: 'Lainnya (LPK / Vokasi)', label: 'Other Educational / Vocational Academy' }
    ],
    general: [
      { value: 'Klinik / Kesehatan / Estetika', label: 'Clinic, Hospital, or Aesthetic Healthcare' },
      { value: 'Retail / Toko', label: 'Retail, Online & Offline Store' },
      { value: 'Properti / Developer', label: 'Real Estate Agency or Property Developer' },
      { value: 'Agensi Digital / Kreatif', label: 'Digital, Marketing, or Creative Agency' },
      { value: 'Jasa Umum / B2B', label: 'Professional Services, Consulting, or B2B' },
      { value: 'Kuliner / F&B', label: 'Culinary, Restaurant, or Food & Beverage' },
      { value: 'Lainnya (Bisnis Umum)', label: 'Other Commercial Business / Industry' }
    ]
  }
};

let currentLang = 'en';

function getLanguage() {
  return currentLang;
}

function t(key, replacements = {}) {
  const dict = I18N_DATA[currentLang] || I18N_DATA.en || I18N_DATA.id;
  let text = dict[key] !== undefined ? dict[key] : ((I18N_DATA.en && I18N_DATA.en[key] !== undefined) ? I18N_DATA.en[key] : (I18N_DATA.id[key] || ''));
  if (replacements && typeof replacements === 'object') {
    Object.keys(replacements).forEach(rKey => {
      text = text.replace(new RegExp('\\{' + rKey + '\\}', 'g'), replacements[rKey]);
    });
  }
  return text;
}

function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') lang = 'en';
  currentLang = lang;
  
  try {
    localStorage.setItem('nexamos_lang', lang);
  } catch (e) {
    // Storage access might be restricted
  }

  document.documentElement.lang = lang;
  if (I18N_DATA[lang] && I18N_DATA[lang].page_title) {
    document.title = I18N_DATA[lang].page_title;
  }

  // Update text content with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Update placeholders with [data-i18n-ph]
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const ph = t(key);
    if (ph) {
      el.placeholder = ph;
    }
  });

  // Update titles/aria-labels with [data-i18n-title]
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t(key);
    if (val) {
      el.setAttribute('title', val);
    }
  });

  // Update active state on switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Refresh dynamic dropdown options in modal if opened
  refreshModalDynamicTexts();

  // Refresh Closed Beta status banner texts
  if (typeof updateBetaUIState === 'function') {
    updateBetaUIState(window.isBetaQuotaFull || false);
  }

  // Re-run dynamic blog loader date formatting if loaded
  if (typeof loadLatestBlogArticles === 'function') {
    loadLatestBlogArticles();
  }
}

function refreshModalDynamicTexts() {
  const tenantTypeInput = document.getElementById('tenant_type');
  const type = tenantTypeInput ? tenantTypeInput.value : '';
  const select = document.getElementById('institution_type');
  
  if (select) {
    const prevVal = select.value;
    select.innerHTML = `<option value="" disabled ${!prevVal ? 'selected' : ''}>${t('modal_opt_inst_default')}</option>`;
    if (type) {
      const opts = (INSTITUTION_OPTIONS_LOCALIZED[currentLang] && INSTITUTION_OPTIONS_LOCALIZED[currentLang][type]) || [];
      opts.forEach(opt => {
        const el = document.createElement('option');
        el.value = opt.value;
        el.textContent = opt.label;
        if (opt.value === prevVal) el.selected = true;
        select.appendChild(el);
      });
    }
  }

  // Update brand_name label & placeholder contextual to tenant_type
  const brandLabel = document.querySelector('label[for="brand_name"]');
  const brandInput = document.getElementById('brand_name');
  if (brandLabel) {
    brandLabel.innerHTML = (type === 'lpk' ? t('modal_label_brand_lpk') : t('modal_label_brand_gen')) + ' <span style="color:var(--gr)">*</span>';
  }
  if (brandInput) {
    brandInput.placeholder = type === 'lpk' ? t('modal_ph_brand_lpk') : t('modal_ph_brand_gen');
  }

  // Team size options
  const teamSizeSelect = document.getElementById('team_size');
  if (teamSizeSelect && teamSizeSelect.options && teamSizeSelect.options.length >= 5) {
    teamSizeSelect.options[0].text = t('modal_opt_team_default');
    teamSizeSelect.options[1].text = t('modal_opt_team_1');
    teamSizeSelect.options[2].text = t('modal_opt_team_2');
    teamSizeSelect.options[3].text = t('modal_opt_team_3');
    teamSizeSelect.options[4].text = t('modal_opt_team_4');
  }
}

// Auto-initialize language on page load
(function initI18n() {
  let initial = 'en';
  try {
    const saved = localStorage.getItem('nexamos_lang');
    if (saved === 'id' || saved === 'en') {
      initial = saved;
    }
  } catch (e) {
    initial = 'en';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(initial));
  } else {
    setLanguage(initial);
  }
})();
