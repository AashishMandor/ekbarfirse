
import express from 'express';
import { getAttendanceByClassName, getAttendanceByRollNumber, markAttendance } from '../controllers/SattendanceController.js';

const router=express.Router();
router.post('/mark',markAttendance)
router.get('/student/:studentRollNumber',getAttendanceByRollNumber)
router.get('/student/:className',getAttendanceByClassName)
export default router;