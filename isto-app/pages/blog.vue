<template>
	<div class="blog">
		<img class="blog__our-blog" src="~/static/images/blog/our-blog.png" ref="ourBlog">
		<div class="blog__title-area">
			<span class="blog__pretitle">новости о современном интерьере</span>
			<h1 class="blog__title">наш блог</h1>
		</div>
		<div class="blog__showcase">
			<div class="blog__showcase__row">
				<nuxt-link :to="`/article/`+item.id"
						   :class="{ 'small':!item.wide }"
						   class="blog__showcase__pic-area"
						   v-for="(item,index) in articles" :key="index">
					<div class="blog__showcase__pic-area__inner">
						<img :src="$env.baseUrl+item.img">
						<div class="blog__showcase__title-area">
							<h2 class="blog__showcase__title">{{ item.title[locale] }}</h2>
							<span class="blog__showcase__subtitle">{{ new Date(item.created_at).toLocaleDateString() }}</span>
						</div>
					</div>
				</nuxt-link>

			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import  { mapState } from 'vuex'
	export default {
		components: {
			Footer
		},
		async fetch({ store }) {
			await store.dispatch('getArticles')
		},
		computed:{
			...mapState(['articles'])
		},
		mounted() {
			// fixing the smoothie
			let wait = 0,
				hitbox = document.getElementsByClassName('scrollableElement--hitbox')[0],
				body = document.getElementsByClassName('scrollableElement__body')[0];
			if (this.$bus.isPreloaderOn) {
				wait = 6000;
			}
			setTimeout(() => {
				hitbox.style.height = body.offsetHeight + 'px';			
			}, wait);

			// show menu
			this.$bus.$emit('showLogo');
			this.$bus.$emit('showNav');
			this.$bus.$emit('showLangs');
			setTimeout(() => {
				this.$bus.$emit('headerBlack', 'r');
				this.$bus.$emit('headerBlack', 'l');
			}, 1);

			// making OUR BLOG move
			let bottom, offset;
			window.addEventListener('scroll', () => {
				bottom = Math.max(body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight);
				offset = map(window.scrollY, 0, bottom-window.innerHeight, 0, window.innerHeight*.6);


				if (this.$bus.isMobile) {
					this.$refs.ourBlog.style.transition = 'transform 0s cubic-bezier(0.165, 0.84, 0.44, 1)';
					this.$refs.ourBlog.style.transform = `translateY(-${offset}px)`
				} else {
					this.$refs.ourBlog.style.transition = 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)';
					this.$refs.ourBlog.style.transform = `translateY(${window.scrollY-offset}px)`;
				}
			});

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	};
</script>
