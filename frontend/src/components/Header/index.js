import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return (
        <header className="header">
            <h2>E-kicky</h2>

            <ul>
                <li><Link to='/register'>Cadastrar</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </header>
    )   
}

export default Header