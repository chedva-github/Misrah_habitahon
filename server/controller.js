const mongoose = require('mongoose');
const Prodact = require('./models/prodactModel')
const Category = require('./models/categoryModel')


const addProdact = async (req, res) => {
    const prodact = new Prodact(req.body);
    await prodact.save()
    const newProdact = await Prodact.findOne({_id: prodact._id}).populate('categoryId');
    res.status(200).send(newProdact);   
}

const getProdacts = async (req, res) => {
    const prodact = await Prodact.find({}).populate('categoryId');
    return res.status(200).send(prodact);
};

const getCategories = async (req, res) => {
    const category = await Category.find({});
    return res.status(200).send(category);
};

module.exports = { getProdacts, addProdact, getCategories }
