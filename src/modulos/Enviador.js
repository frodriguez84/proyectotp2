import nodemailer from 'nodemailer'

export default class Enviador {
    constructor(config) {
        this.transporter = nodemailer.createTransport(config)
        this.DESDE = config.auth.user
    }

    async enviar({ destinatario, asunto, contenido }) {
        const mailOptions = {
            //parametros
            from: this.DESDE,
            to: destinatario,
            subject: asunto,
            text: contenido,
        }

        try {
            await this.transporter.sendMail(mailOptions)
        } catch (error) {
            throw new Error(`Email error: ${error.message}`)
        }
    }
}