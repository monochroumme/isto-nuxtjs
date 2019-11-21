import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
	Vue.prototype.$bus = new Vue();
	Vue.prototype.$bus.isPreloaderOn = true;
	Vue.prototype.$bus.isMobile = false;
	Vue.prototype.$bus.isMenuOn = false;
	Vue.prototype.$bus.listeners = [];
	Vue.prototype.$bus.initialize = (menuColor, dontShowMenu, dontSmoothScroll) => {
		window.scrollTo(0, 0);
		document.documentElement.style.overflowX = '';
		document.body.style.overflowX = '';

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
	Vue.prototype.$bus.goTo = (link, router) => {
		Vue.prototype.$bus.$emit('transition');
		document.documentElement.style.background = '';
		document.body.style.background = '';
		// cleaning up the animation frames
		setTimeout(() => { router.push(link); }, 1000);
	};
}

Vue.use(eventBus);
