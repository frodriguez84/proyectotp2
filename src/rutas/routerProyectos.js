import { Router } from 'express'
import { crearProyecto } from '../casosDeUso/altaDeProyecto.js'
import { modificarMonto } from '../casosDeUso/modificarMonto.js'
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
    const { monto } = req.body
    const { idProyecto } = req.params
    try {
        const modificada = await modificarMonto(daoProyectos, idProyecto, monto)
        res.json(modificada)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})

routerProyectos.get("/", async (req, res)=>{
    
})

export { routerProyectos }