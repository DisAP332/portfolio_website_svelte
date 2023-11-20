<script lang="ts">
	console.log('hello world');
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Games from '$lib/components/Games.svelte';
	import Header from '$lib/components/Header.svelte';
	import Learning from '$lib/components/Learning.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	// import background from '$lib/assets/images/background.svg';

	// function scrollIntoView({ target }) {
	// 	const el = document.getElementById(target.getAttriute('href'));
	// 	if (!el) return;
	// 	el.scrollIntoView({ behavior: 'smooth', block: });
	// }
</script>

<div class="background" />
<Header />
<SideNav />
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
