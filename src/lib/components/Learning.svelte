<script>
	import Projects from './Projects.svelte';
</script>

<div class="transparentBackground mt-20">
	<div class="headingCenterLP">
		<div>
			<div class="horizontalLine" />
		</div>
		<div>
			<h1 class="coolFont">Learning Projects</h1>
		</div>
		<div>
			<div class="horizontalLine" />
		</div>
	</div>
	<div class="subHead">
		<div class="visabilityHelper">
			<p>Some old things I made in the Odin Project</p>
		</div>
	</div>
	<Projects />
</div>

<style>
	h1 {
		@apply text-3xl;
		color: white;
	}
	.subHead {
		text-align: center;
		font-family: coolFont;
		color: white;
		@apply flex justify-center items-center;
	}
	.subHead > div {
		@apply mt-1;
		padding-top: 4px;
		padding-left: 10px;
		padding-right: 10px;
		border: 3px solid var(--BellRed);
		border-bottom: 0px !important;
	}
	.headingCenterLP {
		display: grid;
		grid-template-columns: 1fr 15rem 1fr;
	}
	.headingCenterLP > div {
		@apply flex justify-center items-center;
		text-align: center;
	}
</style>
