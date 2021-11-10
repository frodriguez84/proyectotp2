import { db } from './src/config.js'
import { ConnectionReadyEvent, MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database

const cnxStr = `mongodb+srv://${username}:${password}@cluster0.v2jbm.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()

const dbProyectos = client.db("ort_tp2").collection("proyectos");


console.log('me conecte')

/* const proyecto = {
    'nombre': 'LOL',
    'genero': 'RPG',
    'mail': 'fernando.rodriguez84@yahoo.com.ar'
    'montoRequerido': 2500
}

    const resultado = await dbProyectos.insertOne(proyecto)
    //En el resultado tengo el id del proyecto, que posteriormente puedo utilizarlo para buscar
    console.log(resultado)
    console.log(proyecto)

    /* const buscado = await dbProyectos.findOne({nombre: 'LOL'}) 
    console.log(buscado) */

    /* const modificado = await dbProyectos.updateOne({id: 1}, {$set: {monto: 300}})
    console.log(modificado) */
await client.close();

console.log('me desconecte')
