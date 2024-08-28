import express from 'express';

import { createcomplain, deleteComplain, getAllComplain } from "../controllers/complainController.js";

const router =express.Router();
router.post('/',createcomplain)
router.get('/',getAllComplain);
router.delete('/:id',deleteComplain);

export default router;