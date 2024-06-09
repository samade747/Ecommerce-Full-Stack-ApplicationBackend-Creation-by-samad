import { router } from "express";
import User from "../models/User.js";


// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    // save user and respond
    const savedUser = await newUser.save()
    console.log(savedUser)
    
})



