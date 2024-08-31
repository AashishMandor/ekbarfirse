// import express from 'express';
// import {
//     createTeacher,
//     deleteTeacher,
//     getAllTeachers,
//     getTeacherById,
//     Teacherlogin,
//     updateTeacher
// } from '../controllers/teacherController.js';



// const router = express.Router();

// // Route to create a new teacher
// router.post('/', createTeacher);

// // Route to update an existing teacher
// router.put('/:name', updateTeacher);

// // Route to get teacher details by ID
// router.get('/:name', getTeacherById);

// // Route to get all teachers
// router.get('/', getAllTeachers);

// // Route to delete a teacher
// router.delete('/:name', deleteTeacher);

// // route to login teacher
// router.post('/login',Teacherlogin);









// export default router;



import express from 'express';
import {
    createTeacher,
    deleteTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
} from '../controllers/teacherController.js';

const router = express.Router();

// Get all teachers
router.get('/', getAllTeachers);

// Get a teacher by ID
router.get('/:teacherID', getTeacherById);

// Create a new teacher
router.post('/', createTeacher);

// Update a teacher
router.put('/:teacherID', updateTeacher);

// Delete a teacher
router.delete('/:teacherID', deleteTeacher);

export default router;
