import DaoProyectos from './DaoProyectos.js'

class DaoProyectosMontoDb extends DaoProyectos {

    constructor() {
        super()
    }

    async buscar() {
        throw new Error('falta implementar')
    }

    async guardar() {
        throw new Error('falta implementar')
    }
}

export default DaoProyectosMontoDb