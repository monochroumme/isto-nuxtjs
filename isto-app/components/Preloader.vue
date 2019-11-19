<template>
	<div>
		<div class="preloader">
			<div class="preloader__inner">
				<img class="preloader__logo" alt="logo" src="~/static/images/logos/logo.svg">
				<img class="preloader__text" alt="ISTO" src="~/static/images/logos/logo-text.svg">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			document.documentElement.style.overflow = 'hidden';
			setTimeout(() => {
				document.documentElement.style.overflow = '';
				this.$bus.isPreloaderOn = false;
			}, 6000);
		}
	}
</script>