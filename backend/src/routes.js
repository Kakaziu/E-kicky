const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')
const productController = require('./controllers/productController')

routes.post('/register', userController.register)
routes.post('/login', userController.login)

routes.get('/products', productController.getAllProducts)
routes.get('/products/:id', productController.getProduct)

module.exports = routes