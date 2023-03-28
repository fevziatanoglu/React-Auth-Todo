const express = require("express");
const router = express.Router();

const Todo = require("../models/todoModel.js");
const User = require("../models/userModel.js");


// ======================================= ADD =================================
router.post("/add", async (req, res) => {

    try {
        // get variables from req
        const { user, text } = req.body;
        console.log(req.body);

        const isUserExist = await User.findOne({ _id: user })

        // if(!isUserExist){
        //     return res.status(404).json({message : "User not found" });
        // }

        const newTodo = await Todo.create({
            user,
            text,
            isChecked: false
        });

        return res.status(200).json({ message: "Todo created successfully!.", newTodo })

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }
})

// ======================================= GET =================================
router.get("/get/:user", async (req, res) => {

    try {
        // console.log(req.params)
        const { user } = req.params;

        const todos = await Todo.find({ user });

        return res.status(200).json({ message: "Todos get successfully!", todos });


    } catch (error) {
        return res.status(400).json({ message: "Unexpected error", error });
    }

})

// ======================================= REMOVE =================================
router.delete("/delete/:id", async (req, res) => {



    try {
        const todoId = req.params.id;
        console.log(req.params);

        // if (!(await Todo.findOne({ _id: todoId }))) {

        //     return res.status(404).json({ message: "Todo not found!",});
        // }

        const deletedTodo = await Todo.deleteOne({ _id: todoId });

        return res.status(200).json({ message: "Todos delete successfully!", deletedTodo });

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }
});


// ======================================= CHECK =================================

router.put("/check/:id", async (req, res) => {



    try {
        const id = req.params.id;

        const todo = await Todo.findOne({ _id: id });

        const newTodo = await Todo.findOneAndUpdate({ _id: id }, { isChecked: !todo.isChecked });
        return res.status(200).json({ newTodo });

        // const newTodo = await Todo.findOneAndUpdateOne({ _id: id } , { isChecked: false });

        // return res.status(200).json({ message: "Todo updated successfully!", newTodo });


    } catch (error) {
        return res.status(400).json({ message: "Unexpected error mk!", error });
    }


})

module.exports = router;