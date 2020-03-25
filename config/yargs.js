const descripcion = {
        demand: true,
        alias: 'd'
    }

const completado ={
        default: true,
        alias: 'c'
    }

const argv = require('yargs')
                .command('crear', 'crea un elemento por hacer', {descripcion})
                .command('listar', 'nos muestra la lista de tareas',{})
                .command('actualizar', 'actualiza el estado completado de una tarea', {descripcion, completado})
                .command('borrar', 'borra una lista de tareas', {descripcion})
                .help()
                .argv;

module.exports={
    argv
}