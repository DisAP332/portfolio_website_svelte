<script lang="ts">
	const skillGroups = [
		{
			title: 'Hardware & Diagnostics',
			items: ['Server diagnostics', 'Component replacement', 'Log analysis', 'Firmware troubleshooting', 'Multimeter use', 'Board inspection', 'Workstation repair']
		},
		{
			title: 'IT Support',
			items: ['Windows support', 'ServiceNow', 'Active Directory', 'PC imaging', 'User support', 'Desktop deployment', 'Hardware / software triage']
		},
		{
			title: 'Networking & Systems',
			items: ['TCP/IP', 'Ethernet', 'OpenWrt', 'WireGuard', 'SSH', 'Proxmox VE', 'KVM / QEMU', 'Ubuntu / Debian', 'DigitalOcean', 'Nginx']
		},
		{
			title: 'Cybersecurity',
			items: ['CompTIA A+', 'Google Cybersecurity Certificate', 'Access control', 'Authentication', 'Linux security fundamentals', 'Network security fundamentals', 'Security troubleshooting']
		},
		{
			title: 'Development',
			items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'SvelteKit', 'Node.js', 'Fastify / Express', 'Tailwind CSS', 'Prisma', 'Python', 'REST APIs']
		},
		{
			title: 'Automation & Tooling',
			items: ['Git / GitHub', 'Vite', 'Playwright', 'Puppeteer', 'Ansible', 'Cloud-Init', 'Docker concepts', 'Deployment workflows', 'Self-hosting']
		}
	];
</script>

<section id="knowledge">
	<div class="hero transparentBackground">
		<p class="eyebrow">TECHNICAL GENERALIST • TROUBLESHOOTER • BUILDER</p>
		<h1 class="softText">I like finding the failure, understanding it, and fixing it.</h1>
		<p class="heroCopy">
			My work now spans hardware diagnostics, IT support, Linux, networking, cybersecurity and software development.
			I learn best by building things, breaking them, and understanding exactly why they work.
		</p>
		<div class="focusRow">
			<span>Systems</span><span>Diagnostics</span><span>Networking</span><span>Security</span><span>Software</span>
		</div>
	</div>

	<div class="headingCenter largeMiddle sectionHeading">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont">Skills & Tools</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>

	<div class="skillsGrid">
		{#each skillGroups as group}
			<article class="skillCard visabilityHelper">
				<h2>{group.title}</h2>
				<div class="chips">
					{#each group.items as item}
						<span>{item}</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>

<style lang="postcss">
	section { color: white; }
	.hero { @apply p-5 lg:p-10 mb-12; border: 1px solid rgba(215, 154, 250, 0.35); }
	.eyebrow { @apply text-xs lg:text-sm mb-3 tracking-widest; color: #d7a0fa; font-family: softFont; }
	.softText { @apply text-3xl lg:text-5xl max-w-4xl; font-family: softFont; line-height: 1.15; }
	.heroCopy { @apply mt-5 lg:text-xl max-w-4xl; font-family: softFont; line-height: 1.7; color: rgba(255,255,255,0.9); }
	.focusRow { @apply flex flex-wrap gap-2 mt-6; }
	.focusRow span { @apply px-3 py-1 rounded-full text-sm; font-family: softFont; background: rgba(0,128,128,0.45); border: 1px solid rgba(255,255,255,0.25); }
	.sectionHeading { @apply mb-5; }
	.sectionHeading h1 { @apply text-4xl lg:text-5xl text-center; }
	.skillsGrid { @apply grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16; }
	.skillCard { @apply p-5 lg:p-6; background-color: rgba(0,0,0,0.26); border: 1px solid rgba(215,154,250,0.3); transition: transform 0.25s ease, border-color 0.25s ease; }
	.skillCard:hover { transform: translateY(-4px); border-color: rgba(240,37,37,0.65); }
	h2 { @apply text-2xl mb-4; font-family: softFont; color: white; }
	.chips { @apply flex flex-wrap gap-2; }
	.chips span { @apply px-3 py-2 rounded-lg text-sm; font-family: softFont; background: rgba(255,255,255,0.08); border-left: 3px solid var(--BellRed); }
</style>
