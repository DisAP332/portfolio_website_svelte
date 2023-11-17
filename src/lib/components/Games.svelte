<script lang="ts">
	import Game from './Game.svelte';
	import GamesDataJSON from '$lib/gamesData.json';
	let GamesData: Array<object> = GamesDataJSON;

	console.log(GamesData);
</script>

<div class="transparentBackground mt-20">
	<div class="headingCenter">
		<div>
			<div class="horizontalLine" />
		</div>
		<div>
			<h1 class="coolFont">Games</h1>
		</div>
		<div>
			<div class="horizontalLine" />
		</div>
	</div>
	<div class="gamesContainer visabilityHelper">
		{#if GamesData}
			{#each GamesData as GameData}
				<Game {GameData} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.gamesContainer {
		@apply flex justify-center mt-3;
		flex-wrap: wrap;
	}
	h1 {
		@apply text-3xl;
		color: white;
	}
</style>
