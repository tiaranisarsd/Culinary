class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
    }
    
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      z-index: 1;
      border-radius: 8px;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
      background-image: url(images/hero-image_4.jpg);
      background-position: center;
      background-size: cover;
      z-index: -1; /* Ensure the background image is behind the text */
    }
    
    .hero_inner {
      position: relative;
      z-index: 1;
      margin: 0 auto;
      max-width: 800px;
    }
    
    .hero_title {
      font-size: 4em;
      font-weight: 450;
      margin: 0.3em 0.1em;
      color: #FFFFFF;
      display: inline-block;
     
      text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
    }
    
    .hero_tagline {
      color: #FFFFFF;
      margin-top: 16px;
      font-size: 18px;
      font-weight: 350;
      text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}

    <div tabindex="0" class="hero">
      <div class="hero_inner">
        <h1 tabindex="0" class="hero_title">Culinary 왕관</h1>
        <p tabindex="0" class="hero_tagline">Get To Know First About Restaurant You Want To Visit.</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
