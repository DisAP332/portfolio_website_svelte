<script>
	import logo from '$lib/assets/images/FullLogo_Transparent.png';
	let dateYear = new Date().getFullYear();
</script>

<footer>
	<div class="footerTrim"></div>
	<div class="footerInner">
		<div class="footerBrand">
			<img src={logo} alt="Jordan Bell logo" />
			<div>
				<h2>Jordan Bell</h2>
				<div class="focusBadge">Technology <span>•</span> Diagnostics <span>•</span> Systems <span>•</span> Software</div>
			</div>
		</div>

		<div class="footerLinks">
			<a href="mailto:jordan.l.bell1998@gmail.com">Email</a>
			<a href="https://github.com/DisAP332" target="_blank" rel="noreferrer">GitHub</a>
			<a href="https://www.linkedin.com/in/jordan-bell-135205251/" target="_blank" rel="noreferrer">LinkedIn</a>
		</div>

		<p class="copyright">Built by Jordan Bell • {dateYear}</p>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply shadow-xl mt-20;
		position: relative;
		background: linear-gradient(180deg, rgb(0, 90, 90) 0%, rgb(0, 58, 58) 100%);
		color: white;
		text-align: center;
		box-shadow: 0 -12px 32px rgba(0,0,0,.24);
	}
	.footerTrim { height: 4px; background: linear-gradient(90deg, var(--BellRed), #d79afa, #00d7d7, #d79afa, var(--BellRed)); }
	.footerInner { @apply flex flex-col lg:flex-row items-center justify-between gap-4 px-5 lg:px-10 py-6 lg:py-5; min-height: 135px; font-family: softFont; }
	.footerBrand { @apply flex items-center gap-3; }
	.footerBrand img { width: 52px; height: 52px; object-fit: contain; filter: drop-shadow(0 3px 8px rgba(0,0,0,.3)); }
	h2 { @apply text-xl lg:text-2xl text-left; }
	.focusBadge {
		@apply mt-1 px-3 py-1 rounded-lg text-xs tracking-wide;
		color: rgba(255,255,255,.85);
		background: rgba(0,0,0,.2);
		border: 1px solid rgba(255,255,255,.16);
		box-shadow: inset 0 0 12px rgba(215,154,250,.12);
	}
	.focusBadge span { color: #d79afa; padding: 0 .15rem; }
	.footerLinks { @apply flex flex-wrap justify-center gap-2; }
	.footerLinks a { @apply px-4 py-2 rounded-xl; color: white; border: 1px solid rgba(255,255,255,.26); background: rgba(0,0,0,.16); transition: transform .2s ease, border-color .2s ease, background .2s ease; }
	.footerLinks a:hover { transform: translateY(-2px); border-color: #d79afa; background: rgba(0,0,0,.28); }
	.copyright { @apply text-xs lg:text-sm; color: rgba(255,255,255,.5); }

	@media (max-width: 1023px) {
		.footerBrand { @apply flex-col; }
		h2 { text-align: center; }
	}
</style>
