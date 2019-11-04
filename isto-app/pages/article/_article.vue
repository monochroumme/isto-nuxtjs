<template>
	<div class="article">
		<section class="article__switcher" @mouseleave="activeArticle=-1">
			<div v-swiper:mySwiper="swiperOption" style="transition: transform 1s ease;">
				<div class="swiper-wrapper">
					<a href="#" @click.prevent class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==0 || curActiveArticle==0 && activeArticle==-1 }" @mouseenter="activeArticle=0">
						<span class="article__switcher__date">{{ new Date(article.date).toLocaleDateString() }}</span>
						<span class="article__switcher__title">{{  article.title[locale] }}</span>
					</a>

					<!--<a href="#" class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==1 || curActiveArticle==1 && activeArticle==-1 }" @mouseenter="activeArticle=1" @click="mySwiper.slidePrev()">
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
					</a>-->
				</div>
			</div>
		</section>
		<section class="article__content" ref="content">
			<img class="article__main-pic" :src="$env.baseUrl + article.main">
			<p class="article__text">
                {{ getFirstBlock.title }}
			</p>
			<div class="article__two-part-text">
				<p>{{ getFirstBlock.description }}</p>
            </div>
			<div class="article__two-part-pic">
				<img style="width: 50%;" :src="$env.baseUrl+getSecondBlock.image1">
				<img style="width: 50%;" :src="$env.baseUrl+getSecondBlock.image2">
			</div>
			<h2 class="article__heading"><span>{{ getBlock3.title }}</span></h2>
			<div class="article__two-part-text one-par">
				<p> {{ getBlock3.text }} </p>
			</div>
			<p class="article__two-part-text-as-one">
				{{ getBlock3.text }}
			</p>
			<img class="article__pic" :src="$env.baseUrl+getBlock3.image">
			<div class="article__two-part-text one-par">
				<p>{{ getBlock4.title }}</p>
				<p>
                    {{ getBlock4.text }}
					<span class="article__author">{{ getBlock4.author }}</span>
				</p>
			</div>
			<p class="article__two-part-text-as-one">
                {{ getBlock4.text }}
				<span class="article__author">{{ getBlock4.author }}</span>
			</p>
		</section>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import Vue from 'vue';
    import { mapState } from 'vuex'
	export default {
		components: {
			Footer
		},
        computed:{
		    getBlock4() {
                return this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block4'
                }).attributes;
            },
		    getBlock3() {
                return this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block3'
                }).attributes;
            },
            getSecondBlock() {
                return this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block2'
                }).attributes;
            },
		    getFirstBlock() {
		        return this.article.constructor[this.locale].find( (item) => {
                        return item.layout === 'block1'
                }).attributes;
            },
		  ...mapState(['article'])
        },
        async fetch({ store, route }) {
		    await store.dispatch('getArticle',route.params.article)
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
