import { getEnviador } from '../modulos/mailer/FactoryEnviador.js'
import { consultarCosto } from './consultarCosto.js'
import { fromDTO} from '../modelos/proyecto.js'


const sendMailer = getEnviador()


async function enviarCotizacion(daoProyectos , id) {
  
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    const costo = await consultarCosto(proyecto)

    console.log("El costo en pesos es  $" + costo)

    await sendMailer.enviar({
        destinatario: `${proyecto.mail}`,
        asunto: "Cotizacion del proyecto: ",
        contenido: `Muchas gracias! \nLa cotizacion solicitada por el proyecto ${proyecto.nombre}. 
            \nEs igual a: $  ${costo}`
    })
    return proyecto
}

export { enviarCotizacion }