import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(express.json())

mongoose.connect(
    process.env.MONGO_URL
).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 3000");
})