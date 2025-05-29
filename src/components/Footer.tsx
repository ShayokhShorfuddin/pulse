import PulseLogo from "@/assets/pulse-logo.svg";

export default function Footer() {
	return (
		<footer className="bg-neutral-900 pt-16 px-5 pb-4">
			<div className="max-w-5xl mx-auto">
				<div className="flex flex-col md:flex-row gap-y-10 justify-between">
					{/* Logo and CTA button */}
					<div>
						<img src={PulseLogo} alt="" />
						<button
							type="button"
							className="mt-4 p-3 text-lg font-semibold bg-[#1BDC73] hover:cursor-pointer"
						>
							Sign Up for a Free 30-Day Trial
						</button>
					</div>

					{/* Links */}
					<div className="flex flex-wrap gap-y-8 gap-x-15 text-[#1BDC73] font-semibold">
						<div className="flex flex-col gap-y-3">
							<p className="text-white">Product</p>
							<ul className="flex flex-col gap-y-3">
								<li>
									<a href="/">Features</a>
								</li>
								<li>
									<a href="/">Pricing</a>
								</li>
								<li>
									<a href="/">Sign Up</a>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-y-3">
							<p className="text-white">Company</p>
							<ul className="flex flex-col gap-y-3">
								<li>
									<a href="/">Customer Stories</a>
								</li>
								<li>
									<a href="/">About</a>
								</li>
								<li>
									<a href="/">Contact</a>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-y-3">
							<p className="text-white">Resources</p>
							<ul className="flex flex-col gap-y-3">
								<li>
									<a href="/">Support</a>
								</li>
								<li>
									<a href="/">Blog</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<p className="text-sm mt-18 text-[#83858a] max-w-md">
					©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use | Privacy
					Policy | EU Privacy Pulse is made by Simple Focus. We also make
					Ballpark, Sifter, and Curated.
				</p>
			</div>
		</footer>
	);
}
