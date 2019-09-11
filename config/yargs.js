const optsCrear = {
    description: {
        describe: 'Desc',
        alias: 'd',
        demand: true
    }

};
const optsAct = {
    description: {
        describe: 'descripcion de la tarea',
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        describe: 'Marca como completado una tarea',
        type: 'boolean',
        demand: true
    }
};

const argv = require('yargs').
command('crear', 'ComandoCrear', optsCrear).
command('Actualizar', 'Comand Actualizar', optsAct).
command('listar', ' Lista las tareas').
command('borrar', 'Eliminar en base a una descripcion una tarea', optsCrear)
    .help().argv;


module.exports = {
    argv
}