/* Shared footer — edit once here, it updates on every page. */
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">Zee<span>nat</span></div>
        <p>Premium artificial jewellery for everyday wear — earrings, rings, pendants, bracelets & bridal sets, delivered across Pakistan.</p>
        <div class="social-row">
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://wa.me/${'923001234567'}" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <a href="shop.html?cat=earrings">Earrings</a><br>
        <a href="shop.html?cat=rings">Rings</a><br>
        <a href="shop.html?cat=pendants">Pendants</a><br>
        <a href="shop.html?cat=sets">Sets</a><br>
        <a href="shop.html?cat=ethnic">Ethnic Jewellery</a>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <a href="about.html">About Us</a><br>
        <a href="contact.html">Contact</a><br>
        <a href="cart.html">Your Cart</a><br>
        <a href="#">Jewellery Care</a><br>
        <a href="#">Exchange Policy</a>
      </div>
      <div class="footer-col">
        <h4>Get in Touch</h4>
        <p>WhatsApp: +92 300 1234567<br>
        Email: hello@zeenat.pk<br>
        Available 11 AM – 8 PM (Mon–Sat)</p>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Zeenat. All rights reserved. &nbsp;·&nbsp; Prices shown are in PKR.</div>
  `;
});
