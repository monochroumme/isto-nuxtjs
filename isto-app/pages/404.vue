<template>
	<div class="_404">
		<div class="_404__center" ref="center">
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
		<a href="#" class="_404__learn-more learn-more" @mouseenter="$bus.blobMove(0)" @mouseleave="$bus.blobStop(0)">
			<div class="learn-more__ellipse">
				<div class="blob">
					<svg id="blob0" viewBox="0 0 170 140" style="width:170px;height:140px;left:0px;top:0;"><Blob color="#000000" /></svg>
				</div>
			</div>
			<span>на главную</span>
		</a>
	</div>
</template>

<script>
	import Blob from '~/components/Blob';

	export default {
		components: {
			Blob
		},

		mounted() {
			// show menu
			this.$bus.$emit('showLogo');
			this.$bus.$emit('showNav');
			this.$bus.$emit('showLangs');
			setTimeout(() => {
				this.$bus.$emit('headerBlack', 'r');
				this.$bus.$emit('headerBlack', 'l');
			}, 1);

			// moving the text
			let texts = document.getElementsByClassName('_404__center__text__entity'),
				wrapper = document.getElementsByClassName('_404__center__text')[0],
				distBtwnTexts = texts[0].offsetWidth*1.4,
				pos = [0, distBtwnTexts],
				speed = .05,
				fps = 1000/60,
				centerPercentage,
				i,
				el;
			setInterval(() => {
				centerPercentage = this.$refs.center.offsetWidth/window.innerWidth;
				distBtwnTexts = texts[0].offsetWidth*1.4;
				for (i = 0; i < pos.length; i++) {
					pos[i] -= speed*fps;
					texts[i].style.transform = `translateX(${pos[i]}px)`;

					if (pos[i] < -(window.innerWidth*(1-centerPercentage)/2 + texts[i].offsetWidth)) {
						if (i == 0)
							pos[i] = pos[pos.length-1] + distBtwnTexts;
						else pos[i] = pos[i-1] + distBtwnTexts;
					}
				}
			}, fps);

			// changing slides
			let slides = document.getElementsByClassName('_404__center__slides')[0].children,
				cur = 0;
			setInterval(() => {
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