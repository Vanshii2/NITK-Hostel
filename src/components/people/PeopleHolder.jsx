import React, { useState } from "react";
import styles from "../../styles/people/people.module.css";
import PeopleCard from "../People/PeopleCard.jsx";
import Header from "../People/Header.jsx";

const PeopleHolder = ({ people, fetchpeopleimage }) => {
	const [activeCard, setActiveCard] = useState(null);

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Representatives</Header>
			<div
				className={`${styles.cards} ${
					activeCard !== null ? styles.showing : ""
				}`}
			>
				{people.map((card, index) => (
					<PeopleCard
						key={index}
						title={card.name}
						subtitle={card.designation}
						_id={card._id}
						number={card.phone}
						email={card.email}
						link={card.contact}
						image={card.image}
						isActive={activeCard === index}
						onClick={() => handleCardClick(index)}
						fetchpeopleimage={fetchpeopleimage}
					/>
				))}
			</div>
		</>
	);
};

export default PeopleHolder;

//last code -
/*
import React, { useState } from "react";
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";

const Representatives = () => {
	const [activeCard, setActiveCard] = useState(null);

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Representatives</Header>
			<div className={`${styles.cards} ${activeCard !== null ? styles.showing : ""}`}>
				{data.wardens.map((card, index) => (
					<Card
						key={index}
						title={card.name}
						subtitle={card.designation}
						// image={`/images/${card.img}`} // Ensure image path is correct
						number={card.number}
						email={card.email}
						link={card.contact}
						isActive={activeCard === index}
						onClick={() => handleCardClick(index)}
					/>
				))}
			</div>
		</>
	);
};

export default Represen
*/

// import React , {useState} from "react";
// // import cardData from "./data.js";
// import data from "../PeopleData/wardens.json"
// import "../PeopleCard.css";
// import Card from "../PeopleCard.jsx";

// const CardGrid = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (id) => {
//     setActiveCard((prevActive) => (prevActive === id ? null : id));
//   };

// 	return (
// 		<div className={`cards ${activeCard !== null ? "showing" : ""}`}>
// 			{cardData.map((card) => (
// 				<Card
// 					key={card.id}
// 					title={card.title}
// 					subtitle={card.subtitle}
// 					image={card.image}
// 					description={card.description}
// 					link={card.link}
//           isActive={activeCard === card.id}
//           onClick={() => handleCardClick(card.id)}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default CardGrid;
