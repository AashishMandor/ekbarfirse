import express from 'express';
import { createclass, getAllClass, getClassById } from "../controllers/ClassController.js";

const router =express.Router()

router.post('/', createclass);
router.get('/',getAllClass);
router.get('/:id',getClassById);

export default router