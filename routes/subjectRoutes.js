

import express from 'express';

import {
    createsubject,
    getallsubjects,
    updatesubject
} from "../controllers/SubjectController.js";




const router =express.Router();
//for create subject
router.post('/',createsubject);
//for update subject
router.put('/:subjectName', updatesubject);
//for get subject
router.get('/', getallsubjects)

export default router;