import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

// Example: Get all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.route('/login')
    .post(adminController.adminLogin);

router.route('/register')
    .post(adminController.adminRegister);

router.route('/refresh')
    .post(adminController.adminRefresh);

export default router; 