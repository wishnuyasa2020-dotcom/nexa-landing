/**
 * NexaMOS Landing Page - Internationalization (i18n) Engine
 * Supported Languages: 'id' (Bahasa Indonesia - Default), 'en' (English)
 */

const I18N_DATA = {
  id: {
    // Meta & Document
    page_title: "NexaMOS - CRM Berbasis Bukti untuk LPK, Lembaga Pendidikan & Bisnis Multi-Sektor",
    title_status: "Status Sistem & Layanan — NexaMOS CRM",
    title_security: "Keamanan & Kedaulatan Data — NexaMOS CRM",
    title_terms: "Syarat & Ketentuan Layanan — NexaMOS CRM",
    title_privacy: "Kebijakan Privasi — NexaMOS CRM",
    title_about: "Tentang NexaMOS — CRM Berbasis Bukti untuk Pendidikan Vokasi & Bisnis Multi-Sektor",
    
    // Navigation
    nav_home: "Beranda",
    nav_features: "Fitur",
    nav_innovations: "Inovasi",
    nav_how: "Cara Kerja",
    nav_pricing: "Harga",
    nav_proof: "Testimoni",
    nav_blog: "Blog",
    nav_demo_btn: "Demo &#8599;",
    nav_login_crm: "Masuk CRM",
    nav_start_btn: "Mulai Gratis",
    nav_menu_btn: "&#9776;",
    nav_demo_live: "Demo Live &#8599;",
    nav_lang_label: "Bahasa / Language:",

    // Breadcrumbs
    bc_home: "Beranda",
    bc_legal: "Legal",
    bc_company: "Perusahaan",
    bc_status: "Status Sistem",
    bc_security: "Keamanan Data",
    bc_terms: "Syarat &amp; Ketentuan",
    bc_privacy: "Kebijakan Privasi",
    bc_about: "Tentang NexaMOS",

    // Subpages: Status
    status_card_title: "Semua Sistem Beroperasi Normal",
    status_card_sub: "&#9889; Seluruh layanan NexaMOS berjalan optimal tanpa gangguan terdeteksi.",
    status_uptime_lbl: "Uptime 90 Hari Terakhir",
    status_section_title: "&#128225; Layanan &amp; Infrastruktur Inti",
    status_comp_web: "Aplikasi Web CRM (Frontend Dashboard)",
    status_comp_web_desc: "Portal resmi dashboard CRM (crm.nexamos.cloud) &amp; antarmuka CRO.",
    status_comp_api: "Core Backend API Server (nexa-os)",
    status_comp_api_desc: "RESTful API engine, autentikasi sesi JWT, dan sinkronisasi data operasional.",
    status_comp_wa: "WhatsApp Cloud API &amp; Webhook Ingestion",
    status_comp_wa_desc: "Penerima webhook dua-jalur hibrida (BYOW &amp; Global Meta API) &amp; smart interactive fallback.",
    status_comp_db: "Dedicated Isolated Tenant Databases",
    status_comp_db_desc: "Kluster basis data MySQL terisolasi per-lembaga dengan koneksi dinamis berkecepatan tinggi.",
    status_comp_events: "Event-Sourcing Engine &amp; Projection Sync",
    status_comp_events_desc: "Pencatatan immutable events_log dan sinkronisasi read-model student_current_state.",
    status_comp_payment: "Payment Gateway &amp; Token Verifikasi Formulir",
    status_comp_payment_desc: "Verifikasi otomatis bukti transfer registrasi pendaftaran daring dan webhook keuangan.",
    status_comp_queue: "Redis Queue &amp; Broadcast Worker",
    status_comp_queue_desc: "Penyalur antrean pesan massal terjadwal, auto nurturing, dan cron jobs otomatis.",
    status_comp_cdn: "Storage &amp; CDN Assets",
    status_comp_cdn_desc: "CDN pengiriman aset statis, dokumen bukti pendaftaran, bukti transfer, dan media WhatsApp.",
    status_pill_operational: "Operasional",
    status_legend_90d: "90 hari lalu",
    status_legend_today: "Hari ini",
    status_history_title: "&#128197; Riwayat Pemeliharaan &amp; Rilis Sistem",
    status_tl1_date: "14 September 2026 &bull; Selesai",
    status_tl1_title: "Pembaruan Modul Verifikasi Pembayaran &amp; Ingestion Bukti Transfer Meta Webhook",
    status_tl1_desc: "Peningkatan kapabilitas penerimaan bukti bayar via WhatsApp otomatis dan sinkronisasi status ke Registered Opportunity. Tidak ada downtime operasional.",
    status_tl2_date: "8 September 2026 &bull; Selesai",
    status_tl2_title: "Optimasi Indeks Basis Data &amp; Dynamic Tenant Connection Pool",
    status_tl2_desc: "Peningkatan kecepatan respons query pencarian siswa dan live chat hingga 45%. Pemeliharaan berjalan sukses selama jam sepi (02:00 WIB).",
    status_tl3_date: "1 September 2026 &bull; Selesai",
    status_tl3_title: "Audit Keamanan Triwulan &amp; Pembaruan Sertifikat SSL/TLS",
    status_tl3_desc: "Pembaruan sertifikat keamanan HTTPS dan audit kepatuhan enkripsi data istirahat (encryption at rest).",

    // Subpages: Security
    sec_badge: "&#128737;&#65039; Keamanan Enterprise &amp; Kepatuhan",
    sec_hero_title: "Keamanan Data &amp; Arsitektur NexaMOS",
    sec_meta_1: "&#128197; Standar Keamanan Aktif 2026",
    sec_meta_2: "&#128274; Enkripsi End-to-End TLS 1.3 &amp; AES-256",
    sec_meta_3: "&#128451;&#65039; Zero Shared Data Pool",
    // Subpages: Security - 6 Pillars
    sec_pillar_1_title: "Database Privat Terisolasi",
    sec_pillar_1_desc: "Setiap lembaga mendapatkan basis data fisik/skema terpisah. Mencegah 100% risiko kebocoran data antar-lembaga (tenant isolation).",
    sec_pillar_2_title: "Enkripsi Data Berlapis",
    sec_pillar_2_desc: "Protokol transfer data terlindungi enkripsi TLS 1.3 terkini dan kredensial sensitif disimpan terenkripsi standar militer AES-256.",
    sec_pillar_3_title: "HMAC Webhook Signature",
    sec_pillar_3_desc: "Setiap pesan WhatsApp masuk divalidasi keabsahannya dengan tanda tangan kriptografi Meta SHA-256 guna menolak serangan spoofing.",
    sec_pillar_4_title: "RBAC Otorisasi Ketat",
    sec_pillar_4_desc: "Pemisahan peran hak akses detail (Admin, Manager Finance, CRO, Guest) memastikan staf hanya melihat data sesuai wewenangnya.",
    sec_pillar_5_title: "Audit Log Event-Sourcing",
    sec_pillar_5_desc: "Semua transaksi, mutasi status siswa, dan verifikasi keuangan tercatat sebagai immutable audit trail permanen yang tidak dapat diubah.",
    sec_pillar_6_title: "Snapshot Backup &amp; High Uptime",
    sec_pillar_6_desc: "Cadangan data otomatis harian tersimpan aman di cloud terenkripsi terpisah dengan uptime server termonitor 24/7.",

    // Subpages: Security - TOC
    sec_toc_title: "Daftar Isi",
    sec_toc_1: "1. Arsitektur Isolasi Database",
    sec_toc_2: "2. Keamanan Integrasi WhatsApp",
    sec_toc_3: "3. Kontrol Akses &amp; Autentikasi",
    sec_toc_4: "4. Integritas Event-Sourcing",
    sec_toc_5: "5. Proteksi Data Pembayaran",
    sec_toc_6: "6. Cadangan Data &amp; Pemulihan",
    sec_toc_7: "7. Pelaporan Kerentanan Keamanan",

    // Subpages: Security - Lead & Sections
    sec_lead: "Kepercayaan Anda adalah prioritas absolut kami. Lembaga Pelatihan Kerja (LPK) dan institusi pendidikan mengelola data masa depan ribuan anak bangsa. NexaMOS dibangun dari fondasi arsitektur keamanan tingkat perbankan (<em>enterprise-grade</em>) untuk memastikan tidak ada kebocoran data, tidak ada manipulasi nilai kualifikasi, dan operasional Anda selalu terlindungi.",
    
    sec_s1_title: "1. Arsitektur Isolasi Database Multi-Tenant",
    sec_s1_p1: "Mayoritas platform CRM cloud konvensional menggunakan satu tabel database bersama (<em>single shared database</em>) di mana baris data ribuan perusahaan dipisahkan hanya dengan kolom <code>tenant_id</code>. Kesalahan kecil pada query developer dapat membocorkan seluruh data kompetitor Anda.",
    sec_s1_callout_title: "&#128737;&#65039; Paradigma NexaMOS: Dedicated Isolated Database",
    sec_s1_callout_desc: "Di NexaMOS, setiap lembaga LPK yang menjadi tenant resmi ditempatkan dalam skema basis data mandiri. Koneksi database dipool secara dinamis dan diisolasi di tingkat driver backend. Akses lintas database secara teknis diblokir pada layer koneksi server.",
    sec_s1_p2: "Dengan arsitektur ini, data pendaftar Anda tidak pernah bercampur secara fisik dengan lembaga lain, memberikan perlindungan privasi tertinggi dan performa query yang konsisten tanpa terganggu lonjakan traffic tenant lain (<em>noisy neighbor problem</em>).",

    sec_s2_title: "2. Keamanan Integrasi WhatsApp (BYOW &amp; Global)",
    sec_s2_p1: "NexaMOS menerapkan standar integrasi <strong>WhatsApp Cloud API Resmi Meta</strong> dengan arsitektur webhook hibrida aman:",
    sec_s2_li_1: "<strong>Verifikasi Tanda Tangan Kriptografi:</strong> Setiap payload webhook yang diterima server diverifikasi menggunakan HMAC SHA-256 dengan <code>app_secret</code> Meta. Request yang tidak memiliki tanda tangan valid langsung ditolak (HTTP 403) sebelum mencapai layer aplikasi.",
    sec_s2_li_2: "<strong>Enkripsi Kredensial Token:</strong> Akses token permanen WhatsApp Business API disimpan dalam basis data utama terenkripsi. Token tidak pernah diekspos ke sisi frontend klien.",
    sec_s2_li_3: "<strong>Dukungan BYOW (Bring Your Own WhatsApp):</strong> Lembaga dapat menggunakan kredensial Meta Developer independen milik sendiri untuk kepatuhan penuh terhadap kebijakan kepemilikan data komunikasi Meta.",

    sec_s3_title: "3. Kontrol Akses &amp; Autentikasi Pengguna (RBAC)",
    sec_s3_p1: "Kami menerapkan prinsip <em>Least Privilege</em> (hak akses seminimal mungkin sesuai kebutuhan tugas) untuk memitigasi risiko penyalahgunaan wewenang internal:",
    sec_s3_card_title: "&#128100; Tingkatan Hak Akses (Role Matrix)",
    sec_s3_card_desc: "&bull; <strong>Super Administrator:</strong> Konfigurasi infrastruktur dan provisi tenant baru.<br>&bull; <strong>Tenant Admin:</strong> Pengaturan lembaga, integrasi nomor WhatsApp, dan manajemen staf.<br>&bull; <strong>Manager / Finance:</strong> Verifikasi pembayaran formulir dan persetujuan deposit pendaftaran (eksklusif, CRO tidak berhak memverifikasi uang pendaftaran).<br>&bull; <strong>CRO / Konselor:</strong> Mengelola interaksi live chat, mencatat bukti kualifikasi FNAR, dan jadwal konsultasi orang tua.",
    sec_s3_p2: "Seluruh sesi pengguna diamankan dengan JSON Web Token (JWT) berdurasi terbatas dan ditransmisikan melalui cookie beratribut <code>HttpOnly</code> dan <code>Secure</code>.",

    sec_s4_title: "4. Integritas Data Melalui Event-Sourcing",
    sec_s4_p1: "CRM tradisional rentan terhadap manipulasi karena status prospek dapat diubah sepihak secara sembarangan. NexaMOS menerapkan konsep <strong>Event-Sourcing</strong>:",
    sec_s4_li_1: "Status siswa (Lead &rarr; Prospect &rarr; Registered Opportunity &rarr; Customer) tidak pernah di-<em>overwrite</em> sembarangan.",
    sec_s4_li_2: "Status merupakan proyeksi hasil kalkulasi dari serangkaian kejadian nyata (<em>immutable events</em>) yang tersimpan di tabel <code>events_log</code>.",
    sec_s4_li_3: "Setiap event mencatat stempel waktu presisi (<em>timestamp</em>), data masukan (<em>payload</em>), serta identitas pengguna penanggung jawab untuk tujuan audit forensik.",

    sec_s5_title: "5. Proteksi Data Pembayaran &amp; Transaksi Formulir",
    sec_s5_p1: "Dalam transaksi pendaftaran siswa baru, NexaMOS memisahkan pencatatan komersial secara ketat:",
    sec_s5_callout_title: "&#128179; Nol Penyimpanan Data Kartu Kredit",
    sec_s5_callout_desc: "NexaMOS tidak pernah menyimpan nomor kartu kredit atau PIN rekening bank pengguna. Transaksi daring diproses langsung oleh payment gateway resmi berlisensi Bank Indonesia (seperti Midtrans) dengan standar keamanan PCI-DSS Level 1.",
    sec_s5_p2: "Bukti transfer manual yang dikirimkan calon siswa melalui WhatsApp diverifikasi dengan token unik heksadesimal sekali pakai (<em>one-time registration token</em>) yang memiliki masa kedaluwarsa ketat.",

    sec_s6_title: "6. Cadangan Data &amp; Disaster Recovery",
    sec_s6_p1: "Untuk memastikan kontinuitas operasional lembaga Anda jika terjadi bencana sistem eksternal:",
    sec_s6_li_1: "<strong>Automated Daily Backups:</strong> Seluruh basis data tenant dicadangkan secara otomatis setiap malam dan dienkripsi sebelum diunggah ke penyimpanan multi-region sekunder.",
    sec_s6_li_2: "<strong>Keep-Alive Monitoring:</strong> Server backend dimonitor secara kontinyu menggunakan sistem pemantauan berkala guna mencegah downtime dan menjamin kesiapan respon webhook 24 jam sehari.",
    sec_s6_li_3: "<strong>Recovery Point Objective (RPO):</strong> Maksimal 24 jam dan Recovery Time Objective (RTO) di bawah 4 jam dalam skenario pemulihan darurat menyeluruh.",

    sec_s7_title: "7. Program Pelaporan Kerentanan (Responsible Disclosure)",
    sec_s7_p1: "Kami sangat menghargai kontribusi dari para peneliti keamanan independen untuk menjaga ekosistem NexaMOS tetap kokoh. Jika Anda menemukan potensi celah keamanan:",
    sec_s7_li_1: "Kirimkan rincian temuan secara privat ke alamat email <strong>security@nexamos.cloud</strong>.",
    sec_s7_li_2: "Sertakan langkah-langkah reproduksi (<em>proof of concept</em>) yang jelas tanpa merusak integritas data pengguna riil.",
    sec_s7_li_3: "Berikan kami waktu wajar untuk menganalisis dan menambal kerentanan sebelum mengungkapkannya ke ranah publik.",
    sec_s7_box_title: "Tim Tanggap Insiden Keamanan (SIRT)",
    sec_s7_box_desc: "Laporan keamanan Anda ditangani langsung oleh tim <em>lead architect</em> dan spesialis keamanan kami.",
    sec_s7_btn_wa: "&#128172; Saluran Darurat Keamanan",

    // Subpages: Terms
    terms_badge: "&#9878;&#65039; Perjanjian Layanan SaaS",
    terms_hero_title: "Syarat &amp; Ketentuan Layanan NexaMOS",
    terms_meta_1: "&#128197; Terakhir Diperbarui: 16 September 2026",
    terms_meta_2: "&#128220; Kontrak Penggunaan Platform CRM",

    terms_meta_3: "&#127970; LPK &amp; Pendidikan Vokasi",

    // Subpages: Terms - TOC
    terms_toc_title: "Daftar Isi",
    terms_toc_1: "1. Definisi &amp; Ketentuan Umum",
    terms_toc_2: "2. Akun &amp; Ruang Kerja Tenant",
    terms_toc_3: "3. Batasan Penggunaan &amp; Anti-Spam",
    terms_toc_4: "4. Biaya, Langganan &amp; Billing",
    terms_toc_5: "5. Tingkat Layanan (SLA) &amp; Uptime",
    terms_toc_6: "6. Hak Kekayaan Intelektual",
    terms_toc_7: "7. Batasan Tanggung Jawab",
    terms_toc_8: "8. Penangguhan &amp; Pengakhiran",
    terms_toc_9: "9. Hukum yang Berlaku &amp; Sengketa",
    terms_toc_10: "10. Kontak Resmi",

    // Subpages: Terms - Lead & Sections
    terms_lead: "Perjanjian ini mengatur syarat, hak, dan kewajiban antara <strong>NexaMOS</strong> (sebagai penyedia platform CRM SaaS) dengan <strong>Lembaga Pelatihan Kerja (LPK), Lembaga Kursus dan Pelatihan (LKP), dan Satuan Pendidikan Vokasi</strong> (sebagai Pelanggan/Tenant) dalam memanfaatkan ekosistem manajemen siswa dan integrasi WhatsApp.",
    terms_s1_title: "1. Definisi &amp; Ketentuan Umum",
    terms_s1_intro: "Kecuali secara tegas ditentukan lain, istilah-istilah berikut memiliki arti:",
    terms_s1_li_1: "<strong>NexaMOS:</strong> Platform perangkat lunak sebagai layanan (SaaS) manajemen hubungan pelanggan (<em>Customer Relationship Management</em>) berbasis bukti (<em>Evidence-Based</em>) dan <em>Event-Sourcing</em>.",
    terms_s1_li_2: "<strong>Tenant / Pelanggan:</strong> Lembaga, organisasi, atau entitas hukum berizin resmi yang mendaftar dan berlangganan layanan NexaMOS.",
    terms_s1_li_3: "<strong>Pengguna Akhir:</strong> Staf, CRO (<em>Customer Relationship Officer</em>), konselor, atau administrator yang ditunjuk oleh Tenant untuk mengoperasikan CRM.",
    terms_s1_li_4: "<strong>Event-Sourcing:</strong> Arsitektur sistem di mana seluruh transisi status siswa, log WhatsApp, penilaian kualifikasi, dan pembayaran formulir disimpan sebagai rekaman data yang tidak dapat diubah (<em>immutable event</em>).",

    terms_s2_title: "2. Akun &amp; Ruang Kerja Tenant",
    terms_s2_p1: "Setiap pendaftaran lembaga akan melalui proses verifikasi dan penyediaan ruang kerja (<em>workspace</em>) privat berkecepatan tinggi:",
    terms_s2_card_title: "&#128272; Kewajiban Keamanan Akun",
    terms_s2_card_desc: "Tenant bertanggung jawab penuh atas kerahasiaan kredensial login (email, kata sandi, dan token akses) milik seluruh stafnya. Segala tindakan operasional yang dilakukan melalui akun Pengguna dianggap sah sebagai instruksi dari Tenant yang bersangkutan.",
    terms_s2_p2: "Tenant wajib segera memberitahukan tim teknis NexaMOS apabila menemukan indikasi penyusupan akun atau penggunaan tidak sah pada ruang kerja CRM miliknya.",

    terms_s3_title: "3. Batasan Penggunaan yang Bertanggung Jawab &amp; Kebijakan Anti-Spam",
    terms_s3_p1: "Platform NexaMOS dirancang untuk membina hubungan edukatif yang kredibel dengan calon siswa. Pengguna dilarang keras menyalahgunakan sistem untuk:",
    terms_s3_li_1: "<strong>Spam WhatsApp Massal:</strong> Mengirimkan pesan promosi tanpa izin (<em>unsolicited messages</em>) ke nomor kontak yang tidak pernah memberikan minat awal (<em>Verified Initial Interest</em>).",
    terms_s3_li_2: "<strong>Pelanggaran Meta Commerce Policy:</strong> Menggunakan integrasi WhatsApp Business API untuk mempromosikan penipuan, lowongan kerja palsu, atau produk terlarang yang melanggar ketentuan resmi Meta.",
    terms_s3_li_3: "<strong>Manipulasi Data Kualifikasi:</strong> Memalsukan bukti verifikasi (FNAR) untuk meloloskan calon peserta ke program magang secara ilegal.",
    terms_s3_callout_title: "&#9888;&#65039; Perlindungan Kualitas Nomor (Meta Quality Rating)",
    terms_s3_callout_desc: "Jika nomor WhatsApp lembaga Anda mendapatkan teguran keras atau pemblokiran dari Meta akibat laporan spam oleh penerima pesan, NexaMOS tidak bertanggung jawab atas kerugian operasional yang timbul dari nomor yang diblokir oleh pihak Meta.",

    terms_s4_title: "4. Biaya, Langganan &amp; Kebijakan Billing",
    terms_s4_intro: "Layanan NexaMOS disediakan dalam beberapa paket langganan (Free Tier, Starter, Growth, hingga Enterprise) dengan rincian:",
    terms_s4_li_1: "<strong>Siklus Penagihan:</strong> Biaya langganan dibayarkan secara berkala (bulanan atau tahunan) di muka (<em>in-advance</em>) melalui transfer bank, virtual account, atau saluran pembayaran resmi yang disediakan.",
    terms_s4_li_2: "<strong>Pajak &amp; Biaya WhatsApp API:</strong> Biaya langganan SaaS mencakup pemakaian platform CRM. Biaya percakapan WhatsApp Business API resmi Meta (<em>Utility</em>, <em>Marketing</em>, atau <em>Service conversations</em>) ditagihkan sesuai tarif resmi Meta atau saldo BYOW lembaga.",
    terms_s4_li_3: "<strong>Kebijakan Pengembalian Dana (Refund):</strong> Pembayaran langganan yang telah terkonfirmasi bersifat non-refundable (tidak dapat dikembalikan), kecuali terjadi kegagalan sistem permanen dari pihak NexaMOS yang tidak dapat diselesaikan dalam batas wajar.",

    terms_s5_title: "5. Tingkat Layanan (SLA) &amp; Uptime Sistem",
    terms_s5_p1: "NexaMOS berupaya menjaga ketersediaan infrastruktur platform dengan target ketersediaan layanan minimal <strong>99.8% setiap bulan</strong>.",
    terms_s5_card_title: "&#9881;&#65039; Pemeliharaan Terjadwal (Scheduled Maintenance)",
    terms_s5_card_desc: "Pembaruan sistem berkala dilakukan pada jam beban rendah (antara pukul 23:00 hingga 04:00 WIB). Informasi pemeliharaan akan diumumkan minimal 24 jam sebelumnya melalui dasbor pengumuman atau kanal komunikasi resmi.",

    terms_s6_title: "6. Hak Kekayaan Intelektual &amp; Kepemilikan Data",
    terms_s6_li_1: "<strong>Kepemilikan Data Pelanggan:</strong> Seluruh data calon siswa, riwayat percakapan, dokumen pendaftaran, dan data keuangan yang dimasukkan oleh Tenant adalah milik sah dan eksklusif Tenant. NexaMOS tidak memiliki klaim kepemilikan atas data tersebut.",
    terms_s6_li_2: "<strong>Hak Cipta Platform NexaMOS:</strong> Seluruh kode sumber, arsitektur <em>event-sourcing</em>, antarmuka pengguna (UI/UX), algoritma <em>smart routing</em>, logo, dan merek dagang NexaMOS adalah kekayaan intelektual milik NexaMOS yang dilindungi undang-undang.",

    terms_s7_title: "7. Batasan Tanggung Jawab &amp; Force Majeure",
    terms_s7_intro: "Sejauh diizinkan oleh hukum yang berlaku, NexaMOS tidak bertanggung jawab atas:",
    terms_s7_li_1: "Gangguan konektivitas atau pemadaman jaringan telekomunikasi pihak ketiga (Telkom, Indosat, AWS, Render, Meta API).",
    terms_s7_li_2: "Keputusan sepihak Meta dalam menonaktifkan atau membatasi batas pesan (<em>messaging limits</em>) pada nomor WhatsApp Tenant.",
    terms_s7_li_3: "Kelalaian staf internal Tenant dalam menjaga kerahasiaan kata sandi atau salah input data kualifikasi siswa.",

    terms_s8_title: "8. Penangguhan &amp; Pengakhiran Akun",
    terms_s8_intro: "NexaMOS berhak menangguhkan sementara atau mengakhiri akun Tenant secara sepihak apabila:",
    terms_s8_li_1: "Tenant terbukti menggunakan sistem untuk kegiatan melawan hukum atau penipuan ketenagakerjaan luar negeri.",
    terms_s8_li_2: "Keterlambatan pembayaran tagihan langganan melebihi 14 hari kalender sejak jatuh tempo.",
    terms_s8_p2: "Dalam hal pengakhiran wajar (pembatalan sukarela), Tenant berhak meminta ekspor seluruh data master siswa dan riwayat pendaftaran dalam format CSV/Excel dalam jangka waktu 30 hari kalender.",

    terms_s9_title: "9. Hukum yang Berlaku &amp; Penyelesaian Sengketa",
    terms_s9_p1: "Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan <strong>Hukum Negara Kesatuan Republik Indonesia</strong>. Segala perselisihan yang timbul akan diselesaikan secara musyawarah untuk mufakat dalam waktu 30 hari kalender sebelum diajukan ke yurisdiksi Pengadilan Negeri yang berwenang.",

    terms_s10_title: "10. Hubungi Tim Legal NexaMOS",
    terms_s10_p1: "Untuk pertanyaan seputar klausul perjanjian lisensi, penyesuaian Service Agreement Enterprise, atau faktur pajak lembaga, silakan hubungi tim kami:",
    terms_s10_box_title: "Konsultasi Kontrak &amp; Legalitas",
    terms_s10_box_desc: "Tim perwakilan legal NexaMOS siap membantu menjawab kebutuhan formalitas lembaga pelatihan Anda.",
    terms_s10_btn_wa: "&#128172; WhatsApp Tim Legal",

    // Subpages: Privacy
    priv_badge: "&#128274; Pelindungan Data Pribadi",
    priv_hero_title: "Kebijakan Privasi NexaMOS",
    priv_meta_1: "&#128197; Terakhir Diperbarui: 16 September 2026",
    priv_meta_2: "&#9878;&#65039; Kepatuhan UU No. 27 Tahun 2022 (UU PDP)",
    priv_meta_3: "&#128451;&#65039; Arsitektur Database Terisolasi Dedikasi",

    // Subpages: Privacy - TOC
    priv_toc_title: "Daftar Isi",
    priv_toc_1: "1. Pendahuluan &amp; Komitmen",
    priv_toc_2: "2. Data yang Dikumpulkan",
    priv_toc_3: "3. Dasar Hukum &amp; Tujuan",
    priv_toc_4: "4. Arsitektur Isolasi Database",
    priv_toc_5: "5. Integrasi WhatsApp &amp; Meta API",
    priv_toc_6: "6. Hak Subjek Data (UU PDP)",
    priv_toc_7: "7. Retensi &amp; Keamanan Data",
    priv_toc_8: "8. Pengendali vs Pemroses Data",
    priv_toc_9: "9. Hubungi Petugas DPO",

    // Subpages: Privacy - Lead & Sections
    priv_lead: "NexaMOS (nexamos.cloud) berkomitmen menjamin kerahasiaan, integritas, dan keamanan data pribadi seluruh mitra Lembaga Pelatihan Kerja (LPK), Lembaga Kursus dan Pelatihan (LKP), staf operasional, serta calon peserta didik. Kebijakan ini menjelaskan bagaimana data Anda dikumpulkan, diproses, disimpan, dan dilindungi.",
    priv_s1_title: "1. Pendahuluan &amp; Komitmen",
    priv_s1_p1: "Platform NexaMOS disediakan sebagai perangkat lunak berbasis langganan (SaaS CRM) yang dirancang khusus untuk industri pendidikan vokasi dan LPK di Indonesia. Dalam menjalankan operasional, kami tunduk penuh pada ketentuan perundang-undangan Republik Indonesia, khususnya <strong>Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong> serta regulasi terkait transaksi elektronik.",
    priv_s1_p2: "Dengan mendaftar, mengakses, atau menggunakan layanan NexaMOS, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui seluruh ketentuan dalam Kebijakan Privasi ini.",

    priv_s2_title: "2. Data yang Kami Kumpulkan",
    priv_s2_intro: "Kami mengumpulkan dan memproses beberapa kategori data yang diperlukan untuk menjalankan alur kerja CRM:",
    priv_s2_card_a_title: "&#127970; A. Data Akun Lembaga / Tenant",
    priv_s2_card_a_desc: "Informasi pendaftaran organisasi: Nama LPK/institusi, Nomor Izin Operasional (VIN/Nilek), nama narahubung utama, alamat email operasional, nomor telepon WhatsApp resmi, dan rincian paket langganan.",
    priv_s2_card_b_title: "&#128104;&#8205;&#127891; B. Data Calon Siswa &amp; Peserta Didik",
    priv_s2_card_b_desc: "Data yang diinputkan oleh staf LPK atau melalui formulir pendaftaran daring publik: Nama lengkap, Nomor WhatsApp, email, NIK (opsional jika dibutuhkan verifikasi izin magang luar negeri), asal sekolah (SMA/SMK), tanggal lahir, riwayat pendidikan, serta kriteria kualifikasi kejuruan (misalnya: tinggi badan, riwayat medis dasar patah tulang/buta warna untuk program magang Jepang/Jerman).",
    priv_s2_card_c_title: "&#128106; C. Data Pengambil Keputusan (Orang Tua / Wali)",
    priv_s2_card_c_desc: "Mengingat model keputusan pendidikan vokasi melibatkan keluarga (B2B2C), sistem mencatat nama orang tua/wali, nomor kontak, serta bukti kehadiran pada sesi konsultasi (Home Visit / Konseling Karir).",
    priv_s2_card_d_title: "&#128172; D. Metadata Pesan &amp; Log WhatsApp",
    priv_s2_card_d_desc: "Timestamp pengiriman pesan, ID pesan Meta Cloud API, status pengiriman (sent, delivered, read), tipe pesan (template, text, interactive button, image), serta riwayat percakapan yang masuk melalui Webhook resmi.",

    priv_s3_title: "3. Dasar Hukum &amp; Tujuan Pemrosesan Data",
    priv_s3_intro: "Pemrosesan data pribadi oleh NexaMOS didasarkan pada prinsip keabsahan sesuai Pasal 20 UU PDP:",
    priv_s3_li_1: "<strong>Persetujuan yang Sah:</strong> Calon siswa memberikan persetujuan saat mengisi formulir pendaftaran atau berinteraksi secara sukarela melalui WhatsApp resmi lembaga.",
    priv_s3_li_2: "<strong>Pelaksanaan Kontrak:</strong> Pemrosesan data akun lembaga dibutuhkan untuk menyediakan akses ruang kerja SaaS CRM, alur registrasi, dan pelaporan berkala.",
    priv_s3_li_3: "<strong>Kewajiban Hukum:</strong> Kepatuhan pelaporan akreditasi vokasi, regulasi ketenagakerjaan, serta audit transaksi keuangan resmi.",
    priv_s3_callout_title: "&#128161; Model Bukti Nyata (Evidence-Based Processing)",
    priv_s3_callout_desc: "NexaMOS memproses data bukan untuk profil komersial pihak ketiga atau periklanan eksternal. Seluruh data murni digunakan untuk menilai kualifikasi peserta (Framework FNAR: Fit, Need, Ability, Readiness) secara objektif demi kelancaran program pelatihan.",

    priv_s4_title: "4. Arsitektur Isolasi Database Tenant",
    priv_s4_p1: "Berbeda dengan CRM tradisional yang menggabungkan ribuan data klien dalam satu tabel bersama (<em>shared multi-tenant</em>), NexaMOS menerapkan standar <strong>Isolated Database per-Tenant</strong>:",
    priv_s4_li_1: "Setiap lembaga LPK yang berlangganan memiliki skema database MySQL terpisah secara fisik/logis.",
    priv_s4_li_2: "Staf atau CRO dari Lembaga A <em>mustahil</em> melihat, mengakses, atau mengunduh data calon siswa milik Lembaga B.",
    priv_s4_li_3: "Kredensial database dienkripsi menggunakan standar industri AES-256 dan dikelola secara terpusat oleh sistem isolasi keamanan kami.",

    priv_s5_title: "5. Integrasi WhatsApp &amp; Meta Cloud API",
    priv_s5_p1: "NexaMOS terintegrasi langsung dengan Meta Business Cloud API resmi. Kami mendukung model <strong>BYOW (Bring Your Own WhatsApp)</strong> di mana lembaga dapat menghubungkan aplikasi WhatsApp Business Meta mereka sendiri:",
    priv_s5_li_1: "<strong>Kerahasiaan Kredensial:</strong> Phone Number ID, WABA ID, dan Permanent Access Token Anda disimpan dalam penyimpanan terenkripsi khusus tenant.",
    priv_s5_li_2: "<strong>Verifikasi Webhook:</strong> Setiap pesan masuk diverifikasi keasliannya menggunakan tanda tangan kriptografis HMAC SHA-256 Meta untuk mencegah pemalsuan identitas (<em>spoofing</em>).",
    priv_s5_li_3: "<strong>Tidak Menjual Data:</strong> NexaMOS tidak pernah menjual, menyewakan, atau mendistribusikan kontak nomor WhatsApp Anda kepada pihak pengiklan mana pun.",

    priv_s6_title: "6. Hak Subjek Data Pribadi (UU PDP)",
    priv_s6_intro: "Sesuai dengan Bab IV UU No. 27 Tahun 2022, subjek data (siswa dan wali) memiliki hak hukum sebagai berikut:",
    priv_s6_li_1: "<strong>Hak Akses:</strong> Memperoleh informasi dan kejelasan mengenai keabsahan pemrosesan data pribadinya.",
    priv_s6_li_2: "<strong>Hak Koreksi:</strong> Memperbarui atau melengkapi data diri yang tidak akurat melalui portal formulir atau konfirmasi ke staf LPK.",
    priv_s6_li_3: "<strong>Hak Penghapusan (Right to Erasure):</strong> Mengajukan permohonan penghapusan profil data diri jika sudah tidak lagi terdaftar atau mencabut persetujuan komunikasi.",
    priv_s6_li_4: "<strong>Hak Penarikan Persetujuan (Opt-Out):</strong> Berhak menghentikan komunikasi broadcast otomatis kapan saja dengan membalas kata kunci pembatalan atau menghubungi CRO penanggung jawab.",

    priv_s7_title: "7. Retensi &amp; Keamanan Data",
    priv_s7_p1: "Kami menerapkan tindakan perlindungan teknis dan organisasi yang ketat untuk mencegah akses tanpa izin, kehilangan, atau manipulasi data:",
    priv_s7_li_1: "<strong>Enkripsi Transit &amp; Istirahat:</strong> Seluruh pertukaran data melalui protokol aman TLS 1.3 / HTTPS. Penyimpanan database dilengkapi enkripsi media penyimpanan (<em>encryption at rest</em>).",
    priv_s7_li_2: "<strong>Audit Trail Event-Sourcing:</strong> Setiap perubahan status siswa dicatat secara permanen (<em>immutable</em>) dengan rekam jejak aktor penanggung jawab untuk audit forensik.",
    priv_s7_li_3: "<strong>Periode Retensi:</strong> Data operasional disimpan selama akun lembaga berstatus aktif dan akan diarsipkan selama jangka waktu yang diwajibkan regulasi administrasi pendidikan sebelum dihapus permanen secara aman.",

    priv_s8_title: "8. Pengendali Data vs Pemroses Data",
    priv_s8_callout_title: "&#9878;&#65039; Batasan Peran Hukum",
    priv_s8_callout_desc: "Dalam konteks UU PDP:<br>&bull; <strong>Lembaga LPK / Mitra Tenant</strong> bertindak sebagai <em>Pengendali Data Pribadi (Data Controller)</em> yang menentukan tujuan dan instruksi pengumpulan data calon siswa.<br>&bull; <strong>NexaMOS</strong> bertindak sebagai <em>Pemroses Data Pribadi (Data Processor)</em> yang memproses data semata-mata atas nama dan berdasarkan instruksi operasional yang diberikan oleh Lembaga LPK.",

    priv_s9_title: "9. Hubungi Petugas Pelindungan Data (DPO)",
    priv_s9_p1: "Jika Anda memiliki pertanyaan, keberatan, atau ingin menjalankan hak-hak Anda terkait pelindungan data pribadi, silakan hubungi tim resmi kami:",
    priv_s9_box_title: "Tim Legal &amp; Keamanan NexaMOS",
    priv_s9_box_desc: "Kami siap membantu menjawab kebutuhan audit kepatuhan, privasi, dan keamanan institusi Anda.",
    priv_s9_btn_wa: "&#128172; WhatsApp Tim Legal",

    // Subpages: About
    about_badge: "&#9889; Manifesto &amp; Rekayasa Sistem",
    about_hero_title: "Mengakhiri Era Asumsi.<br><span class=\"highlight\">Membangun CRM Berbasis Bukti Nyata.</span>",
    about_hero_lead: "NexaMOS lahir dari rasa frustrasi melihat ribuan calon siswa vokasi dan miliaran rupiah anggaran LPK lenyap di spreadsheet yang rapuh dan grup WhatsApp yang kacau. Kami membangun sistem saraf digital yang memadukan disiplin penjualan lapangan dengan ketelitian data enterprise.",

    // Subpages: About - Stats Ribbon
    about_stat1_label: "Database Mandiri Terisolasi per-Lembaga (Zero Data Leak)",
    about_stat2_label: "Uptime SLA Infrastruktur Server Produksi",
    about_stat3_num: "25+ Thn",
    about_stat3_label: "Fondasi Praktik Sales &amp; Marketing Founder",
    about_stat4_num: "Batch 1",
    about_stat4_label: "Kurasi Khusus 10 Tenant Pertama di Closed Beta",

    // Subpages: About - Narrative Section
    about_story_eyebrow: "&#128269; Kisah Asal Mula",
    about_story_heading: "Mengapa CRM Asing Gagal Memahami Realitas Lapangan LPK Indonesia?",
    about_story_p1: "Di atas kertas, industri SaaS dunia dibanjiri nama-nama raksasa seperti Salesforce, HubSpot, atau Pipedrive. Namun ketika perangkat lunak tersebut dipaksakan masuk ke Lembaga Pelatihan Kerja (LPK), Lembaga Kursus dan Pelatihan (LKP), dan sekolah vokasi di Indonesia, sistem itu langsung <strong>runtuh menghadapi kenyataan lapangan</strong>.",
    about_story_p2: "CRM konvensional dibangun dengan asumsi dunia Barat: calon pembeli adalah individu otonom yang bisa langsung gesek kartu kredit dalam hitungan hari. Mereka tidak paham bahwa anak SMA/SMK yang mendaftar program magang luar negeri (Jepang, Jerman, Korea) membutuhkan <strong>siklus pendampingan 6 hingga 12 bulan</strong>.",
    about_story_p3: "Keputusan biaya belasan hingga puluhan juta rupiah tidak diputuskan sendirian oleh anak. Ada <strong>Jaring Keputusan Kolektif (B2B2C Buying Unit)</strong>: orang tua pemegang veto finansial, guru BK sekolah asal sebagai validator, dan teman sebaya sebagai pembukti sosial (<em>social proof</em>).",
    about_story_p4: "NexaMOS tidak dirancang di ruang rapat yang sejuk. Sistem ini dirumuskan dan diuji langsung melalui laboratorium operasional bersama <strong>Derma Indonesia</strong> sebagai pilot tenant—memastikan setiap fitur menjawab jerit payah CRO dan pimpinan lembaga di lapangan.",

    // Subpages: About - Bento Grid (Core Values)
    about_bento_eyebrow: "&#128737;&#65039; Konstitusi Kami",
    about_bento_heading: "4 Prinsip Fondasi NexaMOS",
    about_bento_sub: "Hukum absolut yang mendasari setiap baris kode dan logika bisnis di dalam platform ini.",
    about_bento_c1_title: "1. Bukti Mengalahkan Asumsi (Evidence Over Intuition)",
    about_bento_c1_desc: "CRM tradisional sering hancur karena staf menggeser status prospek hanya berdasarkan \"perasaan\". Di NexaMOS, status siswa terkunci mati. Status hanya bisa berpindah jika ada bukti objektif: kualifikasi FNAR (<em>Fit, Need, Ability, Readiness</em>) atau verifikasi kas sah uang muka (DP).",
    about_bento_c2_title: "2. Kedaulatan &amp; Database Privat Mandiri",
    about_bento_c2_desc: "Kami menolak keras konsep <em>shared multi-tenant pool</em> di mana data ribuan lembaga bercampur dalam satu tabel. Di NexaMOS, setiap lembaga memiliki skema database MySQL terpisah secara fisik/logis. Data siswa Anda tidak akan pernah bocor ke kompetitor.",
    about_bento_c3_title: "3. Menghargai Realitas Ekosistem Keluarga (B2B2C)",
    about_bento_c3_desc: "Siswa mengetik <em>\"Kak, saya fix mau daftar\"</em> di WhatsApp hanyalah sebuah minat (<em>intent</em>), bukan komitmen. Status Opportunity baru sah terbuka jika CRO mencatat hasil kehadiran <em>Home Visit</em> atau konsultasi keputusan nyata yang melibatkan orang tua selaku pembayar sah.",
    about_bento_c4_title: "4. Memberdayakan Manusia, Bukan Menggantikannya",
    about_bento_c4_desc: "Pendidikan vokasi adalah bisnis kepercayaan antar-manusia. NexaMOS tidak menggantikan CRO dengan chatbot AI kaku, melainkan menjadi <em>copilot preskriptif</em> yang memberi panduan <em>Next-Best-Action</em> harian di Task List agar tidak ada satupun prospek potensial yang terabaikan.",

    // Subpages: About - Dual Engine
    about_dual_eyebrow: "&#9881;&#65039; Paradigma Dua Lapisan",
    about_dual_heading: "Nexa OS &times; Nexa MOS: Harmoni Otot &amp; Otak",
    about_dual_sub: "Pemisahan tegas antara sistem saraf pencatat bukti operasional dan mesin komputasi keputusan cerdas.",
    about_dual_os_title: "&#128736;&#65039; NEXA OS",
    about_dual_os_sub: "The Execution &amp; Evidence Layer (Otot Eksekusi)",
    about_dual_os_desc: "Mencatat apa yang benar-benar terjadi di lapangan secara objektif dengan arsitektur <em>Event-Sourcing CQRS</em> tanpa manipulasi asumsi manusia.",
    about_dual_os_li_1: "&#10003; 1 Lembaga = 1 Basis Data Privat Terisolasi",
    about_dual_os_li_2: "&#10003; Penilaian Kualifikasi Fisik &amp; Administrasi FNAR",
    about_dual_os_li_3: "&#10003; Smart WhatsApp Routing (SW 24 Jam &amp; Fallback)",
    about_dual_os_li_4: "&#10003; Pemisahan Saluran B2B Sekolah vs B2C Siswa",
    about_dual_mos_title: "&#129504; NEXA MOS",
    about_dual_mos_sub: "The Brain &amp; Decision Layer (Otak Keputusan)",
    about_dual_mos_desc: "Menganalisis tumpukan data objektif dari Nexa OS untuk menghasilkan panduan manuver bisnis bagi pimpinan LPK layaknya memiliki <em>Virtual Chief Strategy Officer</em>.",
    about_dual_mos_li_1: "&#10003; Unscripted Objection Logs &amp; Competitor Tracker",
    about_dual_mos_li_2: "&#10003; Omnichannel Closed-Loop (Meta CAPI &amp; Google OCT)",
    about_dual_mos_li_3: "&#10003; Rekomendasi Reposisi Pasar &amp; Kurva Nilai Penawaran",
    about_dual_mos_li_4: "&#10003; Unified Metrics: Biaya Nyata per Siswa Bayar Kas (True CAC)",

    // Subpages: About - Milestone Timeline
    about_time_eyebrow: "&#128640; Lintasan Waktu",
    about_time_heading: "Perjalanan Membangun Ekosistem",
    about_time_sub: "Dari perumusan masalah di lapangan hingga rilis sistem produksi modern.",
    about_time_c1_title: "Problem Discovery Lapangan",
    about_time_c1_desc: "Riset intensif mengidentifikasi kebocoran prospek dan pemborosan iklan di puluhan lembaga vokasi yang terjebak di spreadsheet manual.",
    about_time_c2_title: "Laboratorium Pilot Derma",
    about_time_c2_desc: "Merumuskan Master Ontologi 9 Domain bersama Derma Indonesia, mengunci Framework Kualifikasi FNAR dan arsitektur Event-Sourcing.",
    about_time_c3_title: "Peluncuran Nexa OS (Fase 1)",
    about_time_c3_desc: "Live deployment multi-tenant database privat, WhatsApp Smart Routing hibrida, Quota Safeguard Closed Beta, dan auto-billing Midtrans.",
    about_time_c4_title: "Nexa MOS Decision Engine",
    about_time_c4_desc: "Aktivasi kecerdasan komputasional, pelacakan atribusi Meta CAPI &amp; Google OCT, serta modul kokpit Virtual CSO pimpinan lembaga.",

    // Subpages: About - CTA
    about_cta_title: "Siap Membawa Ekosistem LPK Anda ke Standar Baru?",
    about_cta_sub: "Kuota pendaftaran Batch 1 Closed Beta dibuka terbatas maksimal 10 lembaga terpilih guna menjamin pendampingan teknis intensif dan keandalan server privat.",
    about_cta_btn_demo: "&#128640; Coba Demo Live &mdash; Gratis",
    about_cta_btn_wa: "&#128172; Diskusi Langsung via WhatsApp",

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

    // Pricing Feature Lists - Free
    price_free_f1: "300 kontak prospek baru/3 bulan (100/bln)",
    price_free_f2: "10 sekolah / mitra B2B/3 bulan",
    price_free_f3: "4 User Team (1 Adm, 1 Mgr, 1 Chief, 1 CRO)",
    price_free_f4: "Live Chat WA + Task List",
    price_free_f5: "Dashboard Metrik &amp; Kualifikasi FNAR",
    price_free_f6: "Auto Nurturing &amp; Broadcast",
    price_free_f7: "BYOW WhatsApp API",
    price_free_f8: "Dedicated Database",

    // Pricing Feature Lists - Pro
    price_pro_f1: "1.000 kontak/siswa aktif per bulan (12.000/thn)",
    price_pro_f2: "20 sekolah / mitra B2B per bulan (240/thn)",
    price_pro_f3: "5 User Team (1 Adm, 1 Mgr, 1 Chief, 2 CRO)",
    price_pro_f4: "Live Chat + Shared Team Inbox",
    price_pro_f5: "Auto Nurturing + Snooze Campaign",
    price_pro_f6: "Broadcast WhatsApp + Template Dinamis",
    price_pro_f7: "BYOW (App Meta &amp; No WA Sendiri)",
    price_pro_f8: "Add-on Seat CRO Rp 100rb/bln",

    // Pricing Feature Lists - Business
    price_biz_f1: "2.500 kontak/siswa aktif per bulan (30.000/thn)",
    price_biz_f2: "41 sekolah / mitra B2B per bulan (500/thn)",
    price_biz_f3: "15 User Team (1 Adm, 1 Mgr, 3 Chief, 10 CRO)",
    price_biz_f4: "Semua fitur Pro",
    price_biz_f5: "Manajemen Multi-Periode &amp; Form Publik",
    price_biz_f6: "Smart WA Routing (Gratis SW Terbuka)",
    price_biz_f7: "Priority Support Teknis",
    price_biz_f8: "Add-on Seat CRO Rp 100rb/bln",

    // Pricing Feature Lists - Enterprise
    price_ent_f1: "8.333 kontak/siswa aktif per bulan (100.000/thn)",
    price_ent_f2: "166 sekolah / mitra B2B per bulan (2.000/thn)",
    price_ent_f3: "39 User Team (1 Adm, 3 Mgr, 5 Chief, 30 CRO)",
    price_ent_f4: "Semua fitur Business",
    price_ent_f5: "Tersedia Opsi White Label 100%",
    price_ent_f6: "Dedicated DB Cluster Privat",
    price_ent_f7: "SLA Guarantee 99.9% &amp; Assisted Onboarding",
    price_ent_f8: "Perjanjian Kontrak Kerjasama B2B Resmi",

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
    footer_features: "Fitur Unggulan",
    footer_innovations: "Roadmap Inovasi",
    footer_pricing: "Harga",
    footer_how: "Cara Kerja",
    footer_demo: "Demo Live",
    footer_col_company: "Perusahaan",
    footer_about: "Tentang Nexa",
    footer_blog: "Blog",
    footer_careers: "Karir",
    footer_contact: "Kontak",
    footer_col_legal: "Legal",
    footer_privacy: "Kebijakan Privasi",
    footer_terms: "Syarat &amp; Ketentuan",
    footer_security: "Keamanan Data",
    footer_status: "Status Sistem",
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
    title_status: "System & Service Status — NexaMOS CRM",
    title_security: "Data Security & Architecture — NexaMOS CRM",
    title_terms: "Terms of Service — NexaMOS CRM",
    title_privacy: "Privacy Policy — NexaMOS CRM",
    title_about: "About NexaMOS — Evidence-Based CRM for Vocational Academies & Multi-Sector Businesses",

    // Navigation
    nav_home: "Home",
    nav_features: "Features",
    nav_innovations: "Innovations",
    nav_how: "How It Works",
    nav_pricing: "Pricing",
    nav_proof: "Testimonials",
    nav_blog: "Blog",
    nav_demo_btn: "Demo &#8599;",
    nav_login_crm: "CRM Login",
    nav_start_btn: "Start Free",
    nav_menu_btn: "&#9776;",
    nav_demo_live: "Live Demo &#8599;",
    nav_lang_label: "Language / Bahasa:",

    // Breadcrumbs
    bc_home: "Home",
    bc_legal: "Legal",
    bc_company: "Company",
    bc_status: "System Status",
    bc_security: "Data Security",
    bc_terms: "Terms &amp; Conditions",
    bc_privacy: "Privacy Policy",
    bc_about: "About NexaMOS",

    // Subpages: Status
    status_card_title: "All Systems Operational",
    status_card_sub: "&#9889; All NexaMOS services are operating optimally with no disruptions detected.",
    status_uptime_lbl: "90-Day Uptime",
    status_section_title: "&#128225; Core Services &amp; Infrastructure",
    status_comp_web: "Web CRM Application (Frontend Dashboard)",
    status_comp_web_desc: "Official CRM dashboard portal (crm.nexamos.cloud) &amp; CRO interface.",
    status_comp_api: "Core Backend API Server (nexa-os)",
    status_comp_api_desc: "RESTful API engine, JWT session authentication, and operational data sync.",
    status_comp_wa: "WhatsApp Cloud API &amp; Webhook Ingestion",
    status_comp_wa_desc: "Dual-path hybrid webhook ingestion (BYOW &amp; Global Meta API) &amp; smart interactive fallback.",
    status_comp_db: "Dedicated Isolated Tenant Databases",
    status_comp_db_desc: "Isolated MySQL database clusters per institution with high-speed dynamic connection pooling.",
    status_comp_events: "Event-Sourcing Engine &amp; Projection Sync",
    status_comp_events_desc: "Immutable events_log recording and real-time student_current_state read-model projection sync.",
    status_comp_payment: "Payment Gateway &amp; Form Verification Tokens",
    status_comp_payment_desc: "Automated payment proof verification for online registration and financial webhooks.",
    status_comp_queue: "Redis Queue &amp; Broadcast Worker",
    status_comp_queue_desc: "Scheduled bulk broadcast queue dispatcher, auto nurturing, and automated cron jobs.",
    status_comp_cdn: "Storage &amp; CDN Assets",
    status_comp_cdn_desc: "CDN delivery for static assets, registration evidence documents, payment receipts, and WhatsApp media.",
    status_pill_operational: "Operational",
    status_legend_90d: "90 days ago",
    status_legend_today: "Today",
    status_history_title: "&#128197; Maintenance &amp; System Release History",
    status_tl1_date: "September 14, 2026 &bull; Completed",
    status_tl1_title: "Payment Verification &amp; Meta Webhook Transfer Receipt Ingestion Update",
    status_tl1_desc: "Enhanced automated payment receipt ingestion via WhatsApp and instant status sync to Registered Opportunity. Zero operational downtime.",
    status_tl2_date: "September 8, 2026 &bull; Completed",
    status_tl2_title: "Database Index Optimization &amp; Dynamic Tenant Connection Pool",
    status_tl2_desc: "45% faster query response times for candidate search and live chat. Maintenance successfully executed during off-peak hours (02:00 WIB).",
    status_tl3_date: "September 1, 2026 &bull; Completed",
    status_tl3_title: "Quarterly Security Audit &amp; SSL/TLS Certificate Renewal",
    status_tl3_desc: "HTTPS security certificate renewal and encryption-at-rest compliance verification.",

    // Subpages: Security
    sec_badge: "&#128737;&#65039; Enterprise Security &amp; Compliance",
    sec_hero_title: "Data Security &amp; NexaMOS Architecture",
    sec_meta_1: "&#128197; Active Security Standard 2026",
    sec_meta_2: "&#128274; End-to-End Encryption TLS 1.3 &amp; AES-256",
    sec_meta_3: "&#128451;&#65039; Zero Shared Data Pool",
    // Subpages: Security - 6 Pillars
    sec_pillar_1_title: "Isolated Dedicated Databases",
    sec_pillar_1_desc: "Every institution is provisioned with a separated physical/logical database schema, eliminating 100% of inter-tenant data leak risks.",
    sec_pillar_2_title: "Multi-Layered Data Encryption",
    sec_pillar_2_desc: "Data in transit is safeguarded by modern TLS 1.3, while sensitive credentials and data at rest are secured with military-grade AES-256.",
    sec_pillar_3_title: "HMAC Webhook Signature",
    sec_pillar_3_desc: "Every inbound WhatsApp message payload is cryptographically authenticated using Meta HMAC SHA-256 signatures to reject spoofing attempts.",
    sec_pillar_4_title: "Granular Role-Based Access Control (RBAC)",
    sec_pillar_4_desc: "Strict role separation (Admin, Manager Finance, CRO, Guest) ensures team members only view and act on data within their designated scope.",
    sec_pillar_5_title: "Event-Sourcing Audit Trail",
    sec_pillar_5_desc: "All pipeline state mutations, WhatsApp dispatches, and financial approvals are recorded as immutable, append-only historical audit logs.",
    sec_pillar_6_title: "Snapshot Backups &amp; High Uptime",
    sec_pillar_6_desc: "Automated daily snapshots are encrypted and archived off-site in multi-region cloud storage with 24/7 uptime monitoring.",

    // Subpages: Security - TOC
    sec_toc_title: "Table of Contents",
    sec_toc_1: "1. Database Isolation Architecture",
    sec_toc_2: "2. WhatsApp Integration Security",
    sec_toc_3: "3. Access Control &amp; Authentication",
    sec_toc_4: "4. Event-Sourcing Integrity",
    sec_toc_5: "5. Payment Data Protection",
    sec_toc_6: "6. Data Backup &amp; Disaster Recovery",
    sec_toc_7: "7. Vulnerability Disclosure Program",

    // Subpages: Security - Lead & Sections
    sec_lead: "Your trust is our absolute priority. Vocational training centers (LPK) and educational academies govern the future careers of thousands of students. NexaMOS is architected with banking-grade, enterprise security foundations to ensure zero data leakage, zero qualification score tampering, and 24/7 protected operations.",
    
    sec_s1_title: "1. Multi-Tenant Database Isolation Architecture",
    sec_s1_p1: "Most legacy cloud CRM platforms rely on a single shared database where records from thousands of companies are distinguished merely by a <code>tenant_id</code> column. A simple developer query bug can inadvertently expose competitor data.",
    sec_s1_callout_title: "&#128737;&#65039; NexaMOS Paradigm: Dedicated Isolated Databases",
    sec_s1_callout_desc: "In NexaMOS, every subscribed institution operates within its own dedicated database schema. Database connections are dynamically pooled and isolated at the backend driver layer. Cross-database queries are strictly blocked at the connection level.",
    sec_s1_p2: "With this architecture, your prospective student data never intermingles physically with other academies, delivering the highest privacy boundaries and predictable query performance free from the \"noisy neighbor\" effect.",

    sec_s2_title: "2. WhatsApp Integration Security (BYOW &amp; Global)",
    sec_s2_p1: "NexaMOS enforces official <strong>Meta WhatsApp Cloud API</strong> standards powered by a dual-path secure webhook architecture:",
    sec_s2_li_1: "<strong>Cryptographic Signature Verification:</strong> Inbound webhook payloads are verified using Meta HMAC SHA-256 with your <code>app_secret</code>. Requests with invalid or missing signatures are immediately rejected (HTTP 403) before entering application logic.",
    sec_s2_li_2: "<strong>Token Credential Encryption:</strong> Permanent WhatsApp Business API system user tokens are stored encrypted in backend storage. Tokens are never exposed to client-side browsers.",
    sec_s2_li_3: "<strong>BYOW (Bring Your Own WhatsApp) Support:</strong> Academies can connect their own independent Meta Developer app credentials, ensuring 100% data sovereignty and direct adherence to Meta communications compliance.",

    sec_s3_title: "3. Access Control &amp; User Authentication (RBAC)",
    sec_s3_p1: "We adhere strictly to the principle of <em>Least Privilege</em> to mitigate risks of internal credential misuse and unauthorized data actions:",
    sec_s3_card_title: "&#128100; Role Permission Matrix",
    sec_s3_card_desc: "&bull; <strong>Super Administrator:</strong> Core infrastructure configuration and tenant provisioning.<br>&bull; <strong>Tenant Admin:</strong> Academy workspace settings, WhatsApp phone integration, and staff management.<br>&bull; <strong>Manager / Finance:</strong> Intake fee verification and core deposit approval (CROs are strictly barred from verifying cash deposits).<br>&bull; <strong>CRO / Counselor:</strong> Live chat operations, logging objective FNAR qualifications, and parent decision counseling records.",
    sec_s3_p2: "All user sessions are secured via short-lived JSON Web Tokens (JWT) dispatched via hardened <code>HttpOnly</code> and <code>Secure</code> cookies to prevent XSS session hijacking.",

    sec_s4_title: "4. Data Integrity via Event-Sourcing",
    sec_s4_p1: "Conventional CRMs suffer from manual tampering because prospect pipeline statuses can be arbitrarily manipulated. NexaMOS enforces an <strong>Event-Sourcing</strong> architectural paradigm:",
    sec_s4_li_1: "Candidate statuses (Lead &rarr; Prospect &rarr; Registered Opportunity &rarr; Customer) are never destructively overwritten.",
    sec_s4_li_2: "Current pipeline status is a deterministic projection computed from a sequence of append-only, verified events in the <code>events_log</code> table.",
    sec_s4_li_3: "Every event records precise ISO timestamps, validated payloads, and authenticated actor identities for immutable forensic auditing.",

    sec_s5_title: "5. Payment &amp; Transaction Protection",
    sec_s5_p1: "In handling student enrollment transactions, NexaMOS enforces strict commercial data boundaries:",
    sec_s5_callout_title: "&#128179; Zero Card Data Storage",
    sec_s5_callout_desc: "NexaMOS never stores credit card numbers, CVVs, or banking PINs. Online transactions are processed directly by central bank-licensed gateways (such as Midtrans) with PCI-DSS Level 1 compliance.",
    sec_s5_p2: "Manual payment receipts sent via WhatsApp are authenticated using unique cryptographic one-time registration tokens with strict expiration thresholds.",

    sec_s6_title: "6. Backup Integrity &amp; Disaster Recovery",
    sec_s6_p1: "To guarantee operational continuity in the event of upstream or third-party infrastructure incidents:",
    sec_s6_li_1: "<strong>Automated Daily Backups:</strong> Every tenant database is automatically backed up nightly, encrypted, and synced to off-site multi-region storage.",
    sec_s6_li_2: "<strong>Keep-Alive Monitoring:</strong> Production backend servers are monitored 24/7 with continuous synthetic heartbeats to ensure zero-sleep availability and immediate WhatsApp webhook ingestion.",
    sec_s6_li_3: "<strong>Recovery Point Objective (RPO):</strong> Sub-24 hours, with a Recovery Time Objective (RTO) under 4 hours in catastrophic recovery scenarios.",

    sec_s7_title: "7. Vulnerability Disclosure Program (VDP)",
    sec_s7_p1: "We value the contributions of independent security researchers in fortifying the NexaMOS ecosystem. If you discover a potential vulnerability:",
    sec_s7_li_1: "Submit findings privately to <strong>security@nexamos.cloud</strong>.",
    sec_s7_li_2: "Include clear step-by-step reproduction steps (Proof of Concept) without compromising live user data.",
    sec_s7_li_3: "Grant our engineering team reasonable time to validate and remediate the issue prior to public disclosure.",
    sec_s7_box_title: "Security Incident Response Team (SIRT)",
    sec_s7_box_desc: "Security reports are reviewed directly by our lead architects and infrastructure security engineers.",
    sec_s7_btn_wa: "&#128172; Security Emergency Channel",

    // Subpages: Terms
    terms_badge: "&#9878;&#65039; SaaS Service Agreement",
    terms_hero_title: "NexaMOS Terms of Service",
    terms_meta_1: "&#128197; Last Updated: September 16, 2026",
    terms_meta_2: "&#128220; CRM Platform Usage Agreement",

    terms_meta_3: "&#127970; Vocational Academies &amp; Training Institutions",

    // Subpages: Terms - TOC
    terms_toc_title: "Table of Contents",
    terms_toc_1: "1. Definitions &amp; General Provisions",
    terms_toc_2: "2. Tenant Account &amp; Workspace",
    terms_toc_3: "3. Responsible Use &amp; Anti-Spam",
    terms_toc_4: "4. Fees, Subscription &amp; Billing",
    terms_toc_5: "5. Service Level (SLA) &amp; Uptime",
    terms_toc_6: "6. Intellectual Property &amp; Data Ownership",
    terms_toc_7: "7. Limitation of Liability &amp; Force Majeure",
    terms_toc_8: "8. Suspension &amp; Account Termination",
    terms_toc_9: "9. Governing Law &amp; Dispute Resolution",
    terms_toc_10: "10. Contact Legal Team",

    // Subpages: Terms - Lead & Sections
    terms_lead: "This agreement governs the terms, rights, and obligations between <strong>NexaMOS</strong> (as the SaaS CRM platform provider) and <strong>Vocational Training Centers (LPK), Certification Institutes (LKP), and Vocational Education Entities</strong> (as Customers/Tenants) in utilizing the student management ecosystem and WhatsApp integrations.",
    terms_s1_title: "1. Definitions &amp; General Provisions",
    terms_s1_intro: "Unless expressly defined otherwise, the following terms shall have the meanings set forth below:",
    terms_s1_li_1: "<strong>NexaMOS:</strong> The Software-as-a-Service (SaaS) Customer Relationship Management platform powered by Evidence-Based pipelines and Event-Sourcing architecture.",
    terms_s1_li_2: "<strong>Tenant / Customer:</strong> The licensed institution, organization, or legal entity that registers and subscribes to NexaMOS services.",
    terms_s1_li_3: "<strong>End User:</strong> Operational staff, CROs (<em>Customer Relationship Officers</em>), counselors, or administrators designated by the Tenant to operate the CRM.",
    terms_s1_li_4: "<strong>Event-Sourcing:</strong> The core system architecture in which all student pipeline state transitions, WhatsApp logs, qualification assessments, and fee payments are recorded as append-only immutable events.",

    terms_s2_title: "2. Tenant Account &amp; Workspace",
    terms_s2_p1: "Every institution registration undergoes verification and provisioning of a private, high-performance workspace:",
    terms_s2_card_title: "&#128272; Account Security Obligations",
    terms_s2_card_desc: "The Tenant is fully responsible for maintaining the confidentiality of login credentials (email, passwords, and access tokens) belonging to its staff. All operational actions performed under User accounts are deemed authorized instructions by the Tenant.",
    terms_s2_p2: "The Tenant must promptly notify the NexaMOS technical team upon detecting any indication of account compromise or unauthorized access to its CRM workspace.",

    terms_s3_title: "3. Responsible Use &amp; Anti-Spam Policy",
    terms_s3_p1: "The NexaMOS platform is engineered to foster credible, educational relationships with prospective candidates. Users are strictly prohibited from abusing the system for:",
    terms_s3_li_1: "<strong>Mass WhatsApp Spam:</strong> Dispatching unsolicited promotional messages to contacts who have never demonstrated verified initial interest.",
    terms_s3_li_2: "<strong>Meta Commerce Policy Violations:</strong> Utilizing the WhatsApp Business API to promote scams, fraudulent job offers, or prohibited items that violate Meta's official policies.",
    terms_s3_li_3: "<strong>Qualification Evidence Manipulation:</strong> Falsifying verification evidence (FNAR) to illegitimately advance candidate statuses in apprenticeship programs.",
    terms_s3_callout_title: "&#9888;&#65039; Phone Number Quality Protection (Meta Quality Rating)",
    terms_s3_callout_desc: "If your institution's WhatsApp phone number receives critical penalties or bans from Meta resulting from recipient spam reports, NexaMOS assumes no liability for operational losses arising from Meta-enforced account restrictions.",

    terms_s4_title: "4. Fees, Subscription &amp; Billing Policy",
    terms_s4_intro: "NexaMOS services are offered under tiered subscription plans (Free Tier, Starter, Growth, and Enterprise) subject to the following terms:",
    terms_s4_li_1: "<strong>Billing Cycle:</strong> Subscription fees are billed on a recurring basis (monthly or annually) in advance via bank transfer, virtual account, or supported official payment gateways.",
    terms_s4_li_2: "<strong>Taxes &amp; WhatsApp API Charges:</strong> SaaS subscription fees cover CRM software usage. Official Meta WhatsApp Business API conversation costs (<em>Utility</em>, <em>Marketing</em>, or <em>Service conversations</em>) are billed based on Meta's official rate card or deducted from the institution's BYOW balance.",
    terms_s4_li_3: "<strong>Refund Policy:</strong> Confirmed subscription payments are strictly non-refundable, except in cases of prolonged permanent system failure directly attributed to NexaMOS that cannot be rectified within reasonable timeframes.",

    terms_s5_title: "5. Service Level Agreement (SLA) &amp; Uptime",
    terms_s5_p1: "NexaMOS strives to ensure platform infrastructure availability with a monthly service uptime target of at least <strong>99.8%</strong>.",
    terms_s5_card_title: "&#9881;&#65039; Scheduled Maintenance",
    terms_s5_card_desc: "Periodic maintenance and system upgrades are conducted during off-peak hours (between 23:00 and 04:00 WIB). Notice of scheduled maintenance will be communicated at least 24 hours in advance via system dashboard announcements or official channels.",

    terms_s6_title: "6. Intellectual Property &amp; Data Ownership",
    terms_s6_li_1: "<strong>Customer Data Ownership:</strong> All prospective student records, chat histories, enrollment documents, and financial records submitted by the Tenant remain the sole and exclusive property of the Tenant. NexaMOS asserts zero proprietary ownership over customer data.",
    terms_s6_li_2: "<strong>NexaMOS Platform IP:</strong> All source code, event-sourcing architectures, UI/UX designs, smart routing algorithms, trademarks, and logos are the proprietary intellectual property of NexaMOS, protected under applicable intellectual property laws.",

    terms_s7_title: "7. Limitation of Liability &amp; Force Majeure",
    terms_s7_intro: "To the maximum extent permitted by applicable law, NexaMOS shall not be liable for:",
    terms_s7_li_1: "Connectivity outages or upstream disruptions from third-party infrastructure (telecoms, AWS, Render, Meta Cloud API).",
    terms_s7_li_2: "Unilateral decisions by Meta to suspend, restrict, or lower messaging tier limits on the Tenant's WhatsApp Business accounts.",
    terms_s7_li_3: "Negligence by Tenant's internal staff in safeguarding login credentials or erroneous manual inputs of student qualification data.",

    terms_s8_title: "8. Suspension &amp; Account Termination",
    terms_s8_intro: "NexaMOS reserves the right to suspend or terminate Tenant workspace access unilaterally if:",
    terms_s8_li_1: "The Tenant is found engaging in unlawful conduct, fraudulent recruitment, or illegal overseas job placement.",
    terms_s8_li_2: "Subscription payment delinquency exceeds 14 calendar days past the due date.",
    terms_s8_p2: "In cases of normal contract termination (voluntary cancellation), the Tenant is entitled to request a complete export of student master records and registration logs in CSV/Excel format within 30 calendar days.",

    terms_s9_title: "9. Governing Law &amp; Dispute Resolution",
    terms_s9_p1: "These Terms and Conditions shall be governed by and construed in accordance with the <strong>Laws of the Republic of Indonesia</strong>. Any dispute arising hereunder shall first be resolved through good-faith amicable negotiations within 30 calendar days prior to submission to the competent District Court.",

    terms_s10_title: "10. Contact NexaMOS Legal Team",
    terms_s10_p1: "For questions regarding licensing agreements, Enterprise Service Level Agreements, or tax invoice requirements, please reach out to our team:",
    terms_s10_box_title: "Contract &amp; Legal Consultation",
    terms_s10_box_desc: "The NexaMOS legal advisory team is prepared to assist with your institution's compliance and enterprise agreements.",
    terms_s10_btn_wa: "&#128172; WhatsApp Legal Team",

    // Subpages: Privacy
    priv_badge: "&#128274; Personal Data Protection",
    priv_hero_title: "NexaMOS Privacy Policy",
    priv_meta_1: "&#128197; Last Updated: September 16, 2026",
    priv_meta_2: "&#9878;&#65039; Compliance with Personal Data Protection Law (UU PDP)",
    priv_meta_3: "&#128451;&#65039; Dedicated Isolated Database Architecture",

    // Subpages: Privacy - TOC
    priv_toc_title: "Table of Contents",
    priv_toc_1: "1. Introduction &amp; Commitment",
    priv_toc_2: "2. Data We Collect",
    priv_toc_3: "3. Legal Basis &amp; Purposes",
    priv_toc_4: "4. Database Isolation Architecture",
    priv_toc_5: "5. WhatsApp &amp; Meta API Integration",
    priv_toc_6: "6. Data Subject Rights (PDP Law)",
    priv_toc_7: "7. Retention &amp; Data Security",
    priv_toc_8: "8. Controller vs Data Processor",
    priv_toc_9: "9. Contact Data Protection Officer",

    // Subpages: Privacy - Lead & Sections
    priv_lead: "NexaMOS (nexamos.cloud) is committed to guaranteeing the confidentiality, integrity, and security of personal data for all vocational training partners (LPK/LKP), operational staff, and prospective students. This policy explains how your data is collected, processed, stored, and protected.",
    priv_s1_title: "1. Introduction &amp; Commitment",
    priv_s1_p1: "The NexaMOS platform is provided as a subscription-based software service (SaaS CRM) engineered specifically for vocational education and training institutions in Indonesia. In our operations, we fully comply with the laws of the Republic of Indonesia, in particular <strong>Law No. 27 of 2022 on Personal Data Protection (UU PDP)</strong> and related electronic transaction regulations.",
    priv_s1_p2: "By registering, accessing, or using NexaMOS services, you acknowledge that you have read, understood, and agreed to all provisions in this Privacy Policy.",

    priv_s2_title: "2. Data We Collect",
    priv_s2_intro: "We collect and process several categories of data necessary to execute core CRM operational workflows:",
    priv_s2_card_a_title: "&#127970; A. Institution / Tenant Account Data",
    priv_s2_card_a_desc: "Organization registration details: Institution name, Operational License Number (VIN/Nilek), primary contact person name, operational email address, official WhatsApp phone number, and subscription plan details.",
    priv_s2_card_b_title: "&#128104;&#8205;&#127891; B. Prospective Student &amp; Trainee Data",
    priv_s2_card_b_desc: "Data entered by institution staff or submitted through public online enrollment forms: Full name, WhatsApp number, email, National ID/NIK (optional when required for overseas apprenticeship verification), high school/vocational alma mater, birth date, educational records, and vocational qualification criteria (e.g., height, basic medical history such as bone fractures or color blindness for Japan/Germany internship programs).",
    priv_s2_card_c_title: "&#128106; C. Decision Maker Data (Parents / Guardians)",
    priv_s2_card_c_desc: "Given that vocational education decisions fundamentally involve families (B2B2C), the system records parent/guardian names, contact details, and evidence of attendance during decision consultation sessions (Home Visits / Career Counseling).",
    priv_s2_card_d_title: "&#128172; D. Message Metadata &amp; WhatsApp Logs",
    priv_s2_card_d_desc: "Message dispatch timestamps, Meta Cloud API message IDs, delivery statuses (sent, delivered, read), message types (template, text, interactive button, image), and incoming chat history received via official Webhooks.",

    priv_s3_title: "3. Legal Basis &amp; Processing Purposes",
    priv_s3_intro: "The processing of personal data by NexaMOS is grounded in lawful principles pursuant to Article 20 of the PDP Law:",
    priv_s3_li_1: "<strong>Lawful Consent:</strong> Prospective students provide consent upon filling intake forms or voluntarily engaging via the institution's official WhatsApp.",
    priv_s3_li_2: "<strong>Contract Performance:</strong> Processing institution account data is essential to provision SaaS CRM workspaces, onboarding workflows, and regular reporting.",
    priv_s3_li_3: "<strong>Legal Obligations:</strong> Compliance with vocational accreditation audits, labor regulations, and official financial transaction audits.",
    priv_s3_callout_title: "&#128161; Real Evidence-Based Processing Model",
    priv_s3_callout_desc: "NexaMOS does not process data for third-party commercial profiling or external advertising. All data is exclusively used to objectively assess candidate qualifications (FNAR Framework: Fit, Need, Ability, Readiness) to ensure smooth training admission.",

    priv_s4_title: "4. Tenant Database Isolation Architecture",
    priv_s4_p1: "Unlike legacy CRMs that bundle thousands of client records into a single shared table (<em>shared multi-tenant</em>), NexaMOS enforces an <strong>Isolated Database per-Tenant</strong> standard:",
    priv_s4_li_1: "Every subscribed institution operates on an isolated physical or logical MySQL database schema.",
    priv_s4_li_2: "Staff or CROs from Institution A <em>cannot</em> view, access, or export prospective student data belonging to Institution B.",
    priv_s4_li_3: "Database credentials are encrypted using industry-standard AES-256 and centrally governed by our security isolation layer.",

    priv_s5_title: "5. WhatsApp &amp; Meta Cloud API Integration",
    priv_s5_p1: "NexaMOS integrates directly with the official Meta Business Cloud API. We support the <strong>BYOW (Bring Your Own WhatsApp)</strong> model allowing institutions to connect their own Meta WhatsApp Business applications:",
    priv_s5_li_1: "<strong>Credential Confidentiality:</strong> Your Phone Number ID, WABA ID, and Permanent Access Tokens are safeguarded in tenant-specific encrypted vaults.",
    priv_s5_li_2: "<strong>Webhook Verification:</strong> Every inbound webhook message is verified for authenticity using Meta HMAC SHA-256 cryptographic signatures to prevent spoofing.",
    priv_s5_li_3: "<strong>Zero Data Selling:</strong> NexaMOS never sells, rents, or distributes your WhatsApp contact lists to any advertisers or third parties.",

    priv_s6_title: "6. Data Subject Rights (PDP Law)",
    priv_s6_intro: "Pursuant to Chapter IV of Law No. 27 of 2022, data subjects (students and guardians) hold the following statutory rights:",
    priv_s6_li_1: "<strong>Right of Access:</strong> Obtain clear information regarding the lawful basis and purpose of personal data processing.",
    priv_s6_li_2: "<strong>Right to Rectification:</strong> Update or complete inaccurate personal data through intake portals or by contacting institution staff.",
    priv_s6_li_3: "<strong>Right to Erasure:</strong> Request the deletion of profile data upon disenrollment or withdrawal of processing consent.",
    priv_s6_li_4: "<strong>Right to Opt-Out:</strong> Stop automated nurturing broadcasts at any time by replying with cancel keywords or notifying the assigned CRO.",

    priv_s7_title: "7. Data Retention &amp; Security",
    priv_s7_p1: "We enforce rigorous technical and organizational safeguards to prevent unauthorized access, loss, or data alteration:",
    priv_s7_li_1: "<strong>In-Transit &amp; At-Rest Encryption:</strong> All data transmissions utilize secure TLS 1.3 / HTTPS. Storage volumes are hardened with encryption at rest.",
    priv_s7_li_2: "<strong>Event-Sourcing Audit Trail:</strong> Every pipeline status transition is recorded as an immutable event with verified actor attribution for forensic audits.",
    priv_s7_li_3: "<strong>Retention Schedule:</strong> Operational data is retained while the institution account is active and archived as required by educational regulations before secure permanent deletion.",

    priv_s8_title: "8. Data Controller vs Data Processor",
    priv_s8_callout_title: "&#9878;&#65039; Legal Role Boundaries",
    priv_s8_callout_desc: "In the context of the PDP Law:<br>&bull; <strong>The Vocational Institution / Tenant Partner</strong> acts as the <em>Personal Data Controller</em> determining the purposes and rules of student data collection.<br>&bull; <strong>NexaMOS</strong> acts as the <em>Personal Data Processor</em> processing data solely on behalf of and under operational instructions from the Institution.",

    priv_s9_title: "9. Contact Data Protection Officer (DPO)",
    priv_s9_p1: "If you have questions, inquiries, or wish to exercise your data protection rights, please contact our official team:",
    priv_s9_box_title: "NexaMOS Legal &amp; Security Team",
    priv_s9_box_desc: "We are ready to support your institution's compliance audits, privacy governance, and security requirements.",
    priv_s9_btn_wa: "&#128172; WhatsApp Legal Team",

    // Subpages: About
    about_badge: "&#9889; Manifesto &amp; System Engineering",
    about_hero_title: "Ending the Era of Assumptions.<br><span class=\"highlight\">Building Real Evidence-Based CRM.</span>",
    about_hero_lead: "NexaMOS was born out of frustration seeing thousands of prospective vocational students and billions in academy budgets disappear into fragile spreadsheets and chaotic WhatsApp groups. We engineered a digital nervous system marrying frontline sales discipline with enterprise data precision.",

    // Subpages: About - Stats Ribbon
    about_stat1_label: "Isolated Dedicated Database per-Institution (Zero Data Leak)",
    about_stat2_label: "Production Infrastructure Uptime SLA",
    about_stat3_num: "25+ Yrs",
    about_stat3_label: "Founder Sales &amp; Marketing Field Foundation",
    about_stat4_num: "Batch 1",
    about_stat4_label: "Curated Cohort: First 10 Tenants in Closed Beta",

    // Subpages: About - Narrative Section
    about_story_eyebrow: "&#128269; The Origin Story",
    about_story_heading: "Why Foreign CRMs Fail in the Realities of Indonesian Vocational Academies?",
    about_story_p1: "On paper, the global SaaS landscape is dominated by tech giants like Salesforce, HubSpot, or Pipedrive. Yet when these tools are deployed into Indonesian Vocational Training Centers (LPK), Certification Institutes (LKP), and vocational schools, they immediately <strong>crumble against operational frontline reality</strong>.",
    about_story_p2: "Conventional CRMs assume Western market paradigms: prospects are autonomous buyers who swipe a credit card within days. They fail to understand that high school and vocational graduates applying for overseas internships (Japan, Germany, Korea) demand a <strong>6 to 12-month consultative nurturing cycle</strong>.",
    about_story_p3: "High-stakes tuition decisions totaling tens of millions of rupiah are never made by the student alone. There is a <strong>Collective Decision Network (B2B2C Buying Unit)</strong>: parents holding financial veto, school counselors serving as validators, and peer cohorts providing social proof.",
    about_story_p4: "NexaMOS was not theorized in air-conditioned boardrooms. It was formulated and field-tested inside real operations alongside <strong>Derma Indonesia</strong> as our pilot tenant—ensuring every feature directly solves the struggles of frontline CROs and academy directors.",

    // Subpages: About - Bento Grid (Core Values)
    about_bento_eyebrow: "&#128737;&#65039; Our Constitution",
    about_bento_heading: "4 Foundational Principles of NexaMOS",
    about_bento_sub: "Absolute laws governing every line of code and business logic in this platform.",
    about_bento_c1_title: "1. Evidence Over Intuition",
    about_bento_c1_desc: "Traditional CRMs deteriorate because staff shift prospect statuses based on mere \"gut feeling\". In NexaMOS, pipeline states are strictly gated. A status only transitions with objective evidence: FNAR qualification (<em>Fit, Need, Ability, Readiness</em>) or verified down payment cash receipt.",
    about_bento_c2_title: "2. Sovereign &amp; Isolated Private Databases",
    about_bento_c2_desc: "We firmly reject shared multi-tenant data pools where thousands of institutions share the same table. In NexaMOS, every institution operates on an isolated physical/logical MySQL schema. Your student data will never leak to competitors.",
    about_bento_c3_title: "3. Respecting Family Ecosystem Dynamics (B2B2C)",
    about_bento_c3_desc: "A candidate texting <em>\"I definitely want to enroll\"</em> on WhatsApp is merely expressing intent, not commitment. An Opportunity state is only unlocked when the CRO verifies attendance at a <em>Home Visit</em> or structured consultation involving the parent as financial payer.",
    about_bento_c4_title: "4. Empowering Humans, Not Replacing Them",
    about_bento_c4_desc: "Vocational education is built on human trust. NexaMOS does not replace CROs with rigid chatbots; it acts as a <em>prescriptive copilot</em> delivering daily <em>Next-Best-Action</em> guidance in the Task List so no high-value candidate is left behind.",

    // Subpages: About - Dual Engine
    about_dual_eyebrow: "&#9881;&#65039; Two-Tier Paradigm",
    about_dual_heading: "Nexa OS &times; Nexa MOS: Muscle &amp; Brain Harmony",
    about_dual_sub: "Clear separation between the operational evidence-recording nervous system and the intelligent strategic decision engine.",
    about_dual_os_title: "&#128736;&#65039; NEXA OS",
    about_dual_os_sub: "The Execution &amp; Evidence Layer (Execution Muscle)",
    about_dual_os_desc: "Objectively records ground-truth frontline events with <em>Event-Sourcing CQRS</em> architecture, free from human guesswork.",
    about_dual_os_li_1: "&#10003; 1 Institution = 1 Isolated Private Database",
    about_dual_os_li_2: "&#10003; FNAR Physical &amp; Administrative Qualification Gating",
    about_dual_os_li_3: "&#10003; Smart WhatsApp Routing (24h SW &amp; Fallback)",
    about_dual_os_li_4: "&#10003; Separation of B2B School Channels vs B2C Candidates",
    about_dual_mos_title: "&#129504; NEXA MOS",
    about_dual_mos_sub: "The Brain &amp; Decision Layer (Decision Brain)",
    about_dual_mos_desc: "Analyzes objective event streams from Nexa OS to formulate strategic business maneuvers for academy leaders, acting as a <em>Virtual Chief Strategy Officer</em>.",
    about_dual_mos_li_1: "&#10003; Unscripted Objection Logs &amp; Competitor Tracker",
    about_dual_mos_li_2: "&#10003; Omnichannel Closed-Loop (Meta CAPI &amp; Google OCT)",
    about_dual_mos_li_3: "&#10003; Market Repositioning &amp; Offer Curve Recommendations",
    about_dual_mos_li_4: "&#10003; Unified Metrics: True Customer Acquisition Cost (True CAC)",

    // Subpages: About - Milestone Timeline
    about_time_eyebrow: "&#128640; Roadmap &amp; Milestones",
    about_time_heading: "The Journey of Building the Ecosystem",
    about_time_sub: "From frontline problem discovery to the release of a modern enterprise platform.",
    about_time_c1_title: "Frontline Problem Discovery",
    about_time_c1_desc: "Intensive research uncovering prospect leakage and ad spend waste across dozens of academies trapped in manual spreadsheets.",
    about_time_c2_title: "Derma Pilot Laboratory",
    about_time_c2_desc: "Formulating the 9-Domain Master Ontology with Derma Indonesia, locking the FNAR Qualification Framework and Event-Sourcing architecture.",
    about_time_c3_title: "Nexa OS Launch (Phase 1)",
    about_time_c3_desc: "Live deployment of isolated private databases, hybrid WhatsApp Smart Routing, Closed Beta Quota Safeguard, and Midtrans automated billing.",
    about_time_c4_title: "Nexa MOS Decision Engine",
    about_time_c4_desc: "Activation of computational intelligence, Meta CAPI &amp; Google OCT attribution tracking, and executive Virtual CSO cockpit modules.",

    // Subpages: About - CTA
    about_cta_title: "Ready to Elevate Your Academy Ecosystem to a New Standard?",
    about_cta_sub: "Closed Beta Batch 1 enrollment is strictly capped at 10 selected institutions to guarantee intensive engineering onboarding and private server stability.",
    about_cta_btn_demo: "&#128640; Try Live Demo &mdash; Free",
    about_cta_btn_wa: "&#128172; Talk Directly on WhatsApp",

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

    // Pricing Feature Lists - Free
    price_free_f1: "300 new prospect contacts/3 months (100/mo)",
    price_free_f2: "10 schools / B2B partners/3 months",
    price_free_f3: "4 Team Users (1 Admin, 1 Mgr, 1 Chief, 1 CRO)",
    price_free_f4: "WhatsApp Live Chat + Task List",
    price_free_f5: "Metrics Dashboard &amp; FNAR Qualification",
    price_free_f6: "Auto Nurturing &amp; Broadcast",
    price_free_f7: "BYOW WhatsApp API",
    price_free_f8: "Dedicated Database",

    // Pricing Feature Lists - Pro
    price_pro_f1: "1,000 active contacts/students per month (12,000/yr)",
    price_pro_f2: "20 schools / B2B partners per month (240/yr)",
    price_pro_f3: "5 Team Users (1 Admin, 1 Mgr, 1 Chief, 2 CRO)",
    price_pro_f4: "Live Chat + Shared Team Inbox",
    price_pro_f5: "Auto Nurturing + Snooze Campaign",
    price_pro_f6: "WhatsApp Broadcast + Dynamic Templates",
    price_pro_f7: "BYOW (Bring Your Own Meta App &amp; WA Phone)",
    price_pro_f8: "Add-on CRO Seat Rp 100k/mo (~$6.5/mo)",

    // Pricing Feature Lists - Business
    price_biz_f1: "2,500 active contacts/students per month (30,000/yr)",
    price_biz_f2: "41 schools / B2B partners per month (500/yr)",
    price_biz_f3: "15 Team Users (1 Admin, 1 Mgr, 3 Chief, 10 CRO)",
    price_biz_f4: "All Pro Plan Features Included",
    price_biz_f5: "Multi-Period Intake &amp; Public Forms",
    price_biz_f6: "Smart WhatsApp Routing (Free Open SW Messages)",
    price_biz_f7: "Priority Technical Support",
    price_biz_f8: "Add-on CRO Seat Rp 100k/mo (~$6.5/mo)",

    // Pricing Feature Lists - Enterprise
    price_ent_f1: "8,333 active contacts/students per month (100,000/yr)",
    price_ent_f2: "166 schools / B2B partners per month (2,000/yr)",
    price_ent_f3: "39 Team Users (1 Admin, 3 Mgr, 5 Chief, 30 CRO)",
    price_ent_f4: "All Business Plan Features Included",
    price_ent_f5: "100% White Label Custom Branding Available",
    price_ent_f6: "Private Dedicated DB Cluster",
    price_ent_f7: "99.9% SLA Guarantee &amp; Dedicated Onboarding Assistance",
    price_ent_f8: "Formal Enterprise B2B Partnership Agreement",

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
    footer_features: "Core Features",
    footer_innovations: "Innovation Roadmap",
    footer_pricing: "Pricing",
    footer_how: "How It Works",
    footer_demo: "Live Demo",
    footer_col_company: "Company",
    footer_about: "About Nexa",
    footer_blog: "Blog",
    footer_careers: "Careers",
    footer_contact: "Contact",
    footer_col_legal: "Legal",
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
  try {
    const path = (window.location && window.location.pathname) ? window.location.pathname.toLowerCase() : '';
    let titleKey = 'page_title';
    if (path.includes('status')) titleKey = 'title_status';
    else if (path.includes('security')) titleKey = 'title_security';
    else if (path.includes('terms')) titleKey = 'title_terms';
    else if (path.includes('privacy')) titleKey = 'title_privacy';
    else if (path.includes('about')) titleKey = 'title_about';

    if (I18N_DATA[lang] && I18N_DATA[lang][titleKey]) {
      document.title = I18N_DATA[lang][titleKey];
    }
  } catch (e) {
    if (I18N_DATA[lang] && I18N_DATA[lang].page_title) {
      document.title = I18N_DATA[lang].page_title;
    }
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
