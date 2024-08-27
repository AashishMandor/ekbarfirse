import express from 'express';
import { createclass } from "../controllers/ClassController.js";

const router =express.Router()

router.post('/', createclass);

export default router