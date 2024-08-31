import express from 'express';
import {
    createClass,
    deleteClass,
    getClassById,
    getClassDetails,
    updateClass,
} from '../controllers/classController.js';

const router = express.Router();

// Get all classes
router.get('/', getClassDetails);

// Get a class by ID
router.get('/:classID', getClassById);

// Create a new class
router.post('/', createClass);

// Update a class
router.put('/:classID', updateClass);

// Delete a class
router.delete('/:classID', deleteClass);

export default router;
