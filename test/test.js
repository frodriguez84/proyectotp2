import { crearProyecto } from '../src/casosDeUso/altaDeProyecto.js'
import { modificarProyecto } from '../src/casosDeUso/modificarProyecto.js'
import { getDao } from '../src/daos/DaoFactory.js'
//import { getEnviador } from '../src/modulos/FactoryEnviador.js'
import { getEnviador } from '../src/casosDeUso/envioDeMail.js'
import { registroUsuario } from '../src/casosDeUso/registrarUsuario.js'

const daoProyectos = getDao()
const sendMailer = getEnviador()



try {
    // const p1 = await crearProyecto(daoProyectos, "Mario Bros", "Accion", "fernando.rodriguez84@yahoo.com.ar", 900)
    // console.log(p1)
    
    // const msg = {
    //     destinatario: `${p1.mail}`,
    //     asunto: "Creacion de proyecto: ",
    //     contenido: `Ud. ha credo el proyecto con titulo: ${p1.nombre}. 
    //         \nEl monto que solicita para su desarrollo es de: $ ${p1.monto}`
    // }
    // await sendMailer.enviar(msg)
    // console.log('Mail enviado...')

    /* const p2 = await crearProyecto(daoProyectos, "Doom", "Estrategia", "fernando.rodriguez84@yahoo.com.ar", 700)
    const p3 = await crearProyecto(daoProyectos, "Tetris", "Deporte", "fernando.rodriguez84@yahoo.com.ar", 200)
    const p4 = await crearProyecto(daoProyectos, "GTA", "Gore", "fernando.rodriguez84@yahoo.com.ar", 1564)
    console.log(p1) */

    // const modificada = await modificarProyecto(daoProyectos, p1.id, 'monto', 850)
    // console.log(modificada)
    /* const modificada = await modificarMonto(daoProyectos, p2.id, 1000)
    console.log(modificada)
    const modificada2 = await modificarNombre(daoProyectos, p1.id, "Lineage 2")
    console.log(modificada2)
    const modificada3 = await modificarGenero(daoProyectos, p3.id, "Indie")
    console.log(modificada3) */
    // console.log(p1, p2, p3)
    registroUsuario()

} catch (error) {
    console.log(error)
}
