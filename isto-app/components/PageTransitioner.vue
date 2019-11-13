<template>
	<div class="page-transitioner" id="transitioner" :class="{ active : active }">
		<!-- <div class="page-transitioner__blocker" id="page-transitioner__blocker"></div> -->
		<div class="page-transitioner__left" id="page-transitioner__left"></div>
		<div class="page-transitioner__right" id="page-transitioner__right"></div>
		<img class="page-transitioner__isto" src="~/static/images/logo.svg">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: false
			};
		},

		mounted() {
			// let blocker = document.getElementById('page-transitioner__blocker'),
			let	left = document.getElementById('page-transitioner__left'),
				right = document.getElementById('page-transitioner__right'),
				transitioner = document.getElementById('transitioner');
			this.$bus.$on('transition', () => { this.transition(left, right, transitioner); });
		},

		methods: {
			transition(left, right, transitioner) {
				left.style.transform = `translateY(-${window.innerHeight}px)`;
				right.style.transform = `translateY(${window.innerHeight}px)`;
				document.documentElement.style.overflow = 'hidden';
				this.active = true;
				setTimeout(() => {
					left.style.transform = `translateY(0)`;
					right.style.transform = `translateY(0)`;
				}, 1);
				setTimeout(() => {
					left.style.transform = `translateY(${window.innerHeight}px)`;
					right.style.transform = `translateY(-${window.innerHeight}px)`;
					setTimeout(() => {
						this.active = false;
						document.documentElement.style.overflow = '';
					}, 1500);
				}, 3000);
			}
		}
	}
</script>