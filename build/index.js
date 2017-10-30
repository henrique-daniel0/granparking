"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var db_1 = require("./db");
var newUser = new person_1.Person('Matheus', 16, 35991112860, 11993089177);
db_1.getUser("Matheus");
