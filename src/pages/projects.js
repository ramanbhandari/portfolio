import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectsList from "../data/projectslist";
import Card from "../components/card";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Projects() {
	return (
		<Box>
			<Grid container paddingTop={10}>
				<Grid
					item
					size={{ xs: 12, sm: 12, md: 12 }}
					display={"flex"}
					justifyContent={"center"}
					paddingBottom={5}>
					<Link to="/">
						<Typography variant="body2" color="black">
							#back to home
						</Typography>
					</Link>
				</Grid>

				{ProjectsList.map((project, index) => (
					<Card
						key={index}
						heading={project.title}
						body={project.description}
						techs={project.techs}
						link={project.link}
						multipleRepoLink={project.multipleRepoLink}
						repoNameBackend={project.repoNameBackend}
						repoNameFrontend={project.repoNameFrontend}
						projImage={project.projImage}></Card>
				))}
			</Grid>
		</Box>
	);
}
export default Projects;
