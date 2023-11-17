<script lang="ts">
	import Game from './Game.svelte';
	import GamesDataJSON from '$lib/gamesData.json';
	let GamesData: Array<object> = GamesDataJSON;

	console.log(GamesData);
</script>

<div class="transparentBackground mt-20">
	<div class="headingCenter largeMiddle largeStyling">
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
	<div class="subHead mt-1">
		<div class="visabilityHelper">
			<p>Most not mobile friendly. May revisit in the future.</p>
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

<style lang="postcss">
	.gamesContainer {
		@apply flex justify-center mt-3;
		flex-wrap: wrap;
	}
	h1 {
		@apply text-3xl lg:text-5xl;
		color: white;
	}
	.largeStyling {
		@apply lg:pt-1 pb-2;
	}
</style>
