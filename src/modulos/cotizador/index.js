import ApiConvertidor from '../cotizador/ApiConvertidor.js'
import { tipoCotizacion } from '../../config.js'


let daoCotizaciones 

let cotizador = new ApiConvertidor

switch (tipoCotizacion) {
    case 'TURISTA':
        daoCotizaciones = await cotizador.consultarCotizacionTurista()
        
        break;
    
    case 'BLUE':
        daoCotizaciones = await cotizador.consultarCotizacionBlue()
        break;

    default:
        daoCotizaciones = await cotizador.consultarCotizacionOficial()
        
}

function getCotizacion(){
    return daoCotizaciones
}

export {getCotizacion}