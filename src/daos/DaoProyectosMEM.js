import DaoProyectos from './DaoProyectos.js'

class DaoProyectosMem extends DaoProyectos {
    constructor() {
        super()
        this.proyectos = []
    }

    async buscar(id) {
        const index = this.proyectos.findIndex(p => p.id === id)
        if (index != -1) {
            return this.proyectos[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(proyecto) {
        const index = this.proyectos.findIndex(p => p.id === proyecto.id)
        if (index == -1) {
            this.proyectos.push(proyecto)
        } else {
            this.proyectos[ index ] = proyecto
        }
    }
}

export default DaoProyectosMem