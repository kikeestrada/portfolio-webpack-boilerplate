<template>

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
