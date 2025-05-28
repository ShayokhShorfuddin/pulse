import Customer from "@/assets/customer.png";

export default function CustomerTestimonial() {
	return (
		<section className="mt-20">
			<div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-x-30 gap-y-12 px-5">
				<div className="flex flex-col gap-y-5 max-w-xl">
					<p className="text-[clamp(1.4rem,5.5vw,3rem)] font-bold leading-tight">
						Make smarter business decisions with Pulse.
					</p>

					<p className="sm:text-lg text-neutral-600">
						Do you know if you can hire another employee or take some money out
						of the company? Should you take on that new project or should turn
						it down? With Pulse, you immediately see how business decisions will
						impact your cash in the future, which in turn gives you the
						confidence you need to know if the decision is right.
					</p>
				</div>

				{/* Customer testimonial card */}
				<div className="flex flex-col items-center p-5 sm:p-10 border border-neutral-200 max-w-sm">
					<img src={Customer} alt="" className="size-20" />

					<p className="mt-6 text-lg sm:text-xl text-center text-[#00ad6a] font-semibold">
						“Pulse makes my business smarter. We make better decisions because
						we can see further. You could say it has lowered our stress level by
						removing the fear of not knowing.”
					</p>

					<p className="mt-8 text-neutral-500 font-sans text-sm font-semibold">
						Carl Smith, Bureau of Digital
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
