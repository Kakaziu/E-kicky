const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')
const carController = require('./controllers/CarController')

routes.post('/register', userController.register)
routes.post('/login', userController.login)

routes.get('/products', productController.getAllProducts)
routes.get('/products/:id', productController.getProduct)

routes.post('/car', carController.addProduct)

module.exports = routes