import { fromDTO, toDTO } from '../modelos/Proyecto.js'

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
        default:
            throw new Error(`No existe el campo ${campo} en proyecto`)
    }

    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto

}

export { modificarProyecto }