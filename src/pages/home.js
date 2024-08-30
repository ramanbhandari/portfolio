import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import City from "../assets/raman.jpg";
import Profile from "../assets/raman.jpg";

const StyledRow = styled(Row)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`;
const StyledCol = styled(Col)`
	display: flex;
	align-items: center;
	text-align: left;
`;
const Title = styled(Row)`
	font-size: 20px;
	padding-top: 10px;
	padding-bottom: 20px;
	padding-left: 0;
	margin: 0;
`;

const Introduction = styled(Row)`
	padding-left: 5%;
`;

const P1 = styled.p`
	padding: 0;
	margin: 0;
	font-size: 12px;
`;

const P2 = styled.p`
	padding: 0;
	margin: 0;
	font-size: 12px;
	padding-left: 15px;
`;

const SocialLinks = styled(Row)`
	padding-top: 30px;
	padding-bottom: 30px;
	display: flex;
	gap: 8px; /* Space between icons */
`;

const Icon = styled.div`
	color: black;
	font-size: 20px;
	transition: color 0.3s ease;

	&:hover {
		color: gray;
	}
`;

const NavLink = styled.a`
	margin-top: 160px;
	padding: 0;
	text-decoration: none;
	color: black;

	&:hover {
		opacity: 70%;
	}
`;

const Nav = styled.p`
	margin-top: 10px;
	padding: 0;
	text-align: left;
	font-size: 15px;
	color: rgb(112, 112, 112);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ImageContainer = styled.div`
	display: flex;
	gap: 20px;
	padding-top: 20px;

	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 1px solid #fff;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	}

	.img-city {
		width: 100px;
		height: 100px;
		margin-top: 60px;
	}

	.img-profile {
		height: 150px;
	}
`;

export default class Home extends Component {
	render() {
		return (
			<Container fluid>
				<StyledRow>
					<Nav>
						<ImageContainer>
							<img className="img-profile" src={Profile} alt="Profile" />
							<img className="img-city" src={City} alt="City" />
						</ImageContainer>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<NavLink
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer">
							resume
						</NavLink>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<NavLink as={Link} to="/projects">
							projects
						</NavLink>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</Nav>
				</StyledRow>
				<StyledRow>
					<StyledCol md={5}>
						<Row>
							<SocialLinks>
								<a
									href="https://github.com/ramanbhandari"
									target="_blank"
									rel="noopener noreferrer">
									<Icon as={FaGithub} />
								</a>
								<a
									href="https://www.linkedin.com/in/raman-bhandari/"
									target="_blank"
									rel="noopener noreferrer">
									<Icon as={FaLinkedin} />
								</a>
								<a
									href="mailto:bhandar1@myumanitoba.ca"
									target="_blank"
									rel="noopener noreferrer">
									<Icon as={MdMail} />
								</a>
							</SocialLinks>
							<Title>Hi, I'm Raman</Title>
							<Introduction>
								<P1>
									<span>excited for</span> longer days, new homes in tech, large
									windows and tall buildings
								</P1>
								<P2>
									<span>aspiring to</span> diversify my media intake, spend time
									intentionally, go to more museums
								</P2>
								<P1>
									<span>inspired by</span> big cities, thoughtful writing,
									people that love what they do
								</P1>
							</Introduction>
						</Row>
					</StyledCol>
				</StyledRow>
			</Container>
		);
	}
}
