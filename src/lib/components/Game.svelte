<script lang="ts">
	import gameIcon from '$lib/assets/Icons/game.svg';
	import codeIcon from '$lib/assets/Icons/code.svg';

	export let GameData: {
		game_link: string;
		game_name: string;
		code_link: string;
	};
</script>

<article class="gameCard visabilityHelper">
	<div class="previewFrame">
		<iframe
			src={GameData.game_link}
			title={`${GameData.game_name} playable preview`}
			loading="lazy"
			sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
		></iframe>
	</div>

	<div class="gameInfo">
		<div>
			<p class="smallLabel">Learning project</p>
			<h2>{GameData.game_name}</h2>
			<p class="description">The original game logic is kept as I wrote it while I was learning. The presentation can grow without hiding that progress.</p>
		</div>
		<div class="gameActions">
			<a href={GameData.game_link} target="_blank" rel="noreferrer">
				<img src={gameIcon} alt="" />
				<span>Open game</span>
			</a>
			<a href={GameData.code_link} target="_blank" rel="noreferrer">
				<img src={codeIcon} alt="" />
				<span>View code</span>
			</a>
		</div>
	</div>
</article>

<style lang="postcss">
	.gameCard {
		@apply overflow-hidden rounded-2xl;
		width: min(100%, 980px);
		background: rgba(0,0,0,.36);
		border: 1px solid rgba(215,154,250,.4);
		box-shadow: 0 18px 45px rgba(0,0,0,.28);
	}
	.previewFrame {
		width: 100%;
		background: #111;
		border-bottom: 1px solid rgba(255,255,255,.12);
		aspect-ratio: 16 / 10;
		min-height: 430px;
	}
	iframe { width: 100%; height: 100%; border: 0; background: white; }
	.gameInfo { @apply flex flex-col lg:flex-row lg:items-center justify-between gap-5 p-5 lg:p-7; }
	.smallLabel { @apply text-xs uppercase tracking-widest mb-1; color: #d7a0fa; font-family: softFont; }
	h2 { @apply text-3xl lg:text-4xl; color: white; font-family: softFont; }
	.description { @apply mt-2 max-w-2xl; color: rgba(255,255,255,.72); font-family: softFont; line-height: 1.6; }
	.gameActions { @apply flex gap-3 flex-wrap; }
	.gameActions a { @apply flex items-center gap-2 px-4 py-3 rounded-xl; color: white; font-family: softFont; border: 1px solid rgba(255,255,255,.25); background: rgba(0,128,128,.3); transition: transform .2s ease, border-color .2s ease, background .2s ease; }
	.gameActions a:hover { transform: translateY(-2px); border-color: var(--BellRed); background: rgba(240,37,37,.18); }
	.gameActions img { width: 28px; height: 28px; object-fit: contain; }

	@media (max-width: 640px) {
		.previewFrame { min-height: 390px; aspect-ratio: 4 / 5; }
	}
</style>
