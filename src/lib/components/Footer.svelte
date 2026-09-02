<script>
	let dateYear = new Date().getFullYear();
</script>

<footer>
	<div>
		<p>Jordan Bell • Technology, diagnostics & software • {dateYear}</p>
		<a href="mailto:jordan.l.bell1998@gmail.com">jordan.l.bell1998@gmail.com</a>
	</div>
</footer>

<style lang="postcss">
	footer { @apply shadow-xl; background-color: teal; min-height: 8.5vh; display: flex; justify-content: center; align-items: center; padding: 1rem; text-align: center; color: white; border-top: 3px solid rgb(0, 92, 92); }
	footer div { @apply flex flex-col gap-1; font-family: softFont; }
	footer a { color: white; text-decoration: underline; text-underline-offset: 3px; }
</style>
