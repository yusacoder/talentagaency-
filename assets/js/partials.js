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
              <a href="https://instagram.com/animeternaltr" target="_blank" class="social-link instagram" title="Instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://discord.gg/eternal" target="_blank" class="social-link discord" title="Discord" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
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
