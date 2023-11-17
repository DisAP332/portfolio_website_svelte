<script lang="ts">
	import Project from './LProject.svelte';
	import lProjectsDataJSON from '$lib/lProjectsData.json';
	let projectsData: Array<object> = lProjectsDataJSON;
	console.log(projectsData);
</script>

<div class="transparentBackground mt-20">
	<div class="headingCenterLP largeMiddle">
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
			<p>Some old things I made in the Odin Project. <br /> Most sadly not mobile friendly.</p>
		</div>
	</div>
	<div class="projectsContainer visabilityHelper">
		{#if projectsData}
			{#each projectsData as projectData}
				<Project {projectData} />
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
	.projectsContainer {
		@apply flex justify-center items-center mt-3;
		flex-wrap: wrap;
	}
	h1 {
		@apply text-3xl lg:text-4xl mb-3;
		color: white;
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
