import { router } from "express";
import User from "../models/User.js";

router.post("/register", (req, res) => {
    const newUser = new User({
        
    })

    res.send("Login");
})



