const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) =>{
    const { email, password } = req.body

    if(!email || !password){
        return res.status(400).json({ error: 'Há dados faltando'})
    }

    const user = new User({
        email, 
        password: bcrypt.hashSync(password)
    })

    const comparedUser = await User.findOne({ email: user.email })

    if(comparedUser){
        return res.status(400).json({ error: 'Este usuário já existe.' })
    }

    try{
        const savedUser = await user.save()

        return res.json(savedUser)
    }catch(error){
        return res.status(500).json({ error })
    }
}

exports.login = async (req, res) =>{
    const { email, password } = req.body

    try{
        const comparedUser = await User.findOne({ email: email })

        if(!comparedUser){
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }

        const passwordMatch = bcrypt.compareSync(password, comparedUser.password)

        if(!passwordMatch){
            return res.status(404).json({ error: 'Senha incorreta.' })
        }

        return res.json({ message: 'Usuario logado.' })
    }catch(error){
        return res.status(500).json({ error })
    }
}