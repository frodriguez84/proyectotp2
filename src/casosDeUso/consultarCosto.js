
import {getCotizacion} from '../modulos/cotizador/index.js'


async function consultarCosto(proyecto) {

    console.log(proyecto)

    const cotizacion = getCotizacion()

    console.log("Cotizacion:  $ " + cotizacion.venta)

    const costo = (proyecto.monto * cotizacion.venta)

    return costo

}

export { consultarCosto }