import express from 'express';
import {
    getAllAttendance,
    getAttendanceByTeacher,
    markAttendance
} from '../controllers/attendanceController.js';

const router = express.Router();

// Route to mark attendance for a teacher
router.post('/mark', markAttendance);

// Route to get attendance records of a specific teacher
router.get('/teacher/:teacherId', getAttendanceByTeacher);

// Route to get all attendance records
router.get('/', getAllAttendance);

export default router;
