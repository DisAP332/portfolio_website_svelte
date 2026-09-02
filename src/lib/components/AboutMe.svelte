<div class="transparentBackground lgStyling" id="about">
	<div class="headingCenter largeMiddle">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont">About me</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>

	<div class="aboutGrid visabilityHelper">
		<div>
			<p>
				I like working with technology from more than one angle. I build software, troubleshoot computers and servers,
				work with Linux and networks, and spend a lot of my own time learning how the pieces connect.
			</p>
			<p>
				A lot of what I know came from having a problem in front of me and needing to figure it out. I have diagnosed
				production server hardware, upgraded hundreds of workstations, supported users, built full-stack web apps,
				and put together my own home lab so I always have something new to work on.
			</p>
		</div>
		<div class="quickFacts">
			<h2>A few things about my work</h2>
			<ul>
				<li>CompTIA A+</li>
				<li>Google Cybersecurity Professional Certificate</li>
				<li>Hardware and software troubleshooting</li>
				<li>Linux, networking and virtualization</li>
				<li>Full-stack development and automation</li>
				<li>I learn best by building and fixing things</li>
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
