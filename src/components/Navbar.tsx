import PulseLogo from "@/assets/pulse-logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<header>
			<nav className="relative flex justify-between items-center px-5 lg:px-[7rem] py-5 border-b-1 border-neutral-200 ">
				<img src={PulseLogo} alt="Pulse logo" />

				<HorizontalLinks />

				<button
					type="button"
					className="sm:hidden hover:cursor-pointer p-2"
					onClick={() => {
						if (isDropdownOpen) {
							document.body.style.overflow = "auto";
							setIsDropdownOpen(false);
						} else {
							document.body.style.overflow = "hidden";
							setIsDropdownOpen(true);
						}
					}}
				>
					{isDropdownOpen ? (
						<X color="#00ad6a" size={28} />
					) : (
						<Menu color="#00ad6a" size={28} />
					)}
				</button>

				<MobileNavbarDropdown isDropdownOpen={isDropdownOpen} />
			</nav>
		</header>
	);
}

function HorizontalLinks() {
	return (
		<ul className="hidden sm:flex items-center gap-x-5 md:gap-x-8 text-[#00ad6a] font-semibold">
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
			<li>
				<button
					type="button"
					className="relative border-2 cursor-pointer bg-transparent hover:shadow-[-5px_4px_#00ad6a] hover:translate-x-[5px] hover:translate-y-[-5px] duration-200 px-3 py-1 border-[#00ad6a]"
				>
					Sign Up
				</button>
			</li>
		</ul>
	);
}

function MobileNavbarDropdown({ isDropdownOpen }: { isDropdownOpen: boolean }) {
	return (
		<ul
			className={`absolute flex flex-col left-0 top-22 w-full h-svh bg-[#eafaf1] text-[#00ad6a] text-lg font-semibold pl-5 pt-5 gap-y-3 ${!isDropdownOpen ? "hidden" : ""} z-10`}
		>
			<li className="hover:text-neutral-800">
				<a href="/">Features</a>
			</li>

			<li className="hover:text-neutral-800">
				<a href="/">Customer Stories</a>
			</li>

			<li className="hover:text-neutral-800">
				<a href="/">Pricing</a>
			</li>

			<li className="hover:text-neutral-800">
				<a href="/">Blog</a>
			</li>

			<li className="hover:text-neutral-800">
				<a href="/">Contact</a>
			</li>

			<li className="hover:text-neutral-800">
				<a href="/">Support</a>
			</li>

			<li>
				{/* TODO: Add gradient here */}
				<button type="button" className="hover:cursor-pointer">
					Sign Up for a Free 30-Day Trial
				</button>
			</li>
		</ul>
	);
}

// TODO: After asking for a review from Reddit and Tailwind community, polish the navbar
