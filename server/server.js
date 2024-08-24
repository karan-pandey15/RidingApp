import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';

import userRoutes from './routes/userRoutes.js';
import userTwoRoutes from "./routes/userTwoRoutes.js";
const app = express();
const PORT = 5010;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/users', userTwoRoutes);


app.use('/api/auth', userRoutes);  
app.use('/api/auth', userTwoRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
