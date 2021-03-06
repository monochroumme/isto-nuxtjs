<template>
	<div class="main-slider__wrapper" id="slider">
		<section class="main-slider">
			<div class="main-slider__slides" :class="{ hidden : mainSliderHidden }" id="mainSlider">
				<div class="main-slider__slide" v-for="slide in slides.length"></div>
			</div>
			<div class="main-slider__flash" id="mainSliderFlash"></div>
			<div class="main-slider__brightness"></div>
			<div class="main-slider__title-area">
				<span class="main-slider__pretitle" :class="{ hidden : mainSliderPretitleAndSlideCountHidden }">Студия дизайна ISTO</span>
				<span class="main-slider__title-inner">
					<div class="main-slider__count" :class="{ hidden : mainSliderPretitleAndSlideCountHidden }">
						<div class="main-slider__count__inner">
							<span class="main-slider__count__current">{{ curSlideCount }}</span>
							<span class="main-slider__count__length"><span class="main-slider__count__slash">/</span>{{ slidesCount }}</span>
						</div>
					</div>
					<span class="main-slider__title" :class="{ hidden : mainSliderTitleHidden }" id="mainSliderTitle"></span>
				</span>
			</div>
			<a :href="localePath('portfolio') + '/' + slide_id" @click.prevent="$bus.goTo(localePath('portfolio') + '/' + slide_id, $router)"
				class="main-slider__see-project learn-more" :class="{ hidden : mainSliderSeeProjectHidden }">
				Посмотреть проект
				<div class="plus"></div>
			</a>
			<div class="main-slider__controller" id="controller" :class="{ hidden : mainSliderControllerHidden }">
				<div class="main-slider__controller__progress" id="controllerProgress"></div>
				<button class="main-slider__controller__arrow-left" @click="prevSlide()"></button>
				<button class="main-slider__controller__arrow-right" @click="nextSlide()"></button>
				<div class="main-slider__controller__inner">
					<span class="main-slider__controller__next">Cледующий проект</span>
					<span class="main-slider__controller__title" id="controllerTitle">{{ nextSlideTitle }}</span>
				</div>
			</div>
			<div class="main-slider__controller-mobile" id="mobileController">
				<button class="main-slider__controller-mobile__slide" v-for="slide in slides.length" @click="changeSlide(slide)">
					<span>{{ slide < 10 ? `0${slide}` : slide }}</span>
				</button>
				<div class="main-slider__controller-mobile__top-line"></div>
				<div class="main-slider__controller-mobile__right-line"></div>
				<div class="main-slider__controller-mobile__progress" id="mobileProgress"></div>
			</div>
			<div class="main-slider__links" :class="{ hidden : mainSliderLinksHidden }">
				<a target="_blank" :href="settings.facebook">Facebook</a>
				<a target="_blank" :href="settings.instagram">Instagram</a>
			</div>
			<div class="main-slider__bottom-line"></div>
		</section>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		props: ['flash'],

		data() {
			return {
				slide_id: 0,
				curSlide: 1,
				curSlideCount: '01',
				controllerSpeed: 4000,
				increasing: true,
				mainSliderHidden: true,
				mainSliderControllerHidden: true,
				mainSliderLinksHidden: true,
				mainSliderTitleHidden: true,
				mainSliderPretitleAndSlideCountHidden: true,
				mainSliderSeeProjectHidden: true,
				nextSlideTitle: ''
			};
		},

		mounted() {
			this.$bus.$on('showMainSlider', () => {
				this.mainSliderHidden = false;
				document.body.style.overflow = '';
			});
			this.$bus.$on('showMainSliderController', () => {
				this.mainSliderControllerHidden = false;
			});
			this.$bus.$on('showMainSliderLinks', () => {
				this.mainSliderLinksHidden = false;
			});
			this.$bus.$on('showMainSliderTitle', () => {
				this.mainSliderTitleHidden = false;
				this.showTitle();
			});
			this.$bus.$on('showMainSliderPretitleAndSlideCount', () => {
				this.mainSliderPretitleAndSlideCountHidden = false;
			});
			this.$bus.$on('showMainSliderSeeProject', () => {
				this.mainSliderSeeProjectHidden = false;
			});

			let mainSlider = document.getElementById('mainSlider'),
				mainSliderTitle = document.getElementById('mainSliderTitle'),
				controllerProgress = document.getElementById('controllerProgress'),
				mobileProgress = document.getElementById('mobileProgress');

			for (let i = 0; i < this.slides.length; i++) {
				mainSlider.children[i].style.backgroundImage = `url(${this.$env.additionalUrl+this.slides[i].img})`;
				if (i != 0)
					mainSlider.children[i].style.display = 'none';
			}
            if (this.slides[0].title[this.locale]) {
                mainSliderTitle.innerHTML = this.turnTitleLettersIntoSpans(this.slides[0].title[this.locale]);
            }
			this.slide_id = this.slides[0].id;
            if(this.slides[1].title[this.locale]) {
                this.nextSlideTitle = this.slides[1].title[this.locale].split('_').join(' ');
            }

			// progress
			controllerProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
			mobileProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
			let wait = this.$bus.isPreloaderOn ? 6000 : 0,
				requestId;

			setTimeout(() => {
				requestId = window.requestAnimationFrame(progress);
			}, wait);

			let progress = (timestamp) => {
				if (document.hasFocus() && document.getElementById('indexPage') && window.scrollY < window.innerHeight/2) {
					if (!this.$bus.isMobile) {
						this.desktopProgress(controller, controllerProgress);
					} else {
						this.mobileProgress(mobileController, mobileProgress);
					}
				}
				window.requestAnimationFrame(progress);
			};
		},

		computed: {
			...mapState(['slides','settings']),

			slidesCount() {
				return this.slides.length < 10 ? `0${this.slides.length}` : this.slides.length;
			}
		},

		methods: {
			turnTitleLettersIntoSpans(title) {
			    if(!title) return '';
				let lines = title.split('_'),
					span = '';
					title = '';
				for (let line = 0; line < lines.length; line++) {
					for (let i = 0; i < lines[line].length; i++) {
						if (lines[line][i] !== " ") {
							span += `<span class='main-slider__title__letter'>${lines[line][i]}</span>`;
						} else {
							span += `<span> </span>`;
						}
					}
					title += `<span class='main-slider__title__line'>${span}</span>`;
					span = '';
				}
				return title;
			},

			showTitle() {
				const getProgress = ({elapsed, total}) =>
				  Math.min(elapsed / total, 1);

				const easeOut = progress =>
				  Math.pow(--progress, 5) + 1;
				

				let lines = document.getElementsByClassName('main-slider__title__line'),
					wait = 25,
					delay = 25;

				for (let i = 0; i < lines.length; i++) {
					for (let j = 0; j < lines[i].children.length; j++) {
						const time = {
						  start: performance.now() + wait,
						  total: 500
						};
						window.requestAnimationFrame((now) => {
							showLetter(now, lines[i].children[j], time);
						});
						wait += delay;
					}
				}

				let showLetter = (now, letter, time) => {
					time.elapsed = now - time.start;
					const progress = getProgress(time);
					const position = this.map(easeOut(progress), 0, 1, letter.offsetHeight, 0);
					letter.style.transform = `translateY(${position}px)`;
					if (progress < 1) {
						window.requestAnimationFrame((now) => {
							showLetter(now, letter, time);
						});
					}
				};
			},

			hideTitle() {
				const getProgress = ({elapsed, total}) =>
				  Math.min(elapsed / total, 1);

				const easeOut = progress =>
				  Math.pow(--progress, 5) + 1;
				

				let lines = document.getElementsByClassName('main-slider__title__line'),
					wait = 25,
					delay = 25;

				for (let i = 0; i < lines.length; i++) {
					for (let j = 0; j < lines[i].children.length; j++) {
						const time = {
						  start: performance.now() + wait,
						  total: 300
						};
						window.requestAnimationFrame((now) => {
							hideLetter(now, lines[i].children[j], time);
						});
						wait += delay;
					}
				}

				let hideLetter = (now, letter, time) => {
					time.elapsed = now - time.start;
					const progress = clamp(getProgress(time), 0, 1);
					const position = this.map(easeOut(progress), 0, 1, 0, letter.offsetHeight);
					letter.style.transform = `translateY(${position}px)`;
					if (progress < 1) {
						window.requestAnimationFrame((now) => {
							hideLetter(now, letter, time);
						});
					}
				};

				let clamp = (num, min, max) => {
					return num <= min ? min : num >= max ? max : num;
				};
			},

			map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			},

			nextSlide() {
				let controllerProgress = document.getElementById('controllerProgress');
				this.changeSlide(this.curSlide+1);
				// reset progress
				controllerProgress.style.transitionDuration = `0.5s`;
				controllerProgress.style.width = 0;
				this.increasing = false;
			},

			prevSlide() {
				let controllerProgress = document.getElementById('controllerProgress');
				this.changeSlide(this.curSlide-1);
				// reset progress
				controllerProgress.style.transitionDuration = `0.5s`;
				controllerProgress.style.width = 0;
				this.increasing = false;
			},

			changeSlide(i) {
				if (i != this.curSlide) {
					let mainSliderFlash = document.getElementById('mainSliderFlash'),
						mainSlider = document.getElementById('mainSlider'),
						mainSliderTitle = document.getElementById('mainSliderTitle'),
						slider = document.getElementById('slider');

					// flash
					// if (this.flash) {
					// 	mainSliderFlash.style.display = 'none';
					// 	setTimeout(()=>{mainSliderFlash.style.display = 'block'}, 50);
					// }

					let prevSlide = this.curSlide;

					// change slide
					this.curSlide = i;
					if (this.curSlide >= this.slides.length+1)
						this.curSlide = 1;
					else if (this.curSlide == 0)
						this.curSlide = this.slides.length;
					let nextSlide = this.curSlide+1;
					if (nextSlide >= this.slides.length)
						nextSlide = 1;

					// blur
					// slider.style.filter = 'blur(3px)';
					// scale
					mainSlider.style.transform = 'scale(1.2)';
					// returning blur and scale back and also show new slide
					setTimeout(() => {
						// slider.style.filter = '';
						mainSlider.style.transform = 'scale(1)';
						mainSlider.children[prevSlide-1].style.display = 'none';
						mainSlider.children[prevSlide-1].style.opacity = '1';
						mainSlider.children[prevSlide-1].style.zIndex = '';
						this.showTitle();
					}, 505);

					
					this.hideTitle();
					mainSlider.children[prevSlide-1].style.opacity = '0';
					mainSlider.children[prevSlide-1].style.zIndex = '2';
					mainSlider.children[this.curSlide-1].style.display = 'block';
					setTimeout(() => {
                        if(this.slides[nextSlide-1].title[this.locale])
							mainSliderTitle.innerHTML = this.turnTitleLettersIntoSpans(this.slides[this.curSlide-1].title[this.locale]);
					}, 500);
					this.slide_id = this.slides[this.curSlide-1].id;
					if(this.slides[nextSlide-1].title[this.locale])
						this.nextSlideTitle = this.slides[nextSlide-1].title[this.locale].split('_').join(' ');

					// change count
					this.curSlideCount = this.curSlide < 10 ? `0${this.curSlide}` : this.curSlide;
				}
			},

			desktopProgress(controller, controllerProgress) {
				if (this.increasing) {
					controllerProgress.style.width = controller.offsetWidth + 'px';
					// reached 100%
					if (controllerProgress.offsetWidth == controller.offsetWidth) {
						this.increasing = false;
						this.changeSlide(this.curSlide+1);
						controllerProgress.style.transitionDuration = `1s`;
					}
				} else {
					controllerProgress.style.width = 0;
					// reached 0%
					if (controllerProgress.offsetWidth == 0) {
						this.increasing = true;
						controllerProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
					}
				}
			},

			mobileProgress(mobileController, mobileProgress) {
				if (this.increasing) {
					mobileProgress.style.width = mobileController.offsetWidth/this.slides.length + 'px';
					// reached 100%
					if (mobileProgress.offsetWidth >= mobileController.offsetWidth/this.slides.length - 1) {
						this.increasing = false;
						this.changeSlide(this.curSlide+1);
						mobileProgress.style.transitionDuration = '1s';
						mobileProgress.style.right = mobileController.offsetWidth - (mobileController.offsetWidth/this.slides.length) + 'px';
						mobileProgress.style.width = 0;

						// reached 0%
						setTimeout(() => {
							mobileProgress.style.right = 'auto';
							if (this.curSlide > this.slides.length) {
								mobileProgress.style.transform = 'translateX(0)';
							} else {
								mobileProgress.style.transform = `translateX(${mobileController.offsetWidth/this.slides.length*(this.curSlide-1)}px)`;
							}
							this.increasing = true;
							mobileProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
						}, 1000);
					}
				}
			}
		}
	}
</script>
