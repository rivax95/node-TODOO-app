//require
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let command = argv._[0];

switch (command) {
    case 'crear':

        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':
        porHacer.getListado();
        break;

    case 'actualizar':


        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(actualizado);
        break;
    case 'borrar':
        let resp = porHacer.borrar(argv.d);
        console.log(resp);
        break;
    default:

        console.log('Comando no encontrado');
        break;


}