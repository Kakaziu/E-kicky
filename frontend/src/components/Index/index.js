import './style.css'
import { AiOutlineShoppingCart, AiTwotoneDelete, AiFillHeart } from 'react-icons/ai'

function Index(){
    return(

        <>
        <div className='index'>
            <aside className='cart'>
                <strong>Carrinho <span><AiOutlineShoppingCart size='20'/></span></strong>

                <div className='productsSpace'>
                    <div className='productCar'>
                        <div>
                            <img src='./assets/images/game.jpg'/>
                            <p>Devil May Cry 5</p>
                        </div>

                        <p>Preço: R$200,00 <span><AiTwotoneDelete size='20'/></span></p>
                    </div>
                </div>

                <div className='info'>
                    <p>Items: 1</p>
                    <p>Total: R$200,00</p>
                </div>
            </aside>

            <section className='shopping'>
              
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>
                <div className='productShopping'>
                    <div className='info-game'>
                        <img src='./assets/images/game.jpg'/>
                    
                        <p>Devil may cry complete edition</p>
                    </div>

                    <div className='price-game'>
                        <p>Preço: R$200,00</p>

                        <button>+</button>
                    </div>
                </div>


            </section>            
        </div>
        </>

    )
}

export default Index