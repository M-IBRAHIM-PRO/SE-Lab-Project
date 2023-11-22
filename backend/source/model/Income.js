const mongoose = require('mongoose')

const incomeSchema = mongoose.Schema({
title : {  
    require : [true, "Title is required"],
    type : String,
    },
description : {  
    require : [true, "Description is required"],
    type : String,
},
type : {  
    type : String,
    default : "income",    
},
amount : {  
            require : [true, "Amount is required"],
            type : Number,
            },
user : {  
                type :mongoose.Schema.Types.ObjectId,
                ref : 'Users',
                required : [true, "User Id is required"],
                },
                },
{timestamps : true}
);

module.exports= mongoose.model('income',incomeSchema)