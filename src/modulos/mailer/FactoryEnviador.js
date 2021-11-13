import Enviador from './Enviador.js'
import { config } from './config.js'


const sendMailer = new Enviador(config)

export function getEnviador() {
    return sendMailer
}