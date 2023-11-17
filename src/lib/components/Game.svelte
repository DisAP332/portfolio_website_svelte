<script lang="ts">
	import gameIcon from '$lib/assets/Icons/game.svg';
	import codeIcon from '$lib/assets/Icons/code.svg';
	export let GameData: {
		game_link: string;
		game_name: string;
		code_link: string;
	};
</script>

<div class="gameContainer mt-5 mb-5">
	<a href={GameData.game_link} target="_blank">
		<img src={gameIcon} alt="game icon" class="icon" />
	</a>
	<div class="transparentBackground">
		<div class="visabilityHelper">{GameData.game_name}</div>
	</div>
	<a href={GameData.code_link} target="_blank">
		<img src={codeIcon} alt="code icon" class="icon" />
	</a>
</div>

<style>
	.visabilityHelper {
		@apply rounded-lg;
		box-shadow: 0px 1px 40px 10px rgba(215, 154, 250, 0.501) inset;
	}
	.gameContainer {
		display: grid;
		grid-template-columns: 50px 120px 50px;
		height: 50px;
		margin: 10px;
	}
	.gameContainer > div {
		@apply flex justify-center items-center;
		border-radius: 0px !important;
		height: 50px;
	}
	.gameContainer > div > div {
		@apply text-white;
		padding: 8px;
		font-size: 1rem;
		width: 110px;
		text-align: center;
	}

	.gameContainer > a:first-child > img {
		background-color: red;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}
	.gameContainer > a:last-child > img {
		background-color: blue;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.icon {
		height: 50px;
		width: 50px;
		padding: 6px;
	}
</style>
