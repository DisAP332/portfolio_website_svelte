<script lang="ts">
	const projects = [
		{
			title: 'HireMePWES',
			tagline: 'A real service business site built to turn technical and local service work into paying clients.',
			description: 'A full-stack service platform for cleaning, computer and phone repair, custom technical help and other local services. Built around practical booking and administration instead of being a demo-only project.',
			tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL', 'Vercel'],
			links: [
				{ label: 'Live site', href: 'https://hiremepwes.com' },
				{ label: 'GitHub', href: 'https://github.com/DisAP332/hiremepwes' }
			]
		},
		{
			title: 'Portalfi / Live Menu Editor',
			tagline: 'A custom content-management tool created for restaurant and bar websites.',
			description: 'I built a client/server application so non-technical users could create, edit and delete live website data such as menu items, events and contact information. It taught me authentication, APIs, databases, deployment and maintaining a real application across multiple layers.',
			tech: ['TypeScript', 'Node.js', 'Next.js', 'MongoDB', 'Redux', 'DigitalOcean', 'Nginx', 'JWT'],
			links: [
				{ label: 'Server code', href: 'https://github.com/DisAP332/Portalfi-Server' },
				{ label: 'Client code', href: 'https://github.com/DisAP332/Portalfi-Client' }
			]
		},
		{
			title: 'Home Lab & Network',
			tagline: 'My hands-on environment for learning systems, networking, virtualization and security.',
			description: 'I use Linux systems, Proxmox VE, KVM/QEMU, OpenWrt, WireGuard and SSH to build and troubleshoot virtual machines, networks and self-hosted services. The lab gives me a place to test configuration, automation and security concepts instead of only reading about them.',
			tech: ['Proxmox', 'Linux', 'OpenWrt', 'WireGuard', 'KVM/QEMU', 'SSH', 'Ansible', 'Cloud-Init'],
			links: []
		},
		{
			title: 'Food Security Flow',
			tagline: 'A mutual-aid focused project for making food resources easier to find and use.',
			description: 'A community-minded web project built around organizing useful food-security information into something easier for people to navigate. It reflects what I like most about software: using technical skills to solve ordinary, real-world problems.',
			tech: ['Web development', 'Information design', 'Community resources', 'UX'],
			links: []
		}
	];
</script>

<section class="transparentBackground mt-20 mb-20" id="projects">
	<div class="headingCenter largeMiddle">
		<div><div class="horizontalLine" /></div>
		<div><h1 class="coolFont title">Projects</h1></div>
		<div><div class="horizontalLine" /></div>
	</div>
	<div class="subHead mt-2"><div class="visabilityHelper"><p>Things I built because I wanted them to exist.</p></div></div>

	<div class="projectGrid">
		{#each projects as project}
			<article class="projectCard visabilityHelper">
				<div class="projectTop">
					<h2>{project.title}</h2>
					<p class="tagline">{project.tagline}</p>
				</div>
				<p class="description">{project.description}</p>
				<div class="techList">
					{#each project.tech as tech}<span>{tech}</span>{/each}
				</div>
				{#if project.links.length > 0}
					<div class="links">
						{#each project.links as link}
							<a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
						{/each}
					</div>
				{/if}
			</article>
		{/each}
	</div>
</section>

<style lang="postcss">
	section { @apply p-3 lg:p-6; color: white; }
	.title { @apply text-5xl lg:text-6xl mb-2; }
	.subHead p { font-family: coolFont; }
	.projectGrid { @apply grid lg:grid-cols-2 gap-6 mt-8; }
	.projectCard { @apply p-5 lg:p-7 flex flex-col; background: rgba(0,0,0,0.28); border: 1px solid rgba(215,154,250,0.35); min-height: 100%; transition: transform .25s ease, border-color .25s ease; }
	.projectCard:hover { transform: translateY(-5px); border-color: rgba(240,37,37,.75); }
	h2 { @apply text-3xl lg:text-4xl mb-2; font-family: softFont; }
	.tagline { @apply text-lg; color: #d7a0fa; font-family: coolFont; }
	.description { @apply mt-5 leading-relaxed lg:text-lg; font-family: softFont; color: rgba(255,255,255,.9); }
	.techList { @apply flex flex-wrap gap-2 mt-6; }
	.techList span { @apply text-sm px-3 py-1 rounded-full; background: rgba(0,128,128,.38); border: 1px solid rgba(255,255,255,.18); font-family: softFont; }
	.links { @apply flex flex-wrap gap-3 mt-auto pt-6; }
	.links a { @apply px-4 py-2 rounded-lg; color: white; font-family: softFont; border: 1px solid var(--BellRed); background: rgba(240,37,37,.12); transition: .2s; }
	.links a:hover { background: rgba(240,37,37,.3); transform: translateY(-2px); }
</style>
