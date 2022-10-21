const Car = require('../models/Car')

exports.getAllProductsInCar = async (req, res) =>{
    try{
        const allProductsInCar = await Car.find()

        return res.json(allProductsInCar)
    }catch(error){
        return res.status(500).json({ error })
    }
}

exports.addProduct = async (req, res) =>{
    const { name, urlImg ,price } = req.body

    if(!name || !price){
        return res.status(400).json({ error: 'Há dados faltando.' })
    }

    const newProduct = new Car({
        name,
        urlImg,
        price
    })

    try{
        const savedProduct = await newProduct.save()

        return res.json(savedProduct)
    }catch(error){
        return res.status(500).json({ error })
    }
}

exports.deleteProduct = async (req, res) =>{
    const { id } = req.params

    try{
        const deletedProduct = await Car.findByIdAndDelete(id)

        return res.json(deletedProduct)
    }catch(e){
        return res.status(500).json({ error })
    }
}