import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import City from "../assets/wpg.png";
import Profile from "../assets/raman.jpg";
import Styles from "../styles/homeStyle";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link as LinkMUI } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LaptopMacSharpIcon from "@mui/icons-material/LaptopMacSharp";

const { ImageContainer } = Styles;

export default function Home() {
	return (
		<Box sx={{ width: "100%" }}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center">
				<Grid item paddingBottom={10} size={{ xs: 10, md: 5 }}>
					<Grid container direction="row">
						<ImageContainer>
							<img className="img-profile" src={Profile} alt="Profile" />
							<img className="img-city" src={City} alt="City" />
						</ImageContainer>
					</Grid>
					<Grid item display={"flex"} justifyContent={"right"} paddingTop={2}>
						<LinkMUI
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer">
							<Typography variant="caption" fontSize={12} color="black">
								#resume
							</Typography>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</LinkMUI>
						<Link to="/projects">
							<Typography variant="caption" fontSize={12} color="black">
								#projects
							</Typography>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</Link>
					</Grid>

					<Grid item paddingTop={2} paddingBottom={1}>
						<Typography variant="h6" gutterBottom>
							Hi, I'm Raman
						</Typography>
					</Grid>

					<Grid item paddingLeft={"5%"}>
						<Typography variant="caption" fontSize={11} gutterBottom>
							excited to blend creativity with technology, exploring
							cutting-edge innovations in bustling cities.
						</Typography>
					</Grid>
					<Grid item paddingLeft={"7%"}>
						<Typography variant="caption" fontSize={11} gutterBottom>
							aspiring to dive in diverse challenges,
							meaningful connections, and exploring new interests.
						</Typography>
					</Grid>
					<Grid item paddingLeft={"5%"}>
						<Typography variant="caption" fontSize={11} gutterBottom>
							inspired by innovative spaces, impactful projects, and people who
							push boundaries in their work.
						</Typography>
					</Grid>
					<Grid item paddingTop={3} paddingBottom={3}>
						<LinkMUI
							href="https://github.com/ramanbhandari"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginRight: "8px" }}>
							<GitHubIcon
								fontSize="small"
								style={{ color: "black", opacity: "65%" }}
							/>
						</LinkMUI>
						<LinkMUI
							href="https://www.linkedin.com/in/raman-bhandari/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginRight: "8px" }}>
							<LinkedInIcon
								fontSize="small"
								style={{ color: "black", opacity: "65%" }}
							/>
						</LinkMUI>
						<LinkMUI
							href="mailto:bhandar1@myumanitoba.ca"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginRight: "8px" }}>
							<MailIcon
								fontSize="small"
								style={{ color: "black", opacity: "65%" }}
							/>
						</LinkMUI>
					</Grid>

					<Grid item>
						<Typography variant="caption" fontSize={12} gutterBottom>
							I'm studying Computer Science at the University of Manitoba with a
							minor in Mathematics
							<br />
							<br />
							recently, I...
						</Typography>

						<List>
							<ListItem>
								<ListItemIcon>
									<LaptopMacSharpIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText disableTypography>
									<Typography variant="caption" fontSize={12}>
										am working at G3 Canada in Winnipeg - excited to learn and
										contribute with love (and some intelligence?)!
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RadioButtonCheckedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText disableTypography>
									<Typography variant="caption" fontSize={12}>
										spent a summer and winter working in Priceline on the API
										Team, discovering some pretty interesting work in the Online
										Travel Agency, let's talk about it(?)
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RadioButtonCheckedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText disableTypography>
									<Typography variant="caption" fontSize={12}>
										recently dived into cloud computing and microservices
										architecture, experimenting with deploying scalable
										applications on Azure. (it's coool!)
									</Typography>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<RadioButtonCheckedIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText disableTypography>
									<Typography variant="caption" fontSize={12}>
										spent an incredible year as President of .devClub, organized
										events and hackathon. I lead the largest Hackathon in
										Manitoba "smoothly" (well, maybe with a few hiccups)
									</Typography>
								</ListItemText>
							</ListItem>
						</List>
						<Typography variant="caption" fontSize={12} gutterBottom>
							and in other moments...
						</Typography>
						<List>
							<ListItem>
								<Typography variant="body2" fontSize={12}>
									finding comfort and challenge in overthinking skills (it is a
									talent)
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body2" fontSize={12}>
									trying out my hand at new skills like photography and design
								</Typography>
							</ListItem>
							<ListItem>
								<Typography variant="body2" fontSize={12}>
									engaging with campus life again as I stretch my last year in
									university
								</Typography>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
