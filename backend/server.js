import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import messageRoutes from './routes/message.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';



import connectToMongoDB from './db/connecttoMongoDB.js';

const app = express();
dotenv.config(); 
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser()); 




app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});