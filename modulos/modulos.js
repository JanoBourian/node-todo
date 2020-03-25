//Requires en nuestra aplicación
const fs = require('fs');
const colors = require('colors');

//Listado de tareas por hacer
//let listadoPorHacer = [];

const guardarDB = (listadoPorHacer) =>{
    let data = JSON.stringify(listadoPorHacer);
    return new Promise((resolve, reject)=>{
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err){
                reject(err);
            }else{
                resolve(`Se agregó la tarea`);
            }
        });
    })
}

const traerDB = () =>  {
    let lista;

    try {
        lista = require('../db/data.json');
    } catch (error) {
        lista =[];
    }
    return lista;
}

let crear = (descripcion)=> {
    let listadoPorHacer;

        let tarea = {
            descripcion,
            completado: false
        };

        /* Toda esta parte la vamos a quitar porque lo correcto es traer las tareas
        ponerlas en una estructura persistente y agregar la tarea nueva */
        listadoPorHacer = traerDB();
        listadoPorHacer.push(tarea);
        guardarDB(listadoPorHacer);
        return tarea;
}

let listar = ()=>{
    console.log("Tareas por hacer: ".magenta);
    let tareas = traerDB();
    tareas.forEach(tarea=> console.log(tarea));
    console.log("==================".magenta);
}

let actualizar = (descripcion) => {
    let tareas = traerDB();
    tareas.forEach(tarea =>{
        if(tarea.descripcion === descripcion){
            tarea.completado = true;
            console.log(`Tarea ${descripcion} fue actualizada.`);
        }
    });
    guardarDB(tareas);
}

let borrar = (descripcion)=>{
    let tareas = traerDB();
    let nuevasTareas = tareas.filter(tarea => {
      return  tarea.descripcion !== descripcion
    });
    guardarDB(nuevasTareas);
}

module.exports ={
    crear,
    listar,
    actualizar,
    borrar
}