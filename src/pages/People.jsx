import PeopleHolder from "../components/people/PeopleHolder.jsx";
import { useEffect, useState } from "react";
import { usePeople } from "../context/PeopleProvider";

function People() {
    const { people, fetchPeople, fetchPeopleImage, shouldFetchData } = usePeople();
    const [wardens, setWardens] = useState([]);

    useEffect(() => {
        if (shouldFetchData) {
            fetchPeople();
        }
    }, [shouldFetchData]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const wardenData = people.filter((it) => it.role === "warden");
                setWardens(wardenData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [people]);
    return ( <>
        <PeopleHolder people={wardens} fetchpeopleimage={fetchPeopleImage}/>
        {/* <HostelStaff/> */}
        {/* <SuperVisors/> */}
        </>
     );
}

export default People;