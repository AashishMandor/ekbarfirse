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
    getTeacher,
    getTeachersByClass,
    updateTeacher,
} from '../controllers/teacherController.js';

const router = express.Router();

router.post('/teachers', createTeacher);
router.get('/teachers/:id', getTeacher);
router.get('/teachers', getAllTeachers);
router.put('/teachers/:id', updateTeacher);
router.delete('/teachers/:id', deleteTeacher);

// Additional route to get teachers by class
router.get('/classes/:classID/teachers', getTeachersByClass);

export default router;

