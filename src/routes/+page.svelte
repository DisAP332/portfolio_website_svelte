<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Games from '$lib/components/Games.svelte';
	import Header from '$lib/components/Header.svelte';
	import Learning from '$lib/components/Learning.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	import MobileScrollToTop from '$lib/components/mobileScrollToTop.svelte';

	// for some reason this only works here. If we put in the mobileScrollToTop.svelte file it doesn't work
	// we will get a warning "not implemented undefined"
	let showScrollToTop = false;

	if (typeof window !== 'undefined') {
		function getDocHeight() {
			let D = document;
			return Math.max(
				D.body.scrollHeight,
				D.documentElement.scrollHeight,
				D.body.offsetHeight,
				D.documentElement.offsetHeight,
				D.body.clientHeight,
				D.documentElement.clientHeight
			);
		}

		let pctScrolled: number;

		function amountScrolled() {
			let winheight =
				window.innerHeight || (document.documentElement || document.body).clientHeight;
			let docheight = getDocHeight();
			let scrollTop =
				window.pageYOffset ||
				(document.documentElement || document.body.parentNode || document.body).scrollTop;
			let trackLength = docheight - winheight;
			pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
		}

		function scroll() {
			amountScrolled();
			if (pctScrolled > 20 && showScrollToTop === false) {
				showScrollToTop = true;
			}
			if (pctScrolled < 20 && showScrollToTop === true) {
				showScrollToTop = false;
			}
		}
		window.addEventListener('scroll', scroll);
	}
</script>

<div class="background" />
<Header />
<SideNav />
<MobileScrollToTop {showScrollToTop} />
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
