// backend/routes/userTwoRoutes.js
import express from 'express';
import { registerUserTwo, loginUserTwo, getUserTwo } from '../controllers/userTwoController.js';
import authTwoMiddleware from '../middlewares/authTwoMiddleware.js';

const router = express.Router();

router.post('/registeruser', registerUserTwo);
router.post('/loginuser', loginUserTwo);
router.get('/userdata', authTwoMiddleware, getUserTwo);

export default router;
