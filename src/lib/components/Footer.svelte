<script>
	let dateYear = new Date().getFullYear();
</script>

<footer>
	<p>Jordan Bell Web Dev @{dateYear}</p>
</footer>

<style>
	footer {
		@apply grid-cols-2 shadow-xl;
		background-color: teal;
		height: 8.5vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
