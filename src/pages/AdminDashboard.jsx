import React, { useEffect } from 'react';
import { useState } from 'react';
import SideBar from '../components/admin/SideBar';
import styles from '../styles/admin/dashboard.module.css';
import People from '../components/admin/People';


function AdminDashboard() {
    const [selectedEntity, setSelectedEntity] = useState(null);

    return (
        <div className={styles.dashboardContainer}>
            <SideBar selectedEntity={selectedEntity} setSelectedEntity={setSelectedEntity} />
            
            {selectedEntity === null && (
                <>
                    <h1>Welcome!</h1>
                    <h2>Choose an entity to get started!</h2>
                </>
            )}
            {selectedEntity === 'people' && (
                <People />
            )}
            {selectedEntity === 'hostels' && (
                <>
                    <h1>Hostels</h1>
                </>
            )}
            {selectedEntity === 'events' && (
                <>
                    <h1>Events</h1>
                </>
            )}
            {selectedEntity === 'notifications' && (
                <>
                    <h1>Notifications</h1>
                </>
            )}
        </div>
    );
}

export default AdminDashboard;