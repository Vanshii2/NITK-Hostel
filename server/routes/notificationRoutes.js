import express from 'express';
import Notification from '../models/Notification.js';

const router = express.Router();

// Get all active notifications
router.get('/', async (req, res) => {
    try {
        const notifications = await Notification.find({ 
            isActive: true,
            $or: [
                { expiresAt: { $exists: false } },
                { expiresAt: { $gt: new Date() } }
            ]
        })
            .sort({ createdAt: -1 })
            .populate('createdBy', 'name');
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get notification by ID
router.get('/:id', async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id)
            .populate('createdBy', 'name');
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new notification (admin only)
router.post('/', async (req, res) => {
    try {
        const notification = new Notification(req.body);
        const newNotification = await notification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update notification (admin only)
router.put('/:id', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json(notification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete notification (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 