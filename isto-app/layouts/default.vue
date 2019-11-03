<template>
	<div>
		<Preloader />
		<Header />
		<div class="scrollableElement">
			<div id="scroller" class="scrollableElement__body">
				<nuxt />
			</div>
		</div>
		<div class="scrollableElement--hitbox"></div>
	</div>
</template>

<script>
	import Header from '~/components/Header';
	import Preloader from '~/components/Preloader';

	export default {
		components: {
			Header,
			Preloader
		},

		mounted() {
			let SmoothScroll =  require("~/plugins/SmoothScroll").SmoothScroll;

			setTimeout(() => {
				new SmoothScroll('.scrollableElement', {
	    			duration: 1500,
	    			timingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' // EaseOutExpo
				});
			}, 1)

			// stop all svg animations
			let svgs = document.getElementsByTagName('svg');
			for (let i = 0; i < svgs.length; i++) {
				svgs[i].pauseAnimations();
			}
		}
	}
</script>
