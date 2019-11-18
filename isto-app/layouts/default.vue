<template>
	<div>
		<Preloader />
		<Header />
		<PageTransitioner />
		<div id="scroller">
			<div class="scrollableElement">
				<nuxt />
			</div>
		</div>
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
