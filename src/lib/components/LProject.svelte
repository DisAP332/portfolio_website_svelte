<script lang="ts">
	import codeIcon from '$lib/assets/Icons/code.svg';
	import eyeIcon from '$lib/assets/Icons/eye.svg';
	export let projectData: {
		project_name: string;
		code_link: string;
		live_link: string;
	};
</script>

<div class="container">
	<div class="grid">
		<a href={projectData.live_link} target="_blank">
			<div class="red">
				<img src={eyeIcon} alt="preview icon" class="icon" />
			</div>
		</a>
		<a href={projectData.code_link} target="_blank">
			<div class="blue">
				<img src={codeIcon} alt="code icon" class="icon" />
			</div>
		</a>
		<div class="text transparentBackground">{projectData.project_name}</div>
	</div>
</div>

<style>
	.container {
		height: 80px;
		@apply flex justify-center items-center;
		width: 320px;
	}

	.grid {
		display: grid;
		grid-template-columns: 50px 50px 200px;
	}
	.grid > div {
		@apply flex justify-center items-center;
	}
	.grid > a > div {
		@apply flex justify-center items-center;
	}

	.blue {
		background-color: blue;

		height: 100%;
	}

	.red {
		background-color: red;
		height: 100%;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}

	.text {
		color: white;
		height: 100%;
		border-top-left-radius: 0px !important;
		border-bottom-left-radius: 0px !important;
	}
	.icon {
		padding: 10px;
	}
</style>
