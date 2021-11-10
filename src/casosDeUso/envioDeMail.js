import Enviador from '../modulos/Enviador.js'
import { config } from '../modulos/config.js'


const sendMailer = new Enviador(config)

export function getEnviador() {
    return sendMailer
}