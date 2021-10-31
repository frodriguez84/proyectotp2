import { db } from './src/config.js'
//user: fernando
//pass: facilito2021
import { ConnectionReadyEvent, MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database

const cnxStr = `mongodb+srv://${username}:${password}@cluster0.v2jbm.mongodb.net/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect()

const dbProyectos = client.db("ort_tp2").collection("proyectos");

console.log('me conecte')

const proyecto = {
    'nombre': 'LOL',
    'genero': 'RPG',
    'montoRequerido': 2500
}
const resultado = await dbProyectos.insertOne(proyecto)

console.log(resultado)
console.log(proyecto)

await client.close();

console.log('me desconecte')
