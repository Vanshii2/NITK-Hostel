import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from '../api/axios';
import toast from 'react-hot-toast';

const HostelsContext = createContext();

export const useHostels = () => useContext(HostelsContext);

export const HostelsProvider = ({ children }) => {
    const [hostels, setHostels] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(true);

    const fetchHostels = useCallback(async () => {
        toast.promise(
            async () => {
                const response = await axios.get('/api/hostels');
                setHostels(response.data);
                setShouldFetchData(false);
            },
            {
                loading: 'Loading...',
                success: () => {
                    return null;
                },
                error: (error) => {
                    setHostels([]);
                    return error.response.data.message || 'Error fetching hostels';
                },
            }
        );
    }, []);

    const fetchHostelImage = useCallback(async (id) => {
        try {
            console.log("fetching image for", id);
            const response = await axios.get(`/api/hostels/image/${id}`);
            console.log("response", response);
            // set image to person with id=id
            setHostels(prevHostels => {
                const updatedHostels = prevHostels.map(hostel => {
                    if (hostel._id === id) {
                        return {
                            ...hostel,
                            image: response.data || null
                        };
                    }
                    return hostel;
                });
                return updatedHostels;
            });
        } catch (error) {
            console.error('Error fetching hostel image:', error);
            return null;
        }
    }, []);

    return (
        <HostelsContext.Provider value={{ hostels, fetchHostels, fetchHostelImage, shouldFetchData }}>
            {children}
        </HostelsContext.Provider>
    );
}