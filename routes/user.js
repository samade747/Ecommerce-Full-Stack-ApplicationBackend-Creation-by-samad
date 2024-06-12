import router from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import { verifyToken } from "../verifyToken.js";
import { verifyTokenAndAuthorization } from "./verifyToken.js";

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    } else {
        return res.status(403).json("You are not allowed!");
    }   
});


    
        