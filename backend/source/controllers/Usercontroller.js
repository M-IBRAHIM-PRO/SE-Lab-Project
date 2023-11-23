
const User = require ('../model/users')


const adduser = async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
        res.send({data : user})
    }
    catch (err){
        res.status(500).json({error : err.message});
        res.send({error : err.message});
    }
}


//const adduser = async (req,res) => {
//   const {Email, Firstname, Lastname, Password } = req?.body;
//     try{
//         //check if user exists already
//         const userExist = await User.findOne({Email});
//         if(userExist)
//         {
//             return res.status(400).json({error : 'User already exists'});
//         }
//     const user = await User.create({Email, Firstname, Lastname, Password });
//     res.status(200).json( user ); 
// }
//     catch (err){
//         res.status(500).json({error : err.message});
//     }
// }


const fetchUser =async (req, res) => {
try {
    const user = await User.findOne({});
    res.json(user);
} catch (error) {
    res.json(error);
}
};

module.exports = {
    adduser, fetchUser
};