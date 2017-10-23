"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const pessoa_1 = require("./pessoa");
const db_1 = require("./db");
//import dbStatus from './db';
var daniel = new pessoa_1.default('Daniel', 20, 35991112860, 11993089177);
db_1.default('users', daniel);
//dbStatus();
