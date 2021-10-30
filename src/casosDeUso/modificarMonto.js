import { fromDTO, toDTO } from '../modelos/Proyecto.js'

async function modificarMonto(daoProyectos, id, nuevoMonto) {
    const proyecto = fromDTO(await daoProyectos.buscar(Number(id)))

    proyecto.setMontoRequerido(nuevoMonto)

    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto
    
}

export { modificarMonto }