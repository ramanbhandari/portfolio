import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import GlobalStyles from "./styles/globalStyle";

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
