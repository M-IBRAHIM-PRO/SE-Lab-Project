const mongoose = require('mongoose');
const dbUrl = "mongodb://127.0.0.1:27017/tracer";

mongoose.connect(dbUrl);


const dbConnect = async () => {
    try {
        console.log(`DB Connect Successfully`);

    } catch (error) {
      console.log(`Error ${error.message}`);      
    }
};

module.exports =dbConnect;