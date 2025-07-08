import express from 'express';
import hostelController from '../controllers/hostelController.js';

const router = express.Router();

// Get all hostels
router.get('/', hostelController.getAllHostels);
router.get('/:id', hostelController.getHostelById);
router.get('/image/:id', hostelController.getHostelImage);

// Create a hostel
router.post('/', hostelController.createHostel);

// Update a hostel
router.patch('/:id', hostelController.updateHostel);

// Delete a hostel
router.delete('/:id', hostelController.deleteHostel);

export default router; 
