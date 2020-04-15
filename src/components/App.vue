<template>
	<div id="app">
		<h1>Webpack + {{name}}</h1>
		<p>Hola Mundo con {{name}}</p>
		<nav class="Menu">
			<a v-for="link in links" :href="link[1]" :key="link[0]" v-text="link[0]"></a>
		</nav>
		<img :src="logo" alt="">
	</div>
</template>
<script>
	import sass from '../SCSS/main.scss';
	import logo from '../img/vue.svg';
	import data from '../data.json';

	export default {
		data (){
			return{
				name	: 'Vue JS',
				logo	: logo,
				links	: data.links
			}
		}
	}
</script>
