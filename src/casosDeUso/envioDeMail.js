import Enviador from '../modulos/mailer/Enviador.js'
import { config } from '../modulos/mailer/config.js'


const sendMailer = new Enviador(config)

export function getEnviador() {
    return sendMailer
}