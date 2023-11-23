
const income = require('../model/Income');
const expense = require('../model/expense');

//create expense

const create_expense = async(req ,res) =>
{
    const {title , amount , description ,user} = req.body;
    try {
        const expense = await expense.create({
            title,
            amount,
            description,
            user,
        });
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
};



//Fetch all expense

const fetch_expense =async(req ,res) =>
{
    try {
        const expense = await expense.find();
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
};

// fetch a single id
const fetch_one_expense = async(req ,res) =>
{
    const { id } = req?.params;
    try {
        const expense = await expense.findById(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
};


//update expense

const update_expense = async(req ,res) =>
{
    const { id } = req?.params;
    const {title , amount , description} = req.body;
    try {
        const expense = await expense.findByIdAndUpdate(
            id,
            {
                title,
                description,
                amount,
            },
               { new : true}
        );
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
};


// delete a single id
const delete_expense = async(req ,res) =>
{
    const { id } = req?.params;
    try {
        const expense = await expense.findByIdAndDelete(id);
        res.json(expense);
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    create_expense,fetch_expense,fetch_one_expense,update_expense,delete_expense
};