"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
db.defaults({ users: [] }).write();
function registerUser(table, user) {
    db.get(table).push(user).write();
}
exports.default = registerUser;
//export function dbStatus() {
//console.log(db.getState());
//}
