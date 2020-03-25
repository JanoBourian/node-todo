/*
const argv = require('yargs').argv;
console.log(argv);
*/

/* Al hablar de una aplicación por hacer pensemos en los comandos más genéricos que se puedan utilizar
y eso debe quedar configurado en yargs:

- crear
node app crear --descripcion "Pasear al Perro" --pendiente true 

- listar
node app listar

- actualizar
node app actualizar --descripcion "Pasear al perro" --pendiente false

- borrar

*/

const {crear, listar, actualizar, borrar} = require('./modulos/modulos');

const {argv} = require('./config/yargs');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        console.log('tarea creada');
        break;
    case 'listar':
        listar();
        console.log('listando todas las tareas');
        break;
    case 'actualizar':
        actualizar(argv.descripcion);
        break;
    case 'borrar':
        borrar(argv.descripcion);
        break;
    default:
        console.log(`comando no encontrado`);
        break;
}