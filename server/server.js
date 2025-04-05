// server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const allowedOrigins = [
  'https://travelforall.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


app.get("/",(req,res)=>{
  res.send("Backend is running");
})

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
