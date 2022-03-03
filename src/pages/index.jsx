import React, { useState, createRef } from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";

import SEO from "../components/SEO";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserAstronaut,
	faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #7855da;
	color: #ccc;
`;

// Card container with basic spacing and styling
const Card = styled.div`
	height: 600px;
	width: 330px;
	background-color: #fff;
	border-radius: 50px;
	margin: 20px;
`;

// Div containing spacing for text areas/button
const TextContainer = styled.div`
	padding: 30px;
	padding-bottom: 0;
`;

// Styling for title section
const TitleText = styled.div`
	font-family: "Lobster";
	font-size: 2.25rem;
	color: #080808;

	padding-top: 20px;
	padding-bottom: 20px;
`;

// Styling for description section
const DescriptionText = styled.div`
	font-family: "Jura";
	font-size: 0.8rem;
	color: #000;

	padding-bottom: 20px;
`;

// Style for purchase button
const Button = styled.div`
	border-radius: 50px;
	padding: 12px;
	margin-top: 42px;
	margin-bottom: 20px;
	position: sticky;
	text-align: center;

	font-family: "Jura";
	font-size: 1.5rem;
	color: #fff;
	background-color: #da55bd;
`;

// Basic styling for NavBar and components
const Footer = styled.div`
	padding: 0;
	margin: 40px;
	flex-direction: row;

	// border: solid 1px #fff;
`;
// Setting flex direction for NavItem
const NavBar = styled.div`
	display: flex;
	flex-flow: row-wrap;
	align-items: flex-end;
	row-gap: 5px;
`;
// Styling for NavItems
const NavItem = styled.div`
	padding 12px;
	padding-top: 5px;
	padding-bottom: 5px;

	text-decoration: none;
	flex-flow: row-wrap;
	justify-content: space-between;
	white-space: nowrap;

	font-family: "Jura";
	font-size: .90rem;
	color: #fff;
	border-radius: 50px;
`;

// ========= FUNCTIONS ========

// This logs to the console that an Icon has been selected
const handleIconClick = () => {
	console.log(`Icon Selected`);
};

// I understand callback fuctions but wasn't sure how to go
// about it for just a console.log
const buttonClick = () => {
	console.log(`Button Clicked`);
};

// ========= MAIN =========
const Index = ({ data }) => {
	// get the product data from prisma
	const item = data.prismicProduct.data;
	// I tried to reference navbar component using createRef
	const componentSOUP = createRef();

	// set state background color to selected nav item
	const [bgColor, setBgColor] = useState(`#7855da`);

	// set all navbar items to the background color though
	const setNavItemColor = (selection) => {
		// I was trying to create if/else blocks for respective
		// fields by passing selection as an argument
		if (selection === componentSOUP) {
			setBgColor(`#da55bd`);
		} else {
			// this changes bg color for all upon one selected
			setBgColor(`#da55bd`);
		}
	};

	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<Logo
					style={{
						position: `relative`,
						top: `20px`,
						right: `50px`,
					}}
				/>
				<Card>
					{/* calc() sets the right ratio but opposite proportions desired. 
					Using the inverse calculation scaled the image far too large.
					40% seemed like a decent approximation considering 40% is roughly the inverse.
					Was unable to resize image for DESSERT without resizing for all images
					though the other fields seemed appropiately scaled */}
					<img
						src={item.image.url}
						alt={item.title.text}
						style={{
							borderRadius: `50px 50px 0px 0px`,
							// height: `calc(100% / 1.618)`,
							height: `40%`,
							width: `100%`,
						}}
					/>
					<TextContainer>
						<TitleText>{item.title.text}</TitleText>
						<DescriptionText>
							{item.description.text}
						</DescriptionText>
						<Button onClick={buttonClick}>
							ORDER{` `}
							{item.quantity.text.toUpperCase()}
						</Button>
					</TextContainer>
				</Card>
				<Footer>
					<NavBar>
						<NavItem>
							<FontAwesomeIcon
								onClick={handleIconClick}
								icon={faUserAstronaut}
							/>
						</NavItem>
						<NavItem
							// this didn't work:
							// ref={componentSOUP}
							style={{ backgroundColor: bgColor }}
							onClick={setNavItemColor}
						>
							SOUPS
						</NavItem>
						<NavItem
							style={{ backgroundColor: bgColor }}
							onClick={setNavItemColor}
						>
							DESSERTS
						</NavItem>
						<NavItem
							style={{ backgroundColor: bgColor }}
							onClick={setNavItemColor}
						>
							PET FOOD
						</NavItem>
						<NavItem>
							<FontAwesomeIcon
								onClick={handleIconClick}
								icon={faCartArrowDown}
							/>
						</NavItem>
					</NavBar>
				</Footer>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data

// I was hoping to lump on-screen data changes w/ function associated w/ onClick commands
// I tried breaking the query into a function to call data depending on selection chosen
// I understand the benfits of using GraphQL over REST practices
// I think it's rude that I cannot use string interpolation in GraphQL but so it goes
export const query = graphql`
	query {
		prismicProduct(data: { type: { eq: "DESSERT" } }) {
			id
			data {
				title {
					text
				}
				quantity {
					text
				}
				image {
					url
				}
				description {
					text
				}
				type
			}
		}
	}
`;
