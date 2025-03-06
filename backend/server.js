import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import messageRoutes from './routes/message.routes.js';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connecttoMongoDB.js';

const app = express();
dotenv.config(); 
const PORT= process.env.PORT || 3000;

dotenv.config(); 
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use(cookieParser()); 

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});