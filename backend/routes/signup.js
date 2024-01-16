// signinRoutes.js
import express from 'express';
import { addsign } from '../controllers/signup.js';
import { authorizetoken } from '../middleware/middleware.js';

const router = express.Router();

import passport from 'passport';

router.post('/', passport.authenticate('local', { session: false }), addsign);


export default router;
