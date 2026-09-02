<script lang="ts">
	import Game from './Game.svelte';
	import GamesDataJSON from '$lib/gamesData.json';

	type GameData = {
		game_link: string;
		game_name: string;
		code_link: string;
	};

	let GamesData: GameData[] = GamesDataJSON;
	let activeGameIndex = 0;

	$: activeGame = GamesData[activeGameIndex];
</script>

<section class="transparentBackground mt-20 gameSection" id="games">
	<div class="headingCenter largeMiddle largeStyling">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont">Games</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>

	<div class="subHead mt-1">
		<div class="visabilityHelper">
			<p>Small projects from when I was learning. Pick one below to play it here and look through the original code.</p>
		</div>
	</div>

	{#if activeGame}
		<div class="gameBrowser">
			<div class="gameTabs" role="tablist" aria-label="Game previews">
				{#each GamesData as GameData, index}
					<button
						class:activeTab={activeGameIndex === index}
						on:click={() => (activeGameIndex = index)}
						role="tab"
						aria-selected={activeGameIndex === index}
					>
						{GameData.game_name}
					</button>
				{/each}
			</div>

			<div class="activeGame">
				<Game GameData={activeGame} />
			</div>
		</div>
	{/if}
</section>

<style lang="postcss">
	.gameSection { @apply px-3 lg:px-6 pt-4 pb-14; }
	h1 { @apply text-5xl lg:text-6xl; color: white; }
	.largeStyling { @apply lg:pt-1 pb-2; }
	.subHead p { font-family: softFont; }

	.gameBrowser {
		@apply mt-8 mx-auto;
		width: min(100%, 980px);
	}

	.gameTabs {
		@apply flex flex-wrap justify-center gap-2 p-2 rounded-t-2xl;
		background: rgba(0, 0, 0, .42);
		border: 1px solid rgba(215, 154, 250, .4);
		border-bottom: 0;
	}

	.gameTabs button {
		@apply px-4 py-2 rounded-xl text-sm lg:text-base;
		font-family: softFont;
		color: rgba(255,255,255,.75);
		background: rgba(255,255,255,.06);
		border: 1px solid rgba(255,255,255,.12);
		transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
	}

	.gameTabs button:hover {
		color: white;
		border-color: rgba(215,154,250,.7);
		transform: translateY(-1px);
	}

	.gameTabs .activeTab {
		color: white;
		background: rgba(0,128,128,.5);
		border-color: var(--BellRed);
		box-shadow: inset 0 -2px 0 var(--BellRed), 0 0 16px rgba(215,154,250,.18);
	}

	.activeGame :global(.gameCard) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
</style>
