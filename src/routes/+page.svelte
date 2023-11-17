<script>
	console.log('hello world');
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Games from '$lib/components/Games.svelte';
	import Header from '$lib/components/Header.svelte';
	import Learning from '$lib/components/Learning.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// import background from '$lib/assets/images/background.svg';
</script>

<div class="background" />
<Header />
<div class="body-margin">
	<Skills />
	<AboutMe />
	<Games />
	<Learning />
	<Projects />
</div>
<Footer />

<style lang="postcss">
	.body-margin {
		@apply lg:ml-10vw;
		@apply lg:mr-10vw;
		padding-top: 5vh;
		padding-left: 5vw;
		padding-right: 5vw !important;
	}
</style>
