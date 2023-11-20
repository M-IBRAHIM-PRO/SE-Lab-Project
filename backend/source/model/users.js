const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
FirstName : {  
    require : [true, "first name is required"],
    type : String,
    },
LastName : {  
    require : [true, "Last name is required"],
    type : String,
},
Email : {  
    require : [true, "email is required"],
    type : String,
    },
Password : {  
            require : [true, "Password is required"],
            type : String,
            },
IsAdmin : {  
                type :Boolean,
                default : false,
                },
                },
{timestamps : true}
);

module.exports= mongoose.model('Users',usersSchema)