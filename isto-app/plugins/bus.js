import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
	Vue.prototype.$bus = new Vue();
	Vue.prototype.$bus.isPreloaderOn = true;
	Vue.prototype.$bus.isMobile = false;
	Vue.prototype.$bus.isMenuOn = false;
	Vue.prototype.$bus.fixer = false;
	Vue.prototype.$bus.scrollOffset = 0;
	Vue.prototype.$bus.isSmoothScrollOn = false;
	Vue.prototype.$bus.listeners = [];
	Vue.prototype.$bus.initialize = (menuColor, dontShowMenu) => {
		if (!Vue.prototype.$bus.isSmoothScrollOn) {
			Vue.prototype.$bus.isSmoothScrollOn = true;
			Vue.prototype.$bus.initializeSmoothScroll();
		}

		// show menu
		if (!dontShowMenu) {
			Vue.prototype.$bus.$emit('showLogo');
			Vue.prototype.$bus.$emit('showNav');
			Vue.prototype.$bus.$emit('showLangs');
			setTimeout(() => {
				Vue.prototype.$bus.$emit(menuColor);
			}, 1);
		}
	};
	Vue.prototype.$bus.initializeSmoothScroll = () => {
		// luxy.init();
	};
	Vue.prototype.$bus.goTo = (link, router) => {
		Vue.prototype.$bus.$emit('transition');
		document.documentElement.style.background = '';
		document.body.style.background = '';
		setTimeout(() => { router.push(link); }, 1000);
	};
}

Vue.use(eventBus);
