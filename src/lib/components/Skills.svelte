<script lang="ts">
	import htmlIcon from '$lib/assets/Icons/html5.svg';
	import cssIcon from '$lib/assets/Icons/css3.svg';
	import javascriptIcon from '$lib/assets/Icons/javascript.svg';
	import reactIcon from '$lib/assets/Icons/react.svg';
	import bootstrapIcon from '$lib/assets/Icons/bootstrap.svg';
	import typescriptIcon from '$lib/assets/Icons/typescript.svg';
	import nodejsIcon from '$lib/assets/Icons/nodejs.svg';
	import expressIcon from '$lib/assets/Icons/express.svg';
	import pugIcon from '$lib/assets/Icons/pug-is-wearing-hat-and-sunglasses.svg';
	import mongodbIcon from '$lib/assets/Icons/mongodb.svg';
	import gitIcon from '$lib/assets/Icons/git.svg';
	import githubIcon from '$lib/assets/Icons/github.svg';
	import firebaseIcon from '$lib/assets/Icons/firebase.svg';
	import webpackIcon from '$lib/assets/Icons/webpack.svg';
	import adobeIllustratorIcon from '$lib/assets/Icons/adobe-illustrator.svg';
	import linuxIcon from '$lib/assets/Icons/linux.svg';
	import nextIcon from '$lib/assets/Icons/next-js-seeklogo.com.svg';
	import viteIcon from '$lib/assets/Icons/vite-svgrepo-com.svg';
	import tailwindIcon from '$lib/assets/Icons/tailwind-css.svg';
	import reduxIcon from '$lib/assets/Icons/redux.svg';
	import jestIcon from '$lib/assets/Icons/jest-snapshot-svgrepo-com.svg';
	import letsencryptIcon from '$lib/assets/Icons/letsencrypt.svg';
	import digitalOceanIcon from '$lib/assets/Icons/digitalocean.svg';
	import nginxIcon from '$lib/assets/Icons/nginx.svg';
</script>

<h1 class="softText">Software Extraordinaire?</h1>
<div class="headBottom">
	<h1>... I would like to one day be! <br /> Let me be your next junior developer!</h1>
</div>
<h1 id="knowledge" class="skillsTitle fancyFont">
	Some skills I use and continue to try to master.
</h1>
<div class="transparentBackground mb-20">
	<div class="skillHeading largeLeft">
		<div>
			<h1 class="skillTitle coolFont text-2xl mr-5">Front End</h1>
		</div>
		<div class="flex items-center">
			<div class="horizontalLine" />
		</div>
	</div>
	<div class="skillBadges visabilityHelper">
		<a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank"
			><img src={htmlIcon} alt="html icon" /></a
		>
		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
			><img src={cssIcon} alt="css icon" /></a
		>
		<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
			><img src={javascriptIcon} alt="js icon" /></a
		>
		<a href="https://www.typescriptlang.org/" target="_blank"
			><img src={typescriptIcon} alt="typescript Icon" /></a
		>
		<a href="https://reactjs.org/" target="_blank"><img src={reactIcon} alt="react Icon" /></a>
		<a href="https://nextjs.org/" target="_blank"
			><img src={nextIcon} alt="next Icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://tailwindcss.com/" target="_blank"
			><img src={tailwindIcon} alt="tailwind Icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://getbootstrap.com/" target="_blank"
			><img src={bootstrapIcon} alt="bootstrap Icon" class="badgeVisabilityHelper" /></a
		>
	</div>
	<div class="skillHeadingReverse largeRight">
		<div class="smHide" />
		<div>
			<div class="horizontalLine" />
		</div>
		<div class="backend">
			<h1 class="skillTitle coolFont text-xl ml-5">Back End</h1>
		</div>
	</div>
	<div class="skillBadges visabilityHelper justify-end">
		<a href="https://nodejs.org/en/" target="_blank"
			><img src={nodejsIcon} alt="html icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://expressjs.com/" target="_blank"
			><img src={expressIcon} alt="css icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://www.mongodb.com/" target="_blank"
			><img src={mongodbIcon} alt="js icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://www.typescriptlang.org/" target="_blank"
			><img src={typescriptIcon} alt="typescript Icon" /></a
		>
		<a href="https://pugjs.org/api/getting-started.html" target="_blank"
			><img src={pugIcon} alt="react Icon" /></a
		>
	</div>
	<div class="headingCenter largeMiddle">
		<div>
			<div class="horizontalLine" />
		</div>
		<div>
			<h1 class=" skillTitle coolFont text-2xl">Technologies</h1>
		</div>
		<div>
			<div class="horizontalLine" />
		</div>
	</div>
	<div class="skillBadges visabilityHelper">
		<a href="https://www.linux.org/" target="_blank"><img src={linuxIcon} alt="html icon" /></a>
		<a href="https://git-scm.com/" target="_blank"><img src={gitIcon} alt="css icon" /></a>
		<a href="https://github.com/" target="_blank"
			><img src={githubIcon} alt="js icon" class="badgeVisabilityHelper" /></a
		>
		<a href="https://webpack.js.org/" target="_blank"
			><img src={webpackIcon} alt="typescript Icon" /></a
		>
		<a href="https://www.adobe.com/products/illustrator.html" target="_blank"
			><img src={adobeIllustratorIcon} alt="react Icon" /></a
		>
		<a href="https://redux.js.org/" target="_blank"><img src={reduxIcon} alt="react Icon" /></a>
		<a href="https://jestjs.io/" target="_blank"><img src={jestIcon} alt="react Icon" /></a>
		<a href="https://www.digitalocean.com/" target="_blank"
			><img src={digitalOceanIcon} alt="react Icon" /></a
		>
		<a href="https://www.nginx.com/" target="_blank"><img src={nginxIcon} alt="react Icon" /></a>
		<a href="https://letsencrypt.org/" target="_blank"
			><img src={letsencryptIcon} alt="react Icon" class="badgeVisabilityHelper" /></a
		>
	</div>
</div>

<style lang="postcss">
	h1 {
		color: white;
	}
	/* ---- fonts ----- */
	.softText {
		@apply text-xl lg:text-4xl;
		font-family: softFont;
	}
	.fancyFont {
		font-family: NameFont1;
	}
	/* ------- skills head ----- */
	.skillHeading {
		display: grid;
		grid-template-columns: 10rem 1fr;
	}
	.skillHeadingReverse {
		@apply mt-3;
		display: grid;
		grid-template-columns: 1fr 10rem;
		grid-template-rows: 1fr;
	}
	.backend {
		grid-column: 3 / 4;
	}
	.skillHeadingReverse > div,
	.headingCenter > div {
		@apply flex justify-center items-center;
	}
	.headBottom {
		@apply flex justify-end mt-3 text-lg lg:text-3xl;
		font-family: NameFont1;
		/* text-decoration: underline;
		text-decoration-color: white;
		text-decoration-thickness: 2px; */
		text-align: right;
	}
	/* ------- skills title ----- */
	.skillsTitle {
		@apply text-xl mt-10 mb-3 lg:text-2xl;
	}
	.skillTitle {
		@apply lg:text-5xl;
	}
	/* ------- skills body ----- */
	.skillBadges {
		@apply lg:mt-8;
		display: flex;
		gap: 1rem;
		padding: 10px;
		width: 100%;
		overflow: scroll;
		overflow-y: hidden;
		/* background-color: rgba(214, 154, 250, 0.415); */
	}
	.skillBadges::-webkit-scrollbar {
		background-color: rgba(255, 255, 255, 0);
		height: 1vh;
	}
	.skillBadges::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #c6a0fe;
		border: 1px solid #000;
	}
	/* ------ icons ----- */
	a {
		@apply lg:h-20 w-20 !important;
		width: 40px;
		height: 40px;
		transition-duration: 0.4s;
	}
	a:hover {
		transform: translateY(-10px);
		transition-duration: 0.3s;
	}
	img {
		@apply lg:h-20 w-20 !important;
		min-width: 40px;
		height: 40px;
	}
	/* ------ lg styling ------- */
	.largeLeft {
		@apply lg:grid-cols-lg_left pt-4 ml-3 !important;
	}
	.largeRight {
		@apply lg:grid-cols-lg_right mt-10 !important;
	}
	.smHide {
		@apply hidden lg:block;
	}
</style>
