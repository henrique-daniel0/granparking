import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('./db/db.json');
const db = low(adapter);

db.defaults({ users: [] }).write();

export default function registerUser(table, user) {
    db.get(table).push(user).write();
}

//export function dbStatus() {
    //console.log(db.getState());
//}
