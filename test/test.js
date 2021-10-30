//import { modificarGenero } from '../src/casosDeUso/modificarGenero'
import { crearProyecto } from '../src/casosDeUso/altaDeProyecto.js'
import { modificarGenero } from '../src/casosDeUso/modificarGenero.js'
//import { modificarNombre } from '../src/casosDeUso/modificarNombre'
import { modificarMonto } from '../src/casosDeUso/modificarMonto.js'
import { modificarNombre } from '../src/casosDeUso/modificarNombre.js'

import { getDao } from '../src/daos/DaoFactory.js'

const daoProyectos = getDao()

try {
    const p1 = await crearProyecto(daoProyectos, "Mario Bros", "Accion", 900)
    const p2 = await crearProyecto(daoProyectos, "Doom", "Estrategia", 700)
    const p3 = await crearProyecto(daoProyectos, "Tetris", "Deporte", 200)
    console.log(p1, p2, p3)
    /* const modificada = await modificarMonto(daoProyectos, p2.id, 1000)
    console.log(modificada) */
    /* const modificada2 = await modificarNombre(daoProyectos, p1.id, "Lineage 2")
    console.log(modificada2) */
    const modificada3 = await modificarGenero(daoProyectos, p3.id, "Indie")
    console.log(modificada3)
} catch (error) {
    console.log(error)
}
