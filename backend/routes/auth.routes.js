import express from 'express';
import jwt from 'jsonwebtoken';

import { signup,login,logout } from '../controllers/auth.controller.js';
const router = express.Router();



router.post('/signup',signup);

router.post('/login',login);

router.post('/logout',logout);

export default router;