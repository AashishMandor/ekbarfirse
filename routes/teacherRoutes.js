import express from 'express';
import {
    createTeacher,
    deleteTeacher,
    getAllTeachers,
    getTeacherById,
    Teacherlogin,
    updateTeacher
} from '../controllers/teacherController.js';

const router = express.Router();

// Route to create a new teacher
router.post('/', createTeacher);

// Route to update an existing teacher
router.put('/:id', updateTeacher);

// Route to get teacher details by ID
router.get('/:id', getTeacherById);

// Route to get all teachers
router.get('/', getAllTeachers);

// Route to delete a teacher
router.delete('/:id', deleteTeacher);

// route to login teacher
router.post('/login',Teacherlogin);

export default router;
