import Downturn from "@/assets/downturn.png";
import Invoice from "@/assets/invoice.png";
import Monetization from "@/assets/monetizing.png";

interface Blog {
	category: string;
	image: string;
	title: string;
	description: string;
}

const BlogsData: Blog[] = [
	{
		category: "Survive & Thrive",
		image: Downturn,
		title:
			"Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop",
		description:
			"Arash Fayz of LA Tutors knew he needed to change his business model when the pandemic hit. Here's how he scaled his tutoring business after an 80% drop in clients.",
	},
	{
		category: "Entrepreneurship",
		image: Monetization,
		title:
			"Monetizing a Network: How Jodi Brandstetter Started Her Second Business",
		description:
			"STEM talent consultant Jodi Brandstetter started her second business during the pandemic—a business book publishing network. Here's how she made it work.",
	},
	{
		category: "Pro Tips",
		image: Invoice,
		title:
			"5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital",
		description:
			"Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital. Here's what he's learned from niching down and streamlining his business.",
	},
];

export default function Blogs() {
	return (
		<section className="mt-20 px-5">
			<div className="mx-auto text-center max-w-lg">
				<p className="text-[clamp(1.7rem,4.2vw,2.5rem)] font-bold leading-tight">
					Pulse helps real businesses survive & thrive.
				</p>

				<p className="mt-6 text-neutral-600 sm:text-lg">
					Our blog features stories from real business owners with real business
					advice, in addition to our own insights on how you can build better
					cash flow habits.
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-x-6 gap-y-6 mt-18">
				{BlogsData.map((blog) => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</section>
	);
}

function BlogCard({ category, image, title, description }: Blog) {
	return (
		<div className="border border-neutral-200 hover:border-[#00ad6a] p-4 max-w-[24rem]">
			<img src={image} alt="" />

			<p className="text-sm font-semibold text-neutral-500 mt-5">
				{category.toUpperCase()}
			</p>
			<p className="text-[clamp(0.3rem,5vw,1rem)] font-bold mt-2 leading-snug">
				{title}
			</p>
			<p className="text-neutral-700 mt-4 text-sm sm:text-md">{description}</p>

			<a
				href="/"
				className="block text-[#00ad6a] underline text-sm mt-2 font-bold"
			>
				Read More →
			</a>
		</div>
	);
}
