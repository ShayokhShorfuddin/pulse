import HeroChart from "@/assets/hero-chart.svg";

export default function Hero() {
	return (
		<section className="pt-6 bg-[#EAFAF1] overflow-hidden">
			<h1 className="text-[clamp(1.4rem,5.5vw,3.4rem)] font-bold leading-tight lg:leading-15 mx-5 lg:mx-[7rem]">
				Yes, your <span className="text-[#00ad6a]">business</span> can
				<br />
				survive that expense.
			</h1>

			<p className="mt-6 text-sm font-semibold text-neutral-700 mx-5 lg:mx-[7rem] max-w-xl">
				Do you know how much money you'll have in two weeks? Two months? Two
				years? Business owners who use Pulse have better cash flow habits and a
				firm grasp on the pulse of their business.
				<br className="block sm:hidden" />{" "}
				<span className="text-black font-bold">First month free.</span>
			</p>

			<button
				type="button"
				className="bg-[#00ad6a] py-2.5 px-5 mt-6 text-white font-bold hover:cursor-pointer mx-5 lg:mx-[7rem]"
			>
				Try 30 Days Free
			</button>

			<p className="text-sm mt-3 mx-5 lg:mx-[7rem]">
				Plans start at $29.{" "}
				<a href="/" className="underline font-bold">
					See full pricing.
				</a>
			</p>

			<img src={HeroChart} alt="" className="-mt-[3rem] min-w-[50rem]" />
		</section>
	);
}
