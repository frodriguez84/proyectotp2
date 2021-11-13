import Usuario from '../modelos/Usuario.js'
import { generarToken } from '../modulos/GeneradorDeToken/generadorToken.js'
import { getEnviador } from '../modulos/mailer/FactoryEnviador.js'
import { generarID } from '../modelos/Usuario.js'

const mailer = getEnviador()

export async function registroUsuario(datos) {
    const id = generarID()
    const user = new Usuario({ ...datos, id})
    // Persistir
//    console.log(user);

    const token = generarToken({id: user.id})
//    console.log(token);

    const msj = {
        destinatario: user.email,
        asunto: 'Envio de Token',
        contenido: `Su registro se completó correctamente. Su token es ${token}`
    }

    await mailer.enviar(msj)

    return { user, token }
}