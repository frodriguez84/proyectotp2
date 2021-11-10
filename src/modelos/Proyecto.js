class Proyecto {
    constructor(id, nombre, genero, mail, monto) {
        this.id = id;
        this.setNombre(nombre)
        this.setGenero(genero)
        this.setMailCreador(mail)
        this.setMontoRequerido(monto)
    }

    setGenero(gen) {
        if (gen === "") {
            throw new Error("El genero no puede ser vacio")
        }
        if (gen == null) {
            throw new Error("El genero no puede ser nulo")
        }

        this.genero = gen
    }

    setNombre(nom) {
        if (nom === "" || !nom) {
            throw new Error("El nombre no puede ser vacio o nulo")
        }
        this.nombre = nom
    }

    setMailCreador(mail){
        this.mail = mail
    }

    setMontoRequerido(montoN) {
        this.monto = montoN
    }

    static ultimoId = 0

    static nextId() {
        return ++Proyecto.ultimoId
    }
}

function fromDTO(dto) {
    return new Proyecto(dto.id, dto.nombre, dto.genero,dto.mail, dto.monto)
}

function toDTO(proyecto) {
    return {
        id: proyecto.id,
        nombre: proyecto.nombre,
        genero: proyecto.genero,
        mail : proyecto.mail,
        monto: proyecto.monto
    }
}

export { fromDTO, toDTO }

export default Proyecto