import './style.css'
import { AiFillFastForward, AiOutlineShoppingCart, AiTwotoneDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Index(){

    const [products, setProducts] = useState([])
    const [productscCar, setProductsCar] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [isLogged, setIsLogged] = useState(localStorage.getItem('login'))

    useEffect(() =>{
        getAllProducts()
        getAllProductsInCar()
    }, [])

    useEffect(() =>{    
        getTotalPrice()
    }, [productscCar])

    async function getAllProducts(){
        const response = await api.get('/products')

        setProducts(response.data)
    }

    async function getAllProductsInCar(){
        const response = await api.get('/car')

        setProductsCar(response.data)
    }

    async function getProduct(id){
        const response = await api.get(`/products/${id}`)
       
        return response.data
    }

    async function addProductInCar(id){

        if(isLogged){
            const product = await getProduct(id)

            const data = {
                name: product.name,
                urlImg: product.urlImg,
                price: product.price
            }

            const response = await api.post('/car', data)
            setProductsCar([...productscCar, response.data])
        }else{
            alert('Usuário não está logado')
        }
        
    }

    function getTotalPrice(){
        let total = 0

        for(let i = 0; i < productscCar.length; i++){
            total += productscCar[i].price
        }

        setTotalPrice(total)

    }

    async function deleteProductInCar(id){
        const response = await api.delete(`/car/${id}`)
        const productDeleted = response.data

        const filteredProducts = productscCar.filter(product => product._id !== productDeleted._id)

        setProductsCar(filteredProducts)
    }

    async function logout(){
        localStorage.removeItem('login')
        const response = await api.delete('/deleteall')
        setProductsCar([])
    }

    return(

        <>

            <header className="header">
                <h2>E-kicky</h2>

                { isLogged ? <a href='/' onClick={logout}>Logout</a> : <Link to={'/login'}>Login</Link>}
            </header>

        <div className='index'>

            <aside className='cart'>
                <strong>Carrinho <span><AiOutlineShoppingCart size='20'/></span></strong>

                <div className='productsSpace'>
                    {productscCar.map(productCar =>{
                        return(
                            <div className='productCar' key={productCar._id}>
                                <div>
                                    <img src={productCar.urlImg}/>
                                    <p>{productCar.name}</p>
                                </div>

                                <p>Preço: R${productCar.price},00 <span onClick={() => deleteProductInCar(productCar._id)}><AiTwotoneDelete size='20'/></span></p>
                            </div>
                        )
                    })}
                </div>

                <div className='info'>
                    <p>Items: {productscCar.length}</p>
                    <p>Total: R${totalPrice},00</p>
                </div>
            </aside>

            <section className='shopping'>
                {products.map(product =>{
                    return (
                        <div className='productShopping' key={product._id}>
                            <div className='info-game'>
                                <img src={product.urlImg}/>
                                <p>{product.name}</p>
                            </div>

                            <div className='price-game'>
                                <p>Preço: {`R$${product.price},00`}</p>
                                <button onClick={() => addProductInCar(product._id)}>+</button>
                            </div>
                        </div>
                    )
                })}
                
            </section>            
        </div>
        </>

    )
}

export default Index