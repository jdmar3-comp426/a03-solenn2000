import {countArray} from "./src/mild/mild_1.js"
import mpg_data from "./src/medium/data/mpg_data.js";
import {getStatistics} from "./src/medium/medium_1.js"
import {moreStats} from "./src/medium/medium_2.js"
import { repeat} from "./src/spicy/spicy_9";


// function groupType(data,type){
//     return data.reduce(function(acc,obj){
//     let key = obj[type];
//     if (!acc[key]){
//         acc[key]= []
//     }
//     acc[key].push(obj)
//     return acc
//     },{})
// }


// function get_avg_htypes(array){
//     let arr = []
//     for (let key in array ){
//         let value = array[key];
//         let hybrids = value.filter(function (value) {
//             return value.hybrid === true;
//         });


//         let nonhybrids = value.filter(function (value) {
//             return value.hybrid === false;
//         });


//         arr[key] = {
//             hybrid: {
//                 city: getStatistics(hybrids.map(({ city_mpg }) => city_mpg))["mean"],
//                 highway: getStatistics(hybrids.map(({ highway_mpg }) => highway_mpg))["mean"]
//             },
//             notHybrid: {
//                 city: getStatistics(nonhybrids.map(({ city_mpg }) => city_mpg))["mean"],
//                 highway: getStatistics(nonhybrids.map(({ highway_mpg }) => highway_mpg))["mean"]
//             }
//         }

//     }
//     return arr;
// }
// function groupType(list, key) {
//     return list.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv
//     }, {});
// };

// let groupedYear = groupType(mpg_data,"year");

// let a =moreStats.avgMpgByYearAndHybrid;

// const arrFiltered = a.filter(el => {
//   return el != null && el != '';
// });
// //console.log(arrFiltered);
// console.log(moreStats.avgMpgByYearAndHybrid);




// //console.log(Object.keys(groupedYear).length);
// //let years_div = get_avg_htypes(groupedYear);
// //console.log(years_div["2009"]);
// var minHorsePower = 0;
// var minTorque=0
// let filtered = mpg_data.filter(function (mpg_data) {
//     return (mpg_data.torque >= minTorque) && (mpg_data.horsepower>=minHorsePower);
// });
// let sorted = filtered.sort(function(first,second){
//     return second.highway_mpg-first.highway_mpg;
// });

// console.log(sorted);
let data = 'data'
a = function print(data){
    console.log(data);
    return data
}
let input = ['heyyy']
let arr = repeat(print,3,input);
console.log(arr);
