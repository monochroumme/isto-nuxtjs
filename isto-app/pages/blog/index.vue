<template>
	<div class="blog" id="blog">
		<img class="blog__our-blog" src="~/static/images/blog/our-blog.png" id="ourBlog">
		<div class="blog__title-area">
			<span class="blog__pretitle">новости о современном интерьере</span>
			<h1 class="blog__title">наш блог</h1>
		</div>
		<div class="blog__showcase">
			<div class="blog__showcase__row">
				<a :href="localePath('blog') +`/`+ item.id" @click.prevent="$bus.goTo(localePath('blog') +`/`+ item.id, $router)"
						   class="blog__showcase__pic-area"
						   v-for="(item,index) in articles" :key="index">
					<div class="blog__showcase__pic-area__inner">
						<img :src="$env.baseUrl + item.img">
						<div class="blog__showcase__title-area">
							<h2 class="blog__showcase__title">{{ item.title[locale] }}</h2>
							<span class="blog__showcase__subtitle">{{ new Date(item.created_at).toLocaleDateString() }}</span>
						</div>
					</div>
				</a>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import  { mapState } from 'vuex';

	export default {
		components: {
			Footer
		},

		async fetch({ store }) {
			await store.dispatch('getArticles');
		},

		computed:{
			...mapState(['articles'])
		},

		mounted() {
			this.$bus.initialize('headerWhiteBg');

			// making OUR BLOG move
			let bottom, offset,
				body = document.getElementById('scroller'),
				ourBlog = document.getElementById('ourBlog');
			window.addEventListener('scroll', onScroll);


			let _this = this;
			function onScroll() {
				if (!document.getElementById('blog')) {
					window.removeEventListener('scroll', onScroll);
					return;
				}

				bottom = Math.max(body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight);
				offset = map(window.scrollY, 0, bottom-window.innerHeight, 0, window.innerHeight*.6);


				if (_this.$bus.isMobile) {
					ourBlog.style.transition = 'transform 0s cubic-bezier(0.165, 0.84, 0.44, 1)';
					ourBlog.style.transform = `translateY(-${offset}px)`
				} else {
					ourBlog.style.transition = 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)';
					ourBlog.style.transform = `translateY(${window.scrollY-offset}px)`;
				}
			}

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	};
</script>
