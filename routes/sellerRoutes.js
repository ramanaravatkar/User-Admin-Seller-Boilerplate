import express from 'express';
const router = express.Router();
import { protect, seller } from '../middlewares/authMiddleware.js';
// Add seller specific routes and controllers

export default router;
