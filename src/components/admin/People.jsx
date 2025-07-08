// MUI card component
import React, { useEffect, useState } from 'react';
import { usePeople } from '../../context/PeopleProvider';
import styles from '../../styles/admin/People.module.css';
import PeopleForm from './PeopleForm';
import PeopleCard from './PeopleCard';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { toast } from 'react-hot-toast';

const People = () => {
    const { people, updatePeople, deletePerson, fetchPeople, fetchPeopleImage, shouldFetchData } = usePeople();
    const [selectedRole, setSelectedRole] = useState('supervisor');
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isPromptOpen, setIsPromptOpen] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (shouldFetchData) {
            fetchPeople();
        }
    }, [fetchPeople, shouldFetchData]);

    const handleDelete = async () => {
        toast.promise(
            async () => {
                const response = await axiosPrivate.delete(`/api/people/${selectedPerson._id}`);
                deletePerson(selectedPerson._id);
                return response;
            },
            {
                loading: 'Processing...',
                success: (response) => {
                    return response?.data?.message || 'Person deleted successfully!';
                },
                error: (error) => {
                    return error?.response?.data?.message || 'Failed to delete person!';
                }
            }
        );
        setIsPromptOpen(false);
        setSelectedPerson(null);
    };

    const filteredPeople = people.filter(person => person.role === selectedRole);

    return (
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <h1 className={styles.heading}>People</h1>
                <button
                    className={styles.addPersonBtn}
                    onClick={() => { setIsFormOpen(true); setSelectedPerson(null); }}
                >
                    Add
                </button>
            </div>
            {isFormOpen && <PeopleForm selectedPerson={selectedPerson} setIsFormOpen={setIsFormOpen} updatePeople={updatePeople} />}
            {!isFormOpen && (
                <>
                    {isPromptOpen && <Prompt selectedPerson={selectedPerson} setIsPromptOpen={setIsPromptOpen} handleDelete={handleDelete} setSelectedPerson={setSelectedPerson} />}
                    <div className={styles.filterButtons}>
                    <button
                        className={selectedRole === 'supervisor' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('supervisor')}
                    >
                        Supervisor
                    </button>
                    <button
                        className={selectedRole === 'warden' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('warden')}
                    >
                        Warden
                    </button>
                    <button
                        className={selectedRole === 'staff' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('staff')}
                        >
                        Staff
                    </button>
                </div>
                <div className={styles.peopleList}>
                    {filteredPeople.map((person) => (
                        <PeopleCard
                            key={person._id}
                            _id={person._id}
                            name={person.name}
                            designation={person.designation}
                            email={person.email}
                            phone={person.phone}
                            image={person.image}
                            onEdit={() => {setSelectedPerson(person); setIsFormOpen(true)}}
                            onDelete={() => {setSelectedPerson(person); setIsPromptOpen(true)}}
                            fetchPeopleImage={fetchPeopleImage}
                        />
                    ))}
                </div>
            </>
            )}
        </div>
    );
};

const Prompt = ({ selectedPerson, setIsPromptOpen, handleDelete, setSelectedPerson }) => {
    return (
        <div className={styles.prompt}>
            <div className={styles.promptContent}>
                <h2>Are you sure you want to delete this person?</h2>
                <p>Name: {selectedPerson?.name}</p>
                <p>Designation: {selectedPerson?.designation}</p>
                <p>Role: {selectedPerson?.role.charAt(0).toUpperCase() + selectedPerson?.role.slice(1)}</p>
                <div className={styles.promptButtons}>  
                    <button className={styles.promptCancelBtn} onClick={() => {setIsPromptOpen(false); setSelectedPerson(null)}}>Cancel</button>
                    <button className={styles.promptDeleteBtn} onClick={() => handleDelete()}>Yes</button>
                </div>
            </div>
        </div>
    );
};  



export default People;