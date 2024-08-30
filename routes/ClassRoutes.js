// import express from 'express';
// import { createclass, getAllClass, getClassById } from "../controllers/ClassController.js";

// const router =express.Router()

// router.post('/', createclass);
// router.get('/',getAllClass);
// router.get('/:id',getClassById);

// export default router





import express from 'express';
import { createclass, getClassDetails, getClassStudents, getClassSubjects } from '../controllers/classController.js';

const router = express.Router();
router.post('/', createclass);
router.get('/classes/:classID/details', getClassDetails);
router.get('/classes/:classID/subjects', getClassSubjects);
router.get('/classes/:classID/students', getClassStudents);

export default router;
