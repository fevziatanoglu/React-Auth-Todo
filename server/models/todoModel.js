const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    user:{
        type: 'string',
        require : true
    },
    text:{
        type : 'string',
        require : true
    },
    isChecked : {
        type : 'boolean',
        require : false
    }
} , {collection : "todos"})


module.exports = mongoose.model("Todo" , todoSchema);