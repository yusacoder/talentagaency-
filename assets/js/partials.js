/**
 * Eternal Production — Shared Partials (Header & Footer)
 */
document.addEventListener("DOMContentLoaded", () => {
  const rootPath = document.body.getAttribute("data-root") || "";
  const activePage = document.body.getAttribute("data-page") || "";

  // 1. Render Header
  const navbarRoot = document.getElementById("navbar-root");
  if (navbarRoot) {
    navbarRoot.innerHTML = `
      <header class="site-header glass-card">
        <div class="wrap header-wrap">
          <a href="${rootPath}index.html" class="logo">
            <span class="logo-dot"></span> Eternal Production
          </a>
          <nav class="main-nav" id="mainNav">
            <a href="${rootPath}index.html" class="nav-link ${activePage === 'home' ? 'is-active' : ''}">Ana Sayfa</a>
            <a href="${rootPath}partner-programi.html" class="nav-link ${activePage === 'program' ? 'is-active' : ''}">Partner Programı</a>
            <a href="${rootPath}partnerler.html" class="nav-link ${activePage === 'partnerler' ? 'is-active' : ''}">Partnerlerimiz</a>
            <a href="${rootPath}hakkimizda.html" class="nav-link ${activePage === 'hakkimizda' ? 'is-active' : ''}">Hakkımızda</a>
            <a href="${rootPath}sss.html" class="nav-link ${activePage === 'sss' ? 'is-active' : ''}">S.S.S.</a>
            <a href="${rootPath}iletisim.html" class="nav-link ${activePage === 'iletisim' ? 'is-active' : ''}">İletişim</a>
            <a href="${rootPath}basvuru.html" class="btn btn-primary nav-cta">Partner Ol</a>
          </nav>
          <button class="nav-toggle" id="navToggle" aria-label="Menüyü Aç/Kapat">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </header>
      <!-- Mobile Navigation Menu -->
      <div class="mobile-menu glass-card" id="mobileMenu">
        <nav class="mobile-nav">
          <a href="${rootPath}index.html" class="mobile-link ${activePage === 'home' ? 'is-active' : ''}">Ana Sayfa</a>
          <a href="${rootPath}partner-programi.html" class="mobile-link ${activePage === 'program' ? 'is-active' : ''}">Partner Programı</a>
          <a href="${rootPath}partnerler.html" class="mobile-link ${activePage === 'partnerler' ? 'is-active' : ''}">Partnerlerimiz</a>
          <a href="${rootPath}hakkimizda.html" class="mobile-link ${activePage === 'hakkimizda' ? 'is-active' : ''}">Hakkımızda</a>
          <a href="${rootPath}sss.html" class="mobile-link ${activePage === 'sss' ? 'is-active' : ''}">S.S.S.</a>
          <a href="${rootPath}iletisim.html" class="mobile-link ${activePage === 'iletisim' ? 'is-active' : ''}">İletişim</a>
          <a href="${rootPath}basvuru.html" class="btn btn-primary mobile-cta">Partner Ol</a>
        </nav>
      </div>
    `;

    // Interactive Toggle for Mobile Menu
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (navToggle && mobileMenu) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
        document.body.classList.toggle("no-scroll");
      });

      // Close menu when clicking link
      const mobileLinks = mobileMenu.querySelectorAll(".mobile-link, .mobile-cta");
      mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
          navToggle.classList.remove("is-active");
          mobileMenu.classList.remove("is-active");
          document.body.classList.remove("no-scroll");
        });
      });
    }
  }

  // 2. Render Footer
  const footerRoot = document.getElementById("footer-root");
  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="wrap footer-grid">

          <div class="footer-brand">
            <a href="${rootPath}index.html" class="logo">
              <span class="logo-dot"></span> Eternal Production
            </a>
            <p class="brand-text">Anime içerik üreticilerini bir araya getiren partner platformu. Tanıtım ağımızdan yararlan, seviye atladıkça daha fazla görünürlük kazan.</p>
            <div class="footer-socials">
              <a href="https://instagram.com/animeternaltr" target="_blank" class="social-link" title="Instagram">📸</a>
              <a href="https://discord.gg/eternal" target="_blank" class="social-link" title="Discord">💬</a>
            </div>
          </div>

          <div class="footer-links-col">
            <h4>Hızlı Erişim</h4>
            <ul class="footer-links">
              <li><a href="${rootPath}index.html">Ana Sayfa</a></li>
              <li><a href="${rootPath}partner-programi.html">Partner Programı</a></li>
              <li><a href="${rootPath}partnerler.html">Partnerlerimiz</a></li>
              <li><a href="${rootPath}hakkimizda.html">Hakkımızda</a></li>
              <li><a href="${rootPath}sss.html">S.S.S.</a></li>
              <li><a href="${rootPath}iletisim.html">İletişim</a></li>
              <li><a href="${rootPath}basvuru.html" style="font-weight:600;color:var(--accent);">Partner Başvurusu</a></li>
            </ul>
          </div>

          <div class="footer-links-col">
            <h4>Yasal & Politikalar</h4>
            <ul class="footer-links">
              <li><a href="${rootPath}legal/kvkk.html">KVKK Aydınlatma Metni</a></li>
              <li><a href="${rootPath}legal/gizlilik.html">Gizlilik Politikası</a></li>
              <li><a href="${rootPath}legal/cerez.html">Çerez Politikası</a></li>
              <li><a href="${rootPath}legal/kullanici-sozlesmesi.html">Kullanıcı Sözleşmesi</a></li>
              <li><a href="${rootPath}legal/partner-sozlesmesi.html">Partner Programı Sözleşmesi</a></li>
              <li><a href="${rootPath}legal/telif-politikasi.html">İçerik ve Telif Politikası</a></li>
              <li><a href="${rootPath}legal/topluluk-kurallari.html">Topluluk Kuralları</a></li>
              <li><a href="${rootPath}legal/sikayet-politikasi.html">İletişim ve Şikâyet Politikası</a></li>
              <li><a href="${rootPath}legal/yasal-uyari.html">Yasal Uyarı (Disclaimer)</a></li>
            </ul>
          </div>

        </div>

        <div class="wrap footer-bottom">
          <p>© 2026 Eternal Production. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    `;
  }
});
