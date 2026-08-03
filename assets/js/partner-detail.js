/**
 * Eternal Production — Partner Detail Page Manager
 */
document.addEventListener("DOMContentLoaded", () => {
  const partnerDetailContainer = document.getElementById("partnerDetail");
  if (!partnerDetailContainer) return;

  // Parse URL Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const partnerId = urlParams.get("id");

  // Find partner
  const partner = PARTNERS_DATA.find(p => p.id === partnerId);

  if (!partner) {
    partnerDetailContainer.innerHTML = `
      <section class="error-section text-center" style="padding: 100px 24px;">
        <div class="wrap">
          <div class="error-card glass-card" style="max-width:500px; margin: 0 auto; padding: 40px 24px;">
            <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
            <h1 class="section-title" style="font-size: 24px;">Partner Bulunamadı</h1>
            <p class="section-sub" style="margin-bottom: 24px;">Aramış olduğunuz partner platformumuzda kayıtlı görünmüyor.</p>
            <a href="partnerler.html" class="btn btn-primary">Tüm Partnerleri Gör</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  // Update Page Title
  document.title = `${partner.name} — Partner Profili`;

  // Render Partner Details
  partnerDetailContainer.innerHTML = `
    <!-- Profile Banner Section -->
    <section class="profile-banner-sec" style="background-image: linear-gradient(to bottom, rgba(20, 21, 31, 0.4), rgba(20, 21, 31, 0.85)), url('${partner.banner}');">
      <div class="wrap profile-header-wrap">
        <div class="profile-meta-main">
          <div class="profile-avatar-frame">
            <img src="${partner.image}" alt="${partner.name}">
          </div>
          <div class="profile-title-area">
            <span class="site-card-tag badge-${partner.level}">${partner.levelLabel}</span>
            <h1 class="profile-name">${partner.name}</h1>
            <p class="profile-tagline">${partner.shortDesc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Profile Content Section -->
    <section class="profile-content-sec">
      <div class="wrap profile-content-grid">

        <!-- Left: About & Socials -->
        <div class="profile-left">
          <div class="profile-card glass-card">
            <h3>Hakkında</h3>
            <p class="profile-bio">${partner.fullDesc}</p>

            <h3 style="margin-top: 30px;">Sosyal Medya</h3>
            <div class="profile-socials-grid">
              ${partner.socials.instagram ? `
                <a href="${partner.socials.instagram}" target="_blank" class="social-button instagram">
                  <span class="icon">📸</span>
                  <div>
                    <span class="platform-name">Instagram</span>
                    <span class="action-text">Takip Et</span>
                  </div>
                </a>
              ` : ''}
              ${partner.socials.youtube ? `
                <a href="${partner.socials.youtube}" target="_blank" class="social-button youtube">
                  <span class="icon">🎬</span>
                  <div>
                    <span class="platform-name">YouTube</span>
                    <span class="action-text">Abone Ol</span>
                  </div>
                </a>
              ` : ''}
              ${partner.socials.discord ? `
                <a href="${partner.socials.discord}" target="_blank" class="social-button discord">
                  <span class="icon">💬</span>
                  <div>
                    <span class="platform-name">Discord</span>
                    <span class="action-text">Katıl</span>
                  </div>
                </a>
              ` : ''}
              ${partner.socials.tiktok ? `
                <a href="${partner.socials.tiktok}" target="_blank" class="social-button tiktok">
                  <span class="icon">🎵</span>
                  <div>
                    <span class="platform-name">TikTok</span>
                    <span class="action-text">İzle</span>
                  </div>
                </a>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Right: Statistics -->
        <div class="profile-right">
          <div class="profile-card glass-card">
            <h3>İstatistikler & Durum</h3>

            <div class="profile-stats-list">
              <div class="profile-stat-item">
                <span class="stat-icon">👥</span>
                <div>
                  <div class="stat-lbl">Takipçi Sayısı</div>
                  <div class="stat-val">${partner.stats.followers}</div>
                </div>
              </div>
              <div class="profile-stat-item">
                <span class="stat-icon">📈</span>
                <div>
                  <div class="stat-lbl">Aylık Ortalama İzlenme</div>
                  <div class="stat-val">${partner.stats.monthlyViews}</div>
                </div>
              </div>
              <div class="profile-stat-item">
                <span class="stat-icon">🔥</span>
                <div>
                  <div class="stat-lbl">Etkileşim Oranı</div>
                  <div class="stat-val">${partner.stats.engagement}</div>
                </div>
              </div>
              <div class="profile-stat-item">
                <span class="stat-icon">🏆</span>
                <div>
                  <div class="stat-lbl">Mevcut Seviye</div>
                  <div class="stat-val">${partner.stats.levelNum}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="wrap text-center" style="margin-top: 40px;">
        <a href="partnerler.html" class="btn btn-outline">← Tüm Partnerlere Dön</a>
      </div>
    </section>
  `;
});
