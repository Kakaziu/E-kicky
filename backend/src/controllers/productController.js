const Product = require('../models/Product')

exports.getAllProducts = async (req, res) =>{
    try{ 
        const products = await Product.find()

        return res.json(products)
    }catch(error){
        return res.status(400).json({ error })
    }
}

exports.getProduct = async (req, res) =>{
    const { id } = req.params

    try{
        const product = await Product.findOne({ _id:id })

        return res.json(product)
    }catch(error){
        return res.status(400).json({ error })
    }
}
