import express from 'express';
import {
    createStudent,
    deleteStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
} from '../controllers/studentController.js';

const router = express.Router();

// Get all students
router.get('/', getAllStudents);

// Get a student by ID
router.get('/:studentID', getStudentById);

// Create a new student
router.post('/', createStudent);

// Update a student
router.put('/:studentID', updateStudent);

// Delete a student
router.delete('/:studentID', deleteStudent);

export default router;
