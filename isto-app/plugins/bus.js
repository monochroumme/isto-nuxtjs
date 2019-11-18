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
	Vue.prototype.$bus.initialize = (menuColor, dontShowMenu, dontSmoothScroll) => {
		if (!Vue.prototype.$bus.isSmoothScrollOn && !dontSmoothScroll) {
			Vue.prototype.$bus.isSmoothScrollOn = true;
			Vue.prototype.$bus.initializeSmoothScroll();
		}

		// if (!dontSmoothScroll) {
		// 	let wait = Vue.prototype.$bus.isPreloaderOn ? 6000 : 3500,
		// 		body = document.getElementById('scroller'),
		// 		hitbox = document.getElementById('hitbox');
		// 	setTimeout(() => {
		// 		hitbox.style.height = body.offsetHeight + 'px';
		// 	}, wait);
		// } else {
		// 	hitbox.style.height = 0;
		// }

		// scroll up
		window.scrollTo(0,0);

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
		
		
		// let SmoothScroll = require("~/plugins/SmoothScroll").SmoothScroll;

		// setTimeout(() => {
		// 	new SmoothScroll('.scrollableElement', {
		// 		duration: 1500,
		// 		timingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' // EaseOutExpo
		// 	});
		// }, 1);
	};
	Vue.prototype.$bus.goTo = (link, router) => {
		Vue.prototype.$bus.$emit('transition');
		document.documentElement.style.background = '';
		document.body.style.background = '';
		setTimeout(() => { router.push(link); }, 1000);
	};
}

Vue.use(eventBus);
