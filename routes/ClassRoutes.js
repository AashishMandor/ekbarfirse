import express from 'express';
import {
    createClass,
    deleteClass,
    getClassById,
    getClassDetails,
    getStudentsByClassId,
    getSubjectsByClassId,
    updateClass
} from '../controllers/classController.js';

const router = express.Router();

// Get all classes
router.get('/', getClassDetails);
//localhost:5000/api/classes/

// Get a class by ID
router.get('/:classID', getClassById);
//localhost:5000/api/classes/:classID

// Create a new class
router.post('/', createClass);
//localhost:5000/api/classes/

// Update a class
router.put('/:classID', updateClass);

// Delete a class
router.delete('/:classID', deleteClass);

// Route to get students by classId
router.get('/:classID/students', getStudentsByClassId);
//localhost:5000/api/classes/:classId/students

// Route to get subjects by classId
router.get('/:classID/subjects', getSubjectsByClassId);
//localhost:5000/api/classes/:classId/subjects

export default router;
