const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const carController = require('./controllers/CarController')

routes.post('/register', userController.register)
routes.post('/login', userController.login)

routes.get('/products', productController.getAllProducts)
routes.get('/products/:id', productController.getProduct)

routes.get('/car', carController.getAllProductsInCar)
routes.post('/car', carController.addProduct)
routes.delete('/car/:id', carController.deleteProduct)

module.exports = routes