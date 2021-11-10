import fetch from "node-fetch"


export default class ApiConvertidor{

    async consultarCotizacionOficial(){
       const respuesta = await fetch("https://api-dolar-argentina.herokuapp.com/api/dolaroficial");
        const respuestaDecodificada = await respuesta.json();
        return  respuestaDecodificada;  
    };

    async consultarCotizacionBlue(){
        const respuesta = await fetch("https://api-dolar-argentina.herokuapp.com/api/dolarblue");
         const respuestaDecodificada = await respuesta.json();
         return  respuestaDecodificada;  
     };

     async consultarCotizacionTurista(){
        const respuesta = await fetch("https://api-dolar-argentina.herokuapp.com/api/dolarturista");
         const respuestaDecodificada = await respuesta.json();
         return  respuestaDecodificada;  
     };
    

}



   
        
    