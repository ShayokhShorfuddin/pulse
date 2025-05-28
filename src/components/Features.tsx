import Cashflow from "@/assets/cashflow.svg";
import Currency from "@/assets/currency.svg";
import Customers from "@/assets/customers.svg";
import Quickbook from "@/assets/quickbooks.svg";
import Reports from "@/assets/reports.svg";
import Team from "@/assets/team.svg";

interface Feature {
	icon: string;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: Cashflow,
		title: "Multiple Cash Flow Views",
		description:
			"Monitor your cash flow on a yearly, monthly, weekly, daily transactional basis.",
	},
	{
		icon: Customers,
		title: "Customers and Projects",
		description:
			"Run cash flow reports on customers and projects to see how profitable they're going to be.",
	},
	{
		icon: Reports,
		title: "Visual Reports",
		description:
			"With our easy-to-understand reports, you can see cash moving in and out of your business.",
	},
	{
		icon: Currency,
		title: "Currency Conversion",
		description:
			"If your business operates on multiple currencies, we have you covered with today's exchange rates.",
	},
	{
		icon: Team,
		title: "Invite Your Team",
		description:
			"Invite your team to help out, or showcase your projections to investors by giving them read-only access.",
	},
	{
		icon: Quickbook,
		title: "Connects to Quickbooks Online",
		description:
			"Save time and reduce errors by keeping Pulse and your accounting software in sync.",
	},
];

export default function Features() {
	return (
		<section className="mt-20 px-5">
			<div className="text-center">
				<p className="mx-auto text-[clamp(1.7rem,4.2vw,2.5rem)] font-bold leading-tight max-w-md">
					Can your spreadsheets do this?
				</p>

				<p className="mx-auto mt-6 text-neutral-600 sm:text-lg max-w-md">
					Pulse is like your cash flow spreadsheet, except the math isn't wrong.
					Also, Pulse has:
				</p>

				<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-7 mt-16">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="flex flex-col items-center sm:px-8"
						>
							<img src={feature.icon} alt={feature.title} className="size-12" />
							<p className="text-lg font-bold mt-5">{feature.title}</p>
							<p className="text-neutral-600">{feature.description}</p>
						</div>
					))}
				</div>

				<a href="/" className="block underline text-[#00ad6a] font-bold mt-14">
					See Everything Pulse Does →
				</a>
			</div>
		</section>
	);
}
