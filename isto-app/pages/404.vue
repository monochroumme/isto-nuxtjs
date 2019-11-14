<template>
	<div class="_404" id="404">
		<div class="_404__center" id="center">
			<div class="_404__center__slides">
				<img src="~/static/images/404/404_1.png">
				<img src="~/static/images/404/404_2.png">
				<img src="~/static/images/404/404_3.png">
			</div>
		</div>
		<div class="_404__center__text">
			<div class="_404__center--left"></div>
			<div class="_404__center--right"></div>
			<span class="_404__center__text__entity">Страница не найдена</span>
			<span class="_404__center__text__entity">Страница не найдена</span>
		</div>
		<a href="/" @click.prevent="$bus.goTo('/', $router)" class="_404__learn-more learn-more black">
			на главную
			<div class="plus"></div>
		</a>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { mapState } from 'vuex';

	export default {
		mounted() {
			this.$bus.initialize('headerNoBg');
			setTimeout(() => { this.$bus.$emit('headerNoBg', 'b'); }, 2);

			// moving the text
			let texts = document.getElementsByClassName('_404__center__text__entity'),
				wrapper = document.getElementsByClassName('_404__center__text')[0],
				distBtwnTexts = texts[0].offsetWidth*1.4,
				pos = [0, distBtwnTexts],
				speed = .072,
				fps = 1000/120,
				centerPercentage,
				i,
				el,
				center = document.getElementById('center');
			let interval1 = setInterval(() => {
				if (!document.getElementById('404')) {
					clearInterval(interval1);
					return;
				}
				centerPercentage = center.offsetWidth/window.innerWidth;
				distBtwnTexts = texts[0].offsetWidth*1.4;
				for (i = 0; i < pos.length; i++) {
					pos[i] -= speed*fps;
					texts[i].style.transform = `translateX(${pos[i]}px)`;

					if (pos[i] < -(window.innerWidth*(1-centerPercentage)/1.5 + texts[i].offsetWidth)) {
						if (i == 0)
							pos[i] = pos[pos.length-1] + distBtwnTexts;
						else pos[i] = pos[i-1] + distBtwnTexts;
					}
				}
			}, fps);

			// changing slides
			let slides = document.getElementsByClassName('_404__center__slides')[0].children,
				cur = 0;
			let interval2 = setInterval(() => {
				if (!document.getElementById('404')) {
					clearInterval(interval2);
					return;
				}
				if (cur == 0)
					slides[slides.length-1].style.opacity = 0;
				else slides[cur-1].style.opacity = 0;
					slides[cur].style.opacity = 1;
				cur++;
				if (cur > slides.length-1)
					cur = 0;
			}, 5000);

			// adding additional texts
			function checkTexts() {
				if (!document.getElementById('404')) {
					window.removeEventListener('resize', checkTexts);
					return;
				}
				
				// checking if there are enough texts and if not then adding some
				if (texts[0].offsetWidth * pos.length < window.innerWidth * 1.2) {
					el = document.createElement("div");
					el.classList.add('_404__center__text__entity');
					el.innerHTML = 'Страница не найдена';
					wrapper.appendChild(el);
					texts = document.getElementsByClassName('_404__center__text__entity');
					pos.push(pos[pos.length-1] + distBtwnTexts);
				}
			}

			checkTexts();
			window.addEventListener('resize', checkTexts);
		}
	}
</script>
