

// import express from 'express';

// import {
//     createsubject,
//     getallsubjects,
//     updatesubject
// } from "../controllers/SubjectController.js";




// const router =express.Router();
// //for create subject
// router.post('/',createsubject);
// //for update subject
// router.put('/:subjectName', updatesubject);
// //for get subject
// router.get('/', getallsubjects)

// export default router;



import express from 'express';
import {
    createSubject,
    deleteSubject,
    getAllSubjects,
    getSubject,
    getSubjectsByClass,
    updateSubject,
} from '../controllers/subjectController.js';

const router = express.Router();

router.post('/subjects', createSubject);
router.get('/subjects/:id', getSubject);
router.get('/subjects', getAllSubjects);
router.put('/subjects/:id', updateSubject);
router.delete('/subjects/:id', deleteSubject);

// Additional route to get subjects by class
router.get('/classes/:classID/subjects', getSubjectsByClass);

export default router;
