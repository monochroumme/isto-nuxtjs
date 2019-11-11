import Vue from 'vue';

export class SmoothScroll {
  constructor(_containerSelector, _params) {
    // Init DOM elements
    this.$ = {
      container: document.querySelector(_containerSelector),
      containerBody: document.querySelector(_containerSelector + '__body'),
      hitbox: document.querySelector(_containerSelector + '--hitbox')
    };

    // Init params
    this.params = {
      duration: _params.duration,
      timingFunction: _params.timingFunction
    };

    // Launch init functions
    this._initStyle();
    this._initListeners();
  }

  _initStyle() {
    if (window.innerWidth > 960) {
      this.$.container.style.overflow = 'hidden';
      this.$.container.style.position = 'fixed';
      this.$.container.style.height = '100vh';
      
      // Set containerBody style
      this.$.containerBody.style.transform = `translateY(0px)`;
      
      // Add transition
      if (window.innerWidth > 960)
        this.$.containerBody.style.transition = `transform ${this.params.duration}ms ${this.params.timingFunction}`;

      // Set hitbox style
      this.$.hitbox.style.height = `${this.$.containerBody.offsetHeight}px`;
    }
  }

  _initListeners() {
    window.addEventListener('scroll', (event) => { this._handleScroll(event) });
    window.addEventListener('resize', () => { this._handleResize() });
  }

  _handleScroll(_event) {
    if (window.innerWidth > 960) {
      if (!Vue.prototype.$bus.fixer)
        this.$.containerBody.style.transform = `translateY(${-window.scrollY+Vue.prototype.$bus.scrollOffset}px)`;
      else {
        if (window.scrollY <= window.innerHeight)
          Vue.prototype.$bus.scrollOffset = window.scrollY;
        else Vue.prototype.$bus.scrollOffset = window.innerHeight;
        this.$.hitbox.style.height = `${this.$.containerBody.offsetHeight+Vue.prototype.$bus.scrollOffset}px`;
      }
    }
  }

  _handleResize() {
    if (window.innerWidth > 960) {
      this.$.container.style.overflow = 'hidden';
      this.$.container.style.position = 'fixed';
      this.$.container.style.height = '100vh';
      this.$.containerBody.style.transition = `transform ${this.params.duration}ms ${this.params.timingFunction}`;
    } else {
      this.$.container.style.overflow = '';
      this.$.container.style.position = '';
      this.$.container.style.height = '';
      this.$.containerBody.style.transition = '';
      this.$.containerBody.style.transform = '';
    }
    this.$.hitbox.style.height = `${this.$.containerBody.offsetHeight+Vue.prototype.$bus.scrollOffset}px`;
  }
}
