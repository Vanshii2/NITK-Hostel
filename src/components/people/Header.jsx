import React from "react";
import styles from "../../styles/people/header.module.css"; // Import the CSS module file for styling
// import '../../../styles/people.module.css'; // Import the people module CSS for global styles

function Header({ children }) {
	return (
		<>
			<div className={styles.headerImage}>
				<h1 className={styles.heading} style={{ textDecoration: "underline" }}>
					{children}
				</h1>
			</div>
		</>
	);
}

export default Header;
