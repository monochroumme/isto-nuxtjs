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
				<p v-for="desc in getDescriptions">{{ desc }}</p>
			</div>
			<div class="article__two-part-pic">
				<img style="width: 50%;" :src="$env.baseUrl+getSecondBlock.image1">
				<img style="width: 50%;" :src="$env.baseUrl+getSecondBlock.image2">
			</div>
			<h2 class="article__heading"><span>{{ getBlock3.title }}</span></h2>
			<div class="article__two-part-text">
				<p v-for="text in getBlock3Text">{{ text }}</p>
			</div>
			<img class="article__pic" :src="$env.baseUrl+getBlock3.image">
			<div class="article__two-part-text">
				<p v-for="(text, index) in getBlock4Text">
                    {{ text }}
					<span class="article__author" v-if="index == getBlock4Text.length - 1">{{ getBlock4.author }}</span>
				</p>
			</div>
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
                if(!this.article.constructor[this.locale]) return {};
                let data =  this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block4';
                });
                if(data) return data.attributes;
                return {};
            },

		    getBlock3() {
                if(!this.article.constructor[this.locale]) return {};
                let data = this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block3';
                });
                if(data) return data.attributes;
                return {};

            },

            getSecondBlock() {
                if(!this.article.constructor[this.locale]) return {};
                let data = this.article.constructor[this.locale].find( (item) => {
                    return item.layout === 'block2';
                });
                if(data) return data.attributes;
                return {};
            },
            
		    getFirstBlock() {
		        if(!this.article.constructor[this.locale]) return {};
		        let data = this.article.constructor[this.locale].find( (item) => {
                        return item.layout === 'block1';
                });
		        if(data) return data.attributes;
		        return {};
            },

            getDescriptions() {
            	return this.getTwoPar(this.getFirstBlock.description);
            },

            getBlock3Text() {
            	return this.getTwoPar(this.getBlock3.text);
            },

            getBlock4Text() {
				return this.getTwoPar(this.getBlock4.text);
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
			this.$bus.initialize('headerWhiteBg');

			// showing the content
			let content = document.getElementById('content'),
				wait = this.$bus.isPreloaderOn ? 6000 : 0;
			setTimeout(() => {
				content.classList.add('active');
			}, wait+1000);

			this.mySwiper.slideTo(2);
		},

		methods: {
			getTwoPar(txt) {
            	let descs = [];

            	if (this.$bus.isMobile) {
            		descs.push(txt);
            	} else {
            		let i = txt.length/2 + txt.slice(txt.length/2, txt.length).indexOf(' '); // the index at which the text wraps
            		descs.push(txt.slice(0, i));
            		descs.push(txt.slice(i, txt.length));
            	}
        		return descs;
			}
		}
	}
</script>
