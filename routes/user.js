import router from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import { verifyToken } from "../verifyToken.js";

router.put("/:id", verifyToken, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
    } else {
        return res.status(403).json("You are not allowed!");
    }   
});


    
        