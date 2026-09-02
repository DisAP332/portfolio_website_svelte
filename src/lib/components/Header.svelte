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

<header class="siteHeader">
	<div class="topTrim"></div>
	<nav>
		<div class="socialGroup leftGroup">
			<a class="socialLink" href="https://github.com/DisAP332" target="_blank" rel="noreferrer" aria-label="Jordan Bell on GitHub">
				<div class="socialIcon">
					{#if LottiePlayer}
						<LottiePlayer src={gitHubLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 38px; width: 38px;" />
					{:else}
						<span>GH</span>
					{/if}
				</div>
				<span>GitHub</span>
			</a>

			<a class="socialLink" href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank" rel="noreferrer" aria-label="Jordan Bell on LinkedIn">
				<div class="socialIcon">
					{#if LottiePlayer}
						<LottiePlayer src={linkedInLottie} autoplay={true} loop={true} renderer="svg" background="transparent" style="height: 38px; width: 38px;" />
					{:else}
						<span>in</span>
					{/if}
				</div>
				<span>LinkedIn</span>
			</a>
		</div>

		<div class="identity">
			<div class="brandRow">
				<img class="brandLogo" src={logo} alt="Jordan Bell logo" />
				<div class="nameRow">
					<h1 class="nameFont1">Jordan</h1>
					<h1 class="nameFont2">Bell</h1>
				</div>
			</div>
			<div class="focusBadge">Technology <span>•</span> Diagnostics <span>•</span> Systems <span>•</span> Software</div>
		</div>

		<div class="actionGroup">
			<a class="contactButton" href="mailto:jordan.l.bell1998@gmail.com">Contact me</a>
			<a class="resumeButton" href={resume} download="Jordan_Bell_Resume">
				<img src={resumeIcon} alt="" />
				<span>Resume</span>
			</a>
		</div>
	</nav>
	<div class="bottomTrim"></div>
</header>

<style lang="postcss">
	.siteHeader {
		background: linear-gradient(180deg, rgb(0, 110, 110) 0%, rgb(0, 88, 88) 100%);
		box-shadow: 0 9px 28px rgba(0, 0, 0, .32);
		position: relative;
		z-index: 10;
	}
	.topTrim, .bottomTrim {
		height: 3px;
		background: linear-gradient(90deg, var(--BellRed), #d79afa, #00d7d7, #d79afa, var(--BellRed));
	}
	nav {
		@apply grid gap-3 lg:gap-6 items-center px-4 lg:px-8 py-3;
		grid-template-columns: 1fr;
		min-height: 120px;
	}
	.identity { @apply flex flex-col items-center justify-center text-center; order: 1; }
	.brandRow { @apply flex items-center justify-center gap-2; }
	.brandLogo { width: 54px; height: 54px; object-fit: contain; filter: drop-shadow(0 3px 8px rgba(0,0,0,.32)); }
	.nameRow { @apply flex items-end justify-center gap-1; }
	.nameFont1 { font-family: 'nameFont1'; font-size: clamp(1.8rem, 3vw, 2.65rem); color: white; line-height: .95; }
	.nameFont2 { font-family: 'nameFont2'; font-size: clamp(1.95rem, 3.2vw, 2.8rem); color: var(--BellRed); line-height: .95; text-shadow: 0 2px 8px rgba(0,0,0,.25); }
	.focusBadge {
		@apply mt-2 px-4 py-1 rounded-lg text-xs sm:text-sm tracking-wide;
		color: rgba(255,255,255,.9);
		font-family: softFont;
		background: rgba(0,0,0,.22);
		border: 1px solid rgba(255,255,255,.18);
		box-shadow: inset 0 0 14px rgba(215,154,250,.14), 0 3px 10px rgba(0,0,0,.12);
	}
	.focusBadge span { color: #d79afa; padding: 0 .2rem; }
	.socialGroup { @apply flex justify-center gap-2; order: 2; }
	.socialLink { @apply flex items-center gap-2 px-3 py-1 rounded-xl; color: white; font-family: softFont; background: rgba(0,0,0,.2); border: 1px solid rgba(255,255,255,.2); transition: transform .2s ease, background .2s ease, border-color .2s ease; }
	.socialLink:hover { transform: translateY(-2px); background: rgba(0,0,0,.35); border-color: rgba(215,154,250,.8); }
	.socialIcon { @apply flex items-center justify-center; width: 34px; height: 34px; overflow: hidden; }
	.socialIcon > span { font-family: softFont; font-weight: bold; }
	.actionGroup { @apply flex justify-center items-center gap-2 flex-wrap; order: 3; }
	.contactButton, .resumeButton { @apply flex items-center justify-center gap-2 rounded-xl px-4 py-2; min-height: 40px; font-family: softFont; color: white; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
	.contactButton { background: rgba(20,20,20,.85); border: 1px solid rgba(255,255,255,.65); box-shadow: 0 0 0 2px rgba(215,154,250,.12); }
	.contactButton:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(215,154,250,.28); }
	.resumeButton { background: rgba(240,37,37,.15); border: 1px solid rgba(240,37,37,.8); }
	.resumeButton:hover { transform: translateY(-2px); background: rgba(240,37,37,.28); }
	.resumeButton img { width: 21px; height: 21px; }

	@media (min-width: 1024px) {
		nav { grid-template-columns: 1fr minmax(360px, 500px) 1fr; min-height: 108px; }
		.leftGroup { justify-self: start; order: 1; }
		.identity { order: 2; }
		.actionGroup { justify-self: end; order: 3; }
	}
</style>
