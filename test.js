//import {allCarStats} from "./src/medium/medium_2.js"
//import mpg_data from "./src/medium/data/mpg_data.js";
//import {getStatistics} from "./src/medium/medium_1.js"
import {removeKeyNonDestructive} from "./src/mild/mild_2.js"
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
removeKeyNonDestructive(obj, 'password')
console.log(obj);


//console.log(hybrids);


// start with breaking down by Make
