// main.ts
import {Person} from './person';
import {registerUser, dbStatus, getUser} from './db';
//import dbStatus from './db';
var daniel = new Person('Daniel', 20, 35991112860, 11993089177);

//registerUser('users', daniel);
//dbStatus();
getUser();
