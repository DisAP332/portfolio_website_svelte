<script lang="ts">
	import Game from './Game.svelte';
	import GamesDataJSON from '$lib/gamesData.json';
	let GamesData: Array<object> = GamesDataJSON;
</script>

<section class="transparentBackground mt-20 gameSection" id="games">
	<div class="headingCenter largeMiddle largeStyling">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont">Games</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>

	<div class="subHead mt-1">
		<div class="visabilityHelper">
			<p>Small projects from when I was learning. You can play them here and look through the original code.</p>
		</div>
	</div>

	<div class="gamesContainer">
		{#if GamesData}
			{#each GamesData as GameData}
				<Game {GameData} />
			{/each}
		{/if}
	</div>
</section>

<style lang="postcss">
	.gameSection { @apply px-3 lg:px-6 pt-4 pb-14; }
	.gamesContainer { @apply flex flex-col items-center gap-8 mt-8; }
	h1 { @apply text-5xl lg:text-6xl; color: white; }
	.largeStyling { @apply lg:pt-1 pb-2; }
	.subHead p { font-family: softFont; }
</style>
