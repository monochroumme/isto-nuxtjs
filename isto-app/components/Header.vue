<template>
	<header class="header" id="header">
		<div class="header__inner">
			<a :href="localePath('index')" @click.prevent="$bus.goTo(localePath('index'), $router)"
				class="header__logo__link" :class="{ hidden : logoHidden }">
				<img class="header__logo color-switch" alt="ISTO" src="~/static/images/logo.svg">
				<img class="header__logo__letter color-switch" alt="I" src="~/static/images/header/I.svg">
				<img class="header__logo__letter header__logo__letter-s color-switch" alt="S" src="~/static/images/header/S.svg">
				<img class="header__logo__letter header__logo__letter-t color-switch" alt="T" src="~/static/images/header/T.svg">
				<img class="header__logo__letter header__logo__letter-o color-switch" alt="O" src="~/static/images/header/O.svg">
			</a>
			<nav class="header__navigation" :class="{ hidden : navHidden }">
				<ul>
					<li><a :href="localePath('about')" @click.prevent="$bus.goTo(localePath('about'), $router)"
						class="header__navigation__link color-switch">О нас</a></li>
					<li><a :href="localePath('portfolio')" @click.prevent="$bus.goTo(localePath('portfolio'), $router)"
						class="header__navigation__link color-switch">Проекты</a></li>
					<li><a :href="localePath('blog')" @click.prevent="$bus.goTo(localePath('blog'), $router)"
						class="header__navigation__link color-switch">Блог</a></li>
					<li><a :href="localePath('contacts')" @click.prevent="$bus.goTo(localePath('contacts'), $router)"
						class="header__navigation__link color-switch">Контакты</a></li>
				</ul>
			</nav>
			<div class="header__langs" :class="{ hidden : langsHidden }">
				<ul>
                    <li v-for="loc in $i18n.locales" :key="locale.code">
                        <a :href="switchLocalePath(loc.code)" @click.prevent="$bus.goTo(switchLocalePath(loc.code), $router)"
                            :class="{'active': loc.code === locale }"
                            class="header__langs__lang color-switch">{{ loc.code }}
                        </a>
                    </li>
				</ul>
			</div>
			<button class="header__menu__button color-switch" @click="toggleMenu()">
				<div class="header__menu__button__top-part" id="headerMenuButtonTopPart"></div>
				<div class="header__menu__button__bottom-part" id="headerMenuButtonBottomPart"></div>
			</button>
		</div>
		<div class="header__menu" id="menu">
			<div class="header__menu__langs">
				<ul>
                    <li v-for="loc in $i18n.locales" :key="locale.code">
                        <nuxt-link
                            :to="switchLocalePath(loc.code)">{{ loc.code }}
                        </nuxt-link>
                    </li>
				</ul>
			</div>
			<div class="header__menu__navigation">
				<ul>
					<li><a :href="localePath('about')" @click.prevent="$bus.goTo(localePath('about'), $router)"
						class="header__menu__navigation__link color-switch">О нас</a></li>
					<li><a :href="localePath('portfolio')" @click.prevent="$bus.goTo(localePath('portfolio'), $router)"
						class="header__menu__navigation__link color-switch">Проекты</a></li>
					<li><a :href="localePath('blog')" @click.prevent="$bus.goTo(localePath('blog'), $router)"
						class="header__menu__navigation__link color-switch">Блог</a></li>
					<li><a :href="localePath('contacts')" @click.prevent="$bus.goTo(localePath('contacts'), $router)"
						class="header__menu__navigation__link color-switch">Контакты</a></li>
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

			let menu = document.getElementById('menu'),
				header = document.getElementById('header'),
				headerMenuButtonTopPart = document.getElementById('headerMenuButtonTopPart'),
				headerMenuButtonBottomPart = document.getElementById('headerMenuButtonBottomPart');

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
				this.darkBg(header);
			});
			this.$bus.$on('headerWhiteBg', () => {
				this.whiteBg(header);
			});
			this.$bus.$on('headerNoBg', (c) => {
				this.noBg(c, header);
			});
			this.$bus.$on('hideMenu', () => {
				this.$bus.isMenuOn = true;
				this.toggleMenu(headerMenuButtonTopPart, headerMenuButtonBottomPart, menu);
			});

			menu.style.transform = `translateY(-${window.innerHeight}px)`;

			window.addEventListener('scroll', onScroll);

			let lastScrollTop = 0, st, _this = this,
				hitbox = document.getElementsByClassName('scrollableElement--hitbox')[0];
			function onScroll() {
				st = window.pageYOffset || document.documentElement.scrollTop;
				if (st > lastScrollTop){ // scroll down
					if ((window.innerHeight + window.scrollY) >= document.body.clientHeight) { // scrolled to the bottom
						_this.showMenu(header);
					} else if (!_this.$bus.fixer) { // just scrolled down
						_this.hideMenu(header);
					}
				} else { // scroll up
					_this.showMenu(header);
				}
				lastScrollTop = st <= 0 ? 0 : st;
			}
		},

		methods: {
			whiteBg(header) {
				header.style.backgroundColor = 'white';
				this.headerBlack();
			},

			darkBg(header) {
				header.style.backgroundColor = '#4B555E';
				this.headerWhite();
			},

			noBg(c, header) {
				header.style.backgroundColor = 'transparent';
				if (c == 'b')
					this.headerBlack();
				else this.headerWhite();
			},

			toggleMenu(headerMenuButtonTopPart, headerMenuButtonBottomPart, menu) {
				this.$bus.isMenuOn = !this.$bus.isMenuOn;

				if (this.$bus.isMenuOn) {
					document.documentElement.style.overflow = 'hidden';

					// change menu lines
					headerMenuButtonTopPart.classList.add('active');
					headerMenuButtonBottomPart.classList.add('active');

					// making the menu appear
					menu.classList.add('active');
					menu.style.transform = 'translateY(0)';
				} else {
					document.documentElement.style.overflow = '';

					// change menu lines
					headerMenuButtonTopPart.classList.remove('active');
					headerMenuButtonBottomPart.classList.remove('active');

					// making the menu disappear
					menu.classList.remove('active');
					menu.style.transform = `translateY(-${window.innerHeight}px)`;
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

			hideMenu(header) {
				if (!this.$bus.isMenuOn)
					header.style.transform = `translateY(-${header.offsetHeight}px)`;
			},

			showMenu(header) {
				header.style.transform = 'translateY(0)';
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
