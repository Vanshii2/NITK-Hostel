import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/admin/People.module.css';

const PeopleCard = ({ 
    _id,
    name, 
    designation, 
    email, 
    phone, 
    image, 
    onEdit, 
    onDelete, 
    fetchPeopleImage 
}) => {
    const [imageToShow, setImageToShow] = useState(image || 'loading.gif');
    const cardRef = useRef(null);

	useEffect(() => {
		if (image !== undefined) {
			setImageToShow(image || 'default_people_image.jpg');
			return;
		}

		const fetchImage = async () => {
			await fetchPeopleImage(_id);
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
	}, [fetchPeopleImage, _id, image]);

    return (
        <div className={styles.card} ref={cardRef}>
            <img className={styles.avatar} src={imageToShow} alt={name} />
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.designation}>{designation}</div>
                <div className={styles.email}>{email}</div>
                <div className={styles.phone}>{phone}</div>
            </div>
            <div className={styles.actions}>
                <button className={styles.editBtn} onClick={onEdit}>Edit</button>
                <button className={styles.deleteBtn} onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default PeopleCard;