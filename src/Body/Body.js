import "./Body.css";
import Navbar from "./Navbar/Navbar";
import BigPanel from "./BigPanel/BigPanel";
import Middle from "./Middle/Middle";
import List from "../List/List";
import Question from "./Question/Question";
import Footer from "../Footer/Footer";

function Body() {
	return (
		<div className="body">
			<Navbar />
			<BigPanel />
			<Middle />
			<List />
			<Question />
			<Footer />
		</div>
	);
}

export default Body;
