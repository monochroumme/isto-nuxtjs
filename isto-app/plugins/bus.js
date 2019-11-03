import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
  Vue.prototype.$bus.isPreloaderOn = true;
  Vue.prototype.$bus.isMobile = false;
  Vue.prototype.$bus.isMenuOn = false;
  Vue.prototype.$bus.fixer = false;
  Vue.prototype.$bus.scrollOffset = 0;
  Vue.prototype.$bus.blobMove = (i) => {
  	document.getElementById(`blob${i}`).unpauseAnimations();
  };
  Vue.prototype.$bus.blobStop = (i) => {
	document.getElementById(`blob${i}`).pauseAnimations();
  };
}

Vue.use(eventBus);