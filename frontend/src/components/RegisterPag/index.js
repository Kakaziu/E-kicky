import './style.css'

function RegisterPag(){

    function handleSubmit(e){
        e.preventDefault()
    }


    return(
        <div className='registerPag'>
            <form onSubmit={handleSubmit}>
                <h2>E-kicky</h2>

                <strong>Faça seu cadastro</strong>

                <div className='camp'>
                    <label htmlFor='email'>E-mail:</label>
                    <input type='email' placeholder='&#xf0e0;   Insira seu E-mail'/>
                </div>

                <div className='camp'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' placeholder='&#xf023;   Insira sua senha'/>
                </div>

                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default RegisterPag