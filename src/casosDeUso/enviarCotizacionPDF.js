import { getEnviador } from '../modulos/mailer/FactoryEnviador.js'
import { consultarCosto } from './consultarCosto.js'
import { fromDTO } from '../modelos/proyecto.js'
import { generarPDF } from '../modulos/GeneradorPDF/Generador.js'

const sendMailer = getEnviador()

async function enviarCotizacionPDF(daoProyectos , id) {
  
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    const costo = await consultarCosto(proyecto)

    console.log("El costo en pesos es  $" + costo)

    await generarPDF(`Muchas gracias!\nLa cotizacion solicitada por el proyecto ${proyecto.nombre}.\nEs igual a: $  ${costo}`)

    await sendMailer.enviar({
        destinatario: `${proyecto.mail}`,
        asunto: "Cotizacion del proyecto: ",
        contenido: `Envío de PDF - Cotización`,
        attachments: [
            {
                fileName: 'informe.pdf',
                path: 'informe.pdf',
                contentType: "application/pdf"
            }
        ]
    })
    return proyecto
}

export { enviarCotizacionPDF }
