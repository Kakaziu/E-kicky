const Car = require('../models/Car')

exports.addProduct = async (req, res) =>{
    const { name, price } = req.body

    if(!name || !price){
        return res.status(400).json({ error: 'Há dados faltando.' })
    }

    const newProduct = new Car({
        name,
        price
    })

    try{
        const savedProduct = await newProduct.save()

        return res.json(savedProduct)
    }catch(error){
        return res.status(400).json({ error })
    }
}