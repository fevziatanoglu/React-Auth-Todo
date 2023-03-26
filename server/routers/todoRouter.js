const express = require("express");
const router = express.Router();

const Todo = require("../models/todoModel.js");
const User = require("../models/userModel.js");


router.post("/get", async (req, res) => {
    console.log("test");
})

router.post("/add", async (req, res) => {

    try {
        // get variables from req
        const { user, text } = req.body;

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


router.get("/get", async (req, res) => {

    try {

        const { user } = req.body;

        const todos = await Todo.find({ user });

        return res.status(200).json({ message: "Todos get successfully!", todos });


    } catch (error) {
        return res.status(400).json({ message: "Unexpected error", error });
    }

})


router.delete("/delete/:id", async (req, res) => {

    

    try {

        const todoId = req.params.id;

        if (!(await Todo.findOne({ _id: todoId }))) {
            
            return res.status(404).json({ message: "Todo not found!",});
        }

        const deletedTodo = await Todo.deleteOne({ _id: todoId });

        return res.status(200).json({ message: "Todos delete successfully!", deletedTodo });

    } catch (error) {
        return res.status(400).json({ message: "Unexpected error!", error });
    }


});


module.exports = router;