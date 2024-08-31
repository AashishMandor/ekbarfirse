import express from 'express';
import {
    createStudent,
    deleteStudent,
    getAllStudents,
    getStudentById,
    Studentlogin,
    updateStudent
} from '../controllers/studentController.js';

const router = express.Router();

// Get all students
router.get('/', getAllStudents);

// Get a student by ID
router.get('/:rollNumber', getStudentById);

// Create a new student
router.post('/', createStudent);

// Update a student
router.put('/:studentID', updateStudent);

// Delete a student
router.delete('/:studentID', deleteStudent);


//login a student
router.post('/login', Studentlogin)

export default router;
