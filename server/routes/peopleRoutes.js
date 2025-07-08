import express from 'express';
import peopleController from '../controllers/peopleController.js';
import verifyAdminJWT from '../middleware/verifyAdminJWT.js';
const router = express.Router();

// Get all people
router.get('/', peopleController.getAllPeople);

// Get a person by ID
router.get('/:id', peopleController.getPersonById);

// Get a person image
router.get('/image/:id', peopleController.getPersonImage);

// Create a person
// adding verifyAdminJWT middleware to create person
router.post('/', verifyAdminJWT, peopleController.createPerson);

// // Update a person
// router.put('/:id', verifyAdminJWT, peopleController.updatePerson);

// Delete a person
router.delete('/:id', verifyAdminJWT, peopleController.deletePerson);

export default router; 
