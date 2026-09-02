<div class="transparentBackground lgStyling" id="about">
	<div class="headingCenter largeMiddle">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont">About me</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>

	<div class="aboutGrid visabilityHelper">
		<div>
			<p>
				I am a hands-on technologist who likes figuring out why things fail and making them work again.
				My background has grown from web development into server and hardware diagnostics, IT support,
				Linux systems, networking, cybersecurity, automation, and building useful software.
			</p>
			<p>
				I have worked on production server hardware, diagnosed failures across dozens of systems at once,
				deployed and upgraded hundreds of workstations, supported users, built full-stack web applications,
				and created my own home-lab infrastructure to keep learning outside of work.
			</p>
		</div>
		<div class="quickFacts">
			<h2>What I bring</h2>
			<ul>
				<li>CompTIA A+</li>
				<li>Google Cybersecurity Professional Certificate</li>
				<li>Hardware + software troubleshooting</li>
				<li>Linux, networking + virtualization</li>
				<li>Full-stack development + automation</li>
				<li>A habit of learning by building</li>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.lgStyling { @apply lg:pt-1 pb-14 mt-10; }
	h1 { @apply text-5xl lg:text-6xl !important; color: white; }
	h2 { @apply text-2xl lg:text-3xl mb-3; color: white; font-family: softFont; }
	.aboutGrid { @apply grid lg:grid-cols-2 gap-6 mt-5 p-5 lg:p-8; }
	p { @apply lg:text-lg mb-4; line-height: 1.75; color: white; font-family: softFont; }
	.quickFacts { @apply rounded-xl p-5; background: rgba(0, 0, 0, 0.28); border: 1px solid rgba(215, 154, 250, 0.45); }
	ul { @apply grid gap-2; color: white; font-family: softFont; }
	li::before { content: '›'; color: var(--BellRed); font-weight: bold; margin-right: 0.6rem; }
</style>
