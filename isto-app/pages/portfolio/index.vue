<template>
	<div class="portfolio" id="portfolio">
		<img class="portfolio__side-text" src="~/static/images/portfolio/portfolio.png" id="portfolioText">
		<div class="portfolio__title-area">
			<a href="#"
			   @click.prevent="selectItem(item.id)"
			   class="portfolio__title"
			   v-for="(item) in categories" :key="item.id">
				{{ item.name[locale] }} <div v-if="selectedCat===item.id" class="portfolio__title-line"></div>
			</a>
			<a href="#" @click.prevent="selectItem('')" class="portfolio__title">все <div v-if="selectedCat===''" class="portfolio__title-line"></div></a>
		</div>
		<div class="portfolio__showcase">
			<div class="portfolio__showcase__row">
				<nuxt-link :to="`/portfolio/${item.id}`" class="portfolio__showcase__pic-area" v-for="item in getProjects" :key="item.id">
					<img :src="$env.additionalUrl + item.img">
					<div class="portfolio__showcase__title-area">
						<h2 class="portfolio__showcase__title">{{ item.title[locale] }}</h2>
						<span class="portfolio__showcase__subtitle">{{getSpecification(item).location}}, {{ getSpecification(item).place }}</span>
					</div>
				</nuxt-link>
			</div>
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

		computed:{
			getProjects() {
				return this.projects.filter( (item) => {
					return this.selectedCat!=='' ? (item.category_id === this.selectedCat) : true
				});
			},
			
			...mapState(['projects','categories'])
		},

		data() {
			return {
				selectedCat: ''
			};
		},

		async fetch({ store }) {
			await store.dispatch('getCategories');
		 	await store.dispatch('getProjects');
		},

		methods:{
			getSpecification(project) {
			    if(project.content[this.locale]) {
                    let proj =  project.content[this.locale].find( (item) => {
                        return item.layout === 'specification'
                    });
                    if(proj) return proj.attributes;
                    return {}
                }
                return {}
			},

			selectItem(index) {
				this.selectedCat = index;
				setTimeout(() => {
					document.getElementById('hitbox').style.height = document.getElementById('scroller').offsetHeight + 'px';
				}, 200);
			}
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

			// making OUR BLOG move
			let bottom, offset,
				portfolioText = document.getElementById('portfolioText');
			window.addEventListener('scroll', () => {
				if (document.getElementById('portfolio')) {
					bottom = Math.max(body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight);
					offset = map(window.scrollY, 0, bottom-window.innerHeight, 0, window.innerHeight*.7);

					if (this.$bus.isMobile) {
						portfolioText.style.transition = 'transform 0s cubic-bezier(0.165, 0.84, 0.44, 1)';
						portfolioText.style.transform = `translateY(-${offset}px)`
					} else {
						portfolioText.style.transition = 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)';
						portfolioText.style.transform = `translateY(${window.scrollY-offset}px)`;
					}
				}
			});

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	};
</script>
