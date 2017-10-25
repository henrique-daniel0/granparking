// impotando a biblioteca lowdb
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
// instanciando o banco
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
//criando o banco padrão
db.defaults({ users: [] }).write();

//metodo para registrar usuarios
function registerUser(table, user):void {
    db.get(table).push(user).write();
}

//metodo status do banco de dados
function dbStatus() {
    console.log(db.getState());
}

//metdodo para consutar usuarios
function getUser() {
    return console.log(db.get('users').find({ "name": "Daniel" }).value());
}

//exportando meus metdodos
export {registerUser, dbStatus, getUser};
