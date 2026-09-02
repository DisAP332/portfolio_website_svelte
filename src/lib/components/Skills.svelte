<script lang="ts">
	import htmlIcon from '$lib/assets/Icons/html5.svg';
	import cssIcon from '$lib/assets/Icons/css3.svg';
	import javascriptIcon from '$lib/assets/Icons/javascript.svg';
	import typescriptIcon from '$lib/assets/Icons/typescript.svg';
	import reactIcon from '$lib/assets/Icons/react.svg';
	import nextIcon from '$lib/assets/Icons/next-js-seeklogo.com.svg';
	import nodeIcon from '$lib/assets/Icons/nodejs.svg';
	import expressIcon from '$lib/assets/Icons/express.svg';
	import mongoIcon from '$lib/assets/Icons/mongodb.svg';
	import reduxIcon from '$lib/assets/Icons/redux.svg';
	import tailwindIcon from '$lib/assets/Icons/tailwind-css.svg';
	import viteIcon from '$lib/assets/Icons/vite-svgrepo-com.svg';
	import gitIcon from '$lib/assets/Icons/git.svg';
	import githubIcon from '$lib/assets/Icons/github.svg';
	import linuxIcon from '$lib/assets/Icons/linux.svg';
	import digitalOceanIcon from '$lib/assets/Icons/digitalocean.svg';
	import nginxIcon from '$lib/assets/Icons/nginx.svg';
	import letsEncryptIcon from '$lib/assets/Icons/letsencrypt.svg';
	import bootstrapIcon from '$lib/assets/Icons/bootstrap.svg';
	import firebaseIcon from '$lib/assets/Icons/firebase.svg';
	import webpackIcon from '$lib/assets/Icons/webpack.svg';
	import illustratorIcon from '$lib/assets/Icons/adobe-illustrator.svg';
	import jestIcon from '$lib/assets/Icons/jest-snapshot-svgrepo-com.svg';

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
			items: ['Git / GitHub', 'Vite', 'Playwright', 'Puppeteer', 'Ansible', 'Cloud-Init', 'Deployment workflows', 'Self-hosting']
		}
	];

	const toolIcons = [
		{ name: 'HTML', icon: htmlIcon },
		{ name: 'CSS', icon: cssIcon },
		{ name: 'JavaScript', icon: javascriptIcon },
		{ name: 'TypeScript', icon: typescriptIcon },
		{ name: 'React', icon: reactIcon },
		{ name: 'Next.js', icon: nextIcon },
		{ name: 'Node.js', icon: nodeIcon },
		{ name: 'Express', icon: expressIcon },
		{ name: 'MongoDB', icon: mongoIcon },
		{ name: 'Redux', icon: reduxIcon },
		{ name: 'Tailwind', icon: tailwindIcon },
		{ name: 'Vite', icon: viteIcon },
		{ name: 'Git', icon: gitIcon },
		{ name: 'GitHub', icon: githubIcon },
		{ name: 'Linux', icon: linuxIcon },
		{ name: 'DigitalOcean', icon: digitalOceanIcon },
		{ name: 'Nginx', icon: nginxIcon },
		{ name: "Let's Encrypt", icon: letsEncryptIcon },
		{ name: 'Bootstrap', icon: bootstrapIcon },
		{ name: 'Firebase', icon: firebaseIcon },
		{ name: 'Webpack', icon: webpackIcon },
		{ name: 'Illustrator', icon: illustratorIcon },
		{ name: 'Jest', icon: jestIcon }
	];
</script>

<section id="knowledge">
	<div class="hero transparentBackground">
		<p class="eyebrow">SYSTEMS • DIAGNOSTICS • NETWORKING • SOFTWARE</p>
		<h1 class="softText">I like figuring out how things work and what went wrong when they don't.</h1>
		<p class="heroCopy">
			I work across hardware, IT support, Linux, networking, cybersecurity and software development.
			Most of what I know comes from using it, troubleshooting it and building something with it.
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

	<div class="toolWall transparentBackground visabilityHelper">
		<div class="toolWallHeading">
			<h2>Tools I've worked with</h2>
			<p>I spent a lot of time collecting these when I first built this site, so they are staying.</p>
		</div>
		<div class="iconGrid">
			{#each toolIcons as tool}
				<div class="iconBadge" title={tool.name}>
					<img src={tool.icon} alt={tool.name} />
					<span>{tool.name}</span>
				</div>
			{/each}
		</div>
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
	.skillsGrid { @apply grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10; }
	.skillCard { @apply p-5 lg:p-6; background-color: rgba(0,0,0,0.26); border: 1px solid rgba(215,154,250,0.3); transition: transform 0.25s ease, border-color 0.25s ease; }
	.skillCard:hover { transform: translateY(-4px); border-color: rgba(240,37,37,0.65); }
	h2 { @apply text-2xl mb-4; font-family: softFont; color: white; }
	.chips { @apply flex flex-wrap gap-2; }
	.chips span { @apply px-3 py-2 rounded-lg text-sm; font-family: softFont; background: rgba(255,255,255,0.08); border-left: 3px solid var(--BellRed); }
	.toolWall { @apply p-5 lg:p-8 mb-16; border: 1px solid rgba(215,154,250,.35); }
	.toolWallHeading { @apply text-center mb-6; }
	.toolWallHeading h2 { @apply text-3xl lg:text-4xl mb-2; }
	.toolWallHeading p { font-family: softFont; color: rgba(255,255,255,.75); }
	.iconGrid { @apply grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 lg:gap-4; }
	.iconBadge { @apply flex flex-col items-center justify-center gap-2 rounded-xl p-3; min-height: 108px; background: rgba(255,255,255,.92); border: 2px solid rgba(215,154,250,.35); transition: transform .2s ease, box-shadow .2s ease; }
	.iconBadge:hover { transform: translateY(-5px) scale(1.03); box-shadow: 0 8px 24px rgba(215,154,250,.25); }
	.iconBadge img { width: 54px; height: 54px; object-fit: contain; }
	.iconBadge span { @apply text-xs text-center; font-family: softFont; color: #181818; }
</style>
