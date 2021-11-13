let id = 1

export function generarID(){
    return id++
}

export default class Usuario {
    constructor({ id, nombre, email}) {
        this.setId(id)
        this.setNombre(nombre)
        this.setEmail(email)
    }

    setId(id) {
        if (!id) {
            throw new Error('No se creó un ID para este usuario')
        }
        this.id = id
    }

    setNombre(nombre) {
        if (!nombre) {
            throw new Error('No se escribió un nombre')
        }
        this.nombre = nombre
    }

    setEmail(email) {
        if (!email) {
            throw new Error('No se escribió un email')
        }
        this.email = email
    }
}