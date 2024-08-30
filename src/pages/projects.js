import { Link } from "react-router-dom";

function Projects() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Projects;
