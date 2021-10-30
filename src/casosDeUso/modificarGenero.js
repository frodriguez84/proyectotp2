import { fromDTO, toDTO } from '../modelos/proyecto.js'

async function modificarGenero(daoProyectos, id, nuevoGenero) {
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    proyecto.setGenero(nuevoGenero)

    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto
    
}

export { modificarGenero }