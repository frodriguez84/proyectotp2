import DaoProyectos from './DaoProyectos.js'
import { db } from '../config.js'
import { MongoClient } from 'mongodb'

//user: fernando
//pass: facilito2021

const username = db.username
const password = db.password
const database = db.database
const serverUrl = db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()


class DaoProyectosMontoDb extends DaoProyectos {

    constructor() {
        super()
        this.proyectos = client.db("ort_tp2").collection("proyectos");


    }

    async buscar(id) {
        let buscado
        try {
            buscado = await this.proyectos.findOne({ id })
        } catch (error) {
            throw new Error('BD_ERROR: ' + error.message)
        }
        delete buscado._id
        return buscado
    }

    async guardar(proyecto) {
        try {
            this.proyectos.replaceOne({id: proyecto.id}, {... proyecto}, {upsert: true})
        } catch (error) {
            throw new Error('BD_ERROR: ' + error.message)
        }
    }
}

export default DaoProyectosMontoDb