<script>
	console.log('hello world');
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Games from '$lib/components/Games.svelte';
	import Header from '$lib/components/Header.svelte';
	import Learning from '$lib/components/Learning.svelte';
	import Skills from '$lib/components/Skills.svelte';
	// import background from '$lib/assets/images/background.svg';
</script>

<div class="background" />
<Header />
<div class="body-margin">
	<Skills />
	<AboutMe />
	<Games />
	<Learning />
</div>

<style>
	.body-margin {
		padding-top: 5vh;
		padding-left: 5vw;
		padding-right: 5vw;
	}
</style>
