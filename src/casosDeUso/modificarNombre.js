import { fromDTO, toDTO } from '../modelos/proyecto.js'

async function modificarNombre(daoProyectos, id, nuevonombre) {
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    proyecto.setNombre(nuevonombre)

    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto
    
}

export { modificarNombre }