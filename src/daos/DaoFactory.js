import DaoProyectosMem from './DaoProyectosMem.js';
import DaoProyectosFS from './DaoProyectosFS.js';
import { tipoProyecto } from '../config.js';

let daoProyectos

switch (tipoProyecto) {
    case 'MEM':
        daoProyectos = new DaoProyectosMem()
        break
    case 'FS':
        daoProyectos = new DaoProyectosFS('./db/proyectos.json')
        break
    default:
        daoProyectos = new DaoProyectosMem()
}

function getDao() {
    return daoProyectos
}

export { getDao }