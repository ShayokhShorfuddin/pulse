export default function Cashflow() {
	return (
		<section className="mt-26">
			<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-x-30 gap-y-12 px-5">
				<div className="flex flex-col gap-y-5 max-w-xl">
					<p className="text-[clamp(1.4rem,5.5vw,3rem)] font-bold leading-tight">
						Pulse is the easy, online way to manage and project your cash flow.
					</p>

					<button
						type="button"
						className="border border-[#00ad6a] p-3 text-lg hover:cursor-pointer font-semibold text-[#00ad6a] max-w-xs mt-3"
					>
						See All Customer Stories
					</button>
				</div>

				{/* Customer testimonial card */}
				<div className="flex flex-col items-center p-5 sm:p-10 border border-neutral-200 max-w-sm">
					<p className="mt-6 text-lg sm:text-xl text-center text-[#00ad6a] font-semibold">
						“Pulse has allowed us to visualize our cash flow before our brains
						turned to mush trying to deal with receipts, spreadsheets and
						accordion folders.”
					</p>

					<p className="mt-8 text-neutral-500 font-sans text-sm font-semibold">
						Casimir Loeber, RealtyNinja
					</p>

					<a
						href="/"
						className="text-[#00ad6a] underline font-sans text-sm font-semibold"
					>
						Read Customer Story →
					</a>
				</div>
			</div>
		</section>
	);
}
