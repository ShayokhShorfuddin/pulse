import Blogs from "./components/Blogs";
import CTA from "./components/CTA";
import Cashflow from "./components/Cashflow";
import CustomerTestimonial from "./components/CustomerTestimonial";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmallBusiness from "./components/SmallBusiness";
import Testimonials from "./components/Testimonials";

export default function App() {
	return (
		<>
			<Navbar />

			<main id="main">
				<Hero />
				<Testimonials />
				<CustomerTestimonial />
				<SmallBusiness />
				<Blogs />
				<Features />
				<Cashflow />
				<CTA />
			</main>

			<Footer />
		</>
	);
}
