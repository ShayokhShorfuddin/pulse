import CustomerTestimonial from "./components/CustomerTestimonial";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmallBusiness from "./components/SmallBusiness";
import Testimonials from "./components/Testimonials";

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Testimonials />
			<CustomerTestimonial />
			<SmallBusiness />
		</>
	);
}
