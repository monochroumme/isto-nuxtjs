<template>
	<div class="about">
		<div class="about__scrolllock__offsetter">
			<section class="about__scrolllock" ref="scrolllock">
				<div class="about__scrolllock__left-side">
					<img class="about__scrolllock__pic" :src="$env.baseUrl+getFirstBlock.attributes.image">
					<div class="about__I__wrapper">
						<svg class="about__I" ref="isvg" width="303" height="134" viewBox="0 0 303 134" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path ref="ipath" d="M59.52 43.3731C19.2 43.3731 7.68 33.2931 3.84 0.653106L-8.59065e-07 0.653106L-6.64995e-06 133.133L3.83999 133.133C7.68 100.493 19.2 90.4131 59.52 90.4131L242.88 90.4131C282.72 90.4131 294.72 100.493 298.56 133.133L302.4 133.133L302.4 0.653119L298.56 0.653119C294.72 33.2931 283.2 43.3731 242.88 43.3731L59.52 43.3731Z" fill="white"/>
						</svg>
					</div>
				</div>
				<div class="about__scrolllock__right-side">
					<div class="about__scrolllock__title-area" style="width: 61%;">
						<span class="about__scrolllock__pretitle" ref="pretitle">О нас</span>
						<h1 class="about__scrolllock__title" ref="title">
							<span class="about__scrolllock__title__line">{{getFirstBlock.attributes.title}}</span>
							<span class="about__scrolllock__title__line"></span>
							<span class="about__scrolllock__title__line"></span>
						</h1>
					</div>
				</div>
			</section>
			<div class="empty"></div>
		</div>
		<div class="about__content">
			<section class="about__s-area">
				<div class="about__s-area__left-side">
					<div class="about__s-area__left-side__inner">
						<p class="about__s-area__big-text">
							{{getSecondBlock.attributes.title}}
						</p>
						<div class="about__s-area__features">
							<div class="about__s-area__features__row">
								<div class="about__s-area__features__item" v-for="item in getAddonSecondBlock">
									<img style="width: 60px;" class="about__s-area__features__pic" :src="$env.baseUrl+item.attributes.image">
									<h3 class="about__s-area__features__title">{{ item.attributes.title }}</h3>
									<p class="about__s-area__features__text">
										{{ item.attributes.description }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="about__s-area__right-side" :style="`background:url(${$env.baseUrl+getSecondBlock.attributes.image});background-size:cover;`">
					<img class="about__s-area__s" src="~/static/images/about/S.svg">
				</div>
			</section>
			<section class="about__philosophy">
				<div class="about__philosophy__pics">
					<img class="about__philosophy__left-pic" :src="$env.baseUrl+getThirdBlock.attributes.image1">
					<img class="about__philosophy__right-pic" :src="$env.baseUrl+getThirdBlock.attributes.image2">
					<img class="about__philosophy__t" src="~/static/images/about/T.svg">
				</div>
				<div class="about__philosophy__inner">
					<div class="about__philosophy__right-side">
						<h2 class="about__philosophy__title">
							<span class="about__philosophy__title__line">{{ getThirdBlock.attributes.title1 }}</span>
							<span class="about__philosophy__title__line">{{ getThirdBlock.attributes.title2 }}</span>
						</h2>
						<p class="about__philosophy__text">
							{{ getThirdBlock.attributes.description }}
						</p>
						<a href="#" @click.prevent class="about__philosophy__learn-more learn-more"
						   @mouseenter="$bus.blobMove(0)" @mouseleave="$bus.blobStop(0)">
							<div class="learn-more__ellipse">
								<div class="blob">
									<svg id="blob0" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#ffffff" /></svg>
								</div>
							</div>
							<span>обсудить проект</span>
						</a>
					</div>
				</div>
			</section>
			<section class="about__strength">
				<div class="about__strength__row about__strength__text-row">
					<div class="about__strength__col">
						<h2 class="about__strength__title">
							<span class="about__strength__title__line">сила</span>
							<span class="about__strength__title__line">в команде</span>
						</h2>
					</div>
					<div class="about__strength__col left">
						<p class="about__strength__text">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						</p>
					</div>
				</div>
				<div class="about__strength__row" v-for="(item,index) in getTeams">
					<div class="about__strength__col" v-if="index===0 || index > 5">
						<div class="about__strength__team-member">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__col mobile-right" v-if="index===1">
						<div class="about__strength__team-member">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__col right mobile-left mobile-vertical" v-if="index===2">
						<div class="about__strength__team-member">
							<img class="about__strength__o" src="~/static/images/about/O.svg">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__col left mobile-right mobile-vertical" v-if="index===3">
						<div class="about__strength__team-member">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__col mobile-vertical" v-if="index===4">
						<div class="about__strength__team-member">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__team-member" v-if="index===5">
						<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.main">
						<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
						<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
					</div>
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import Blob from '~/components/Blob';
	import { mapState } from 'vuex'
	export default {
		components: {
			Footer,
			Blob
		},
		async fetch({ store }) {
			await store.dispatch('getAbout')
		},
		computed:{
			getThirdBlock() {
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'block3'
				})[0]
			},
			getTeams() {
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'team'
				})
			},
			getSecondBlock() {
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'block2'
				})[0]
			},
			getAddonSecondBlock() {
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'block2_addon'
				})
			},
			getTitle() {
				let maxCharactersInOneLine = 30;
				let lines = '';
				let prevPos = 0;
				let text = this.getThirdBlock.attributes.title;
				for (let i = 0; i < text.length; i++) {
					if (text[i] === ' ') {

						if (text.substring(prevPos, i).length > maxCharactersInOneLine) {
							lines += `<div class="about__philosophy__title__line">${text.slice(prevPos, i)}</div>`;
							prevPos = i;
						}
					}
				}
				return lines;
			},
			getFirstBlock() {
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'block1'
				})[0]
			},
			...mapState(['about'])
		},
		methods:{

		},
		mounted() {
			// making the bg white
			document.documentElement.style.background = 'white';
			document.body.style.background = 'white';

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

			// show menu
			this.$bus.$emit('showLogo');
			this.$bus.$emit('showNav');
			this.$bus.$emit('showLangs');

			// menu color change
			wait = this.$bus.isPreloaderOn ? 3800 : 0;
			setTimeout(() => {
				window.addEventListener('scroll', onScroll);
				onScroll();
			}, wait);

			// dividing the headers letter by letter
			

			// fixing the page
			this.$bus.fixer = true;

			let _this = this,
				deg = 0,
				bgColor = 0,
				titleColor = 0,
				offset;
			function onScroll() {
				// changing header's color
				if (window.scrollY-_this.$bus.scrollOffset > window.innerHeight*.1) {
					_this.$bus.$emit('headerBlack', 'l');
					_this.$bus.$emit('headerBlack', 'r');
				} else if (window.scrollY >= 0) {
					_this.$bus.$emit('headerWhite');
				}

				// turning I and changing bg
				offset = window.innerHeight;
				if (window.scrollY <= 1) {
					_this.$refs.scrolllock.style.background = `rgba(75, 85, 94, 1)`;
					_this.$refs.pretitle.style.color = `rgb(255,255,255)`;
					_this.$refs.title.style.color = `rgb(255,255,255)`;
					_this.$refs.isvg.style.transform = `rotate(90deg)`;
					_this.$refs.ipath.style.fill = `rgb(255, 255, 255)`;
				} else if (window.scrollY <= offset) {
					if (!_this.$bus.fixer)
						_this.$bus.fixer = true;

					deg = map(window.scrollY, 0, offset, 0, 90);
					bgColor = map(window.scrollY, 0, offset, 0, 1);
					titleColor = map(window.scrollY, 0, offset, 0, 255);

					// changing the header's color
					if (deg > 50) {
						_this.$bus.$emit('headerBlack', 'l');
						_this.$bus.$emit('headerBlack', 'r');
					}

					if (!_this.$bus.isMobile)
						body.style.transform = 'translateY(0)';

					_this.$refs.scrolllock.style.background = `rgba(75, 85, 94, ${1-bgColor})`;
					_this.$refs.pretitle.style.color = `rgb(${255-titleColor},${255-titleColor},${255-titleColor})`;
					_this.$refs.title.style.color = `rgb(${255-titleColor},${255-titleColor},${255-titleColor})`;
					_this.$refs.isvg.style.transform = `rotate(${90+deg}deg)`;
					_this.$refs.ipath.style.fill = `rgb(${255-bgColor*(255-75)}, ${255-bgColor*(255-85)}, ${255-bgColor*(255-94)})`;
				} else if (_this.$bus.fixer) {
					_this.$bus.fixer = false;

					_this.$refs.scrolllock.style.background = `rgba(75, 85, 94, 0)`;
					_this.$refs.pretitle.style.color = `rgb(0,0,0)`;
					_this.$refs.title.style.color = `rgb(0,0,0)`;
					_this.$refs.isvg.style.transform = `rotate(180deg)`;
					_this.$refs.ipath.style.fill = `rgb(75, 85, 94)`;
				}
			}

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	}
</script>