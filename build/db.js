"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync('./db/db.json');
var db = low(adapter);
db.defaults({ users: [] }).write();
function registerUser(table, user) {
    db.get(table).push(user).write();
}
exports.registerUser = registerUser;
function dbStatus() {
    console.log(db.getState());
}
exports.dbStatus = dbStatus;
function getUser(user) {
    if (typeof user == 'string') {
        var obj = db.get('users').filter({ name: user }).value();
        return console.log(obj);
    }
    else {
        console.log('Erro 404: user not found');
    }
}
exports.getUser = getUser;
