<script lang="ts">
	import upArrow from '$lib/assets/Icons/up-arrow.svg';
	import downArrow from '$lib/assets/Icons/down-arrow.svg';
	import knowledgeIcon from '$lib/assets/Icons/creative-book.svg';
	import projectsIcon from '$lib/assets/Icons/checkmark.svg';
	import gameIcon from '$lib/assets/Icons/game.svg';
	import { animateScroll, scrolltobottom } from 'svelte-scrollto-element';
</script>

<div class="sideNavigation">
	<button on:click={() => animateScroll.scrollToTop()}>
		<img src={upArrow} alt="up arrow" />
		<h1>Top</h1>
	</button>
	<button on:click={() => animateScroll.scrollTo({ element: '#knowledge' })}>
		<img src={knowledgeIcon} alt="knowledge section" />
		<h1>Knowledge</h1>
	</button>
	<button on:click={() => animateScroll.scrollTo({ element: '#games' })}>
		<img src={gameIcon} alt="games section" />
		<h1>Games</h1>
	</button>
	<button on:click={() => animateScroll.scrollTo({ element: '#projects' })}>
		<img src={projectsIcon} alt="project section" />
		<h1>Projects</h1>
	</button>
	<button on:click={() => animateScroll.scrollToBottom()}>
		<img src={downArrow} alt="down arrow" />
		<h1>bottom</h1>
	</button>
</div>

<style lang="postcss">
	h1 {
		font-family: softFont;
		font-size: 1.5em;
		color: white;
	}
	.sideNavigation {
		@apply hidden sm:block;
		position: fixed;
		cursor: pointer;
		bottom: 30vh;
		right: 0;
		overflow: hidden;
		user-select: none !important;
	}
	.sideNavigation > button {
		width: 320px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transform: translateX(250px);
		transition-duration: 1s;
		user-select: none;
	}
	.sideNavigation > button:hover {
		transform: translateX(0px);
		transition-duration: 0.8s;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		box-shadow: 0px 0px 2px 1px rgb(128, 127, 127);
	}
	.sideNavigation > button:nth-child(1):hover {
		transform: translateX(150px);
	}
	.sideNavigation > button:last-child:hover {
		transform: translateX(80px);
	}
	.sideNavigation > button:nth-child(3):hover {
		transform: translateX(20px);
	}
	.sideNavigation > button > img {
		width: 80px;
		height: 60px;
	}
	.sideNavigation > button:nth-child(2) > img {
		width: 50px;
		margin-left: 15px;
		margin-right: 20px;
	}
	.sideNavigation > button:nth-child(3) > img {
		width: 40px;
		margin-left: 20px;
		margin-right: 20px;
	}
	.sideNavigation > button:nth-child(4) > img {
		width: 40px;
		margin-left: 23px;
		margin-right: 20px;
	}

	.sideNavigation > button:last-child {
		background-color: rgb(16, 185, 192);
		border-bottom-left-radius: 30px;
	}
	.sideNavigation > button:nth-child(2) {
		background-color: rgb(2, 132, 199);
	}
	.sideNavigation > button:nth-child(3) {
		background-color: rgb(11, 245, 38);
	}
	.sideNavigation > button:nth-child(4) {
		background-color: rgb(245, 158, 11);
	}
	.sideNavigation > button:first-child {
		background-color: rgb(16, 185, 192);
		border-top-left-radius: 30px;
	}
</style>
