import { Router } from 'express'
import { crearProyecto } from '../casosDeUso/altaDeProyecto.js'
import { modificarProyecto } from '../casosDeUso/modificarProyecto.js'
import { getDao } from '../daos/DaoFactory.js'
import {enviarCotizacion} from '../casosDeUso/enviarCotizacion.js'
import fs from 'fs'

const daoProyectos = getDao()
const routerProyectos = Router()

routerProyectos.post('/', async (req, res) => {
    try {
        const { nombre, genero, mail, monto } = req.body
        const proyecto = await crearProyecto(daoProyectos, nombre, genero, mail, monto)
        res.json(proyecto)
    } catch (error) {
        res.json({ error: "no se pudo crear: " + error.message })
    }
})
//AGREGAR LOGICA PARA ENVIO DE COTIZACIONES
routerProyectos.post('/solicitudes', async(req, res) =>{
    try {
        const id = req.body.id
        await enviarCotizacion(daoProyectos ,id)
        res.sendStatus(201)
    } catch (error) {
        res.json({error: error.message})
    }
})
//AGREGAR ACA LO DEL TOKEN
routerProyectos.patch('/:idProyecto', async (req, res) => {
    const [ [campo, valor] ] = Object.entries(req.body)

    const { idProyecto } = req.params
    try {
        const modificada = await modificarProyecto(daoProyectos, idProyecto, campo, valor)
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