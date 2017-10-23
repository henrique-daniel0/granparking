// main.ts
import Person from './pessoa';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

var daniel = new Person('Daniel', 20, 35991112860, 11993089177);

const adapter = new FileSync('./db/db.json');
const db = low(adapter);

db.defaults({ users: [] }).write();

db.get('users').push(daniel).write();

console.log(db.getState());
