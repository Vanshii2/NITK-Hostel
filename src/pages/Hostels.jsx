import HostelCard from '../components/hostels/HostelCard'
import styles from '../styles/hostels/hostels.module.css'
import { useEffect } from 'react'
import { useHostels } from '../context/HostelsProvider'
import HostelsHolder from '../components/hostels/HostelsHolder'

function Hostels() {
    const { hostels, fetchHostels, fetchHostelImage, shouldFetchData } = useHostels()

    useEffect(() => {
        if (shouldFetchData) {
            fetchHostels();
        }
    }, [shouldFetchData]);

    return ( 
        <div className={styles.heroSection}>
            <HostelsHolder hostels={hostels} fetchHostelImage={fetchHostelImage} />
        </div>
     );
}

export default Hostels;