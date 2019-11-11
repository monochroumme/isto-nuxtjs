<template>
	<div class="project" id="projectPage">
		<section class="project__main-bg" :style="`background-image: url(${$env.additionalUrl + project.img});`">
			<nuxt-link :to="localePath('portfolio')" class="project__main-bg__go-back">
				<img src="~/static/images/project/arrow-left.svg">
				<span>назад к проектам</span>
			</nuxt-link>
			<h1 class="project__main-bg__title">{{ project.title[locale] }}</h1>
			<div class="project__main-bg__info">
				<div class="project__main-bg__info__left-line"></div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Локация</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.location }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Тип</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.type }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Площадь</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.place }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Год</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.year }}</span>
				</div>
			</div>
			<div class="project__main-bg__bottom-line"></div>
		</section>
		<section class="project__content">
			<div class="project__go-back-area" id="goBackArea">
				<nuxt-link :to="localePath('portfolio')" class="project__go-back" id="goBack">
					<img src="~/static/images/project/arrow-left-black.svg">
				</nuxt-link>
			</div>
			<div class="project__row" >
				<div class="project__col"><h2 class="project__heading">{{ getSecondBlock.title }}</h2></div>
				<div class="project__col"><p class="project__text">{{ getSecondBlock.description }}</p></div>
			</div>
			<div class="project__slider">
				<div class="project__slider__button-area-left" id="buttonAreaLeft">
					<button @click="mySwiper.slidePrev()">
						<img src="~/static/images/slider-left-arrow.svg">
					</button>
				</div>
				<div class="project__slider__button-area-right" id="buttonAreaRight">
					<button @click="mySwiper.slideNext()">
						<img src="~/static/images/slider-right-arrow.svg">
					</button>
				</div>
				<div v-swiper:mySwiper="swiperOption">
					<div class="project__slider__slides swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in getGalleryBlock3" :key="index">
							<div>
								<img class="project__slider__slide" :src="$env.baseUrl+item.attributes.image" />
								<span class="project__slider__title">
				                    {{ item.attributes.title }}
				                </span>
			                </div>
						</div>
					</div>
				</div>
			</div>
			<div class="project__row project__grid">
				<div class="project__col" v-if="getAdvancedGallery1.attributes">
					<img class="project__col__pic" :src="$env.baseUrl+getAdvancedGallery1.attributes.image1">
					<img class="project__col__pic" :src="$env.baseUrl+getAdvancedGallery1.attributes.image2">
					<div class="project__grid__text-area">
						<div class="project__grid__text-area__inner">
							<h2 class="project__heading">{{ getAdvancedGallery1.attributes.title }}</h2>
							<p class="project__grid__text"> {{ getAdvancedGallery1.attributes.description }} </p>
						</div>
					</div>
				</div>
				<div class="project__col" v-if="getAdvancedGallery2.attributes">
					<div class="project__grid__text-area">
						<div class="project__grid__text-area__inner">
							<h2 class="project__heading">{{ getAdvancedGallery2.attributes.title }}</h2>
							<p class="project__grid__text">{{ getAdvancedGallery2.attributes.description }} </p>
						</div>
					</div>
					<img class="project__col__pic" :src="$env.baseUrl+getAdvancedGallery2.attributes.image1">
					<img class="project__col__pic" :src="$env.baseUrl+getAdvancedGallery2.attributes.image2">
				</div>
			</div>
			<img class="project__pic" :key="index" v-for="(item,index) in getGallery2" :src="$env.baseUrl+item.url.replace('/storage','')" />
			<div class="project__row result" v-if="getVideoBlock.title">
				<div class="project__col"><h2 class="project__heading">{{ getVideoBlock.title }}</h2></div>
				<div class="project__col"><p class="project__text">{{ getVideoBlock.description }}</p></div>
			</div>
			<div class="project__video" v-if="getVideoBlock.video_thumb">
				<img class="project__video__pic" :src="$env.baseUrl+getVideoBlock.video_thumb">
				<div class="project__video__button-area" v-if="!videoOn" @click="videoOn = true">
					<button>
						<img src="~/static/images/project/play.svg">
					</button>
				</div>
				<iframe v-if="videoOn" class="project__video__frame" :src="`https://www.youtube.com/embed/${getVideoBlock.video}?autoplay=1`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<div class="project__bottom-line"></div>
		</section>
		<section class="project__footer">
			<div class="project__row">
				<div class="project__col">
					<h2 class="project__footer__title z1">Хочу<br>такой же<br>проект</h2>
					<p class="project__text project__footer__text z1">Отправляя форму вы подтверждаете свое согласие на <span class="futura-bold">обработку персональных данных</span>.</p>
					<img class="project__footer__s" src="~/static/images/project/S.png">
				</div>
				<div class="project__col">
					<form class="project__footer__form">
						<input class="project__footer__input" type="text" name="name" placeholder="Имя">
						<input class="project__footer__input" type="text" name="phone" placeholder="Телефон для связи">
					</form>
					<a href="#" class="project__footer__learn-more learn-more">
						отправить
						<div class="plus"></div>
					</a>
				</div>
			</div>
			<p class="project__footer__bottom-text">Отправляя форму вы подтверждаете свое согласие на <span class="futura-bold">обработку персональных данных</span>.</p>
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

		async fetch({ store,route }) {
			await store.dispatch('getProject', route.params.project);
		},

		computed:{
			getAdvancedGallery1() {
				return this.project.content[this.locale].filter( (item) => {
					return item.layout === 'advanced_gallery'
				})[0] || [];
			},

			getAdvancedGallery2() {
				return this.project.content[this.locale].filter( (item) => {
					return item.layout === 'advanced_gallery'
				})[1] || [];
			},

			getGallery2() {
				let gallery =  this.project.content[this.locale].find( (item) => {
					return item.layout === 'gallery2'
				});
                if(!gallery) return {};
                return JSON.parse(gallery.attributes.images);
			},

			getVideoBlock() {
				if (this.project.content[this.locale]) {
					let video = this.project.content[this.locale].find( (item) => {
						return item.layout === 'video'
					});
					if(!video) return {};
					return video.attributes;
				} else return {};
			},

			getTextBlock() {
				return this.project.content[this.locale].find( (item) => {
					return item.layout === 'text'
				});
			},

			getSecondBlock() {
			    if(this.project.content[this.locale]) {
                    let proj = this.project.content[this.locale].find( (item) => {
                        return item.layout === 'block2'
                    });
                    if(proj) return proj.attributes;
                    return {}
                }
				return {}
			},

			getGalleryBlock3() {
                let gallery =  this.project.content[this.locale].filter( (item) => {
                    return item.layout === 'gallery'
                });
                if(!gallery) return [];
                return gallery;

			},

			getSpecs() {
			    if(this.project.content[this.locale]) {
                   let proj = this.project.content[this.locale].find( (item) => {
                        return item.layout === 'specification'
                    });
                   if(proj) return proj.attributes;
                   return {}
                }
				return {}
			},

			...mapState(['project'])
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
				swiperOption: {
					loop: true
			    },
			    videoOn: false
			};
		},

		mounted() {
			this.$bus.$emit('hideMenu');
			
			// getting rid of overflow-x hidden on body
			document.documentElement.style.overflowX = 'unset';
			document.body.style.overflowX = 'unset';

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
			this.$bus.$emit('headerNoBg');

			// slider buttons magnet to mouse listeners
			let buttonAreaLeft = document.getElementById('buttonAreaLeft'),
				buttonAreaRight = document.getElementById('buttonAreaRight');
			buttonAreaLeft.addEventListener('mousemove', this.magnet);
			buttonAreaRight.addEventListener('mousemove', this.magnet);
			buttonAreaLeft.addEventListener('mouseleave', this.leave);
			buttonAreaRight.addEventListener('mouseleave', this.leave);

			// menu color change
			wait = this.$bus.isPreloaderOn ? 3800 : 0;
			setTimeout(() => {
				window.addEventListener('scroll', () => {
					if (document.getElementById('projectPage'))
						onScroll();
					hitbox.style.height = body.offsetHeight + 'px';
				});
				onScroll();
			}, wait);

			let _this = this, bottom, goBackPos = 0,
				goBackArea = document.getElementById('goBackArea'),
				goBack = document.getElementById('goBack');
			function onScroll() {
				// changing header's color
				if (!_this.$bus.isMobile) { // if NOT mobile / if desktop
					 if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerWhiteBg');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerNoBg');
					}
				} else { // if mobile
					bottom = Math.max(body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight);

					if (window.scrollY >= bottom-window.innerHeight-50) {
						_this.$bus.$emit('headerNoBg');
					} else if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerWhiteBg');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerNoBg');
					}
				}

				// moving goBack button in the content
				if (!_this.$bus.isMobile) {
					goBackPos = window.scrollY - window.innerHeight - 100;
					goBackPos = clamp(goBackPos, 0, goBackArea.offsetHeight-goBack.offsetHeight);
					goBack.style.transform = `translateY(${goBackPos}px)`;
				}
			}

			function clamp(num, min, max) {
				return num <= min ? min : num >= max ? max : num;
			}
		},

		methods: {
			magnet(event) {
				if (event.target.children[0] && event.target.children[0].tagName.toLowerCase() == 'button') {
			        let target = event.target.getBoundingClientRect();
			        let targetX = target.x;
			        let targetY = target.y;
			        let deltaX = event.clientX - targetX;
			        let deltaY = event.clientY - targetY;
			        let transX = 0;
			        let transY = 0;
			        if (deltaX < 22)
			            transX = (22-deltaX) * -1;
			        else if (deltaX > 58)
			            transX = deltaX - 58;
			        if (deltaY < 22)
			            transY = (22-deltaY) * -1;
			        else if (deltaY > 58)
			            transY = deltaY - 58;
			        event.target.children[0].style.transform = 'translateX(' + transX + 'px) translateY(' + transY + 'px)';
			    }
			},

			leave(event){
				if (event.target.children[0] && event.target.children[0].tagName.toLowerCase() == 'button')
		        	event.target.children[0].style.transform = 'translateX(' + 0 + 'px) translateY(' + 0 + 'px)';
		    }
		}
	}
</script>
