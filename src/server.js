import express from 'express'
import { routerProyectos } from './rutas/routerProyectos.js'
import { routerUsuarios } from './rutas/routerUsuarios.js'

function crearServidor() {

    const app = express()

    app.use(express.json())

    app.use('/api/proyectos', routerProyectos)
    app.use('/api/usuarios', routerUsuarios)

    let server

    return {
        conectar: (puerto = 0) => {
            return new Promise((resolve, reject) => {
                server = app.listen(puerto)
                server.on('request', request => { console.log(`${new Date().toLocaleString()}: ${request.method} ${request.url}`) })
                server.on('listening', () => { resolve(server) })
                server.on('error', error => { reject(error) })
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                server.close(error => {
                    if (error) reject(error)
                    else resolve()
                })
            })
        }
    }
}

export { crearServidor }