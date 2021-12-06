import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";
import {countArray} from "../../src/mild/mild_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

let city_mph = mpg_data.map(({ city_mpg }) => city_mpg);
let hwy_mph = mpg_data.map(({ highway_mpg }) => highway_mpg);


export const allCarStats = {
    avgMpg:{
        city: getStatistics(city_mph)["mean"],
        highway: getStatistics(hwy_mph)["mean"]
    },
    allYearStats: getStatistics(mpg_data.map(car=> car.year)),
    ratioHybrids: mpg_data.map(({ hybrid }) => hybrid).filter(Boolean).length/city_mph.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
 function groupType(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };



function getListforMake(MakesDict, key){

    let id_array = MakesDict[key].map(({ id }) => id);
    let count = countArray(id_array);
    var items = Object.keys(count).map(function(key) {
    return [key, count[key]];
      });
    let sorted = items.sort(function(first,second){
        return second[1]-first[1];
    });
    return sorted
}


function printKeys(array){
    var arr =[];
    array.forEach(element => {
        arr.push(element[0])
    })
    return arr;
}

let hybrids = mpg_data.filter(function (mpg_data) {
    return mpg_data.hybrid === true;
 });

let make_dict= groupType(hybrids,"make");
let sorted_dict = Object.keys(make_dict)
    .sort()
    .reduce(function (acc, key) {
        acc[key] = make_dict[key];
        return acc;
    }, {});


let arr =[];
for (let key in sorted_dict ){
    let element = {
        make: key,
        hybrids: printKeys(getListforMake(sorted_dict,key))
    }
    arr.push(element);
}
function get_avg_htypes(array){
    let arr = []
    for (let key in array ){
        let value = array[key];
        let hybrids = value.filter(function (value) {
            return value.hybrid === true;
        });


        let nonhybrids = value.filter(function (value) {
            return value.hybrid === false;
        });

        console.log(key);
        arr[key] = {
            hybrid: {
                city: getStatistics(hybrids.map(({ city_mpg }) => city_mpg))["mean"],
                highway: getStatistics(hybrids.map(({ highway_mpg }) => highway_mpg))["mean"]
            },
            notHybrid: {
                city: getStatistics(nonhybrids.map(({ city_mpg }) => city_mpg))["mean"],
                highway: getStatistics(nonhybrids.map(({ highway_mpg }) => highway_mpg))["mean"]
            }
        }

    }
    return arr;
}
let groupedYear = groupType(mpg_data, "year");
let avg_types = get_avg_htypes(groupedYear);
const arrFiltered = avg_types.filter(el => {
    return el != null && el != '';
  });


export const moreStats = {
    makerHybrids: arr.sort(),
    avgMpgByYearAndHybrid: arrFiltered
}
