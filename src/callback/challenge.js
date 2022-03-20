let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//Dependencia

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); //Referente, hacer un llamado a una URL.
    //Escuchar lo que hace la conexion.
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}