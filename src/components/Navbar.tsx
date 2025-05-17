import PulseLogo from "@/assets/pulse-logo.svg";

export default function Navbar() {
	return (
		<header>
			<nav className="flex justify-between items-center px-[7rem] pt-10">
				<img src={PulseLogo} alt="Pulse logo" />

				<ul className="flex items-center gap-x-8">
					<li>
						<a href="/">Features</a>
					</li>
					<li>
						<a href="/">Customer Stories</a>
					</li>
					<li>
						<a href="/">Pricing</a>
					</li>
					<li>
						<a href="/">Blog</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

// TODO: Continue working on navbar
