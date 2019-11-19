<template>
	<div class="landing-page" id="indexPage">
		<MainSlider :flash="true" id="slider" />
		<div class="landing-page__content">
			<section class="idea-into-reality" id="reality" :class="{ active : realityShown }">
				<div class="idea-into-reality__info">
					<div class="idea-into-reality__inner" id="ideaInfo">
						<span class="idea-into-reality__pretitle">О нас</span>
						<span class="idea-into-reality__title" id="ideaTitle"></span>
						<span class="idea-into-reality__text">{{ getFirstBlock.description }}</span>
						<a :href="localePath('about')" @click.prevent="$bus.goTo(localePath('about'), $router);"
							class="idea-into-reality__learn-more learn-more black">
							Подробнее
							<div class="plus"></div>
						</a>
					</div>
				</div>
				<img class="idea-into-reality__letter" src="~/static/images/main-sections/I.svg" id="ideaI">
				<div class="idea-into-reality__pic-mask" id="ideaPicMask"><div class="idea-into-reality__pic-parallax parallax">
					<div class="idea-into-reality__pic" id="ideaPic"
						:style="`background:url(${$env.baseUrl + getFirstBlock.image});`"></div>
					</div>
				</div>
			</section>
			<section class="idea-into-project" id="project" :class="{ active : projectShown }">
				<div class="idea-into-project__pic-mask" id="projectPicMask">
                	<div class="idea-into-project__pic-parallax parallax">
                    	<div class="idea-into-project__pic" id="projectPic" :style="`background-image:url(${$env.baseUrl+getServices.image})`"></div>
                    </div>
                </div>
				<img class="idea-into-project__letter" src="~/static/images/main-sections/S.svg" id="projectS">
				<div class="idea-into-project__info">
					<div class="idea-into-project__inner" id="projectInfo">
						<span class="idea-into-project__pretitle">Услуги</span>
						<span class="idea-into-project__title" id="projectTitle"></span>
						<span class="idea-into-project__text">{{ getServices.description }}</span>
						<a href="#" @click.prevent="$bus.goTo('#', $router);"
							class="idea-into-project__learn-more learn-more black">
							Подробнее
							<div class="plus"></div>
						</a>
					</div>
				</div>
			</section>
			<section class="idea-into-concept" id="concept" :class="{ active : conceptShown }">
				<div class="idea-into-concept__info">
					<div class="idea-into-concept__inner" id="conceptInfo">
						<span class="idea-into-concept__pretitle">Продукция</span>
						<span class="idea-into-concept__title" id="conceptTitle"></span>
						<span class="idea-into-concept__text">{{ getProducts.description }}</span>
						<a href="/portfolio" @click.prevent="$bus.goTo(`/portfolio`, $router);"
							class="idea-into-reality__learn-more learn-more black">
							Подробнее
							<div class="plus"></div>
						</a>
					</div>
				</div>
				<img class="idea-into-concept__letter" src="~/static/images/main-sections/T.svg" id="conceptT">
				<div class="idea-into-concept__slider-mask" id="conceptPicMask">
					<div class="idea-into-concept__slider" id="conceptPic">
						<div class="idea-into-concept__slider__buttons">
							<div class="idea-into-concept__slider__button-area-left" id="buttonAreaLeft" @click="mySwiper.slidePrev()">
								<button class="idea-into-concept__slider__button-left">
									<img src="~/static/images/slider-left-arrow.svg">
								</button>
							</div>
							<div class="idea-into-concept__slider__button-area-right" id="buttonAreaRight" @click="mySwiper.slideNext()">
								<button class="idea-into-concept__slider__button-right">
									<img src="~/static/images/slider-right-arrow.svg">
								</button>
							</div>
						</div>
						<div class="idea-into-concept__slider__mobile-button-area-left" id="buttonAreaLeftMobile">
							<button class="idea-into-concept__slider__mobile-button-left" @click="mySwiper.slidePrev()">
								<img src="~/static/images/slider-left-arrow.svg">
							</button>
						</div>
						<div class="idea-into-concept__slider__mobile-button-area-right" id="buttonAreaRightMobile">
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
											 :src="$env.baseUrl+item.attributes.image">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="landing-page__footer" id="footer">
				<a :href="`/category/`+index_categories[gotoID].id" @click.prevent="$bus.goTo(`/category/`+index_categories[gotoID].id, $router);"
				   class="landing-page__footer__learn-more learn-more"
				   :class="{ active : footerAnimated }"
				   id="gotosticker">
						Перейти в раздел
						<div class="plus"></div>
				</a>
				<div class="landing-page__footer__top">
					<div class="landing-page__footer__left">
						<div class="landing-page__footer__left__bg-area" id="footerLeftBg"><div class="landing-page__footer__left__bg"></div></div>
						<div class="landing-page__footer__left__bg-blur"></div>
						<span class="landing-page__footer__left__title-area">
							<span class="landing-page__footer__left__pretitle" :class="{active : footerAnimated}">Решения для квартир и домов</span>
							<span class="landing-page__footer__left__title landing-page__footer__title">{{ index_categories[0].name[locale] }}</span>
						</span>
					</div>
					<div class="landing-page__footer__right">
						<div class="landing-page__footer__right__bg-area" id="footerRightBg"><div class="landing-page__footer__right__bg"></div></div>
						<div class="landing-page__footer__right__bg-blur"></div>
						<span class="landing-page__footer__right__title-area">
							<span class="landing-page__footer__right__pretitle" :class="{active : footerAnimated}">Решения для квартир и домов</span>
							<span class="landing-page__footer__right__title landing-page__footer__title">{{ index_categories[1].name[locale] }}</span>
						</span>
					</div>
					<div class="landing-page__footer__center">
						<div class="landing-page__footer__center__inner">
							<div class="landing-page__footer__o"></div>
							<div class="landing-page__footer__isto" id="footerISTO">
								<img alt="I" src="~/static/images/logos/I.svg">
								<img alt="S" src="~/static/images/logos/S.svg">
								<img alt="T" src="~/static/images/logos/T.svg">
								<img alt="O" src="~/static/images/logos/O.svg">
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
	import Vue from 'vue';
	import { mapState } from 'vuex';

	export default {
		computed:{
			...mapState(['about','index_blocks','projects','index_categories','settings']),

			getFirstBlock() {
			    if(!this.about.content[this.locale]) return {}
				let about =  this.about.content[this.locale].find((item) => {
					return item.layout === 'block1'
				});
			    if(about) return about.attributes;
			    return {}
			},

			getGallery() {
			    if(this.projects[0]) {
			        if(!this.projects[0].content[this.locale]) return  [];
                    return this.projects[0].content[this.locale].filter( (item) => {
                        return item.layout === 'gallery'
                    });
                }
				return []
			},

			getTitle() {
				let text = this.getServices.title;

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
                if(!this.index_blocks.constructor[this.locale]) return {}
				let data =  this.index_blocks.constructor[this.locale].find( (item) => {
					return item.layout === 'services_block'
				});
                if(data) return data.attributes;
                return {}
			},

			getProducts() {
                if(!this.index_blocks.constructor[this.locale]) return {}
                let data = this.index_blocks.constructor[this.locale].find( (item) => {
					return item.layout === 'products_block'
				});
                if(data) return data.attributes;
                return {}
			}
		},

		components: {
			MainSlider
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
			    footerSwitch: true,
			    gotoID: 0
			};
		},

		mounted() {
			this.$bus.initialize('headerNoBg', false, true);

			// parallax specifically for sections
			let parallaxes = document.getElementsByClassName('parallax');
			window.addEventListener('scroll', () => {
				if (!document.getElementById('indexPage')) {
					window.removeEventListener('scroll', onScroll);
					return;
				}

				for (let i = 0; i < parallaxes.length; i++) {
					parallaxes[i].style.transform = `scale(1.4) translateY(${90 + (-(window.scrollY - window.innerHeight*i) * .05)}px)`;
				}
			});

			// checking if mobile and setting an event listener
			this.checkForMobile();
			window.addEventListener('resize', this.checkForMobile);

			let footer = document.getElementById('footer'),
				footerISTO = document.getElementById('footerISTO'),
				footerLeftBg = document.getElementById('footerLeftBg'),
				footerRightBg = document.getElementById('footerRightBg'),
				reality = document.getElementById('reality'),
				project = document.getElementById('project'),
				concept = document.getElementById('concept'),
				ideaI = document.getElementById('ideaI'),
				ideaTitle = document.getElementById('ideaTitle'),
				ideaPic = document.getElementById('ideaPic'),
				ideaPicMask = document.getElementById('ideaPicMask'),
				projectS = document.getElementById('projectS'),
				projectTitle = document.getElementById('projectTitle'),
				projectPic = document.getElementById('projectPic'),
				projectPicMask = document.getElementById('projectPicMask'),
				conceptT = document.getElementById('conceptT'),
				conceptTitle = document.getElementById('conceptTitle'),
				conceptPic = document.getElementById('conceptPic'),
				conceptPicMask = document.getElementById('conceptPicMask'),
				buttonAreaLeft = document.getElementById('buttonAreaLeft'),
				buttonAreaRight = document.getElementById('buttonAreaRight'),
				sticker = document.getElementById('gotosticker');

			buttonAreaLeft.addEventListener('mousemove', this.magnet);
			buttonAreaRight.addEventListener('mousemove', this.magnet);
			buttonAreaLeft.addEventListener('mouseleave', this.leave);
			buttonAreaRight.addEventListener('mouseleave', this.leave);

			// slider buttons magnet to mouse listeners
			footer.addEventListener('mousemove', (e) => {
				this.handleFooterTriggerZonesAndSticker(e, footerLeftBg, footerRightBg, sticker)
			});
			
			if (!this.$bus.isMobile) {
				this.setIdeaToDefault(ideaTitle);
				this.setProjectToDefault(projectTitle);
				this.setConceptToDefault(conceptTitle);
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

			footerLeftBg.style.width = 0;

			let _this = this;
			function onScroll() {
				if (!document.getElementById('indexPage')) {
					window.removeEventListener('scroll', onScroll);
					return;
				}

				// changing header's color
				if (!_this.$bus.isMobile) {
					if ((window.innerHeight + window.scrollY) >= document.body.clientHeight)
						_this.$bus.$emit('headerNoBg');
					else if (window.scrollY > 78) {
						_this.$bus.$emit('headerWhiteBg');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerNoBg');
					}
				} else {
					if ((window.innerHeight + window.scrollY) >= document.body.clientHeight)
						_this.$bus.$emit('headerNoBg');
					else if (window.scrollY > 78) {
						_this.$bus.$emit('headerWhiteBg');
					} else if (window.scrollY >= 0) {
						_this.$bus.$emit('headerNoBg');
					}
				}

				if (!_this.realityShown && isElementInViewport(reality)) {
					_this.animateIdea(reality, ideaI, ideaTitle, ideaPic, ideaPicMask);
					_this.realityShown = true;
				}
				if (!_this.projectShown && isElementInViewport(project)) {
					_this.animateProject(project, projectTitle, projectS, projectPic, projectPicMask);
					_this.projectShown = true;
				}
				if (!_this.conceptShown && isElementInViewport(concept)) {
					_this.animateConcept(concept, conceptTitle, conceptT, conceptPic, conceptPicMask);
					_this.conceptShown = true;
				} 
				if (!_this.footerAnimated && isElementInViewport(footer)) {
					_this.animateFooter(footerISTO);
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
				if (!document.getElementById('indexPage')) {
					window.removeEventListener('resize', this.checkForMobile);
					return;
				}

				if (window.innerWidth <= 960) {
					this.realityShown = true;
					this.projectShown = true;
					this.conceptShown = true;
					this.animateIdea(reality, ideaI, ideaTitle, ideaPic, ideaPicMask);
					this.animateProject(project, projectTitle, projectS, projectPic, projectPicMask);
					this.animateConcept(concept, conceptTitle, conceptT, conceptPic, conceptPicMask);
				}
			},

			handleFooterTriggerZonesAndSticker(event, footerLeftBg, footerRightBg, sticker) {
				// toggling the areas of the footer and changing the link of the sticker
				if(event.clientX < window.innerWidth/2) {
					this.handleFooter(true, footerLeftBg, footerRightBg);
					this.gotoID = 0;
 				} else {
					this.handleFooter(false, footerLeftBg, footerRightBg);
					this.gotoID = 1;
				}

				// sticking the sticker to the mouse
				if (event.clientY < window.innerHeight-80) {
					sticker.style.top = `${event.clientY-25}px`;
					sticker.style.left = `${event.clientX-100}px`;
				}
			},

			handleFooter(bool, footerLeftBg, footerRightBg) {
				this.footerSwitch = !bool;

				if (this.footerSwitch) {
					footerRightBg.style.width = 0;
					setTimeout(() => {
						if (this.footerSwitch)
							footerLeftBg.style.width = window.innerWidth/2 + 'px';
					}, 500);
				} else {
					footerLeftBg.style.width = 0;
					setTimeout(() => {
						if (!this.footerSwitch)
							footerRightBg.style.width = window.innerWidth/2 + 'px';
					}, 500);
				}
			},

			animateFooter(footerISTO) {
				this.showFooterTitles();

				// show ISTO in the center
				let wait = 0,
					delay = 300;

				for (let i = 0; i < footerISTO.children.length; i++) {
					setTimeout(() => {
						footerISTO.children[i].classList.add('active');
					}, wait);
					wait += delay;
				}
			},

			turnTitleLettersIntoSpans(title, section, titleTxt) {
				// firstly cut them into several lines
				let lines = [],
					prevPos = 0;
                for (let i = 0; i < titleTxt.length; i++) {
                    if (titleTxt[i] == ' ' || i == titleTxt.length-1) { // when reaching space or the end
                        if (titleTxt.substring(prevPos, i).length > 3 && titleTxt.substring(prevPos, i).length < 15) {
                            lines.push(`<span class="idea-into-${section}__title__line">${titleTxt.slice(prevPos, i+1)}</span>`);
                            prevPos = i;
                        }
                    }
                }

                // adding the lines to the title div
                title.innerHTML = lines.join('');

				// then cut them into spans of letters
				let span = '';
				for (let line = 0; line < title.children.length; line++) {
					for (let i = 0; i < title.children[line].innerText.length; i++) {
						if (title.children[line].innerText[i] !== " ") {
							span += `<span class='idea-into-${section}__title__letter'>${title.children[line].innerText[i]}</span>`;
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
					delay = 100;

				for (let i = 0; i < titles.length; i++) {
					for (let j = 0; j < titles[i].children.length; j++) {
						setTimeout(() => {
							titles[i].children[j].classList.add('active');
						}, wait);
						wait += delay;
					}
				}
			},

			setIdeaToDefault( ideaTitle) {
				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(ideaTitle, 'reality', this.getFirstBlock.title);
			},

			setProjectToDefault(projectTitle) {
				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(projectTitle, 'project', this.getServices.title);
			},

			setConceptToDefault(conceptTitle) {
				// wrapping letters in the title in spans
				this.turnTitleLettersIntoSpans(conceptTitle, 'concept', this.getProducts.title);
			},

			animateTitle(title) {
				let wait = 100,
					delay = 100;

				for (let i = 0; i < title.children.length; i++) {
					for (let j = 0; j < title.children[i].children.length; j++) {
						setTimeout(() => {
							title.children[i].children[j].classList.add('active');
						}, wait);
						wait += delay;
					}
				}
			},

			animateIdea(reality, ideaI, ideaTitle, ideaPic, ideaPicMask) {
				reality.classList.add('active');
				ideaI.style.transform = 'scaleX(1) translate(-50%, -50%)';
				ideaPic.style.transform = 'scale(1)';
				ideaPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(ideaTitle);
			},

			animateProject(project, projectTitle, projectS, projectPic, projectPicMask) {
				project.classList.add('active');
				projectS.style.transform = 'scaleX(1) translate(-50%, -50%)';
				projectPic.style.transform = 'scale(1)';
				projectPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(projectTitle);
			},

			animateConcept(concept, conceptTitle, conceptT, conceptPic, conceptPicMask) {
				concept.classList.add('active');
				conceptT.style.transform = 'scaleX(1) translate(-50%, -50%)';
				conceptPic.style.transform = 'scale(1)';
				conceptPicMask.style.transform = 'scale(1)';

				// animating the title
				this.animateTitle(conceptTitle);
			},

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
