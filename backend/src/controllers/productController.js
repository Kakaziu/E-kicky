const Product = require('../models/Product')

exports.getProducts = async (req, res) =>{
    try{ 
        const products = await Product.find()

        return res.json(products)
    }catch(error){
        return res.status(400).json({ error })
    }
}