<template>
	<header class="header" ref="header">
		<div class="header__inner">
			<nuxt-link to="/" class="header__logo__link" :class="{ hidden : logoHidden }">
				<img class="header__logo color-switch" alt="ISTO" src="~/static/images/logo.svg">
				<img class="header__logo__letter color-switch" alt="I" src="~/static/images/header/I.svg">
				<img class="header__logo__letter header__logo__letter-s color-switch" alt="S" src="~/static/images/header/S.svg">
				<img class="header__logo__letter header__logo__letter-t color-switch" alt="T" src="~/static/images/header/T.svg">
				<img class="header__logo__letter header__logo__letter-o color-switch" alt="O" src="~/static/images/header/O.svg">
			</nuxt-link>
			<nav class="header__navigation" :class="{ hidden : navHidden }">
				<ul>
					<li><nuxt-link :to="localePath('about')" class="header__navigation__link color-switch">О нас</nuxt-link></li>
					<li><nuxt-link :to="localePath('portfolio')" class="header__navigation__link color-switch">Проекты</nuxt-link></li>
					<li><nuxt-link :to="localePath('blog')" class="header__navigation__link color-switch">Блог</nuxt-link></li>
					<li><nuxt-link :to="localePath('contacts')" class="header__navigation__link color-switch">Контакты</nuxt-link></li>
				</ul>
			</nav>
			<div class="header__langs" :class="{ hidden : langsHidden }">
				<ul>
					<li><a href="#" class="header__langs__lang color-switch">UA</a></li>
					<li><a href="#" class="header__langs__lang active color-switch">RU</a></li>
					<li><a href="#" class="header__langs__lang color-switch">EN</a></li>
				</ul>
			</div>
			<button class="header__menu__button color-switch" @click="toggleMenu()">
				<div class="header__menu__button__top-part" ref="headerMenuButtonTopPart"></div>
				<div class="header__menu__button__bottom-part" ref="headerMenuButtonBottomPart"></div>
			</button>
		</div>
		<div class="header__menu" ref="menu">
			<div class="header__menu__langs">
				<ul>
					<li v-for="locale in availableLocales" :key="locale.code">
						<nuxt-link
						  :to="switchLocalePath(locale.code)">{{ locale.code }}
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="header__menu__navigation">
				<ul>
					<li><nuxt-link :to="localePath('about')" class="header__menu__navigation__link color-switch">О нас</nuxt-link></li>
					<li><nuxt-link :to="localePath('portfolio')" class="header__menu__navigation__link color-switch">Проекты</nuxt-link></li>
					<li><nuxt-link :to="localePath('blog')" class="header__menu__navigation__link color-switch">Блог</nuxt-link></li>
					<li><nuxt-link :to="localePath('contacts')" class="header__menu__navigation__link color-switch">Контакты</nuxt-link></li>
				</ul>
			</div>
			<div class="header__menu__links">
				<ul>
					<li class="header__menu__link color-switch"><a target="_blank" :href="settings.facebook">Facebook</a></li>
					<li class="header__menu__link color-switch"><a target="_blank" :href="settings.instagram">Instagram</a></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		data() {
			return {
				logoHidden: true,
				navHidden: true,
				langsHidden: true
			};
		},

		computed:{
			...mapState(['settings']),

			availableLocales () {
				return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
			}
		},

		mounted() {
			// checking if mobile and setting an event listener
			this.checkForMobile();
			window.addEventListener('resize', this.checkForMobile);

			this.$bus.$on('showLogo', () => {
				this.logoHidden = false;
			});
			this.$bus.$on('showNav', () => {
				this.navHidden = false;
			});
			this.$bus.$on('showLangs', () => {
				this.langsHidden = false;
			});
			this.$bus.$on('headerDarkBg', () => {
				this.darkBg();
			});
			this.$bus.$on('headerWhiteBg', () => {
				this.whiteBg();
			});
			this.$bus.$on('headerNoBg', (c) => {
				this.noBg(c);
			});
			this.$bus.$on('hideMenu', () => {
				this.$bus.isMenuOn = true;
				this.toggleMenu();
			});

			this.$refs.menu.style.transform = `translateY(-${window.innerHeight}px)`;

			window.addEventListener('scroll', onScroll);

			let lastScrollTop = 0, st, _this = this,
				hitbox = document.getElementsByClassName('scrollableElement--hitbox')[0];
			function onScroll() {
				st = window.pageYOffset || document.documentElement.scrollTop;
				if (st > lastScrollTop){ // scroll down
					if ((!_this.$bus.isMobile && (window.innerHeight + window.scrollY) >= hitbox.offsetHeight) || (_this.$bus.isMobile && (window.innerHeight + window.scrollY) >= document.body.clientHeight)) { // scrolled to the bottom
						_this.showMenu();
					} else if (!_this.$bus.fixer) { // just scrolled down
						_this.hideMenu();
					}
				} else { // scroll up
					_this.showMenu();
				}
				lastScrollTop = st <= 0 ? 0 : st;
			}
		},

		methods: {
			whiteBg() {
				this.$refs.header.style.backgroundColor = 'white';
				this.headerBlack();
			},

			darkBg() {
				this.$refs.header.style.backgroundColor = '#4B555E';
				this.headerWhite();
			},

			noBg(c) {
				this.$refs.header.style.backgroundColor = 'transparent';
				if (c == 'b')
					this.headerBlack();
				else this.headerWhite();
			},

			toggleMenu() {
				this.$bus.isMenuOn = !this.$bus.isMenuOn;

				if (this.$bus.isMenuOn) {
					document.documentElement.style.overflow = 'hidden';

					// change menu lines
					this.$refs.headerMenuButtonTopPart.classList.add('active');
					this.$refs.headerMenuButtonBottomPart.classList.add('active');

					// making the menu appear
					this.$refs.menu.classList.add('active');
					this.$refs.menu.style.transform = 'translateY(0)';
				} else {
					document.documentElement.style.overflow = '';

					// change menu lines
					this.$refs.headerMenuButtonTopPart.classList.remove('active');
					this.$refs.headerMenuButtonBottomPart.classList.remove('active');

					// making the menu disappear
					this.$refs.menu.classList.remove('active');
					this.$refs.menu.style.transform = `translateY(-${window.innerHeight}px)`;
				}
			},

			headerWhite() {
				let switches = document.getElementsByClassName('color-switch');

				for (let i = 0; i < switches.length; i++) {
					switches[i].classList.remove('black');
				}
			},

			headerBlack() {
				let switches = document.getElementsByClassName('color-switch');

				for (let i = 0; i < switches.length; i++) {
					switches[i].classList.add('black');
				}
			},

			hideMenu() {
				if (!this.$bus.isMenuOn)
					this.$refs.header.style.transform = `translateY(-${this.$refs.header.offsetHeight}px)`;
			},

			showMenu() {
				this.$refs.header.style.transform = 'translateY(0)';
			},

			checkForMobile() {
				if (window.innerWidth <= 960) {
					this.$bus.isMobile = true;
				} else {
					this.$bus.isMobile = false;
				}
			}
		}
	}
</script>