import { fromDTO, toDTO } from '../modelos/Proyecto.js'
import { enviarWp } from '../modulos/WppMailing/Enviadorwp.js'
import { WPconfig } from '../config.js'

async function modificarProyecto(daoProyectos, id, campo, nuevoValor) {
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    switch (campo) {
        case 'genero':
            proyecto.setGenero(nuevoValor)
            break
        case 'monto':
            proyecto.setMontoRequerido(nuevoValor)
            break
        case 'nombre':
            proyecto.setNombre(nuevoValor)
            break
        case 'mail':
            proyecto.setMailCreador(nuevoValor)
        default:
            throw new Error(`No existe el campo ${campo} en proyecto`)
    }

    await daoProyectos.guardar(toDTO(proyecto))
    enviarWp(`Usted modificó el proyecto ${proyecto.nombre}. Campo: ${campo} por el valor ${nuevoValor}`, WPconfig.numEmisor, WPconfig.numDestino)

    return proyecto

}

export { modificarProyecto }