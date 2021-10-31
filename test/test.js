import { crearProyecto } from '../src/casosDeUso/altaDeProyecto.js'
import { modificarGenero } from '../src/casosDeUso/modificarGenero.js'
import { modificarMonto } from '../src/casosDeUso/modificarMonto.js'
import { modificarNombre } from '../src/casosDeUso/modificarNombre.js'
import { modificarProyecto } from '../src/casosDeUso/modificarProyecto.js'

import { getDao } from '../src/daos/DaoFactory.js'

const daoProyectos = getDao()

try {
    const p1 = await crearProyecto(daoProyectos, "Mario Bros", "Accion", 900)
    /* const p2 = await crearProyecto(daoProyectos, "Doom", "Estrategia", 700)
    const p3 = await crearProyecto(daoProyectos, "Tetris", "Deporte", 200)
    const p4 = await crearProyecto(daoProyectos, "GTA", "Gore", 1564) */
    console.log(p1)

    const modificada = await modificarProyecto(daoProyectos, p1.id, 'monto', 850)
    console.log(modificada)

    /* const modificada = await modificarMonto(daoProyectos, p2.id, 1000)
    console.log(modificada)
    const modificada2 = await modificarNombre(daoProyectos, p1.id, "Lineage 2")
    console.log(modificada2)
    const modificada3 = await modificarGenero(daoProyectos, p3.id, "Indie")
    console.log(modificada3)
    console.log(p1, p2, p3) */
} catch (error) {
    console.log(error)
}
