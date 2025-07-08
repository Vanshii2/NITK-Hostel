import People from '../models/People.js';

// Get all people
const getAllPeople = async (req, res) => {
    try {
        const people = await People.find({}, { image: 0 });
        res.json(people);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPersonImage = async (req, res) => {
    try {
        const person = await People.findById(req.params.id, { image: 1 });
        res.json(person.image);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getPersonById = async (req, res) => {
    try {
        const person = await People.findById(req.params.id);
        if (!person) return res.status(404).json({ message: 'Person not found' });
        res.json(person);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createPerson = async (req, res) => {
    if (!req.adminInfo) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const person = req.body;
    if (!person._id) delete person._id;

    try {
        if (!person.name || !person.role || !person.designation) {
            return res.status(400).json({ message: 'Some required fields are missing!' });
        }
        if (person._id) {
            const updatedPerson = await People.findByIdAndUpdate(person._id, req.body, { new: true });
            if (!updatedPerson) {
                return res.status(400).json({ message: 'Person not found!' });
            }
            console.log("UPDATED PERSON: ", updatedPerson);
            return res.status(200).json({ message: 'Person updated successfully!', person: updatedPerson });
        } else {
            const toSavePerson = new People(person);
            const newPerson = await toSavePerson.save();
            if (!newPerson) {
                return res.status(400).json({ message: 'Failed to create new person!' });
            }
            console.log("NEW PERSON: ", newPerson);
            return res.status(201).json({ message: 'Person created successfully!', person: newPerson });
        }
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

// Create multiple persons
// exports.createMultiplePersons = async (req, res) => {
//     const persons = req.body;
//     for (const person of persons) {
//         if (!person.name || !person.role || !person.designation) {
//             return res.status(400).json({ message: 'All fields are required', person: person });
//         }
//     }
//     try {
//         const newPersons = await People.insertMany(persons);
//         res.status(201).json({message: persons.length + " persons created successfully"});
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// Update a person
// const updatePerson = async (req, res) => {
//     try {
//         const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedPerson) return res.status(404).json({ message: 'Person not found' });
//         res.json(updatedPerson);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// Delete a person
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await People.findByIdAndDelete(req.params.id);
        if (!deletedPerson) return res.status(404).json({ message: 'Person not found' });
        res.json({ message: 'Person deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllPeople,
    getPersonImage,
    getPersonById,
    createPerson,
    // updatePerson,
    deletePerson
};