/**
 * Eternal Production — Partners List Page Manager
 */
document.addEventListener("DOMContentLoaded", () => {
  const partnerGrid = document.getElementById("partnerGrid");
  const filterChips = document.querySelectorAll(".filter-chip");

  if (!partnerGrid) return;

  function renderPartners(filteredList) {
    if (filteredList.length === 0) {
      partnerGrid.innerHTML = `
        <div class="no-results glass-card">
          <p>Henüz bu seviyede aktif bir partner bulunmuyor.</p>
        </div>
      `;
      return;
    }

    partnerGrid.innerHTML = filteredList.map(partner => {
      // Get the correct level emoji or text
      let levelTag = partner.levelLabel || partner.level.toUpperCase();

      return `
        <div class="site-card glass-card reveal is-visible" data-level="${partner.level}">
          <div class="site-card-image" style="background-image: url('${partner.image}')">
            <span class="site-card-tag badge-${partner.level}">${levelTag}</span>
          </div>
          <div class="site-card-body">
            <h3 class="site-card-name">${partner.name}</h3>
            <p class="site-card-desc">${partner.shortDesc}</p>
            <div class="site-card-footer">
              <span class="follower-count">👥 ${partner.stats.followers} Takipçi</span>
              <a class="site-card-link" href="partner-detay.html?id=${partner.id}">Profili Gör →</a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Initial render
  renderPartners(PARTNERS_DATA);

  // Set up filters
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      // Remove active class from all
      filterChips.forEach(c => c.classList.remove("is-active"));

      // Add active class to clicked
      chip.classList.add("is-active");

      const level = chip.getAttribute("data-level");
      if (level === "all") {
        renderPartners(PARTNERS_DATA);
      } else {
        const filtered = PARTNERS_DATA.filter(p => p.level === level);
        renderPartners(filtered);
      }
    });
  });
});
