<script>
	import logo from '$lib/assets/images/FullLogo_Transparent.png';
	let dateYear = new Date().getFullYear();
</script>

<footer>
	<div class="footerTrim"></div>
	<div class="footerInner">
		<img src={logo} alt="Jordan Bell logo" />
		<h2>Thanks for taking a look through my work.</h2>
		<p>I am always learning something, fixing something, or building something new.</p>

		<div class="footerLinks">
			<a href="mailto:jordan.l.bell1998@gmail.com">Email me</a>
			<a href="https://github.com/DisAP332" target="_blank" rel="noreferrer">GitHub</a>
			<a href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank" rel="noreferrer">LinkedIn</a>
		</div>

		<p class="copyright">Jordan Bell • {dateYear}</p>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply shadow-xl mt-24;
		position: relative;
		background: linear-gradient(180deg, rgb(0, 90, 90) 0%, rgb(0, 58, 58) 100%);
		min-height: 310px;
		color: white;
		text-align: center;
		box-shadow: 0 -18px 45px rgba(0,0,0,.28);
	}
	.footerTrim { height: 5px; background: linear-gradient(90deg, var(--BellRed), #d79afa, #00d7d7, #d79afa, var(--BellRed)); }
	.footerInner { @apply flex flex-col items-center justify-center gap-3 px-5 py-12 lg:py-16; min-height: 305px; font-family: softFont; }
	.footerInner img { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 4px 10px rgba(0,0,0,.35)); }
	h2 { @apply text-2xl lg:text-3xl mt-1; }
	.footerInner > p { color: rgba(255,255,255,.78); }
	.footerLinks { @apply flex flex-wrap justify-center gap-3 mt-3; }
	.footerLinks a { @apply px-4 py-2 rounded-xl; color: white; border: 1px solid rgba(255,255,255,.3); background: rgba(0,0,0,.18); transition: transform .2s ease, border-color .2s ease, background .2s ease; }
	.footerLinks a:hover { transform: translateY(-2px); border-color: #d79afa; background: rgba(0,0,0,.32); }
	.copyright { @apply text-sm mt-5; color: rgba(255,255,255,.55) !important; }
</style>
