interface QuoteItem {
	quote: string;
	text: string;
}

const quotes: QuoteItem[] = [
	{
		quote: "I like that it provides the opportunity to test scenarios.",
		text: "You can quickly toggle income and expenses off and on to see what happens based on different scenarios to see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you're empowered to make smarter business decisions.",
	},
	{
		quote: "Pulse shows me how to track cash flow the right way.",
		text: "Stop stumbling your way through spreadsheets not knowing what you don't know. Pulse shows you a simple, easy to understand chart that answers the questions you have about your cash flow.",
	},
	{
		quote: "It's easy to set up and understand.",
		text: "Our user friendly design makes Pulse a breeze to set up and manage your cash flow. It's so easy that over half of our customers are able to use Pulse every day without it taking up too much of their time.",
	},
	{
		quote:
			"It used to take us hours to manually do in Excel what Pulse does out of the box.",
		text: "If you're trying to manage your cash flow in systems that aren't specifically designed for that purpose, you're wasting the one resource more valuable than your cash, your time.",
	},
	{
		quote: "I like the simplicity.",
		text: "Pulse is meant to do one thing really well—cash flow management. No other product on the market is as focused on putting you in control of how cash moves in and out of your business.",
	},
	{
		quote: "I like that Pulse is web-based.",
		text: "You can access Pulse from any computer, any time. There's no software to install.",
	},
	{
		quote: "I can connect it to my accounting software.",
		text: "With our direct connection to QuickBooks Online, keeping your cash flow projections and your actual performance in sync is a breeze.",
	},
];

export default function Testimonials() {
	return (
		<section className="mt-10 lg:mt-20 text-center px-5 border-b border-neutral-200 pb-14">
			<p className="text-[clamp(1.3rem,4.2vw,2.5rem)] font-bold">
				Business owners trust Pulse.
			</p>
			<p className="mt-1 sm:mt-2 text-neutral-600">
				Below are real quotes from business owners.
			</p>

			<div className="flex flex-col items-center max-w-lg gap-y-16 mx-auto mt-16 text-left">
				{quotes.map((quote) => (
					<div key={quote.quote}>
						<p className="text-xl font-bold">"{quote.quote}"</p>
						<p className="mt-3 sm:text-lg text-neutral-600">{quote.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
