"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var db_1 = require("./db");
var daniel = new person_1.Person('Daniel', 20, 35991112860, 11993089177);
db_1.getUser();
