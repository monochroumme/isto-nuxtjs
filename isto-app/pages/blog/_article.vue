<template>
	<div class="article">
		<section class="article__switcher" @mouseleave="activeArticle=-1">
			<div v-swiper:mySwiper="swiperOption" style="transition: transform 1s ease;">
				<div class="swiper-wrapper">
					<a href="#" @click.prevent class="swiper-slide article__switcher__title-area" :class="{ active : activeArticle==0 || curActiveArticle==0 && activeArticle==-1 }" @mouseenter="activeArticle=0">
						<span class="article__switcher__date">{{ new Date(article.date).toLocaleDateString() }}</span>
						<span class="article__switcher__title">{{  article.title[locale] }}</span>
					</a>
				</div>
			</div>
		</section>
		<section class="article__content" id="content">
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
				<p>{{ getBlock3.text }}</p>
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
	import { mapState } from 'vuex';

	export default {
		components: {
			Footer
		},

		computed:{
		    getBlock4() {
                if(!this.article.constructor[this.locale]) return {}
                let data =  this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block4';
                });
                if(data) return data.attributes;
                return {};
            },

		    getBlock3() {
                if(!this.article.constructor[this.locale]) return {}
                let data = this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block3';
                });
                if(data) return data.attributes;
                return {};

            },

            getSecondBlock() {
                if(!this.article.constructor[this.locale]) return {}
                let data = this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block2';
                });
                if(data) return data.attributes;
                return {};
            },
            
		    getFirstBlock() {
		        if(!this.article.constructor[this.locale]) return {}
		        let data = this.article.constructor[this.locale].find( (item) => {
                        return item.layout === 'block1';
                });
		        if(data) return data.attributes;
		        return {}
            },

		  ...mapState(['article'])
        },

        async fetch({ store, route }) {
		    await store.dispatch('getArticle', route.params.article);
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
					centeredSlides: true,
					spaceBetween: 100
			    }
			};
		},

		mounted() {
			this.$bus.$emit('hideMenu');

			document.documentElement.style.overflowX = '';
			document.body.style.overflowX = '';
			
			// smoothie scroll
			let body = document.getElementById('scroller'),
				hitbox = document.getElementById('hitbox'),
				SmoothScroll =  require("~/plugins/SmoothScroll").SmoothScroll;

			setTimeout(() => {
				new SmoothScroll('.scrollableElement', {
	    			duration: 1500,
	    			timingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' // EaseOutExpo
				});
			}, 1);

			this.$bus.fixer = false;
			this.$bus.scrollOffset = 0;

			// fixing the smoothie
			let wait = 500;
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
				this.$bus.$emit('headerWhiteBg');
			}, 1);

			// showing the content
			let content = document.getElementById('content');
			setTimeout(() => {
				content.classList.add('active');
			}, wait+1000);

			this.mySwiper.slideTo(2);
		}
	}
</script>
