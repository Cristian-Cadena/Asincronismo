const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('Hey!') : reject('Whooops!');
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const error = new Error('Whooops!'); // Permite ver mas detalles del error, en consola.
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve('true'),5000) : reject(error)
    });
};

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

/*
Parra correr todas las promesas que tenemos, el metodo Promise.all() retornara
un array con la respuesta de todas las promesas que pasemos como parametro.
*/

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })