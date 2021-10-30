import { Router } from 'express'
import { crearProyecto } from '../casosDeUso/altaDeProyecto.js'
import { modificarMonto } from '../casosDeUso/modificarMonto.js'
import { modificarNombre } from '../casosDeUso/modificarNombre.js'
import { getDao } from '../daos/DaoFactory.js'

const daoProyectos = getDao()

const routerProyectos = Router()

routerProyectos.post('/', async (req, res) => {
    try {
        const { nombre, genero, monto } = req.body
        const proyecto = await crearProyecto(daoProyectos, nombre, genero, monto)
        res.json(proyecto)
    } catch (error) {
        res.json({ error: "no se pudo crear: " + error.message })
    }
})

routerProyectos.patch('/:idProyecto', async (req, res) => {
    const { nombre } = req.body
    const { idProyecto } = req.params
    try {
        const modificada = await modificarNombre(daoProyectos, idProyecto, nombre)
        res.json(modificada)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})

routerProyectos.get('/', async (req, res)=>{
    const txt = await fs.promises.readFile('./db/proyectos.json', 'utf-8')
    const proyectos = JSON.parse(txt)
    res.json(proyectos)
})

export { routerProyectos }