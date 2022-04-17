//XMLHttpRequest: Dependencia u objeto de JS para hacer peticiones a algun servicio en la nube.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Permite hacer instancias a un llamado a una API desde de JS.
let API = 'https://rickandmortyapi.com/api/character/' //Variable de la URL API


//Creamos una funcion que nos permitira traer informacion desde nuestra API,
//Y desencadenamos los llamados que se necesitan.
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();//Se instancia un nuevo objeto.
    xhttp.open('GET', url_api, true); 
    //Referente, hacer un llamado a una URL.
    //GET: Traer informacion de la URL
    //true: Significa que la solicitud sera asincrona.

    //Escuchar lo que hace la conexion.
    //Crea un objeto funcion, para manejar eventos.
    xhttp.onreadystatechange = function (event) {
    //4: request finished and response is ready
        if(xhttp.readyState === 4){    
            if(xhttp.status === 200) { //	200: "OK"
                callback(null, JSON.parse(xhttp.responseText))//Respuesta en texto.
                //Estandar dentro de node que permite decir que el callback el primer
                //Valor que le vamos a pasar, es el error, y el segundo es 
                //la informacion que se desencadena.
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send(); // Se envia la solicitud.
}

fetchData(API, function(error1, data1){
    if (error1) return console.error(error1);//En caso de error
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})
