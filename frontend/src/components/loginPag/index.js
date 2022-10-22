import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './style.css'

function LoginPag(){

    const [campEmail, setCampEmail] = useState({ email: '', error: '' })
    const [campPassword, setCampPassword] = useState({ password: '', error: '' })
    const [serverErrorMessage, setServerErrorMessage] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        if(!campEmail.email){
            setCampEmail({ email: '', error: '* O campo "E-mail" está vazio' })
        }else{
            setCampEmail({ email: campEmail.email, error: '' })
        }

        if(!campPassword.password){
            setCampPassword({ password: '', error: '* O campo "Password" está vazio' })
        }else{
            setCampPassword({ password: campPassword.password, error: '' })
        }

        const user = {
            email: campEmail.email,
            password: campPassword.password
        }

        if(campEmail.email && campPassword.password){
            try{
                const response = await api.post('/login', user)
                console.log(response.data)
                
                if(response.status === 200){
                    localStorage.setItem('login', response.data.token)
                    window.location.href = `/`
                }
            }catch(error){
                setServerErrorMessage(error.response.data.error)
            }

            
        }
    }

    return(
        <div className='registerPag'>
            <div className={serverErrorMessage ? 'serverErrorMessage' : 'none'}>
                {serverErrorMessage}
            </div>

            <form onSubmit={handleSubmit}>
                <h2>E-kicky</h2>

                <strong>Faça seu Login</strong>

                <div className='camp'>
                    <label htmlFor='email'>E-mail:</label>
                    <input onChange={(e) => setCampEmail({ email: e.target.value, error: '' })} type='email' placeholder='&#xf0e0;  Insira seu E-mail' value={campEmail.email}/>
                    <span className='messageError'>{campEmail.error}</span>
                </div>

                <div className='camp'>
                    <label htmlFor='password'>Password:</label>
                    <input onChange={(e) => setCampPassword({ password: e.target.value, error: '' })} type='password' placeholder='&#xf023;   Insira sua senha' value={campPassword.password}/>
                    <span className='messageError'>{campPassword.error}</span>               
                </div>

                <button>Login</button>

                <p>Não tem uma conta? <Link to='/register'>Cadastre-se</Link></p>
            </form>
        </div>
    )
}

export default LoginPag