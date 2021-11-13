import { WPconfig } from '../../config.js'

import twilio from 'twilio'

        export async function enviarWp(mensaje,remitente,destinatario) {

          const client = new twilio(WPconfig.accountSid, WPconfig.authToken);
          client.messages.create({ 
                   body: mensaje, 
                   from: 'whatsapp:'+ remitente,       
                   to: 'whatsapp:'+ destinatario 
                 }) 
                .then(message => console.log(message.sid)) 
                .done();
        }
