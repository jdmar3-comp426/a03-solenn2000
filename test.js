//import {allCarStats} from "./src/medium/medium_2.js"
import mpg_data from "./src/medium/data/mpg_data.js";
import {getStatistics} from "./src/medium/medium_1.js"


//console.log(hybrids);


// start with breaking down by Make




let makes= mpg_data.reduce(function(acc,obj){
    let key =obj["make"]
    if (!acc[key]){
        acc[key] =[]
    }
    acc[key].push(obj)
    return acc
},{})

//console.log(makes["Kia"])

let test1 = (dict) => {
    Object.keys(dict).forEach(function(key) {
        let car_m = dict[key];
        let hybrids = car_m.filter(function(car_m) {
            return car_m.hybrid === true;
        });
        let sorted = countID(hybrids).sort(function(a,b) {return b.dict[key]-a.dict[key]; })
        console.log(sorted);



    })
}


function countID(data) {
    return data.reduce(function (allIDs, id) {
        if (id in allIDs) {
            allIDs[id]++;
        }
        else {
            allIDs[id] = 1;
        }
        return allIDs;
    }, {});
}
console.log(test1(makes));
