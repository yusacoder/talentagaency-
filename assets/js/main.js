/**
 * Eternal Production — Main Platform Scripts
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Header Shrink on Scroll
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("is-shrunk");
      } else {
        header.classList.remove("is-shrunk");
      }
    });
  }

  // 2. FAQ Accordion Manager
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("is-active");

        // Close all other FAQ items
        faqItems.forEach(i => i.classList.remove("is-active"));

        // Toggle current item
        if (!isActive) {
          item.classList.add("is-active");
        }
      });
    }
  });

  // 3. Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("is-visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once initially

  // 4. Update Announcement Modal Manager
  initUpdateNoticeModal();
});

function initUpdateNoticeModal() {
  const rootPath = document.body.getAttribute("data-root") || "";
  const jsonUrl = `${rootPath}assets/data/update.json`;

  fetch(jsonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.enabled) {
        return;
      }

      const currentVersion = data.version || "1.0.0";
      const storageKey = `ep_dismissed_update_${currentVersion}`;

      // Check if this specific version was already dismissed
      if (localStorage.getItem(storageKey) === "true") {
        return;
      }

      renderUpdateModal(data, storageKey, rootPath);
    })
    .catch(err => {
      console.warn("Could not load update notice configuration:", err);
    });
}

function renderUpdateModal(data, storageKey, rootPath) {
  const backdrop = document.createElement("div");
  backdrop.className = "update-modal-backdrop";
  backdrop.id = "updateModalBackdrop";

  let changesListHtml = "";
  if (Array.isArray(data.changes) && data.changes.length > 0) {
    changesListHtml = `
      <div class="update-modal-changes">
        ${data.changes.map(item => `
          <div class="update-modal-change-item">
            <span class="update-modal-change-icon">✦</span>
            <span>${escapeHtml(item)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  let actionBtnHtml = "";
  if (data.actionButtonText && data.actionButtonUrl) {
    const actionUrl = data.actionButtonUrl.startsWith("http")
      ? data.actionButtonUrl
      : `${rootPath}${data.actionButtonUrl}`;
    actionBtnHtml = `
      <a href="${actionUrl}" class="btn btn-primary" id="updateModalActionBtn">
        ${escapeHtml(data.actionButtonText)}
      </a>
    `;
  }

  backdrop.innerHTML = `
    <div class="update-modal-card" role="dialog" aria-modal="true" aria-labelledby="updateModalTitle">
      <button class="update-modal-close" id="updateModalCloseBtn" aria-label="Kapat">&times;</button>

      <div class="update-modal-meta">
        ${data.badge ? `<span class="update-modal-badge">${escapeHtml(data.badge)}</span>` : ""}
        ${data.date ? `<span class="update-modal-date">${escapeHtml(data.date)}</span>` : ""}
      </div>

      <h3 class="update-modal-title" id="updateModalTitle">${escapeHtml(data.title || "Güncelleme Var!")}</h3>

      ${data.description ? `<p class="update-modal-desc">${escapeHtml(data.description)}</p>` : ""}

      ${changesListHtml}

      <div class="update-modal-actions">
        <button type="button" class="btn btn-outline" id="updateModalDismissBtn">
          ${escapeHtml(data.dismissButtonText || "Kapat")}
        </button>
        ${actionBtnHtml}
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  // Trigger smooth display transition
  setTimeout(() => {
    backdrop.classList.add("is-visible");
  }, 50);

  function closeModal() {
    backdrop.classList.remove("is-visible");
    localStorage.setItem(storageKey, "true");
    setTimeout(() => {
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }, 350);
  }

  const closeBtn = document.getElementById("updateModalCloseBtn");
  const dismissBtn = document.getElementById("updateModalDismissBtn");
  const actionBtn = document.getElementById("updateModalActionBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (dismissBtn) dismissBtn.addEventListener("click", closeModal);
  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      localStorage.setItem(storageKey, "true");
    });
  }

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscKey);
    }
  };
  document.addEventListener("keydown", handleEscKey);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
