const expressAsyncHandler   = require('expressAsyncHandler');
const income = require('../model/Income');

//create 

const createincome = expressAsyncHandler(async(req ,res) =>
{
    const {title , amount , description ,user} = req.body;
    try {
        const income = await income.create({
            title,
            amount,
            description,
            user,
        });
        res.json(income);
    } catch (error) {
        res.json(error);f
    }
});

module.exports = {
    createincome
};