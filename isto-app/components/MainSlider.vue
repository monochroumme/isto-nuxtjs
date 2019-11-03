<template>
	<div class="main-slider__wrapper" ref="mainSliderWrapper">
		<section class="main-slider">
			<div class="main-slider__slides" :class="{ hidden : mainSliderHidden }" ref="mainSlider">
				<div class="main-slider__slide" v-for="slide in slides.length"></div>
			</div>
			<div class="main-slider__flash" ref="mainSliderFlash"></div>
			<div class="main-slider__brightness"></div>
			<div class="main-slider__title-area">
				<span class="main-slider__pretitle" :class="{ hidden : mainSliderPretitleAndSlideCountHidden }">Студия дизайна ISTO</span>
				<span class="main-slider__title-inner">
					<div class="main-slider__count" :class="{ hidden : mainSliderPretitleAndSlideCountHidden }">
						<div class="main-slider__count__inner">
							<span class="main-slider__count__current" ref="curSlide"></span>
							<span class="main-slider__count__length"><span class="main-slider__count__slash">/</span>{{ slidesCount }}</span>
						</div>
					</div>
					<span class="main-slider__title" :class="{ hidden : mainSliderTitleHidden }" ref="mainSliderTitle"></span>
				</span>
			</div>
			<a href="#" @click.prevent="gotoInner" ref="mainSliderLink" class="main-slider__see-project" :class="{ hidden : mainSliderSeeProjectHidden }"
			   @mouseenter="$bus.blobMove(1)"
			   @mouseleave="$bus.blobStop(1)">
				<div class="main-slider__see-project__ellipse">
					<div class="blob">
						<svg id="blob1" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#ffffff" /></svg>
					</div>
				</div>
				<span>Посмотреть проект</span>
			</a>
			<div class="main-slider__controller" ref="controller" :class="{ hidden : mainSliderControllerHidden }">
				<div class="main-slider__controller__progress" ref="controllerProgress"></div>
				<button class="main-slider__controller__arrow-left" @click="prevSlide()"></button>
				<button class="main-slider__controller__arrow-right" @click="nextSlide()"></button>
				<div class="main-slider__controller__inner">
					<span class="main-slider__controller__next">Cледующий проект</span>
					<span class="main-slider__controller__title" ref="controllerTitle"></span>
				</div>
			</div>
			<div class="main-slider__controller-mobile" ref="mobileController">
				<button class="main-slider__controller-mobile__slide" v-for="slide in slides.length" @click="changeSlide(slide)">
					<span>{{ slide < 10 ? `0${slide}` : slide }}</span>
				</button>
				<div class="main-slider__controller-mobile__top-line"></div>
				<div class="main-slider__controller-mobile__right-line"></div>
				<div class="main-slider__controller-mobile__progress" ref="mobileProgress"></div>
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
	import Blob from '~/components/Blob';
	import { mapState } from 'vuex'
	export default {
		props: ['flash'],

		components: {
			Blob
		},

		data() {
			return {
				slide_id:0,
				curSlide: 1,
				controllerSpeed: 4000,
				increasing: true,
				mainSliderHidden: true,
				mainSliderControllerHidden: true,
				mainSliderLinksHidden: true,
				mainSliderTitleHidden: true,
				mainSliderPretitleAndSlideCountHidden: true,
				mainSliderSeeProjectHidden: true
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

			for (let i = 0; i < this.slides.length; i++) {
				//require(`~/static/images/main-slider/${this.slides[i].img}`);
				this.$refs.mainSlider.children[i].style.backgroundImage = `url(${this.$env.additionalUrl+this.slides[i].img})`
				if (i != 0)
					this.$refs.mainSlider.children[i].style.display = 'none';
			}

			this.$refs.mainSliderTitle.innerHTML = this.turnTitleLettersIntoSpans(this.slides[0].title[this.locale]);
			this.slide_id = this.slides[0].id
			this.$refs.mainSliderLink.href = '/project/'+this.slides[0].id;
			this.$refs.controllerTitle.innerHTML = this.slides[1].title[this.locale].split('_').join(' ');
			this.$refs.curSlide.innerHTML = '01';

			// progress
			this.$refs.controllerProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
			this.$refs.mobileProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
			let wait = this.$bus.isPreloaderOn ? 6000 : 0;
			setTimeout(() => {
				setInterval(() => {
					if (document.hasFocus()) {
						if (!this.$bus.isMobile) {
							this.desktopProgress();
						} else {
							this.mobileProgress();
						}
					}
				}, 200);
			}, wait);
		},

		computed: {

			...mapState(['slides','settings']),
			slidesCount() {
				return this.slides.length < 10 ? `0${this.slides.length}` : this.slides.length;
			}
		},

		methods: {
			gotoInner() {
				this.$router.push('/project/'+this.slide_id);

			},
			turnTitleLettersIntoSpans(title) {
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
				let lines = document.getElementsByClassName('main-slider__title__line'),
					wait = 25,
					delay = 25;

				for (let i = 0; i < lines.length; i++) {
					for (let j = 0; j < lines[i].children.length; j++) {
						setTimeout(() => {
							lines[i].children[j].classList.add('active');
						}, wait);
						wait += delay;
					}
				}
			},

			hideTitle() {
				let lines = document.getElementsByClassName('main-slider__title__line'),
					wait = 0,
					delay = 25;

				for (let i = 0; i < lines.length; i++) {
					for (let j = 0; j < lines[i].children.length; j++) {
						setTimeout(() => {
							lines[i].children[j].classList.remove('active');
						}, wait);
						wait += delay;
					}
				}
			},

			nextSlide() {
				this.changeSlide(this.curSlide+1);
				// reset progress
				this.$refs.controllerProgress.style.transitionDuration = `0.5s`;
				this.$refs.controllerProgress.style.width = 0;
				this.increasing = false;
			},

			prevSlide() {
				this.changeSlide(this.curSlide-1);
				// reset progress
				this.$refs.controllerProgress.style.transitionDuration = `0.5s`;
				this.$refs.controllerProgress.style.width = 0;
				this.increasing = false;
			},

			changeSlide(i) {
				if (i != this.curSlide) {
					// flash
					if (this.flash) {
						this.$refs.mainSliderFlash.style.display = 'none';
						setTimeout(()=>{this.$refs.mainSliderFlash.style.display = 'block'}, 50);
					}

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
					this.$refs.mainSliderWrapper.style.filter = 'blur(3px)';
					// scale
					this.$refs.mainSlider.style.transform = 'scale(1.2)';
					// returning blur and scale back and also show new slide
					setTimeout(() => {
						this.$refs.mainSliderWrapper.style.filter = '';
						this.$refs.mainSlider.style.transform = 'scale(1)';
						this.$refs.mainSlider.children[prevSlide-1].style.display = 'none';
						this.$refs.mainSlider.children[prevSlide-1].style.opacity = '1';
						this.$refs.mainSlider.children[prevSlide-1].style.zIndex = '';
						this.showTitle();
					}, 505);

					
					this.hideTitle();
					this.$refs.mainSlider.children[prevSlide-1].style.opacity = '0';
					this.$refs.mainSlider.children[prevSlide-1].style.zIndex = '2';
					this.$refs.mainSlider.children[this.curSlide-1].style.display = 'block';
					setTimeout(() => {
						this.$refs.mainSliderTitle.innerHTML = this.turnTitleLettersIntoSpans(this.slides[this.curSlide-1].title[this.locale]);
					}, 500);
					this.slide_id = this.slides[this.curSlide-1].id
					this.$refs.mainSliderLink.href = '/project/'+this.slides[this.curSlide-1].id;
					this.$refs.controllerTitle.innerHTML = this.slides[nextSlide-1].title[this.locale].split('_').join(' ');

					// change count
					this.$refs.curSlide.innerHTML = this.curSlide < 10 ? `0${this.curSlide}` : this.curSlide;
				}
			},

			desktopProgress() {
				if (this.increasing) {
					this.$refs.controllerProgress.style.width = this.$refs.controller.offsetWidth + 'px';
					// reached 100%
					if (this.$refs.controllerProgress.offsetWidth == this.$refs.controller.offsetWidth) {
						this.increasing = false;
						this.changeSlide(this.curSlide+1);
						this.$refs.controllerProgress.style.transitionDuration = `1s`;
					}
				} else {
					this.$refs.controllerProgress.style.width = 0;
					// reached 0%
					if (this.$refs.controllerProgress.offsetWidth == 0) {
						this.increasing = true;
						this.$refs.controllerProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
					}
				}
			},

			mobileProgress() {
				if (this.increasing) {
					this.$refs.mobileProgress.style.width = this.$refs.mobileController.offsetWidth/this.slides.length + 'px';
					// reached 100%
					if (this.$refs.mobileProgress.offsetWidth >= this.$refs.mobileController.offsetWidth/this.slides.length - 1) {
						this.increasing = false;
						this.changeSlide(this.curSlide+1);
						this.$refs.mobileProgress.style.transitionDuration = '1s';
						this.$refs.mobileProgress.style.right = this.$refs.mobileController.offsetWidth - (this.$refs.mobileController.offsetWidth/this.slides.length) + 'px';
						this.$refs.mobileProgress.style.width = 0;

						// reached 0%
						setTimeout(() => {
							this.$refs.mobileProgress.style.right = 'auto';
							if (this.curSlide > this.slides.length) {
								this.$refs.mobileProgress.style.transform = 'translateX(0)';
							} else {
								this.$refs.mobileProgress.style.transform = `translateX(${this.$refs.mobileController.offsetWidth/this.slides.length*(this.curSlide-1)}px)`;
							}
							this.increasing = true;
							this.$refs.mobileProgress.style.transitionDuration = `${this.controllerSpeed/1000}s`;
						}, 1000);
					}
				}
			}
		}
	}
</script>