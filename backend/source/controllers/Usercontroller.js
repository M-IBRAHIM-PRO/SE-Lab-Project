const User = require ('../model/users')

const adduser = async (req,res) => {
 const {Email, Firstname, Lastname, Password } = req?.body;
    try{
        //check if user exists already
        const userExist = await User.findOne({Email});
        if(userExist)
        {
            return res.status(400).json({error : 'User already exists'});
        }
    const user = await User.create({Email, Firstname, Lastname, Password });
    res.status(200).json( user ); 
}
    catch (err){
        res.status(500).json({error : err.message});
    }
}

module.exports = {
    adduser
};