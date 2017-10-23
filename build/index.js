"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const pessoa_1 = require("./pessoa");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
var daniel = new pessoa_1.default('Daniel', 20, 35991112860, 11993089177);
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
db.defaults({ users: [] }).write();
db.get('users').push(daniel).write();
console.log(db.getState());
