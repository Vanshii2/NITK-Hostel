import React from "react";
import styles from "../../styles/hostels/hostels.module.css";
import HostelCard from "./HostelCard.jsx";
import Header from "./Header.jsx";

const HostelsHolder = ({ hostels, fetchHostelImage }) => {
	return (
		<>
			<Header>Hostels</Header>
            <div className={styles.hostelsContainer}>
                {hostels.map((hostel, index) => (
                    <HostelCard
                        key={hostel._id || index}
                        name={hostel.name}
                        warden={hostel.warden}
                        _id={hostel._id}
                        contact={hostel.contact}
                        image={hostel.image}
                        fetchHostelImage={fetchHostelImage}
                        supervisor={hostel.supervisor}
                        rooms={hostel.rooms}
                        mess={hostel.mess}
                    />
                ))}
            </div>
		</>
	);
};

export default HostelsHolder;