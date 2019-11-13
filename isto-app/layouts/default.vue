<template>
	<div>
		<Preloader />
		<Header />
		<PageTransitioner />
		<div class="scrollableElement">
			<div id="scroller" class="scrollableElement__body">
				<nuxt />
			</div>
		</div>
		<div class="scrollableElement--hitbox" id="hitbox"></div>
	</div>
</template>

<script>
	import Header from '~/components/Header';
	import Preloader from '~/components/Preloader';
	import PageTransitioner from '~/components/PageTransitioner';

	export default {
		components: {
			Header,
			Preloader,
			PageTransitioner
		}
	}
</script>
