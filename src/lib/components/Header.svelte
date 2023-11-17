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
</script>

<nav>
	<div class="lottieMobile">
		<a href="https://github.com/DisAP332" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer
					src={gitHubLottie}
					autoplay={true}
					loop={true}
					renderer="svg"
					background="transparent"
					style="height: 8vh; width: 8vh;"
				/>
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
				<LottiePlayer
					src={linkedInLottie}
					autoplay={true}
					loop={true}
					renderer="svg"
					background="transparent"
					style="height: 8vh; width: 8vh;"
				/>
			{/if}
		</a>
	</div>
	<div class="lottieDesktop">
		<a href="https://github.com/DisAP332" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer
					src={gitHubLottie}
					autoplay={true}
					loop={true}
					renderer="svg"
					background="transparent"
					style="height: 7.5vh; width: 7.5vh;"
				/>
			{/if}
		</a>
		<a href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank">
			{#if LottiePlayer}
				<LottiePlayer
					src={linkedInLottie}
					autoplay={true}
					loop={true}
					renderer="svg"
					background="transparent"
					style="height: 7.5vh; width: 7.5vh;"
				/>
			{/if}
		</a>
		<button class="hireMeButton">Hire me?</button>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply lg:grid grid-cols-2 shadow-xl !important;
		background-color: teal;
		height: 8.5vh;
		display: flex;
		justify-content: space-evenly;
		position: fixed;
		width: 100vw;
		border-bottom: 3px solid rgb(0, 92, 92);
	}
	nav > div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		height: 100%;
	}
	/* ------name------- */
	.nameFont1 {
		font-family: 'nameFont1';
		font-size: 4.5vh;
	}
	.nameFont2 {
		font-family: 'nameFont2';
		font-size: 4.8vh;
		color: var(--BellRed);
	}
	.nameContainer {
		@apply mt-2;
	}
	/* ------lottie------ */
	.lottieMobile {
		@apply lg:hidden;
	}
	.lottieDesktop {
		@apply hidden lg:flex;
	}
	/* ------logo------- */
	.logo {
		@apply lg:block !important;
		display: none;
		height: 7vh;
		transform: translate(0.8vh, -1vh);
	}
	/* -------hire me button ------- */

	.hireMeButton {
		@apply ml-10;
		width: 10vw;
		height: 5.5vh;
		box-shadow: 0px 0px 0px 0px black;
		border: 2px solid black;
		border-radius: 30px;
		font-size: 1vw;
		font-family: nameFont2;
		color: white;
		background: linear-gradient(
			27deg,
			rgba(236, 10, 87, 1) 30%,
			rgba(68, 157, 47, 0.7511379551820728) 46%,
			rgba(81, 79, 219, 0.8995973389355743) 60%,
			rgba(210, 79, 219, 0.8995973389355743) 80%
		);
		padding: 0.6em 2em;
		border: 2px solid white;
		outline: none;
		color: rgb(255, 255, 255);
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.hireMeButton:before {
		content: '';
		background: linear-gradient(
			45deg,
			#ff0000,
			#ff7300,
			#fffb00,
			#48ff00,
			#00ffd5,
			#002bff,
			#7a00ff,
			#ff00c8,
			#ff0000
		);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing-button-85 20s linear infinite;
		transition: opacity 0.3s ease-in-out;
		border-radius: 10px;
	}

	@keyframes glowing-button-85 {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.hireMeButton:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: #222;
		left: 0;
		top: 0;
		border-radius: 10px;
	}

	.hireMeButton:hover {
		box-shadow: 0px 0px 49px 3px rgba(0, 225, 255, 1);
	}
</style>
