import express from 'express';
const router = express.Router();
import { protect, admin } from '../middlewares/authMiddleware.js';
// Add admin specific routes and controllers

export default router;
