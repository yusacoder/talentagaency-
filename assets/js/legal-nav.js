/**
 * Eternal Production — Sidebar Navigation for Legal & Policy Pages
 */
document.addEventListener("DOMContentLoaded", () => {
  const legalNav = document.getElementById("legalNav");
  if (legalNav) {
    const activePage = document.body.getAttribute("data-page") || "";

    const documents = [
      { key: "kvkk", label: "KVKK Aydınlatma Metni", file: "kvkk.html" },
      { key: "gizlilik", label: "Gizlilik Politikası", file: "gizlilik.html" },
      { key: "cerez", label: "Çerez Politikası", file: "cerez.html" },
      { key: "kullanici-sozlesmesi", label: "Kullanıcı Sözleşmesi", file: "kullanici-sozlesmesi.html" },
      { key: "partner-sozlesmesi", label: "Partner Programı Sözleşmesi", file: "partner-sozlesmesi.html" },
      { key: "telif-politikasi", label: "İçerik ve Telif Politikası", file: "telif-politikasi.html" },
      { key: "topluluk-kurallari", label: "Topluluk Kuralları", file: "topluluk-kurallari.html" },
      { key: "sikayet-politikasi", label: "İletişim ve Şikâyet Politikası", file: "sikayet-politikasi.html" },
      { key: "yasal-uyari", label: "Yasal Uyarı", file: "yasal-uyari.html" }
    ];

    let navHTML = `<ul class="legal-nav-list">`;
    documents.forEach(doc => {
      const isActive = activePage === doc.key ? "is-active" : "";
      navHTML += `
        <li>
          <a href="${doc.file}" class="legal-nav-link ${isActive}">
            ${doc.label}
          </a>
        </li>
      `;
    });
    navHTML += `</ul>`;

    legalNav.innerHTML = navHTML;
  }
});
