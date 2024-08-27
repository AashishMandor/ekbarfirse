import express from 'express';
import {
    createstudents,
    deletestudent,
    getAllstudents,
    getAllStudentsWithAttendance,
    getstudentById,
    studentlogin,
    updatestudent, // Ensure correct path and file extension
} from '../controllers/studentController.js';

import { markAttendance } from '../controllers/SattendanceController.js';


const router = express.Router();

router.post('/', createstudents)
//http://localhost:5000/api/student/

// Route to update an existing student
router.put('/:id', updatestudent);
//http://localhost:5000/api/student/1

// Route to get student details by ID
router.get('/detail/:id', getstudentById);
//http://localhost:5000/api/student/2

// Route to get all students
router.get('/', getAllstudents);
// http://localhost:5000/api/student/


// Route to delete a student
router.delete('/:id', deletestudent);

// route to login student
router.post('/login',studentlogin);

router.get('/allstudents', getAllStudentsWithAttendance);
router.post('/attendance', markAttendance);


export default router;