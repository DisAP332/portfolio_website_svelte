<script lang="ts">
	export let showScrollToTop: boolean;
	let showOrHide = 'hide';
	$: if (showScrollToTop === true) {
		showOrHide = 'show';
	} else {
		showOrHide = 'hide';
	}

	import upArrow from '$lib/assets/Icons/up-arrow.svg';
	import { animateScroll } from 'svelte-scrollto-element';
</script>

<button class="scrollToTopButton {showOrHide}" on:click={() => animateScroll.scrollToTop()}>
	<img src={upArrow} alt="up arrow" />
</button>

<style lang="postcss">
	.scrollToTopButton {
		@apply fixed bottom-3 right-3 shadow-xl sm:hidden !important;
		width: 80px;
		height: 80px;
		background-color: purple;
		border: 5px solid rgb(168, 38, 168);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		z-index: 100;
	}
	img {
		user-select: none;
	}
	.show {
		animation: fadeIn 0.2s ease-in-out;

		display: block;
	}
	.hide {
		animation: fadOut 0.2s ease-in-out;
		opacity: 0;
	}
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeout {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
