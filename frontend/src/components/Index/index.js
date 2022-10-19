import './style.css'
import { AiOutlineShoppingCart, AiTwotoneDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Index(){

    const [products, setProducts] = useState([])

    useEffect(() =>{
        getAllProducts()
    }, [])

    async function getAllProducts(){
        const response = await api.get('/products')

        setProducts(response.data)
    }

    return(

        <>

            <header className="header">
                <h2>E-kicky</h2>

                <Link to={'/login'}>Login</Link>
            </header>

        <div className='index'>

            <aside className='cart'>
                <strong>Carrinho <span><AiOutlineShoppingCart size='20'/></span></strong>

                <div className='productsSpace'>
                    {/* <div className='productCar'>
                        <div>
                            <img src='./assets/images/game.jpg'/>
                            <p>Devil May Cry 5</p>
                        </div>

                        <p>Preço: R$200,00 <span><AiTwotoneDelete size='20'/></span></p>
                    </div> */}
                </div>

                <div className='info'>
                    <p>Items: 0</p>
                    <p>Total: R$00,00</p>
                </div>
            </aside>

            <section className='shopping'>
                {products.map(product =>{
                    return (
                        <div className='productShopping'>
                            <div className='info-game'>
                                <img src={product.urlImg}/>
                                <p>{product.name}</p>
                            </div>

                            <div className='price-game'>
                                <p>Preço: {`R$${product.price},00`}</p>
                                <button>+</button>
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