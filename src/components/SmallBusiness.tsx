export default function SmallBusiness() {
	return (
		<section className="bg-[url('@/assets/smile.png')] bg-no-repeat bg-cover bg-center h-[30rem] lg:h-[100svh] mt-20">
			<div className="flex flex-col gap-y-6 max-w-md mx-5 lg:ml-[8rem] h-full justify-center">
				<p className="text-[clamp(1.4rem,5.5vw,3rem)] font-bold leading-tight text-white">
					Pulse is specifically designed for small businesses.
				</p>

				<p className="sm:text-lg text-neutral-100">
					Our customers include creative and technology agencies, service
					providers, restaurants, manufacturers, retail shops, contractors,
					freelancers, and more.
				</p>

				<button
					type="button"
					className="hover:cursor-pointer bg-white py-4 px-1 font-bold max-w-[19rem]"
				>
					Sign Up for a Free 30-Day Trial
				</button>
			</div>
		</section>
	);
}
