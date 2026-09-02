<script lang="ts">
	import upArrow from '$lib/assets/Icons/up-arrow.svg';

	export let showScrollToTop: boolean;
	let showOrHide = 'hide';

	$: showOrHide = showScrollToTop ? 'show' : 'hide';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button class="scrollToTopButton {showOrHide}" on:click={scrollToTop} aria-label="Scroll to top">
	<img src={upArrow} alt="" />
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
		animation: fadeOut 0.2s ease-in-out;
		opacity: 0;
		pointer-events: none;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
