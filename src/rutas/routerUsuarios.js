import { Router } from 'express'
import { registroUsuario } from '../casosDeUso/registrarUsuario.js'

const routerUsuarios = Router()

routerUsuarios.post('/', async (req, res) => {
    try {
        // Implemento lógica de negocio, sea cual sea
        // En este caso dejo un código de prueba en la implementación
        // generarToken debería ser usado en un caso de uso pasándole 
        // un correspondiente usuario
        const user = req.body
        //const tokenPrueba = generarToken(user)
        const userReg = registroUsuario(req.body)

        res.status(201).json(userReg)
        // const usuario = new Usuario()
        // res.json(usuario)
    } catch (error) {
        res.json({error: error.message})
    }
})

export { routerUsuarios }