class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 400px;
      width: 100%;
      text-align: center;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(images/hero-image_4-large.jpg);
      background-position: center;
      background-size: cover;
    }
    
    .hero_inner {
      position: relative;
      z-index: 1;
      margin: 0 auto;
      max-width: 800px;
    }
    
    .hero_title {
      font-size: 4em;
      font-weight: 350;
      margin: 0.3em 0.1em;
      color: #FFFFFF;
      display: inline-block;
      text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
    }
    
    .hero_tagline {
      color: #FFFBDA;
      margin-top: 16px;
      font-size: 18px;
      font-weight: 250;
      text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
    }

    @media screen and (max-width: 650px) {
      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(images/hero-image_4-small.jpg);
        background-position: center;
        background-size: cover;
      }
    }

    @media screen and (max-width: 375px) {
      .hero_title {
        font-size: 24px;
        font-weight: 450;
        margin: 0.3em 0.1em;
        color: #FFFFFF;
        display: inline-block;
       
        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
      }
      
      .hero_tagline {
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 350;
        margin: 0.3em 0.1em;
        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
      }
    }
    @media screen and (min-width: 1200px) {
      .hero {
        min-width: 1000px;
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
