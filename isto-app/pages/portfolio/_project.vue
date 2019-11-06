<template>
	<div class="project">
		<section class="project__main-bg" :style="`background: url(${$env.additionalUrl+project.img});background-repeat: no-repeat;background-size: cover;`">
			<nuxt-link to="/portfolio" class="project__main-bg__go-back">
				<img src="~/static/images/project/arrow-left.svg">
				<span>назад к проектам</span>
			</nuxt-link>
			<h1 class="project__main-bg__title">{{ project.title[locale] }}</h1>
			<div class="project__main-bg__info">
				<div class="project__main-bg__info__left-line"></div>

				<div class="project__main-bg__info__col" >
					<span class="project__main-bg__info__title"> Локация </span>
					<span class="project__main-bg__info__desc">{{ getSpecs.attributes.location }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Тип</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.attributes.type }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Площадь</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.attributes.place }}</span>
				</div>
				<div class="project__main-bg__info__col">
					<span class="project__main-bg__info__title">Год</span>
					<span class="project__main-bg__info__desc">{{ getSpecs.attributes.year }}</span>
				</div>
			</div>
			<div class="project__main-bg__bottom-line"></div>
		</section>
		<section class="project__content">
			<div class="project__go-back-area" ref="goBackArea">
				<nuxt-link to="/portfolio" class="project__go-back" ref="goBack">
					<img src="~/static/images/project/arrow-left-black.svg">
				</nuxt-link>
			</div>
			<div class="project__row" v-if="getSecondBlock.attributes">
				<div class="project__col"><h2 class="project__heading">{{ getSecondBlock.attributes.title }}</h2></div>
				<div class="project__col"><p class="project__text">{{ getSecondBlock.attributes.description }}</p></div>
			</div>
			<div class="project__slider">
				<div class="project__slider__button-area-left" ref="buttonAreaLeft">
					<button @click="mySwiper.slidePrev()">
						<img src="~/static/images/slider-left-arrow.svg">
					</button>
				</div>
				<div class="project__slider__button-area-right" ref="buttonAreaRight">
					<button @click="mySwiper.slideNext()">
						<img src="~/static/images/slider-right-arrow.svg">
					</button>
				</div>
				<span class="project__slider__title" v-for="(item,index) in getGalleryBlock3" :key="index">
                    {{ item.attributes.title }}
                    <!--Ильхам это должно быть в слайдере а не отдельно-->
                </span>
				<div v-swiper:mySwiper="swiperOption">
					<div class="project__slider__slides swiper-wrapper">

						<div class="swiper-slide" v-for="(item,index) in getGalleryBlock3" :key="index">
							<img class="project__slider__slide" :src="$env.baseUrl+item.attributes.image" />
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
			<img class="project__pic" :key="index" v-for="(item,index) in getGallery2"
				 :src="$env.baseUrl+item.url.replace('/storage','')" />

			<div class="project__row result">
				<div class="project__col"><h2 class="project__heading">{{ getVideoBlock.attributes.title }}</h2></div>
				<div class="project__col"><p class="project__text">{{ getVideoBlock.attributes.description }}</p></div>
			</div>
			<div class="project__video">
				<img class="project__video__pic" :src="$env.baseUrl+getVideoBlock.attributes.video_thumb">
				<div class="project__video__button-area" v-if="!videoOn" @click="videoOn = true">
					<button>
						<img src="~/static/images/project/play.svg">
					</button>
				</div>
				<iframe v-if="videoOn" class="project__video__frame" :src="`https://www.youtube.com/embed/${getVideoBlock.attributes.video}?autoplay=1`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
					<a href="#" class="project__footer__learn-more learn-more" @mouseenter="$bus.blobMove(0)" @mouseleave="$bus.blobStop(0)">
						<div class="learn-more__ellipse">
							<div class="blob">
								<svg id="blob0" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#ffffff" /></svg>
							</div>
						</div>
						<span>отправить</span>
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
	import Blob from '~/components/Blob';
	import Vue from 'vue';
	import { mapState } from 'vuex'
	export default {
		components: {
			Footer,
			Blob
		},

		async fetch({ store,route }) {
			await store.dispatch('getProject',route.params.project)
		},
		computed:{
			getAdvancedGallery1() {
				return this.project.content[this.locale].filter( (item) => {
					return item.layout === 'advanced_gallery'
				})[0] || []
			},
			getAdvancedGallery2() {
				return this.project.content[this.locale].filter( (item) => {
					return item.layout === 'advanced_gallery'
				})[1] || []
			},
			getGallery2() {
				let gallery =  this.project.content[this.locale].find( (item) => {
					return item.layout === 'gallery2'
				})
                if(!gallery) return {}
                return JSON.parse(gallery.attributes.images);
			},
			getVideoBlock() {
				return this.project.content[this.locale].find( (item) => {
					return item.layout === 'video'
				})
			},
			getTextBlock() {
				return this.project.content[this.locale].find( (item) => {
					return item.layout === 'text'
				})
			},
			getSecondBlock() {
				return this.project.content[this.locale].find( (item) => {
					return item.layout === 'block2'
				})
			},
			getGalleryBlock3() {
                let gallery =  this.project.content[this.locale].filter( (item) => {
                    return item.layout === 'gallery'
                });
                if(!gallery) return []
                return gallery;

			},
			getSpecs() {
				return this.project.content[this.locale].find( (item) => {
					return item.layout === 'specification'
				})
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
			// getting rid of overflow-x hidden on body
			document.documentElement.style.overflowX = 'unset';
			document.body.style.overflowX = 'unset';

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

			// slider buttons magnet to mouse listeners
			this.$refs.buttonAreaLeft.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaRight.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaLeft.addEventListener('mouseleave', this.leave);
			this.$refs.buttonAreaRight.addEventListener('mouseleave', this.leave);

			// menu color change
			wait = this.$bus.isPreloaderOn ? 3800 : 0;
			setTimeout(() => {
				window.addEventListener('scroll', onScroll);
				onScroll();
			}, wait);

			let _this = this, bottom, goBackPos = 0;
			function onScroll() {
				// changing header's color
				if (!_this.$bus.isMobile) { // if NOT mobile / if desktop
					 if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerBlack', 'l');
						_this.$bus.$emit('headerBlack', 'r');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerWhite');
					}
				} else { // if mobile
					bottom = Math.max(body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight);

					if (window.scrollY >= bottom-window.innerHeight-50) {
						_this.$bus.$emit('headerWhite');
					} else if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerBlack', 'l');
						_this.$bus.$emit('headerBlack', 'r');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerWhite');
					}
				}

				// moving goBack button in the content
				if (!_this.$bus.isMobile) {
					goBackPos = window.scrollY - window.innerHeight;
					goBackPos = clamp(goBackPos, 0, _this.$refs.goBackArea.offsetHeight-_this.$refs.goBack.offsetHeight);
					_this.$refs.goBack.style.transform = `translateY(${goBackPos}px)`;
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
			        let trans = 0;
			        let transY = 0;
			        if (deltaX < 15) {
			            trans = (15-deltaX) * -1;
			        }
			        else if (deltaX > 65) {
			            trans = deltaX - 65;
			        }
			        if (deltaY < 15) {
			            transY = (15-deltaY) * -1;
			        }
			        else if (deltaY > 65) {
			            transY = deltaY - 65;
			        }
			        event.target.children[0].style.transform = 'translateX(' + trans + 'px) translateY(' + transY + 'px)';
			    }
			},

			leave(event){
				if (event.target.children[0] && event.target.children[0].tagName.toLowerCase() == 'button')
		        	event.target.children[0].style.transform = 'translateX(' + 0 + 'px) translateY(' + 0 + 'px)';
		    }
		}
	}
</script>
