import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as LinkMUI } from "@mui/material";

function Card({ heading, body, techs, link, projImage }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				paddingBottom={6}
				spacing={{ xs: 2, sm: 6, md: 6 }}
				columns={{ xs: 3, sm: 6, md: 11 }}>
				<Grid item size={{ xs: 2, sm: 2, md: 3 }}>
					<img
						src={projImage}
						alt={heading}
						style={{ width: "100%", borderRadius: "30px" }}
					/>
				</Grid>
				<Grid item size={{ xs: 2, sm: 2, md: 3 }}>
					<Grid item>
						<Typography
							variant="h6"
							gutterBottom
                            fontFamily={'Roboto'}
							fontSize={{ xs: 15, sm: 13, md: 15 }}
                            textAlign={{xs: 'center', sm: 'center', md: 'left'}}>
							{heading}{" "}
							<LinkMUI
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginRight: "8px" }}>
								<GitHubIcon
									fontSize="small"
									style={{ color: "black", opacity: "65%" }}
								/>
							</LinkMUI>
						</Typography>
					</Grid>
					<Grid item paddingBottom={1} textAlign={"left"}>
						<Typography
							variant="caption"
							gutterBottom
							fontSize={{ xs: 10, sm: 9, md: 10 }}
                            textAlign={{xs: 'center', sm: 'center', md: 'left'}}>
							{techs}
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							variant="body2"
							gutterBottom
							fontSize={{ xs: 12, sm: 10, md: 11 }}
                            textAlign={{xs: 'center', sm: 'center', md: 'left'}}>
							{body}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
export default Card;
