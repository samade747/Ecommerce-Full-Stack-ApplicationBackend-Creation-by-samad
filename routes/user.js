import { Router } from "express";

const router = Router();

router.get("/usertest", (req, res) => {
    res.send("user test is working");
});

router.post("/userpost", (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send("user post is working");
});


export default router;