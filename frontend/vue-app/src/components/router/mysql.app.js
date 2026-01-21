const router = require("express").Router();
const db = require("../config/mysql");


router.post("/task", async (req, res) => {
const [r] = await db.query(
"INSERT INTO tasks(title) VALUES (?)",
[req.body.title]
);
res.json({ id: r.insertId });
});


router.get("/tasks", async (req, res) => {
const [rows] = await db.query("SELECT * FROM tasks");
res.json(rows);
});


module.exports = router;