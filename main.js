// ── NexaMOS Landing Page Core JS ──

// ── 1. Dynamic Blog Highlight Loader ──
// ── Dynamic Blog Highlight Loader ──
    const FALLBACK_BLOG_ARTICLES = [
      {
        slug: "insight-marketing-output-intelejen-pasar",
        title: "Enterprise Insight Marketing: Building Actionable Intelligence for Strategic Decision-Making",
        title_id: "Memahami Output Intelejen Pasar: Membangun Strategi Insight Marketing yang Efektif untuk Segmen Enterprise",
        dek: "This article explains why enterprise-level marketing insights must move beyond 'content for content' approaches and adopt predictive models with measurable KPIs to deliver actionable intelligence.",
        dek_id: "Artikel ini menjelaskan bagaimana insight marketing enterprise harus melewati pendekatan 'content for content' dan mengadopsi model predictive serta KPI yang terukur untuk menghasilkan actionable intelligence.",
        territory: "INTELLIGENCE",
        articleType: "ANALYSIS",
        url: "/blog/insight-marketing-output-intelejen-pasar",
        heroImageUrl: "https://nexamos-blog.vercel.app/images/hero-insight-marketing-output-intelejen-pasar.webp",
        author: { name: "Tim Riset & Rekayasa NexaMOS" },
        publishedAt: "2026-09-17T05:32:55.371Z"
      },
      {
        slug: "intelijen-pasar-dan-kompetitif-pemilik-bisnis-harus-pahami",
        title: "Mastering Market Intelligence: A Practical Guide for Business Owners",
        title_id: "Memahami Intelijen Pasar & Kompetitif: Panduan Praktis bagi Pemilik Bisnis",
        dek: "In the complex information age, business owners need more than raw data—they require the ability to design measurable, collaborative, and visual market intelligence systems that transform insights into sustainable competitive advantage.",
        dek_id: "Di era informasi yang kompleks, pemilik bisnis tidak cukup hanya mengumpulkan data mentah—mereka membutuhkan kemampuan merancang sistem intelijen pasar yang terukur, kolaboratif, dan visual.",
        territory: "INTELLIGENCE",
        articleType: "ANALYSIS",
        url: "/blog/intelijen-pasar-dan-kompetitif-pemilik-bisnis-harus-pahami",
        heroImageUrl: "https://nexamos-blog.vercel.app/images/hero-intelijen-pasar-dan-kompetitif-pemilik-bisnis-harus-pahami.webp",
        author: { name: "Tim Riset & Rekayasa NexaMOS" },
        publishedAt: "2026-09-17T01:21:14.908Z"
      },
      {
        slug: "cara-mengkonversi-lead-jadi-prospek",
        title: "Transforming Leads into Qualified Prospects: A Data-Driven Conversion Strategy",
        title_id: "Mengubah Leads Menjadi Prospek: Strategi Konversi Berbasis Data",
        dek: "Many businesses still rely on traditional, inefficient approaches. This article explains how CRM integration, personalization, and predictive analytics create a more sophisticated framework for identifying high-quality prospects ready to purchase.",
        dek_id: "Banyak bisnis masih mengandalkan pendekatan konvensional yang tidak efisien. Artikel ini menjelaskan bagaimana integrasi CRM, personalisasi, dan analitik prediktif menciptakan kerangka kerja yang lebih canggih untuk mengidentifikasi prospek berkualitas tinggi.",
        territory: "TACTICAL",
        articleType: "HOW_TO",
        url: "/blog/cara-mengkonversi-lead-jadi-prospek",
        heroImageUrl: "https://nexamos-blog.vercel.app/images/hero-cara-mengkonversi-lead-jadi-prospek.webp",
        author: { name: "Tim Riset & Rekayasa NexaMOS" },
        publishedAt: "2026-09-16T11:02:36.383Z"
      }
    ];

    window._cachedBlogArticles = null;

    async function fetchBlogArticlesWithFallback() {
      if (window._cachedBlogArticles && window._cachedBlogArticles.length > 0) {
        return window._cachedBlogArticles;
      }

      // Query parameter cache-buster agar browser/CDN selalu mengambil feed artikel terbaru
      const cacheBust = `?t=${Date.now()}`;
      const endpoints = [
        `https://nexamos-blog.vercel.app/articles.json${cacheBust}`,
        `/blog/articles.json${cacheBust}`,
        `/articles.json${cacheBust}`,
        'https://nexamos-blog.vercel.app/articles.json',
        '/blog/articles.json',
        '/articles.json'
      ];

      for (const ep of endpoints) {
        try {
          const res = await fetch(ep, { cache: 'no-store' });
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              window._cachedBlogArticles = data;
              return data;
            }
          }
        } catch (e) {
          // Continue to next endpoint fallback
        }
      }

      // If all network requests fail, return static fallback
      window._cachedBlogArticles = FALLBACK_BLOG_ARTICLES;
      return FALLBACK_BLOG_ARTICLES;
    }

    function renderBlogCards(articles) {
      const container = document.getElementById('blogHighlightContainer');
      if (!container) return;

      const lang = (typeof currentLang !== 'undefined') ? currentLang : (localStorage.getItem('nexamos_lang') || 'en');
      const isId = lang === 'id';
      const highlightArticles = articles.slice(0, 3);

      const cardsHtml = highlightArticles.map((art, idx) => {
        const territory = (art.territory || 'STRATEGY').toUpperCase();
        const territoryClass = territory === 'TACTICAL' 
          ? 'badge-tactical' 
          : territory === 'INTELLIGENCE' 
          ? 'badge-intelligence' 
          : 'badge-strategy';

        const territoryLabel = isId 
          ? (territory === 'TACTICAL' ? 'Taktikal' : territory === 'INTELLIGENCE' ? 'Intelijen' : 'Strategi')
          : (territory === 'TACTICAL' ? 'Tactical' : territory === 'INTELLIGENCE' ? 'Intelligence' : 'Strategy');

        const articleTypeLabel = art.articleType 
          ? (isId 
              ? (art.articleType === 'HOW_TO' ? 'Panduan Praktis' : art.articleType === 'ANALYSIS' ? 'Analisis' : art.articleType.replace('_', ' '))
              : (art.articleType === 'HOW_TO' ? 'How-To Guide' : art.articleType === 'ANALYSIS' ? 'Analysis' : art.articleType.replace('_', ' ')))
          : '';

        const pubDate = art.publishedAt 
          ? new Date(art.publishedAt).toLocaleDateString(isId ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })
          : (isId ? 'Terbaru' : 'Latest');

        const readActionLabel = isId ? 'Baca Riset &rarr;' : 'Read Article &rarr;';
        const authorName = (art.author && art.author.name) ? art.author.name : (isId ? 'Tim Riset NexaMOS' : 'NexaMOS Research Team');

        // Handle bilingual title & dek
        let displayTitle = art.title;
        let displayDek = art.dek || '';

        if (art.translations && art.translations[lang]) {
          if (art.translations[lang].title) displayTitle = art.translations[lang].title;
          if (art.translations[lang].dek) displayDek = art.translations[lang].dek;
        } else if (isId) {
          if (art.title_id) displayTitle = art.title_id;
          else if (art.heroImageAlt && art.heroImageAlt !== art.title) displayTitle = art.heroImageAlt;
          if (art.dek_id) displayDek = art.dek_id;
        }

        let heroImg = art.heroImageUrl || '/og-image.png';
        if (heroImg.startsWith('/blog/images/')) {
          heroImg = 'https://nexamos-blog.vercel.app' + heroImg.replace('/blog', '');
        }

        const articleUrl = art.url ? (art.url.startsWith('http') ? art.url : (art.url.startsWith('/blog') ? art.url : '/blog' + art.url)) : '/blog';

        return `
          <a href="${articleUrl}" class="blog-dyn-card fu" style="transition-delay: ${idx * 0.1}s">
            <div class="blog-dyn-thumb">
              <img src="${heroImg}" alt="${displayTitle}" loading="lazy" onerror="this.onerror=null;this.src='/og-image.png'">
            </div>
            <div class="blog-dyn-body">
              <div class="blog-dyn-badges">
                <span class="blog-dyn-badge ${territoryClass}">${territoryLabel}</span>
                ${articleTypeLabel ? `<span class="blog-dyn-badge badge-type">${articleTypeLabel}</span>` : ''}
              </div>
              <h3 class="blog-dyn-title">${displayTitle}</h3>
              <p class="blog-dyn-dek">${displayDek}</p>
              <div class="blog-dyn-foot">
                <span class="b-author">${authorName}</span>
                <span class="b-action">${pubDate} &middot; ${readActionLabel}</span>
              </div>
            </div>
          </a>
        `;
      }).join('');

      container.innerHTML = cardsHtml;

      // Trigger IntersectionObserver fade-up animation
      if (typeof obs !== 'undefined' && obs.observe) {
        container.querySelectorAll('.fu').forEach(el => obs.observe(el));
      }
    }

    async function loadLatestBlogArticles() {
      const container = document.getElementById('blogHighlightContainer');
      if (!container) return;

      try {
        const articles = await fetchBlogArticlesWithFallback();
        renderBlogCards(articles);
      } catch (err) {
        console.warn('Fallback rendering blog highlights:', err);
        renderBlogCards(FALLBACK_BLOG_ARTICLES);
      }
    }

    window.loadLatestBlogArticles = loadLatestBlogArticles;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadLatestBlogArticles);
    } else {
      loadLatestBlogArticles();
    }

// ── 2. Interactive UI, Modals & Tracking ──
document.getElementById('hb').addEventListener('click', () => document.getElementById('mm').classList.toggle('open'));
    function cm() { document.getElementById('mm').classList.remove('open') }
    document.getElementById('dcl').addEventListener('click', () => document.getElementById('dbar').style.display = 'none');
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }), { threshold: 0.1 });
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    window.addEventListener('scroll', () => { document.getElementById('nav').style.background = window.scrollY > 60 ? 'rgba(4,8,15,.95)' : 'rgba(4,8,15,.75)' });
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - .5) * 18, y = (e.clientY / window.innerHeight - .5) * 18;
      document.getElementById('bx1').style.transform = 'translate(' + x + 'px,' + y + 'px)';
      document.getElementById('bx2').style.transform = 'translate(' + (-x) + 'px,' + (-y) + 'px)';
    });

    // ── Quick Sign-Up Modal Logic (Curated Closed Beta 2-Step) ──
    const signupModal = document.getElementById('signupModal');
    let lastRegisteredEmail = '';
    let isBetaQuotaFull = false;

    // Check Beta Status from backend
    async function checkBetaStatus() {
      try {
        const res = await fetch('https://nexa-os-pmr8.onrender.com/api/v1/saas/beta-status');
        const json = await res.json();
        if (json.status === 'ok' && json.data) {
          isBetaQuotaFull = json.data.isQuotaFull || false;
          updateBetaUIState(isBetaQuotaFull);
        }
      } catch (e) {
        // Fallback keep default open
      }
    }

    function updateBetaUIState(isFull) {
      window.isBetaQuotaFull = isFull;
      const annBadge = document.getElementById('betaAnnouncementBadge');
      const annNotice = document.getElementById('betaStatusNotice');
      const ctaBtn = document.getElementById('btnBetaApplyCta');
      const modalBadge = document.getElementById('modalBadgeStatus');
      const modalTitle = document.getElementById('modalTitleText');
      const modalDesc = document.getElementById('modalDescText');
      const submitBtnText = document.getElementById('btnSubmitText');

      if (isFull) {
        if (annBadge) annBadge.innerHTML = '<span class="beta-pulse-dot" style="background:var(--am);box-shadow:0 0 10px var(--am)"></span><span style="color:var(--am)">' + (typeof t === 'function' ? t('beta_badge_full') : 'CLOSED BETA BATCH 1 PENUH &middot; WAITING LIST BATCH 2 DIBUKA') + '</span>';
        if (annNotice) annNotice.innerHTML = typeof t === 'function' ? t('beta_status_notice_full') : '<strong style="color:var(--am)">Status:</strong> Batch 1 Penuh &middot; Daftarkan Bisnis / Lembaga ke Waiting List Prioritas Batch 2 (1–2 Pekan)';
        if (ctaBtn) ctaBtn.innerHTML = typeof t === 'function' ? t('beta_cta_btn_full') : '&#128203; Masuk Waiting List Batch 2';
        if (modalBadge) {
          modalBadge.innerHTML = typeof t === 'function' ? t('modal_badge_waitlist') : '⏳ Batch 1 Penuh · Waiting List Batch 2';
          modalBadge.style.color = 'var(--am)';
          modalBadge.style.borderColor = 'rgba(251,191,36,0.4)';
          modalBadge.style.background = 'rgba(251,191,36,0.12)';
        }
        if (modalTitle) modalTitle.innerHTML = typeof t === 'function' ? t('modal_title_waitlist') : 'Daftar Waiting List Batch 2';
        if (modalDesc) modalDesc.innerHTML = typeof t === 'function' ? t('modal_desc_waitlist') : 'Kuota batch pertama telah penuh. Masukkan profil bisnis atau lembaga Anda untuk diprioritaskan saat batch kedua dibuka.';
        if (submitBtnText) submitBtnText.innerHTML = typeof t === 'function' ? t('modal_btn_submit_waitlist') : '&#128203; Daftar Waiting List Prioritas';
      } else {
        if (annBadge) annBadge.innerHTML = '<span class="beta-pulse-dot"></span><span>' + (typeof t === 'function' ? t('beta_badge_open') : 'PROGRAM CLOSED BETA &middot; BATCH 1 DIBUKA (KUOTA TERBATAS)') + '</span>';
        if (annNotice) annNotice.innerHTML = typeof t === 'function' ? t('beta_status_notice_open') : '<strong>Status:</strong> Kuota Batch 1 Sangat Terbatas &middot; Persiapan Akun Maks 1x24 Jam';
        if (ctaBtn) ctaBtn.innerHTML = typeof t === 'function' ? t('beta_cta_btn_open') : '&#128640; Ajukan Akses Beta Sekarang';
        if (modalBadge) {
          modalBadge.innerHTML = typeof t === 'function' ? t('modal_badge_beta') : '⚡ Closed Beta · Kuota Terbatas';
          modalBadge.style.color = 'var(--gr)';
          modalBadge.style.borderColor = 'rgba(0,214,143,0.3)';
          modalBadge.style.background = 'var(--grd)';
        }
        if (modalTitle) modalTitle.innerHTML = typeof t === 'function' ? t('modal_title_beta') : 'Ajukan Akses Closed Beta';
        if (modalDesc) modalDesc.innerHTML = typeof t === 'function' ? t('modal_desc_beta') : 'Dapatkan database mandiri privat dan pendampingan implementasi CRM tanpa biaya langganan.';
        if (submitBtnText) submitBtnText.innerHTML = typeof t === 'function' ? t('modal_btn_submit_beta') : '&#128640; Ajukan Akses Beta';
      }
    }

    // Call on load
    checkBetaStatus();

    function openSignupModal() {
      if (!signupModal) return;
      if (typeof fbq === 'function') {
        fbq('track', 'Contact', { content_name: 'Open Signup Modal' });
      }
      if (typeof gtag === 'function') {
        gtag('event', 'open_signup_modal', {
          event_category: 'engagement',
          event_label: 'Open Signup Modal'
        });
      }
      signupModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('modalFormView').style.display = 'block';
      document.getElementById('modalSuccessView').style.display = 'none';
      goToStep1();
      const alertBox = document.getElementById('signupAlert');
      if (alertBox) {
        alertBox.className = 'm-alert';
        alertBox.textContent = '';
      }
      checkBetaStatus();
    }

    function closeSignupModal() {
      if (!signupModal) return;
      signupModal.classList.remove('open');
      document.body.style.overflow = '';
    }

    function handleModalBackdropClick(e) {
      if (e.target === signupModal) {
        closeSignupModal();
      }
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && signupModal && signupModal.classList.contains('open')) {
        closeSignupModal();
      }
    });

    function goToStep1() {
      document.getElementById('step1Profil').style.display = 'block';
      document.getElementById('step2Akun').style.display = 'none';
      document.getElementById('stepPill1').classList.add('active');
      document.getElementById('stepPill2').classList.remove('active');
      const alertBox = document.getElementById('signupAlert');
      if (alertBox) { alertBox.className = 'm-alert'; alertBox.textContent = ''; }
      // Reset gateway if going back
      const currentType = document.getElementById('tenant_type').value;
      if (currentType) selectTenantType(currentType); // re-apply state if user goes back
    }

    // ── Tenant Type Gateway Logic ──────────────────────────────
    const INSTITUTION_OPTIONS = {
      lpk: [
        { value: 'LPK Program Jepang (SSW / Magang)', label: 'LPK Program Magang & Kerja Jepang (SSW / Trainee)' },
        { value: 'LPK Program Jerman, Korea & Australia', label: 'LPK Program Jerman (Ausbildung), Korea, atau Australia' },
        { value: 'Bimbel Kedinasan / Akpol / CPNS', label: 'Bimbel Kedinasan / Akpol / Akmil / CPNS' },
        { value: 'Bimbel UTBK & Masuk PTN', label: 'Bimbel UTBK & Masuk PTN' },
        { value: 'SMK Swasta / Vokasi', label: 'SMK Swasta / Lembaga Pendidikan Vokasi' },
        { value: 'Kursus Bahasa & Sertifikasi', label: 'Kursus Bahasa Asing & Sertifikasi Keahlian' },
        { value: 'Lainnya (LPK / Vokasi)', label: 'Lainnya / Lembaga Pendidikan Terkait' },
      ],
      general: [
        { value: 'Klinik / Kesehatan / Estetika', label: 'Klinik, Rumah Sakit, atau Layanan Estetika' },
        { value: 'Retail / Toko', label: 'Retail, Toko Online / Offline' },
        { value: 'Properti / Developer', label: 'Properti, Agen Properti, atau Developer' },
        { value: 'Agensi Digital / Kreatif', label: 'Agensi Digital, Marketing, atau Kreatif' },
        { value: 'Jasa Umum / B2B', label: 'Jasa Umum, Konsultasi, atau B2B Lainnya' },
        { value: 'Kuliner / F&B', label: 'Kuliner, Restoran, atau Food & Beverage' },
        { value: 'Lainnya (Bisnis Umum)', label: 'Bisnis / Industri Lainnya' },
      ]
    };

    function selectTenantType(type) {
      // Update cards visual
      document.getElementById('gw-lpk').classList.toggle('selected', type === 'lpk');
      document.getElementById('gw-general').classList.toggle('selected', type === 'general');
      // Save to hidden input
      document.getElementById('tenant_type').value = type;
      
      // Populate institution_type dropdown and labels with i18n support
      if (typeof refreshModalDynamicTexts === 'function') {
        refreshModalDynamicTexts();
      } else {
        const select = document.getElementById('institution_type');
        select.innerHTML = '<option value="" disabled selected>-- Pilih Kategori --</option>';
        (INSTITUTION_OPTIONS[type] || []).forEach(opt => {
          const el = document.createElement('option');
          el.value = opt.value;
          el.textContent = opt.label;
          select.appendChild(el);
        });
        const brandLabel = document.querySelector('label[for="brand_name"]');
        const brandInput = document.getElementById('brand_name');
        if (brandLabel) {
          brandLabel.innerHTML = (type === 'lpk'
            ? 'Nama Lembaga / LPK / Bimbel'
            : 'Nama Bisnis / Perusahaan') + ' <span style="color:var(--gr)">*</span>';
        }
        if (brandInput) {
          brandInput.placeholder = (type === 'lpk'
            ? 'Contoh: LPK Cahaya Harapan'
            : 'Contoh: Klinik Sehat Medika / PT Solusi Digital');
        }
      }
      // Clear alert if was shown
      const alertBox = document.getElementById('signupAlert');
      if (alertBox) { alertBox.className = 'm-alert'; alertBox.textContent = ''; }
    }

    function goToStep2() {
      const alertBox = document.getElementById('signupAlert');
      const tenantType = document.getElementById('tenant_type').value;
      const instType = document.getElementById('institution_type').value;
      const instAddr = document.getElementById('institution_address').value.trim();
      const teamSize = document.getElementById('team_size').value;

      if (!tenantType) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_select_type') : 'Mohon pilih tipe bisnis Anda terlebih dahulu (LPK/Vokasi atau Bisnis Umum).';
        document.getElementById('gatewayGrid').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (!instType) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_select_cat') : 'Mohon pilih kategori/bidang bisnis atau lembaga Anda.';
        document.getElementById('institution_type').focus();
        return;
      }
      if (!instAddr) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_fill_addr') : 'Mohon isi alamat lengkap operasional Anda.';
        document.getElementById('institution_address').focus();
        return;
      }
      if (!teamSize) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_select_team') : 'Mohon pilih skala jumlah karyawan/tim operasional Anda.';
        document.getElementById('team_size').focus();
        return;
      }

      alertBox.className = 'm-alert';
      alertBox.textContent = '';
      document.getElementById('step1Profil').style.display = 'none';
      document.getElementById('step2Akun').style.display = 'block';
      document.getElementById('stepPill2').classList.add('active');

      setTimeout(() => {
        const brandInput = document.getElementById('brand_name');
        if (brandInput) brandInput.focus();
      }, 100);
    }

    function toggleSignupPassword() {
      const pwInput = document.getElementById('admin_password');
      const toggleBtn = document.getElementById('pwToggleBtn');
      if (!pwInput || !toggleBtn) return;
      if (pwInput.type === 'password') {
        pwInput.type = 'text';
        toggleBtn.innerHTML = '&#128064;';
      } else {
        pwInput.type = 'password';
        toggleBtn.innerHTML = '&#128065;';
      }
    }

    async function handleSignupSubmit(e) {
      e.preventDefault();
      const alertBox = document.getElementById('signupAlert');
      const submitBtn = document.getElementById('btnSubmitSignup');
      const submitText = document.getElementById('btnSubmitText');

      const institution_type = document.getElementById('institution_type').value;
      const institution_address = document.getElementById('institution_address').value.trim();
      const team_size = document.getElementById('team_size').value;

      const brand_name = document.getElementById('brand_name').value.trim();
      const admin_name = document.getElementById('admin_name').value.trim();
      const admin_email = document.getElementById('admin_email').value.trim();
      const admin_password = document.getElementById('admin_password').value;
      const whatsapp_number = document.getElementById('whatsapp_number').value.trim();

      if (!brand_name || !admin_name || !admin_email || !admin_password) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_fill_required') : 'Semua field bertanda * wajib diisi.';
        return;
      }

      if (admin_password.length < 6) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_pw_min') : 'Password minimal 6 karakter.';
        return;
      }

      alertBox.className = 'm-alert';
      alertBox.textContent = '';
      submitBtn.disabled = true;
      submitText.innerHTML = typeof t === 'function' ? t('modal_btn_submitting') : '&#9203; Mengirim Pengajuan Beta...';

      try {
        const tenant_type = document.getElementById('tenant_type').value || 'lpk';

        const res = await fetch('https://nexa-os-pmr8.onrender.com/api/v1/saas/apply-beta', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            brand_name,
            tenant_type,
            institution_type,
            institution_address,
            team_size,
            admin_name,
            admin_email,
            admin_password,
            whatsapp_number: whatsapp_number || null,
          }),
        });

        const data = await res.json();

        if (res.ok && data.status === 'ok') {
          const appData = data.data;
          lastRegisteredEmail = admin_email;

          // Meta Pixel Event Tracking: Lead & CompleteRegistration
          if (typeof fbq === 'function') {
            fbq('track', 'Lead', {
              content_name: brand_name,
              content_category: institution_type,
              status: appData.isWaitlist ? 'waitlist' : 'registered'
            });
            fbq('track', 'CompleteRegistration', {
              content_name: 'Closed Beta Application',
              status: appData.isWaitlist ? 'waitlist' : 'registered'
            });
          }

          // Google Analytics 4 Event Tracking: generate_lead & sign_up
          if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
              institution_type: institution_type,
              brand_name: brand_name,
              status: appData.isWaitlist ? 'waitlist' : 'registered'
            });
            gtag('event', 'sign_up', {
              method: 'Closed Beta Form'
            });
          }

          document.getElementById('resBrandName').textContent = appData.brandName || brand_name;
          document.getElementById('resAdminEmail').textContent = admin_email;

          const resBadge = document.getElementById('resBadgeStatus');
          const resTitle = document.getElementById('resTitleText');
          const resDesc = document.getElementById('resDescText');

          if (appData.isWaitlist) {
            if (resBadge) {
              resBadge.textContent = typeof t === 'function' ? t('modal_succ_badge_waitlist') : 'Waiting List Batch 2';
              resBadge.style.background = 'rgba(251,191,36,0.15)';
              resBadge.style.color = 'var(--am)';
              resBadge.style.borderColor = 'rgba(251,191,36,0.4)';
            }
            if (resTitle) resTitle.textContent = typeof t === 'function' ? t('modal_succ_title_waitlist') : 'Pendaftaran Anda Telah Masuk Antrean Waiting List';
            if (resDesc) resDesc.innerHTML = typeof t === 'function' ? t('modal_succ_desc_waitlist', { brand: brand_name }) : `Permohonan untuk ${brand_name} telah kami catat sebagai prioritas di batch pembukaan berikutnya (diperkirakan 1–2 pekan ke depan).`;
          } else {
            if (resBadge) {
              resBadge.textContent = typeof t === 'function' ? t('modal_succ_badge_beta') : 'Permohonan Diterima & Sedang Dikurasi';
              resBadge.style.background = 'rgba(0,214,143,0.15)';
              resBadge.style.color = 'var(--gr)';
              resBadge.style.borderColor = 'rgba(0,214,143,0.4)';
            }
            if (resTitle) resTitle.textContent = typeof t === 'function' ? t('modal_succ_title_beta') : 'Ruang Kerja Privat Sedang Disiapkan';
            if (resDesc) resDesc.innerHTML = typeof t === 'function' ? t('modal_succ_desc_beta', { brand: brand_name }) : `Permohonan untuk ${brand_name} telah kami terima. Tim teknis kami sedang memvalidasi konfigurasi dan menyiapkan ruang kerja privat Anda (Maksimal 1x24 jam).`;
          }

          document.getElementById('modalFormView').style.display = 'none';
          document.getElementById('modalSuccessView').style.display = 'block';
          document.getElementById('signupForm').reset();
          goToStep1();
        } else {
          alertBox.className = 'm-alert error';
          alertBox.textContent = data.message || 'Pendaftaran gagal. Silakan coba kembali.';
        }
      } catch (err) {
        alertBox.className = 'm-alert error';
        alertBox.textContent = typeof t === 'function' ? t('alert_server_err') : 'Gagal terhubung ke server NexaMOS. Periksa koneksi internet Anda atau coba beberapa saat lagi.';
      } finally {
        submitBtn.disabled = false;
        submitText.innerHTML = typeof t === 'function' ? (isBetaQuotaFull ? t('modal_btn_submit_waitlist') : t('modal_btn_submit_beta')) : '&#128640; Ajukan Akses Beta';
      }
    }

    function openRegisteredWebmail() {
      const email = (lastRegisteredEmail || '').toLowerCase();
      let targetUrl = 'https://mail.google.com';
      if (email.includes('@yahoo.')) {
        targetUrl = 'https://mail.yahoo.com';
      } else if (email.includes('@outlook.') || email.includes('@hotmail.') || email.includes('@live.')) {
        targetUrl = 'https://outlook.live.com';
      } else if (email.includes('@icloud.')) {
        targetUrl = 'https://www.icloud.com/mail';
      } else if (!email.includes('@gmail.')) {
        targetUrl = 'mailto:' + email;
      }
      window.open(targetUrl, '_blank');
    }

    // Analytics: Track Demo Link Clicks (Meta ViewContent & GA4 click_demo)
    document.addEventListener('click', (e) => {
      const demoLink = e.target && e.target.closest ? e.target.closest('a[href*="demo.nexamos.cloud"], a[href*="crm.nexamos.cloud"]') : null;
      if (demoLink) {
        try {
          const activeL = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'en';
          const u = new URL(demoLink.href);
          u.searchParams.set('lang', activeL);
          demoLink.href = u.toString();
        } catch (err) {}
        if (typeof fbq === 'function') {
          fbq('track', 'ViewContent', {
            content_name: 'Live Demo CRM',
            content_category: 'Demo Link',
            destination: demoLink.href
          });
        }
        if (typeof gtag === 'function') {
          gtag('event', 'click_demo', {
            event_category: 'engagement',
            event_label: 'Live Demo CRM',
            destination: demoLink.href
          });
        }
      }
    }, true);
