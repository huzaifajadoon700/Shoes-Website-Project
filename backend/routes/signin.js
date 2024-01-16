// signin.js
import express from 'express';
import { signIn } from '../controllers/signin.js';
import { authorizetoken } from '../middleware/middleware.js';

const router = express.Router();

router.post('/', signIn);

export default router;
   