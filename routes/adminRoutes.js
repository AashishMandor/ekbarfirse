import express from 'express';
import { login, signup } from '../controllers/adminController.js'; // Ensure correct path and file extension

const router = express.Router();

// Route for admin signup
router.post('/signup', signup);

// Route for admin login
router.post('/login', login);

export default router;
