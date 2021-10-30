class Proyecto {
    constructor(id, nombre, genero, montoRequerido) {
        this.id = id;
        this.setNombre(nombre)
        this.setGenero(genero)
        this.setMontoRequerido(montoRequerido)
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
        if (nom === "") {
            throw new Error("El nombre no puede ser vacio")
        }
        if (nom == null) {
            throw new Error("El nombre no puede ser nulo")
        }

        this.nombre = nom
    }

    setMontoRequerido(monto) {
        this.montoRequerido = monto
    }

    static ultimoId = 0

    static nextId() {
        return ++Proyecto.ultimoId
    }
}

function fromDTO(dto) {
    return new Proyecto(dto.id, dto.nombre, dto.genero, dto.montoRequerido)
}

function toDTO(proyecto) {
    return {
        id: proyecto.id,
        nombre: proyecto.nombre,
        genero: proyecto.genero,
        montoRequerido: proyecto.montoRequerido
    }
}

export { fromDTO, toDTO }

export default Proyecto