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
});
