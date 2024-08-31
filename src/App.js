import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import GlobalStyles from "./styles/globalStyle";
import Card from "./components/card";

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
          <Route path="/card" element={<Card />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
