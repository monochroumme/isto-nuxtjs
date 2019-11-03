<template>
	<div class="article">
		<section class="article__switcher" @mouseleave="activeArticle=-1">
			<div v-swiper:mySwiper="swiperOption" style="transition: transform 1s ease;">
				<div class="swiper-wrapper">
					<a href="#" class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==0 || curActiveArticle==0 && activeArticle==-1 }" @mouseenter="activeArticle=0">
						<span class="article__switcher__date">28.03.2019</span>
						<span class="article__switcher__title">Эргономика кухни: как расставить мебель и технику</span>
					</a>
					<a href="#" class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==1 || curActiveArticle==1 && activeArticle==-1 }" @mouseenter="activeArticle=1" @click="mySwiper.slidePrev()">
						<span class="article__switcher__date">28.03.2019</span>
						<span class="article__switcher__title">Эргономика кухни: как расставить мебель и технику</span>
					</a>
					<h1 class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==2 || curActiveArticle==2 && activeArticle==-1 }" @mouseenter="activeArticle=2">
						<span class="article__switcher__date">28.03.2019</span>
						<span class="article__switcher__title">Эргономика кухни: как расставить мебель и технику</span>
					</h1>
					<a href="#" class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==3 || curActiveArticle==3 && activeArticle==-1 }" @mouseenter="activeArticle=3" @click="mySwiper.slideNext()">
						<span class="article__switcher__date">28.03.2019</span>
						<span class="article__switcher__title">Эргономика кухни: как расставить мебель и технику</span>
					</a>
					<a href="#" class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==4 || curActiveArticle==4 && activeArticle==-1 }" @mouseenter="activeArticle=4">
						<span class="article__switcher__date">28.03.2019</span>
						<span class="article__switcher__title">Эргономика кухни: как расставить мебель и технику</span>
					</a>
				</div>
			</div>
		</section>
		<section class="article__content" ref="content">
			<img class="article__main-pic" src="~/static/images/article/pic1.png">
			<p class="article__text">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			</p>
			<div class="article__two-part-text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus, mattis quam enim tempus condimentum integer velit,. Vitae velit, sit imperdiet condimentum consequat fames nulla neque. Sagittis, turpis mi enim nunc,. Pretium eu dapibus ornare pellentesque pellentesque convallis eget. Ut mauris netus dui fermentum condimentum consequat etiam nunc. Auctor pharetra fermentum morbi varius.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus, mattis quam enim tempus condimentum integer velit,. Vitae velit, sit imperdiet condimentum consequat fames nulla neque. Sagittis, turpis mi enim nunc,. Pretium eu dapibus ornare pellentesque pellentesque convallis eget. Ut mauris netus dui fermentum condimentum consequ.</p>
			</div>
			<div class="article__two-part-pic">
				<img src="~/static/images/article/pic2.png">
				<img src="~/static/images/article/pic3.png">
			</div>
			<h2 class="article__heading"><span>настроение в интерьере</span></h2>
			<div class="article__two-part-text one-par">
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
				<p>adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
			</div>
			<p class="article__two-part-text-as-one">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
			</p>
			<img class="article__pic" src="~/static/images/article/pic4.png">
			<div class="article__two-part-text one-par">
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
				<p>
					adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
					<span class="article__author">Андрей Нестеров, архитектор</span>
				</p>
			</div>
			<p class="article__two-part-text-as-one">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
				<span class="article__author">Андрей Нестеров, архитектор</span>
			</p>
		</section>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import Vue from 'vue';

	export default {
		components: {
			Footer
		},

		beforeMount () {
			if (process.browser) {
				require('swiper/dist/css/swiper.css');
				const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
				Vue.use(VueAwesomeSwiper);
			}
		},

		data() {
			return {
				activeArticle: -1,
				curActiveArticle: 2,
				swiperOption: {
					slidesPerView: 'auto',
					initialSlide: 2,
					// slidesPerView: 3,
					centeredSlides: true,
					spaceBetween: 100
			    }
			};
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

			// showing the content
			setTimeout(() => {
				this.$refs.content.classList.add('active');
			}, wait+1000);

			this.mySwiper.slideTo(2);
		}
	}
</script>