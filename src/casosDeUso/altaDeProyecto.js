import Proyecto, { toDTO } from '../modelos/Proyecto.js'

async function crearProyecto(daoProyectos, nombre, genero, montoRequerido) {
    const id = Proyecto.nextId()
    const proyecto = new Proyecto(id, nombre, genero, montoRequerido)
    await daoProyectos.guardar(toDTO(proyecto))
    return proyecto
}

export { crearProyecto }