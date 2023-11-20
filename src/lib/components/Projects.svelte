<script>
	import nextIcon from '$lib/assets/Icons/next-js-seeklogo.com.svg';
	import reduxIcon from '$lib/assets/Icons/redux.svg';
	import typescriptIcon from '$lib/assets/Icons/typescript.svg';
	import nodejsIcon from '$lib/assets/Icons/nodejs.svg';
	import expressIcon from '$lib/assets/Icons/express.svg';
	import mongodbIcon from '$lib/assets/Icons/mongodb.svg';
	import letsencryptIcon from '$lib/assets/Icons/letsencrypt.svg';
	import digitalOceanIcon from '$lib/assets/Icons/digitalocean.svg';
	import nginxIcon from '$lib/assets/Icons/nginx.svg';

	import portalfiVideo from '$lib/assets/video/portalvid.mp4';
	import { onMount } from 'svelte';

	import VideoPlayer from 'svelte-video-player';
	// let VideoPlayer;

	// onMount(async () => {
	// 	const module = await import('svelte-video-player');
	// 	VideoPlayer = module.VideoPlayer;
	// });
</script>

<div class="transparentBackground mt-20 mb-20">
	<div class="headingCenter largeMiddle">
		<div>
			<div class="horizontalLine" />
		</div>
		<div>
			<h1 class="coolFont xxl">Projects</h1>
		</div>
		<div>
			<div class="horizontalLine" />
		</div>
	</div>
	<div class="subHead mt-2">
		<div class="visabilityHelper">
			<p>Heres where I give it my all!</p>
		</div>
	</div>
	<!-- PORTAL FI -->
	<div class="headingCenter project">
		<div>
			<div class="horizontalLine" />
		</div>
		<div>
			<h1 class="projectTitle">Portalfi</h1>
		</div>
		<div>
			<div class="horizontalLine" />
		</div>
	</div>
	<VideoPlayer width="500" height="300" source={portalfiVideo} loop />
	<div class="underline" />
	<div>
		<h3>Tech used:</h3>
		<div class="badgeCont visabilityHelper p-3">
			<img src={nextIcon} alt="next Icon" class="badgeVisabilityHelper" />
			<img src={reduxIcon} alt="redux Icon" class="badgeVisabilityHelper" />
			<img src={typescriptIcon} alt="typescript Icon" />
			<img src={nodejsIcon} alt="nodejs Icon" class="badgeVisabilityHelper" />
			<img src={expressIcon} alt="express Icon" class="badgeVisabilityHelper" />
			<img src={mongodbIcon} alt="mongodb Icon" class="badgeVisabilityHelper" />
			<img src={letsencryptIcon} alt="letsencrypt Icon" class="badgeVisabilityHelper" />
			<img src={digitalOceanIcon} alt="digitalOcean Icon" />
			<img src={nginxIcon} alt="nginx Icon" />
		</div>
	</div>
	<h3>Description:</h3>
	<div class="visabilityHelper mt-3 descriptionCont">
		<p>
			this is an example of the in development full stack application I put together to
			edit/delete/create data for a live static website. <br /> <br /> The Server is done in
			Typescript with Node-JS, Passport-JS for handling security strategies on login then Bcrypt and
			JsonWebTokens for encryption / security, this is paired with its MongoDB Atlas Database
			connection handled via Mongoose. <br /> <br /> The web app to edit the clients website data is
			made on NextJS in TypeScript, implementing Tailwind for CSS and Redux for state management.
			<br /> <br /> The example website is in the works for a client. <br /> <br /> It pulls its data
			from the node-js server hosted on DigitalOcean. Portalfi-jbw is a web app for 2 clients i am currently
			developing a website for. I made this web application to give them a platform to edit their websites
			live data such as events, menu, contact-details... ect.
		</p>
	</div>
	<div class="projectLinks">
		<a href="https://github.com/DisAP332/Portalfi-Server" target="_blank">
			<h3>| Server Code Link |</h3>
		</a>
		<a href="https://github.com/DisAP332/Portalfi-Client" target="_blank">
			<h3>| Client Code Link |</h3>
		</a>
	</div>
</div>

<style lang="postcss">
	p {
		@apply lg:text-xl;
		font-family: coolFont;
		color: white;
		text-align: center;
	}
	h3 {
		font-family: softFont;
		color: white;
	}
	.project {
		@apply lg:mb-8;
		margin-top: 3rem !important;
	}
	.xxl {
		@apply text-5xl lg:text-6xl mb-2;
	}
	h1 {
		@apply text-3xl;
		color: white;
	}
	.projectTitle {
		font-family: softFont;
	}
	.underline {
		@apply rounded-xl;
		border-bottom: 10px solid var(--BellRed);
	}
	.badgeCont {
		@apply flex items-center;
		padding: 20px;
		overflow-y: hidden;
		overflow-x: auto;
		height: 70px;
		gap: 10px;
	}
	.descriptionCont {
		padding: 10px;
		max-height: 50vh;
		overflow: auto;
	}
	img {
		width: 50px;
		height: 50px;
	}
	.projectLinks {
		@apply flex justify-center flex-col;
		text-align: center;
	}
</style>
