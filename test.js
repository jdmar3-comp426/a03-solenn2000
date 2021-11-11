import {countArray} from "./src/mild/mild_1.js"
import mpg_data from "./src/medium/data/mpg_data.js";
import {getStatistics} from "./src/medium/medium_1.js"


function groupType(data,type){
    return data.reduce(function(acc,obj){
    let key = obj[type];
    if (!acc[key]){
        acc[key]= []
    }
    acc[key].push(obj)
    return acc
    },{})
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
let years_div = get_avg_htypes(groupedYear);
console.log(years_div["2009"]);
