const mysql= require('mysql');
const connection= mysql. createConnection({ 
host:'localhost',
    user:'root@localhost',
    password:'',
    database: 'mi_gestor_de_notas'
 })
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql mi_proyecto conexion ');
    
    })

module.exports = mysql;