import Proyecto, { toDTO } from '../modelos/Proyecto.js'
import { getEnviador } from '../modulos/mailer/FactoryEnviador.js'

const sendMailer = getEnviador()


async function crearProyecto(daoProyectos, nombre, genero, mail, montoRequerido) {
    const id = Proyecto.nextId()
    const proyecto = new Proyecto(id, nombre, genero, mail, montoRequerido)
    await daoProyectos.guardar(toDTO(proyecto))
    //const token = = generarToken(proyecto)
    //return {token, usuario}
    await sendMailer.enviar({
        destinatario: `${mail}`,
        asunto: "Creacion de proyecto: ",
        contenido: `Muchas gracias! \nUd. ha credo el proyecto con titulo: ${nombre}. 
            \nEl monto que solicita para su desarrollo es de: $ ${montoRequerido}`
    })
    return proyecto
}

export { crearProyecto }