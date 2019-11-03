<template>
	<div class="landing-page">
		<MainSlider :flash="true" ref="slider" />
		<div class="landing-page__content">
			<section class="idea-into-reality" ref="reality">
				<div class="idea-into-reality__info">
					<div class="idea-into-reality__inner" ref="ideaInfo">
						<span class="idea-into-reality__pretitle">О нас</span>
						<span class="idea-into-reality__title" ref="ideaTitle">
							<span class="idea-into-reality__title__line">{{ getFirstBlock.attributes.title }}</span>
						<!--	<span class="idea-into-reality__title__line">до ее</span>
							<span class="idea-into-reality__title__line">реализации</span>-->
						</span>
						<span class="idea-into-reality__text"> {{ getFirstBlock.attributes.description }}</span>
						<nuxt-link to="/about" @click.prevent class="idea-into-reality__learn-more learn-more"
								   @mouseenter="$bus.blobMove(2)" @mouseleave="$bus.blobStop(2)">
							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob2" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#000000" /></svg>
								</div>
							</div>
							<span>Подробнее</span>
						</nuxt-link>
					</div>
				</div>
				<img class="idea-into-reality__letter" src="~/static/images/main-sections/I.png" ref="ideaI">
				<div class="idea-into-reality__pic-mask" ref="ideaPicMask"><div class="idea-into-reality__pic-parallax parallax">
					<div class="idea-into-reality__pic" ref="ideaPic"
						 :style="`background:url(${$env.baseUrl+getFirstBlock.attributes.image});background-repeat: no-repeat;
    background-size: cover;
    background-position: center;`"
					></div>
				</div></div>
			</section>
			<section class="idea-into-project" ref="project">
				<div class="idea-into-project__pic-mask" ref="projectPicMask"><div class="idea-into-project__pic-parallax parallax"><div class="idea-into-project__pic" ref="projectPic"></div></div></div>
				<img class="idea-into-project__letter" src="~/static/images/main-sections/S.png" ref="projectS">
				<div class="idea-into-project__info">
					<div class="idea-into-project__inner" ref="projectInfo">
						<span class="idea-into-project__pretitle">Услуги</span>
						<span class="idea-into-project__title" ref="projectTitle" >
							<span class="idea-into-project__title__line">{{ getServices.attributes.title }}</span>
						</span>
						<span class="idea-into-project__text">{{ getServices.attributes.description }}</span>
						<a href="#" class="idea-into-project__learn-more learn-more" @mouseenter="$bus.blobMove(3)" @mouseleave="$bus.blobStop(3)">
							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob3" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#000000" /></svg>
								</div>
							</div>
							<span>Подробнее</span>
						</a>
					</div>
				</div>
			</section>
			<section class="idea-into-concept" ref="concept">
				<div class="idea-into-concept__info">
					<div class="idea-into-concept__inner" ref="conceptInfo">
						<span class="idea-into-concept__pretitle">Продукция</span>
						<span class="idea-into-concept__title" ref="conceptTitle">
							<span class="idea-into-concept__title__line">{{ getProducts.attributes.title }}</span>
							<!--<span class="idea-into-concept__title__line">Концепт</span>
							<span class="idea-into-concept__title__line">в идее</span>-->
						</span>
						<span class="idea-into-concept__text">{{ getProducts.attributes.description }}</span>
						<a href="#" @click.prevent
						   class="idea-into-concept__learn-more learn-more"
						   @mouseenter="$bus.blobMove(4)"
						   @mouseleave="$bus.blobStop(4)"
						>
							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob4" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#000000" /></svg>
								</div>
							</div>
							<span>Подробнее</span>
						</a>
					</div>
				</div>
				<img class="idea-into-concept__letter" src="~/static/images/main-sections/T.png" ref="conceptT">
				<div class="idea-into-concept__slider-mask" ref="conceptPicMask">
					<div class="idea-into-concept__slider" ref="conceptPic">
						<div class="idea-into-concept__slider__buttons">
							<div class="idea-into-concept__slider__button-area-left" ref="buttonAreaLeft">
								<button class="idea-into-concept__slider__button-left" @click="mySwiper.slidePrev()">
									<img src="~/static/images/slider-left-arrow.svg">
								</button>
							</div>
							<div class="idea-into-concept__slider__button-area-right" ref="buttonAreaRight">
								<button class="idea-into-concept__slider__button-right" @click="mySwiper.slideNext()">
									<img src="~/static/images/slider-right-arrow.svg">
								</button>
							</div>
						</div>
						<div class="idea-into-concept__slider__mobile-button-area-left" ref="buttonAreaLeftMobile">
							<button class="idea-into-concept__slider__mobile-button-left" @click="mySwiper.slidePrev()">
								<img src="~/static/images/slider-left-arrow.svg">
							</button>
						</div>
						<div class="idea-into-concept__slider__mobile-button-area-right" ref="buttonAreaRightMobile">
							<button class="idea-into-concept__slider__mobile-button-right" @click="mySwiper.slideNext()">
								<img src="~/static/images/slider-right-arrow.svg">
							</button>
						</div>
						<div class="idea-into-concept__slider__title-area">
							<span class="idea-into-concept__slider__pretitle">хай-тек</span>
							<span class="idea-into-concept__slider__title">{{ projects[0].title[locale] }}</span>
						</div>
						<div class="idea-into-concept__slider__inner" style="overflow: hidden;">
							<div class="parallax" v-swiper:mySwiper="swiperOption" style="transition: transform 1s ease;">
								<div class="idea-into-concept__slider__slides swiper-wrapper">

									<div class="swiper-slide" v-for="item in getGallery">
										<img class="idea-into-concept__slider__slide"
											 :src="$env.baseUrl+item.attributes.image"
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="landing-page__footer" ref="footer">
				<div class="landing-page__footer__top">
					<div class="landing-page__footer__left">
						<div class="landing-page__footer__left__bg-area" ref="footerLeftBg">
							<div class="landing-page__footer__left__bg"></div>
						</div>
						<div class="landing-page__footer__left__bg-blur"></div>
						<span class="landing-page__footer__left__title-area">
							<span class="landing-page__footer__left__pretitle"
								  :class="{active : footerAnimated}">
								Решения для квартир и домов
							</span>
							<span class="landing-page__footer__left__title landing-page__footer__title">
								{{ index_categories[0].name[locale] }}
							</span>
						</span>
						<a href="#" class="landing-page__footer__learn-more-left learn-more"
						   :class="{ active : footerAnimated }"
						   @mouseenter="$bus.blobMove(5)"
						   @mouseleave="$bus.blobStop(5)">
							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob5" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#ffffff" /></svg>
								</div>
							</div>
							<span>Перейти в раздел</span>
						</a>
					</div>
					<div class="landing-page__footer__right">
						<div class="landing-page__footer__right__bg-area" ref="footerRightBg"><div class="landing-page__footer__right__bg"></div></div>
						<div class="landing-page__footer__right__bg-blur"></div>
						<span class="landing-page__footer__right__title-area">
							<span class="landing-page__footer__right__pretitle" :class="{active : footerAnimated}">
								Решения для квартир и домов
							</span>
							<span class="landing-page__footer__right__title landing-page__footer__title">
								{{ index_categories[1].name[locale] }}
							</span>
						</span>
						<nuxt-link :to="`/category/`+index_categories[1].id"
								   class="landing-page__footer__learn-more-right learn-more"
								   :class="{ active : footerAnimated }"
								   @mouseenter="$bus.blobMove(6)"
								   @mouseleave="$bus.blobStop(6)">

							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob6" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#ffffff" /></svg>
								</div>
							</div>
							<span>Перейти в раздел</span>
						</nuxt-link>
					</div>
					<div class="landing-page__footer__center">
						<div class="landing-page__footer__center__inner">
							<div class="landing-page__footer__o"></div>
							<div class="landing-page__footer__isto" ref="footerISTO">
								<img alt="I" src="~/static/images/main-footer/I.svg">
								<img alt="S" src="~/static/images/main-footer/S.svg">
								<img alt="T" src="~/static/images/main-footer/T.svg">
								<img alt="O" src="~/static/images/main-footer/O.svg">
							</div>
						</div>
					</div>
					<div class="landing-page__footer__lines">
						<div class="landing-page__footer__lines-top">
							<div class="landing-page__footer__lines-top-line"></div>
						</div>
						<div class="landing-page__footer__lines-bottom">
							<div class="landing-page__footer__lines-bottom-line"></div>
						</div>
					</div>
				</div>
				<div class="landing-page__footer__bottom">
					<div class="landing-page__footer__bottom__left">
						<span>Developed by</span>
						<a href="https://thefirstthelast.agency" target="_blank" ><img alt="thefirstthelast.agency" src="~/static/images/thefirstthelast..svg"></a>
					</div>
					<div class="landing-page__footer__bottom__center">
						<span>© Copyright 2018.All rights reserved</span>
					</div>
					<div class="landing-page__footer__bottom__right">
						<a target="_blank" :href="settings.facebook">Facebook</a>
						<a target="_blank" :href="settings.instagram">Instagram</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import MainSlider from '~/components/MainSlider';
	import Blob from '~/components/Blob';
	import Vue from 'vue';
	import { mapState } from 'vuex'
	export default {
		computed:{
			...mapState(['about','index_blocks','projects','index_categories','settings']),
			getFirstBlock() {
				return this.about.content[this.locale].find( (item) => {
					return item.layout === 'block1'
				})
			},
			getGallery() {
				return this.projects[0].content[this.locale].filter( (item) => {
						return item.layout === 'gallery'
				})
			},
			getTitle() {
				let text = this.getServices.attributes.title;

				let maxCharactersInOneLine = 6;
				let lines = '';
				let prevPos = 0;

				for (let i = 0; i < text.length; i++) {
					if (text[i] === ' ') {
						if (text.substring(prevPos, i).length > maxCharactersInOneLine) {
							lines += `<span class="idea-into-project__title__line">${text.slice(prevPos, i)}</span>`;
							prevPos = i;
						}
					}
				}
				return lines;
			},
			getServices() {
				return this.index_blocks.constructor[this.locale].find( (item) => {
					return item.layout === 'services_block'
				})
			},
			getProducts() {
				return this.index_blocks.constructor[this.locale].find( (item) => {
					return item.layout === 'products_block'
				})
			}

		},
		components: {
			MainSlider,
			Blob
		},
		async fetch({ store }) {
			await store.dispatch('getSlides');
			await store.dispatch('getAbout');
			await store.dispatch('getProjects');
			await store.dispatch('getIndex');
			await store.dispatch('getIndexCategories');
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
				transitionsAdded: false,
				swiperOption: {
					loop: true
			    },
			    realityShown: false,
			    projectShown: false,
			    conceptShown: false,
			    footerAnimated: false,
			    footerSwitch: true
			};
		},

		mounted() {
			// parallax specifically for sections
			let parallaxes = document.getElementsByClassName('parallax');
			window.addEventListener('scroll', () => {
				for (let i = 0; i < parallaxes.length; i++) {
					parallaxes[i].style.transform = `scale(1.4) translateY(${90 + (-(window.scrollY - window.innerHeight*i) * .05)}px)`;
				}
			});

			// checking if mobile and setting an event listener
			this.checkForMobile();
			window.addEventListener('resize', this.checkForMobile);

			// slider buttons magnet to mouse listeners
			this.$refs.buttonAreaLeft.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaRight.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaLeft.addEventListener('mouseleave', this.leave);
			this.$refs.buttonAreaRight.addEventListener('mouseleave', this.leave);
			this.$refs.buttonAreaLeftMobile.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaRightMobile.addEventListener('mousemove', this.magnet);
			this.$refs.buttonAreaLeftMobile.addEventListener('mouseleave', this.leave);
			this.$refs.buttonAreaRightMobile.addEventListener('mouseleave', this.leave);
			this.$refs.footer.addEventListener('mousemove', this.handleFooterTriggerZones);
			
			if (!this.$bus.isMobile) {
				this.setIdeaToDefault();
				this.setProjectToDefault();
				this.setConceptToDefault();
			}

			let wait = this.$bus.isPreloaderOn ? 3800 : 0;
			setTimeout(() => {
				this.animateAppearance();
				window.addEventListener('scroll', onScroll);
				onScroll();
			}, wait);

			// footer
			let titles = document.getElementsByClassName('landing-page__footer__title');
			for (let i = 0; i < titles.length; i++)
				this.letterizeFooter(titles[i]);

			this.$refs.footerLeftBg.style.width = 0;

			let _this = this;
			function onScroll() {
				// changing header's color
				if (!_this.$bus.isMobile) {
					if (window.scrollY >= window.innerHeight*4-50) {
						_this.$bus.$emit('headerWhite');
					} else if (window.scrollY > window.innerHeight*3-50) {
						_this.$bus.$emit('headerWhite');
						_this.$bus.$emit('headerBlack', 'l');
					} else if (window.scrollY > window.innerHeight*2-50) {
						_this.$bus.$emit('headerWhite');
						_this.$bus.$emit('headerBlack', 'r');
					} else if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerWhite');
						_this.$bus.$emit('headerBlack', 'l');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerWhite');
					}
				} else {
					if (window.scrollY >= document.documentElement.scrollHeight-window.innerHeight-50) {
						_this.$bus.$emit('headerWhite');
					} else if (window.scrollY > window.innerHeight-50) {
						_this.$bus.$emit('headerWhite');
						_this.$bus.$emit('headerBlack', 'l');
						_this.$bus.$emit('headerBlack', 'r');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerWhite');
					}
				}

				// showing elements
				if (!_this.transitionsAdded)
					_this.addTransitions();

				if (!_this.realityShown && isElementInViewport(_this.$refs.reality)) {
					_this.animateIdea();
					_this.realityShown = true;
				}
				if (!_this.projectShown && isElementInViewport(_this.$refs.project)) {
					_this.animateProject();
					_this.projectShown = true;
				}
				if (!_this.conceptShown && isElementInViewport(_this.$refs.concept)) {
					_this.animateConcept();
					_this.conceptShown = true;
				} 
				if (!_this.footerAnimated && isElementInViewport(_this.$refs.footer)) {
					_this.animateFooter();
					_this.footerAnimated = true;
				}

				function isElementInViewport(el) {
				  let rect = el.getBoundingClientRect();
				  return (
				    (rect.top <= 0
				      && rect.bottom >= 0)
				    ||
				    (rect.bottom >= (window.innerHeight*1.25 || document.documentElement.clientHeight*1.25) &&
				      rect.top <= (window.innerHeight/1.5 || document.documentElement.clientHeight/1.5))
				    ||
				    (rect.top >= 0 &&
				      rect.bottom <= (window.innerHeight*1.25 || document.documentElement.clientHeight*1.25))
				  );
				}
			}
		},

		methods: {



			animateAppearance() {
				setTimeout(() => {
					this.$bus.$emit('showMainSlider');
					setTimeout(() => {
						this.$bus.$emit('showLogo');
						setTimeout(() => {
							this.$bus.$emit('showNav');
							setTimeout(() => {
								this.$bus.$emit('showLangs');
								setTimeout(() => {
									this.$bus.$emit('showMainSliderController');
									setTimeout(() => {
										this.$bus.$emit('showMainSliderLinks');
										setTimeout(() => {
											this.$bus.$emit('showMainSliderTitle');
											setTimeout(() => {
												this.$bus.$emit('showMainSliderPretitleAndSlideCount');
												setTimeout(() => {
													this.$bus.$emit('showMainSliderSeeProject');
												}, 200);
											}, 200);
										}, 400);
									}, 200);
								}, 200);
							}, 200);
						}, 200);
					}, 400);
				}, 1000);
			},

			checkForMobile() {
				if (window.innerWidth <= 960) {
					this.realityShown = true;
					this.projectShown = true;
					this.conceptShown = true;
					this.animateIdea();
					this.animateProject();
					this.animateConcept();
				}
			},

			handleFooterTriggerZones() {
				if(event.clientX < window.innerWidth/2) {
					this.handleFooter(true);
				} else {
					this.handleFooter(false);
				}
			},

			handleFooter(bool) {
				this.footerSwitch = !bool;

				if (this.footerSwitch) {
					this.$refs.footerRightBg.style.width = 0;
					setTimeout(() => {
						if (this.footerSwitch)
							this.$refs.footerLeftBg.style.width = window.innerWidth/2 + 'px';
					}, 500);
				} else {
					this.$refs.footerLeftBg.style.width = 0;
					setTimeout(() => {
						if (!this.footerSwitch)
							this.$refs.footerRightBg.style.width = window.innerWidth/2 + 'px';
					}, 500);
				}
			},

			animateFooter() {
				this.showFooterTitles();

				// show ISTO in the center
				let wait = 0,
					delay = 200;

				for (let i = 0; i < this.$refs.footerISTO.children.length; i++) {
					setTimeout(() => {
						this.$refs.footerISTO.children[i].classList.add('active');
					}, wait);
					wait += delay;
				}
			},

			turnTitleLettersIntoSpans(title) {
				let span = '';
				for (let line = 0; line < title.children.length; line++) {
					for (let i = 0; i < title.children[line].innerText.length; i++) {
						if (title.children[line].innerText[i] !== " ") {
							span += `<span class='idea-into-reality__title__letter'>${title.children[line].innerText[i]}</span>`;
						} else {
							span += `<span> </span>`;
						}
					}
					title.children[line].innerHTML = span;
					span = '';
				}
			},

			letterizeFooter(title) {
				let span = '';
				for (let i = 0; i < title.innerText.length; i++) {
					if (title.innerText[i] !== " ") {
						span += `<span class='landing-page__footer__title__letter'>${title.innerText[i]}</span>`;
					} else {
						span += `<span> </span>`;
					}
				}
				title.innerHTML = `<span class='landing-page__footer__title__line'>${span}</span>`;
			},

			showFooterTitles() {
				let titles = document.getElementsByClassName('landing-page__footer__title__line');

				let wait = 25,
					delay = 50;

				for (let i = 0; i < titles.length; i++) {
					for (let j = 0; j < titles[i].children.length; j++) {
						setTimeout(() => {
							titles[i].children[j].classList.add('active');
						}, wait);
						wait += delay;
					}
				}
			},

			setIdeaToDefault() {
				this.$refs.ideaI.style.transform = 'scaleX(0) translate(-50%, -50%)';

				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(this.$refs.ideaTitle);
			},

			setProjectToDefault() {
				this.$refs.projectS.style.transform = 'scaleX(0) translate(-50%, -50%)';

				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(this.$refs.projectTitle);
			},

			setConceptToDefault() {
				this.$refs.conceptT.style.transform = 'scaleX(0) translate(-50%, -50%)';

				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(this.$refs.conceptTitle);
			},

			addTransitions() {
				this.$refs.ideaI.style.transition = 'transform 1s ease 1s';
				this.$refs.projectS.style.transition = 'transform 1s ease 1s';
				this.$refs.conceptT.style.transition = 'transform 1s ease 1s';
				this.transitionsAdded = true;
			},

			animateTitle(title) {
				let wait = 0,
					delay = 50;

				for (let i = 0; i < title.children.length; i++) {
					for (let j = 0; j < title.children[i].children.length; j++) {
						setTimeout(() => {
							title.children[i].children[j].classList.add('active');
						}, wait);
						wait += delay;
					}
				}
			},

			animateIdea() {
				this.$refs.reality.classList.add('active');
				this.$refs.ideaI.style.transform = 'scaleX(1) translate(-50%, -50%)';
				this.$refs.ideaPic.style.transform = 'scale(1)';
				this.$refs.ideaPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(this.$refs.ideaTitle);
			},

			animateProject() {
				this.$refs.project.classList.add('active');
				this.$refs.projectS.style.transform = 'scaleX(1) translate(-50%, -50%)';
				this.$refs.projectPic.style.transform = 'scale(1)';
				this.$refs.projectPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(this.$refs.projectTitle);
			},

			animateConcept() {
				this.$refs.concept.classList.add('active');
				this.$refs.conceptT.style.transform = 'scaleX(1) translate(-50%, -50%)';
				this.$refs.conceptPic.style.transform = 'scale(1)';
				this.$refs.conceptPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(this.$refs.conceptTitle);
			},

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
