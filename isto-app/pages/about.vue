<template>
	<div class="about" id="about">
		<div class="about__scrolllock__offsetter">
			<section class="about__scrolllock" id="scrolllock">
				<div class="about__scrolllock__left-side">
					<img class="about__scrolllock__pic" :src="$env.baseUrl+getFirstBlock.image">
					<div class="about__I__wrapper">
						<svg class="about__I" id="isvg" width="303" height="134" viewBox="0 0 303 134" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="ipath" d="M59.52 43.3731C19.2 43.3731 7.68 33.2931 3.84 0.653106L-8.59065e-07 0.653106L-6.64995e-06 133.133L3.83999 133.133C7.68 100.493 19.2 90.4131 59.52 90.4131L242.88 90.4131C282.72 90.4131 294.72 100.493 298.56 133.133L302.4 133.133L302.4 0.653119L298.56 0.653119C294.72 33.2931 283.2 43.3731 242.88 43.3731L59.52 43.3731Z" fill="white"/>
						</svg>
					</div>
				</div>
				<div class="about__scrolllock__right-side">
					<div class="about__scrolllock__title-area">
						<span class="about__scrolllock__pretitle" id="pretitle">О нас</span>
						<h1 class="about__scrolllock__title" id="title">
							<span class="about__scrolllock__title__line" v-for="titleLine in firstBlockTitle">{{titleLine}}</span>
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
							{{getSecondBlock.title}}
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
				<div class="about__s-area__right-side" :style="`background:url(${$env.baseUrl+getSecondBlock.image});background-size:cover;`">
					<img class="about__s-area__s" src="~/static/images/about/S.svg">
				</div>
			</section>
			<section class="about__philosophy">
				<div class="about__philosophy__pics">
					<img class="about__philosophy__left-pic" :src="$env.baseUrl+getThirdBlock.image1">
					<img class="about__philosophy__right-pic" :src="$env.baseUrl+getThirdBlock.image2">
					<img class="about__philosophy__t" src="~/static/images/about/T.svg">
				</div>
				<div class="about__philosophy__inner">
					<div class="about__philosophy__right-side">
						<h2 class="about__philosophy__title">
							<span class="about__philosophy__title__line">{{ getThirdBlock.title1 }}</span>
							<span class="about__philosophy__title__line">{{ getThirdBlock.title2 }}</span>
						</h2>
						<p class="about__philosophy__text">
							{{ getThirdBlock.description }}
						</p>
						<a href="#" @click.prevent="$bus.goTo('#', $router)"
							class="about__philosophy__learn-more learn-more">
							обсудить проект
							<div class="plus"></div>
						</a>
					</div>
				</div>
			</section>
			<section class="about__strength">
				<div class="about__strength__row about__strength__text-row">
					<div class="about__strength__text-col">
						<h2 class="about__strength__title">
							<span class="about__strength__title__line">сила</span>
							<span class="about__strength__title__line">в команде</span>
						</h2>
					</div>
					<div class="about__strength__text-col">
						<p class="about__strength__text">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						</p>
					</div>
				</div>
				<div class="about__strength__row">
					<div class="about__strength__col" v-for="(item, index) in getTeams">
						<div class="about__strength__team-member">
							<img class="about__strength__o" src="~/static/images/about/O.svg" v-if="index == 3">
							<img class="about__strength__team-member__pic" :src="$env.baseUrl+item.attributes.teammate_photo">
							<span class="about__strength__team-member__name">{{ item.attributes.name }} {{ item.attributes.surname }}</span>
							<span class="about__strength__team-member__title">{{ item.attributes.position }}</span>
						</div>
					</div>
					<div class="about__strength__col" v-if="getTeams.length % 2 != 0"></div>
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from '~/components/Footer';
	import { mapState } from 'vuex';
    
	export default {
		components: {
			Footer
		},
        
		async fetch({ store }) {
			await store.dispatch('getAbout');
		},

		computed: {
			getThirdBlock() {
			    if(this.about.content[this.locale]) {
                    let about = this.about.content[this.locale].find( (item) => {
                        return item.layout === 'block3'
                    });
                    if(about) return about.attributes;
                    return {}
                }
                return {}
			},
            
			getTeams() {
			    if(!this.about.content[this.locale]) return [];
                return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'team'
				});
			},
            
			getSecondBlock() {
                if(!this.about.content[this.locale]) return [];
				let data =  this.about.content[this.locale].find( (item) => {
					return item.layout === 'block2'
				});
				if(data) return data.attributes;
				return {}
			},
            
			getAddonSecondBlock() {
                if(!this.about.content[this.locale]) return [];
				return this.about.content[this.locale].filter( (item) => {
					return item.layout === 'block2_addon'
				});
			},
            
			getTitle() {
				let maxCharactersInOneLine = 30;
				let lines = '';
				let prevPos = 0;
				let text = this.getThirdBlock.title;
				if(text) {
                    for (let i = 0; i < text.length; i++) {
                        if (text[i] === ' ') {
                            if (text.substring(prevPos, i).length > maxCharactersInOneLine) {
                                lines += `<div class="about__philosophy__title__line">${text.slice(prevPos, i)}</div>`;
                                prevPos = i;
                            }
                        }
                    }
                }

				return lines;
			},
            
			getFirstBlock() {
                if(!this.about.content[this.locale]) return {};
				let about =  this.about.content[this.locale].find( (item) => {
					return item.layout === 'block1'
				});
				if(about) return about.attributes;
				return {}
			},

			firstBlockTitle() {
				let title = this.getFirstBlock.title,
					lines = [],
					prevPos = 0;
                if (title) {
                    for (let i = 0; i < title.length; i++) {
                        if (title[i] == ' ') { // when reaching space
                            if (title.substring(prevPos, i).length > 3 && title.substring(prevPos, i).length < 10) {
                                lines.push(title.slice(prevPos, i));
                                prevPos = i;
                            }
                        }
                    }

                    // adding the last word
                    lines.push(title.slice(title.lastIndexOf(' '), title.length));
                }
				return lines;
			},
            
			...mapState(['about'])
		},
        
		mounted() {
			this.$bus.initialize('headerNoBg', false);

			// making the bg white
			document.documentElement.style.background = 'white';
			document.body.style.background = 'white';

			// getting rid of overflow-x hidden on body
			document.documentElement.style.overflowX = 'unset';
			document.body.style.overflowX = 'unset';

			// menu color change
			let wait = this.$bus.isPreloaderOn ? 3800 : 0,
				body = document.getElementsByClassName('scrollableElement')[0];
			setTimeout(() => {
				window.addEventListener('scroll', onScroll);
				onScroll();
			}, wait);

			// TODO dividing the headers letter by letter


			let _this = this,
				deg = 0,
				bgColor = 0,
				titleColor = 0,
				offset,
				scrolllock = document.getElementById('scrolllock'),
				pretitle = document.getElementById('pretitle'),
				title = document.getElementById('title'),
				isvg = document.getElementById('isvg'),
				ipath = document.getElementById('ipath');
			function onScroll() {
				if (!document.getElementById('about')) {
					window.removeEventListener('scroll', onScroll);
					return;
				}
				
				// changing header's color
				if (window.scrollY-_this.$bus.scrollOffset > window.innerHeight/2) {
					_this.$bus.$emit('headerWhiteBg');
				} else if (window.scrollY-_this.$bus.scrollOffset >= window.innerHeight*.1) {
					_this.$bus.$emit('headerNoBg', 'b');
				} else if (window.scrollY >= 0) {
					_this.$bus.$emit('headerNoBg');
				}

				// turning I and changing bg
				offset = window.innerHeight;
				if (window.scrollY <= 1) {
					scrolllock = document.getElementById('scrolllock'),
					pretitle = document.getElementById('pretitle'),
					title = document.getElementById('title'),
					isvg = document.getElementById('isvg'),
					ipath = document.getElementById('ipath');

					// scrolllock.style.transform = `translateY(0px)`;

					scrolllock.style.background = `rgba(75, 85, 94, 1)`;
					pretitle.style.color = `rgb(255,255,255)`;
					title.style.color = `rgb(255,255,255)`;
					isvg.style.transform = `rotate(90deg)`;
					ipath.style.fill = `rgb(255, 255, 255)`;
				} else if (window.scrollY <= offset) {
					deg = map(window.scrollY, 0, offset, 0, 90);
					bgColor = map(window.scrollY, 0, offset, 0, 1);
					titleColor = map(window.scrollY, 0, offset, 0, 255);

					// changing the header's color
					if (deg > 50) {
						_this.$bus.$emit('headerNoBg', 'b');
					}

					// if (!_this.$bus.isMobile) {
					// 	scrolllock.style.transform = `translateY(${window.scrollY}px)`;
					// }

					scrolllock.style.background = `rgba(75, 85, 94, ${1-bgColor})`;
					pretitle.style.color = `rgb(${255-titleColor},${255-titleColor},${255-titleColor})`;
					title.style.color = `rgb(${255-titleColor},${255-titleColor},${255-titleColor})`;
					isvg.style.transform = `rotate(${90+deg}deg)`;
					ipath.style.fill = `rgb(${255-bgColor*(255-75)}, ${255-bgColor*(255-85)}, ${255-bgColor*(255-94)})`;
				} else {
					// scrolllock.style.transform = `translateY(${offset}px)`;
					scrolllock.style.background = `rgba(75, 85, 94, 0)`;
					pretitle.style.color = `rgb(0,0,0)`;
					title.style.color = `rgb(0,0,0)`;
					isvg.style.transform = `rotate(180deg)`;
					ipath.style.fill = `rgb(75, 85, 94)`;
				}
			}

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	}
</script>
