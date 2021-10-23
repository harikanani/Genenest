import "./App.css";
import Navbar from "./Navbar";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Consults from "./Consults";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Switch>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/consulting">
					<Consults />
				</Route>
				<Route exact path="/products"></Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
