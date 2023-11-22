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
        res.json(error);
    }
});



//Fetch all income

const fetchincome = expressAsyncHandler(async(req ,res) =>
{
    try {
        const income = await income.find();
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

// fetch a single id
const fetch_one_income = expressAsyncHandler(async(req ,res) =>
{
    const { id } = req?.params;
    try {
        const income = await income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});


//update income

const update_income = expressAsyncHandler(async(req ,res) =>
{
    const { id } = req?.params;
    const {title , amount , description} = req.body;
    try {
        const income = await income.findByIdAndUpdate(
            id,
            {
                title,
                description,
                amount,
            },
               { new : true}
        );
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});


// delete a single id
const delete_income = expressAsyncHandler(async(req ,res) =>
{
    const { id } = req?.params;
    try {
        const income = await income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

module.exports = {
    createincome,fetchincome,fetch_one_income,update_income,delete_income
};