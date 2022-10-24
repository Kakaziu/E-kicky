const Cart = require('../models/Cart')
const Product = require('../models/Product')

exports.addProduct = async (req, res) =>{
    const { product, price } = req.body

    const newProduct = new Cart({
        product,
        price
    })

    try{
        const savedProduct = await newProduct.save()
    }catch(e){
        console.log(e)
    }
}