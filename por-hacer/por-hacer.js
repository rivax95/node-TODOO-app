const fs = require('fs');
const color = require('colors');


let ListadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('Fallo de escritura :' + err);
    });
}

const cargarDB = () => {
    try {
        ListadoPorHacer = require('../db/data.json');

    } catch {
        ListadoPorHacer = [];
    }

}
const getListado = () => {
    cargarDB();
    if (ListadoPorHacer.length > 0) {
        for (let i = 0; i < ListadoPorHacer.length; i++) {
            console.log('########PorHacer########'.green);
            console.log(ListadoPorHacer[i].description);
            console.log("Completado: " + `${ListadoPorHacer[i].completado}`.blue);
            console.log('########################\n'.green);
        }
    } else {
        console.log('No ahi ninguna tarea'.red);
    }

}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    console.log(descripcion);
    let index = ListadoPorHacer.findIndex(tarea => {
        return tarea.description === descripcion;

    });
    console.log(index);
    let spliter = Array.from(completado);
    if (index >= 0) {
        ListadoPorHacer[index].completado = spliter[0] == 't' ? true : spliter[0] == 'f' ? false : undefined;
        if (ListadoPorHacer[index].completado == undefined) {
            return 'El operador Completado no contiene una sintaxis valida, los datos no han podido ser alamacenados'.red;
        }
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const crear = (description) => {
    cargarDB();

    let porHacer = {
        description,
        completado: false
    };

    ListadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = ListadoPorHacer.filter(tarea => {
        return tarea.description === descripcion;

    });
    if (ListadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        ListadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}