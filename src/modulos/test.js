import { getEnviador } from './FactoryEnviador.js'


const sendMailer = getEnviador()

const msg = {
    destinatario: "fernando.rodriguez84@yahoo.com.ar",
    asunto: "Cracion de proyecto:",
    contenido: "Envio correcto"
}

try {
    await sendMailer.enviar(msg)
    console.log('Mail enviado...')
} catch (error) {
    console.log(error)
}



