import DaoProyectos from './DaoProyectos.js'
import fs from 'fs'

class DaoProyectosFS extends DaoProyectos {
    constructor(ruta) {
        super()
        this.ruta = ruta
    }

    async _leerProyectos() {
        const txt = await fs.promises.readFile(this.ruta, 'utf-8')
        const proyectos = JSON.parse(txt)
        return proyectos
    }

    async buscar(id) {
        const proyectos = await this._leerProyectos()
        const index = proyectos.findIndex(p => p.id === id)
        if (index != -1) {
            return proyectos[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(proyecto) {
        const proyectos = await this._leerProyectos()
        const index = proyectos.findIndex(p => p.id === proyecto.id)
        if (index == -1) {
            proyectos.push(proyecto)
        } else {
            proyectos[ index ] = proyecto
        }
        const txtModificado = JSON.stringify(proyectos, null, 2)
        await fs.promises.writeFile(this.ruta, txtModificado)
    }
}

export default DaoProyectosFS