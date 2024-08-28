import express from 'express';

import { createcomplain } from "../controllers/complainController.js";

const router =express.Router();
router.post('/',createcomplain)

export default router;