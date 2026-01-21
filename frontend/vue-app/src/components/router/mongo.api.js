const router = require("express").Router();
const User = require("../models/User");


router.post("/user", async (req, res) => {
const user = await User.create(req.body);
res.json(user);
});


router.get("/users", async (req, res) => {
res.json(await User.find());
});


module.exports = router;