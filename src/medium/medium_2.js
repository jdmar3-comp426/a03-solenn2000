import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

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
    allYearStats: getStatistics(mpg_data.map(({ year }) => year)),
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

 let hybrids = mpg_data.filter(function (mpg_data) {
    return mpg_data.hybrid === true;
});
let countedID = hybrids.reduce(function (allIDs, id) {
    if (id in allIDs) {
        allIDs[id]++
    }
    else {
      allIDs[id] = 1
    }
    return allIDs
}, {})

let makes= mpg_data.reduce(function(acc,obj){
    let key =obj["make"]
    if (!acc[key]){
        acc[key] =[]
    }
    acc[key].push(obj)
    return acc
},{})


export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
