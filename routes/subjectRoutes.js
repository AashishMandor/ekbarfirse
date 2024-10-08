import express from 'express';
import {
    createSubject,
    deleteSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
} from '../controllers/subjectController.js';

const router = express.Router();

// Get all subjects
router.get('/', getAllSubjects);

// Get a subject by ID
router.get('/:subjectID', getSubjectById);

// Create a new subject
router.post('/:classId/subject/', createSubject);
//localhost:5000/api/classes/2/subject/


// Update a subject
router.put('/:subjectID', updateSubject);

// Delete a subject
router.delete('/:subjectID', deleteSubject);

export default router;
