import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.js';

dotenv.config();

const app = express()

app.use(express.json())



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 3000");
})