class SiteHeader extends HTMLElement {
  connectedCallback() {
    const url = location.pathname.split("/").pop() || "index.html";
    this.innerHTML = `
      <header>
        <div class="container" style="position:relative;">
          <nav>
            <div class="brand">
              <a href="index.html">
                <img src="resources/img/logo.png" alt="Logo" style="height:100px;">
              </a>
            </div>            
            <button class="menu-toggle" aria-label="Menu">
              <img src="resources/img/burger-menu.svg" alt="menu" style="height:50px;">
            </button>
            <div class="nav-links">
              <a href="index.html" ${
                url === "index.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Health solutions</a>
              <a href="about.html" ${
                url === "about.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>About us</a>
              <a href="work.html" ${
                url === "work.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Work with us</a>
              <a href="contact.html" ${
                url === "contact.html"
                  ? 'class="active-menu-link"'
                  : 'class="menu-link"'
              }>Contact us</a>
              <a href="refer.html" ${
                url === "refer.html"
                  ? 'class="blue-button-menu-link"'
                  : 'class="menu-link"'
              }>
			    <div class="blue-button">
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
      navLinks.classList.toggle("show");
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer>
        <div class="container">          
          <div class="footer-main-menu-container">
            <div class="footer-main-menu">
              <a href="index.html" class="footer-main-menu-link">Health solutions</a>
              <a href="about.html" class="footer-main-menu-link">About us</a>
              <a href="work.html" class="footer-main-menu-link">Work with us</a>
              <a href="contact.html" class="footer-main-menu-link">Contact us</a>
              <a href="refer.html" class="footer-main-menu-link">Refer to us</a>
            </div>
            <div class="footer-social-media">            
              <img src="resources/img/linkedin.svg" alt="linkedin" style="height:29px; width:24px;">
            </div>
		      </div>
		  		  
		      <hr class="footer-grey-divider">
		  
          <div class="footer-little-menu-container">
            <div class="footer-little-menu">
              <a href="privacy_policy.html" class="footer-little-menu-link">Privacy policy</a>
              <a href="consumer_rights.html" class="footer-little-menu-link">Consumer rights</a>
              <a href="consent.html" class="footer-little-menu-link">Consent</a>
              <a href="feedback.html" class="footer-little-menu-link">Feedback</a>
              <a href="news_highlights.html" class="footer-little-menu-link">News highlights</a>
              <a href="legal_information.html" class="footer-little-menu-link">Legal information</a>
            </div>
          </div>		  		  
        </div>

		    <hr class="footer-blue-divider">
		
        <div class="footer-information-background">   
		      <div class="footer-information-container">   
			      <div class="footer-information">
			        Amplar Health is a business of Medibank Health Solutions Pty Limited ACN 078 934 791, with health services delivered by Amplar Home Health Pty Ltd ACN 008 193 100, Amplar Health Home Hospital Pty Ltd (ACN 644 702 081), Amplar Allied Health (a business of HealthStrong Pty Ltd ACN 155 277 919) and Amplar Virtual Health (a business of Medibank Health Solutions Telehealth Pty Ltd ACN 069 396 792). Our CareComplete programs are delivered by Amplar Preventative Health (a business of Integrated Care Services Pty Ltd ACN 059 950 695). We are part of the Medibank Group. Copyright © 2023 Medibank Health Solutions Pty Ltd. All rights reserved. Please refer to the <a href="privacy_policy.html" class="footer-link">Amplar Health Privacy Policy</a> for how your personal information is handled.
			      </div>
		      </div>
		  
          <div class="footer-information-container">   
            <div class="flags">
              <img src="resources/img/flags.png" alt="flags" style="height:28px; width:80px;">
            </div>
          </div>
		  
          <div class="footer-information-container">   
            <div class="footer-information">
              Amplar Health acknowledges Aboriginal and Torres Strait Islander peoples as the First Peoples of this nation. We proudly recognise Elders past, present and emerging as the Traditional Owners of the lands on which we work and live. We’re committed to supporting Indigenous self-determination and envision a future where all Australians embrace Aboriginal and Torres Strait Islander histories, cultures and rights as a central part of our national identity.
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
