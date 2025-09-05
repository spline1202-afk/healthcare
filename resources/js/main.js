class SiteHeader extends HTMLElement {
  connectedCallback() {
    const url = location.pathname.split("/").pop() || "index.html";
    this.innerHTML = `
      <header>
        <div class="header-container">
          <nav>
            <div class="brand">
              <a href="index.html">
                <img class="logo" src="resources/img/logo.png" alt="Logo"/>
              </a>
            </div>
            <button class="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div class="nav-links">
              <a href="index.html" ${
                url === "index.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Home</a>
              <a href="aged-care-podiatry.html" ${
                url === "aged-care-podiatry.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Aged care podiatry</a>
              <a href="home-visit-services.html" ${
                url === "home-visit-services.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Home visit services</a>
              <a href="work-with-us.html" ${
                url === "work-with-us.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Work with us</a>
              <a href="contact-us.html" ${
                url === "contact-us.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Contact us</a>
              <a href="refer-to-us.html">
			          <div class="blue-menu-link">
  				        Refer to us
				        </div>
			        </a>
            </div>
          </nav>
        </div>
      </header>
    `;

    const menuToggle = this.querySelector(".menu-toggle");
    const navLinks = this.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("show");
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const url = location.pathname.split("/").pop() || "index.html";
    this.innerHTML = `
      <footer>
        <div class="footer-container">        
          <div class="footer-main-menu-container">
            <div class="footer-main-menu">
              <a href="index.html" class="footer-main-menu-link">Home</a>
              <a href="aged-care-podiatry.html" class="footer-main-menu-link">Aged care podiatry</a>
              <a href="home-visit-services.html" class="footer-main-menu-link">Home visit services</a>
              <a href="work-with-us.html" class="footer-main-menu-link">Work with us</a>
              <a href="contact-us.html" class="footer-main-menu-link">Contact us</a>
              <a href="refer-to-us.html" class="footer-main-menu-link">Refer to us</a>
            </div>            
		      </div>
		  		  
		      <hr class="footer-grey-divider">
		  
          <div class="footer-little-menu-container">
            <div class="footer-little-menu">
              <a href="privacy-policy.html" ${url === "privacy-policy.html" ? 'class="active-footer-little-menu-link"' : 'class="footer-little-menu-link"'}>Privacy policy</a>
              <a href="consumer-rights.html" ${url === "consumer-rights.html" ? 'class="active-footer-little-menu-link"' : 'class="footer-little-menu-link"'}>Consumer Rights</a>
              <a href="legal-information.html" ${url === "legal-information.html" ? 'class="active-footer-little-menu-link"' : 'class="footer-little-menu-link"'}>Legal information</a>
            </div>
          </div>		  		  
        </div>
		
        <div class="footer-information-background">   
		      <div class="footer-information-container">   
			      <div class="footer-information">
			        Synergy Physiotherapy & Podiatry is a registered healthcare provider based in Brisbane, QLD. Our services are delivered by qualified physiotherapists and podiatrists dedicated to improving your mobility, function, and overall well-being. ABN 96 666 881 394 | © 2025 Synergy Physiotherapy & Podiatry. All rights reserved. <br/>Please refer to our Privacy Policy and Terms & Conditions for details on how we handle your personal information and use of this website. For appointment bookings, please visit our Contact Us page or call us at 0419404707. <br/><br/> <strong>Acknowledgement of Country</strong> <br/> <br/>Synergy Physiotherapy & Podiatry acknowledges the Traditional Custodians of the land on which we work and live – the Turrbal and Yugara peoples. We pay our respects to Elders past, present and emerging, and honour their ongoing connection to land, waters, and culture. <br/><br/> <strong>Connect with Us</strong> <br/> <br/>Kain Kim<br/>Director - Physiotherapist & Podiatrist<br/><br/>Phone : 0419 404 707<br/>Address : 1 Fairmont Cresent Underwood, QLD 4119<br/>Email : admin@synergyphysiopodiatry.com
			      </div>
		      </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});