import { Link } from 'react-router-dom'
import './style.css'

function Header(){
    return (
        <header className="header">
            <h2>E-kicky</h2>

            <Link to={'/login'}>Login</Link>
        </header>
    )   
}

export default Header