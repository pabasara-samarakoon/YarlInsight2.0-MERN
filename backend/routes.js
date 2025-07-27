const express = require('express');
const Todo = require("./models/todo")

//create route instance
const router = express.Router();

//retrieve details from db
router.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
})

//create new task and save it to the db
router.post("/todos", async (req, res) => {
    // res.status(200).json({ msg: "POST todos /api/todos" });
    console.log(req.body)
    const { task } = req.body;
    if (!task) {
        res.status(400).json({ msg: "Task is reqiured" })
    } else {
        const newTodo = new Todo({ task })
        await newTodo.save();
        res.status(201).json(newTodo);
    }

})

//edit a task and save back to the db
router.put("/todos/:id", (req, res) => {
    res.status(200).json({ msg: "PUT todos /api/todos" });
})

//delete a task
router.delete("/todos/:id", async (req, res) => {
    //res.status(200).json({ msg: "DELETE todos /api/todos" });
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "DELETE todos successfully!" });
});

module.exports = router;
