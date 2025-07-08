import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/hostels/hostelcard.module.css'; 

const HostelCard = ({ 
	name,
	warden,
	_id,
	contact,
	image,
	fetchHostelImage,
	rooms,
	supervisor,
	mess
}) => {
	const [imageToShow, setImageToShow] = useState(image || 'loading.gif');
	const cardRef = useRef(null);

	useEffect(() => {
		if (image !== undefined) {
			setImageToShow(image || 'default_hostel_image.jpg');
			return;
		}

		const fetchImage = async () => {
			await fetchHostelImage(_id);
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					fetchImage();
				}
			});
		});
		if (cardRef.current) {
			observer.observe(cardRef.current);
		}
		return () => observer.disconnect();
	}, [fetchHostelImage, _id, image]);

	return (
		<a ref={cardRef} href={contact} className={styles.card} target="_blank" rel="noopener noreferrer">
			<div className={styles.imageWrapper}>
				<img src={imageToShow} alt={name} className={styles.image} />
			</div>
			<div className={styles.info}>
				<h2 className={styles.name}>{name}</h2>
				<p><span className={styles.label}>Warden:</span> {warden}</p>
				<p><span className={styles.label}>Supervisor:</span> {supervisor}</p>
				<p><span className={styles.label}>Rooms:</span> {rooms}</p>
				{mess && (
					<p><span className={styles.label}>Mess:</span> {mess}</p>
				)}
			</div>
		</a>
	);
};

export default HostelCard;