<script>
	import { onMount } from 'svelte';
	let LottiePlayer;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
	import gitHubLottie from '$lib/assets/lotties/github-2.json';
	import linkedInLottie from '$lib/assets/lotties/linkedin.json';
	import logo from '$lib/assets/images/FullLogo_Transparent.png';
	import resumeIcon from '$lib/assets/Icons/resume.svg';
	import resume from '$lib/assets/JordanBellPortfolio.pdf';
</script>

<nav>
	<div class="lottieMobile">
		<a href="https://github.com/DisAP332" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer src={gitHubLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 8vh; width: 8vh;" />
			{/if}
		</a>
	</div>
	<div class="nameContainer">
		<img class="logo" src={logo} alt="logo" />
		<h1 class="nameFont1">Jordan</h1>
		<h1 class="nameFont2">Bell</h1>
	</div>
	<div class="lottieMobile">
		<a href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer src={linkedInLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 8vh; width: 8vh;" />
			{/if}
		</a>
	</div>
	<div class="lottieDesktop">
		<a href="https://github.com/DisAP332" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer src={gitHubLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 7.5vh; width: 7.5vh;" />
			{/if}
		</a>
		<a href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer src={linkedInLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 7.5vh; width: 7.5vh;" />
			{/if}
		</a>
		<a href="mailto:jordan.l.bell1998@gmail.com"><button class="hireMeButton">Contact me</button></a>
		<a href={resume} download="Jordan_Bell_Resume"><img src={resumeIcon} alt="resume" class="logo mt-4" /></a>
	</div>
</nav>

<style lang="postcss">
	nav { @apply lg:grid grid-cols-2 shadow-xl !important; background-color: teal; height: 8.5vh; display: flex; justify-content: space-evenly; width: 100vw; border-bottom: 3px solid rgb(0, 92, 92); }
	nav > div { display: flex; justify-content: center; align-items: center; flex-direction: row; height: 100%; }
	.nameFont1 { font-family: 'nameFont1'; font-size: 4.5vh; }
	.nameFont2 { font-family: 'nameFont2'; font-size: 4.8vh; color: var(--BellRed); }
	.nameContainer { @apply mt-2; }
	.lottieMobile { @apply lg:hidden; }
	.lottieDesktop { @apply hidden lg:flex; }
	.logo { @apply lg:block !important; display: none; height: 7vh; transform: translate(0.8vh, -1vh); }
	.hireMeButton { @apply ml-10; width: 10vw; min-width: 120px; height: 5.5vh; border: 2px solid white; border-radius: 10px; font-size: clamp(.75rem, 1vw, 1rem); font-family: nameFont2; color: white; background: #111; cursor: pointer; position: relative; z-index: 0; user-select: none; }
	.hireMeButton:before { content: ''; background: linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000); position: absolute; top: -2px; left: -2px; background-size: 400%; z-index: -1; filter: blur(5px); width: calc(100% + 4px); height: calc(100% + 4px); animation: glowing-button-85 20s linear infinite; border-radius: 10px; }
	@keyframes glowing-button-85 { 0% { background-position: 0 0; } 50% { background-position: 400% 0; } 100% { background-position: 0 0; } }
	.hireMeButton:after { z-index: -1; content: ''; position: absolute; width: 100%; height: 100%; background: #222; left: 0; top: 0; border-radius: 10px; }
	.hireMeButton:hover { box-shadow: 0 0 49px 3px rgba(0,225,255,1); }
</style>
