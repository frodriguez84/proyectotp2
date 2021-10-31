import DaoProyectosMem from './DaoProyectosMem.js';
import DaoProyectosFS from './DaoProyectosFS.js';
import { tipoProyecto } from '../config.js';
import DaoProyectosMongoDb from './DaoProyectosMongoDb.js'

let daoProyectos

switch (tipoProyecto) {
    case 'MEM':
        daoProyectos = new DaoProyectosMem()
        break
    case 'FS':
        daoProyectos = new DaoProyectosFS('./db/proyectos.json')
        break
    case 'DB':
        daoProyectos = new DaoProyectosMongoDb()
        break
    default:
        daoProyectos = new DaoProyectosMem()
}

function getDao() {
    return daoProyectos
}

export { getDao }