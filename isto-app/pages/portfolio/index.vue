<template>
	<div class="portfolio" id="portfolio">
		<img class="portfolio__side-text" src="~/static/images/portfolio/portfolio.png" id="portfolioText">
		<div class="portfolio__title-area">
			<a :href="'portfolio/' + item.name['en']"
			   @click.prevent="selectItem(item.id)"
			   class="portfolio__title"
			   v-for="(item) in categories" :key="item.id" :class="{ active : selectedCat===item.id }">
				{{ item.name[locale] }}
			</a>
			<a :href="'portfolio/All'" @click.prevent="selectItem('')" class="portfolio__title" :class="{ active : selectedCat==='' }">все</a>
		</div>
		<div class="portfolio__showcase">
			<div class="portfolio__showcase__row">
				<a :href="`${localePath('portfolio')}/${item.id}`" @click.prevent="$bus.goTo(`${localePath('portfolio')}/${item.id}`, $router)"
					class="portfolio__showcase__pic-area" v-for="item in getProjects" :key="item.id">
					<div class="portfolio__showcase__pic-area__img-wrapper"><img :src="$env.additionalUrl + item.img"></div>
					<div class="portfolio__showcase__title-area">
						<h2 class="portfolio__showcase__title">{{ item.title[locale] }}</h2>
						<span class="portfolio__showcase__subtitle">{{getSpecification(item).location}}, {{ getSpecification(item).place }}</span>
					</div>
				</a>
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

		transition: 'fade',

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
				if (this.selectedCat == index)
					return;

				this.selectedCat = -1;


				setTimeout(() => {
					this.selectedCat = index;
				// 	document.getElementById('hitbox').style.height = document.getElementById('scroller').offsetHeight + 'px';
				}, 1);
			},

			changeDisplayPicAreas(display, w) {
				let picAreas = document.getElementsByClassName('portfolio__showcase__pic-area');
				for (let i = 0; i < picAreas.length; i++) {
					setTimeout(() => {
						if (picAreas[i])
							picAreas[i].style.display = display;
					}, w);
				}
			}
		},

		mounted() {
			this.$bus.initialize('headerWhiteBg');

			// making OUR BLOG move
			let bottom = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.body.scrollHeight, document.body.offsetHeight),
				offset,
				portfolioText = document.getElementById('portfolioText');
			window.addEventListener('scroll', onScroll);

			let wait = this.$bus.isPreloaderOn ? 6800 : 3000;
			this.changeDisplayPicAreas('none', 0);
			this.changeDisplayPicAreas('flex', wait);

			function onScroll() {
				if (!document.getElementById('portfolio')) {
					window.removeEventListener('scroll', onScroll);
					return;
				}

				offset = map(window.scrollY, 0, bottom-window.innerHeight, 0, window.innerHeight*.7);

				// if (_this.$bus.isMobile) {
					// portfolioText.style.transition = 'transform 0s cubic-bezier(0.165, 0.84, 0.44, 1)';
					portfolioText.style.transform = `translateY(-${offset}px)`
				// } else {
					// portfolioText.style.transition = 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)';
					// portfolioText.style.transform = `translateY(${window.scrollY-offset}px)`;
				// }
			}

			function map(num, in_min, in_max, out_min, out_max) {
				return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		}
	};
</script>
