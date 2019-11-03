<template>
	<div class="contacts">
		<div class="contact-us">
			<h1 class="contact-us__pretitle">контакты</h1>
			<h2 class="contact-us__title">{{ settings.description[locale] }}</h2>
		</div>
		<div class="contact-info">
			<div class="contact-info__gray-line"></div>
			<div class="contact-info__white-line"></div>
			<div class="contact-info__col" v-for="(item,index) in getData" :key="index">
				<span class="contact-info__title">{{ item.key }}</span>
				<span class="contact-info__desc">{{ item.value }}</span>
			</div>
		</div>
		<div class="contact-links">
			<ul>
				<li><a target="_blank" :href="settings.facebook">Facebook</a></li>
				<li><a target="_blank" :href="settings.instagram">Instagram</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed:{
			getData() {
				return JSON.parse(this.settings.other_data[this.locale]);
			},
			...mapState(['settings'])
		},
		mounted() {
			// show menu
			this.$bus.$emit('showLogo');
			this.$bus.$emit('showNav');
			this.$bus.$emit('showLangs');
		}
	}
</script>