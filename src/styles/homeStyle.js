import { styled } from "styled-components";
import Grid from "@mui/material/Grid2";

const ImageContainer = styled(Grid)`
	margin-top: 10vh;
	height: 100%;
	display: flex;
	justify-content: left;

	@media (max-width: 900px) {
		margin-top: 0;
		height: 100%;
		display: flex;
		justify-content: left;
	}

	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 1px solid #fff;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

		@media (max-width: 900px) {
			margin-top: 0;
			height: 100%;
			display: flex;
			justify-content: left;
		}
	}

	.img-city {
		width: 100px;
		height: 100px;
		margin-top: 60px;

		@media (max-width: 900px) {
			height: 60px !important;
			margin-top: 60px !important;
			padding: 0 !important;
			width: auto;
		}
	}

	.img-profile {
		height: 150px;

		@media (max-width: 900px) {
			height: 90px !important;
			width: auto;
			padding: 0 !important;
			margin-top: 20px !important;
			margin-left: 10px;
		}
	}
`;

const Styles = {
	ImageContainer,
};

export default Styles;
