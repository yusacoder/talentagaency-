/**
 * Eternal Production — Multi-step Partner Application Form Manager
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applicationForm");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const dots = Array.from(document.querySelectorAll(".step-dot"));
  const reviewList = document.getElementById("reviewList");

  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach((step, idx) => {
      if (idx === stepIndex) {
        step.classList.add("is-active");
      } else {
        step.classList.remove("is-active");
      }
    });

    dots.forEach((dot, idx) => {
      if (idx <= stepIndex) {
        dot.classList.add("is-active");
      } else {
        dot.classList.remove("is-active");
      }
    });

    currentStep = stepIndex;

    // Scroll form into view gently
    form.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // If we are on the final step, build the summary
    if (stepIndex === steps.length - 1) {
      buildReviewSummary();
    }
  }

  function validateStep(stepIndex) {
    const stepEl = steps[stepIndex];
    const inputs = stepEl.querySelectorAll("input[required], select[required], textarea[required]");
    let isValid = true;

    // Simple validation loop
    inputs.forEach(input => {
      // Remove any existing errors
      input.classList.remove("input-error");
      const errLabel = input.parentNode.querySelector(".error-message");
      if (errLabel) errLabel.remove();

      if (input.type === "radio") {
        // Check if any radio with the same name is checked
        const radios = stepEl.querySelectorAll(`input[name="${input.name}"]`);
        const checked = Array.from(radios).some(r => r.checked);
        if (!checked) {
          isValid = false;
          // Highlight container
          const choiceRow = input.closest(".choice-row");
          if (choiceRow && !choiceRow.parentNode.querySelector(".error-message")) {
            const err = document.createElement("span");
            err.className = "error-message";
            err.innerText = "Lütfen bir seçim yapınız.";
            choiceRow.parentNode.appendChild(err);
          }
        }
      } else if (!input.value.trim()) {
        isValid = false;
        input.classList.add("input-error");

        // Add error label
        const err = document.createElement("span");
        err.className = "error-message";
        err.innerText = "Bu alanın doldurulması zorunludur.";
        input.parentNode.appendChild(err);
      } else if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          isValid = false;
          input.classList.add("input-error");

          const err = document.createElement("span");
          err.className = "error-message";
          err.innerText = "Geçersiz e-posta formatı.";
          input.parentNode.appendChild(err);
        }
      }
    });

    return isValid;
  }

  function buildReviewSummary() {
    if (!reviewList) return;

    const data = {
      "Ad Soyad": form.elements["fullname"].value,
      "Takma Ad": form.elements["nickname"].value,
      "Discord": form.elements["discord"].value,
      "E-posta": form.elements["email"].value,
      "Instagram": form.elements["instagram"].value,
      "Takipçi Sayısı": form.elements["followers"].value,
      "İçerik Türü": form.elements["content_type"].value,
      "Ortalama İzlenme": form.elements["avg_views"].value,
      "Hakkında": form.elements["about"].value,
      "Neden Biz?": form.elements["why"].value,
      "Reklam Onayı": form.elements["ad_consent"].value
    };

    let summaryHTML = `<h4>Başvuru Özetiniz</h4><dl class="review-dl">`;
    for (const [key, val] of Object.entries(data)) {
      summaryHTML += `
        <div class="review-row">
          <dt>${key}</dt>
          <dd>${val || "-"}</dd>
        </div>
      `;
    }
    summaryHTML += `</dl>`;

    reviewList.innerHTML = summaryHTML;
  }

  // Next / Previous buttons listeners
  form.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-next")) {
      if (validateStep(currentStep)) {
        showStep(currentStep + 1);
      }
    } else if (e.target.hasAttribute("data-prev")) {
      showStep(currentStep - 1);
    }
  });

  // Handle Form Submission
  form.addEventListener("submit", (e) => {
    if (!validateStep(currentStep)) {
      e.preventDefault();
      return;
    }

    const agreeRules = document.getElementById("agree_rules");
    const agreeContent = document.getElementById("agree_content");
    const agreePrivacy = document.getElementById("agree_privacy");

    if (!agreeRules.checked || !agreeContent.checked || !agreePrivacy.checked) {
      e.preventDefault();
      alert("Lütfen tüm sözleşmeleri okuyup onaylayınız.");
    }
  });
});
