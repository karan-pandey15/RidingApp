// import express from 'express';
// import { registerUser, upload } from '../controllers/userController.js';

// const router = express.Router();

// // Route for user registration
// router.post('/register', upload.fields([{ name: 'marksheet' }, { name: 'image' }, { name: 'checkBook' }]), registerUser);

// export default router;

// userRoutes.js
import express from 'express';
import { registerUser, upload, loginUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
 
const router = express.Router();

// Route for user registration
router.post('/register', upload.fields([{ name: 'marksheet' }, { name: 'image' }, { name: 'checkBook' }]), registerUser);

// Route for user login
router.post('/login', loginUser);

// Route to get authenticated user's information
router.get('/user', authMiddleware, (req, res) => {
    res.status(200).json(req.user);
});

export default router;
