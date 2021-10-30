import Proyecto, { toDTO } from '../modelos/Proyecto.js'

async function crearProyecto(daoProyectos, nombre, genero, montoReq) {
    const id = Proyecto.nextId()
    const proyecto = new Proyecto(id, nombre, genero, montoReq)
    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto
}

export { crearProyecto }