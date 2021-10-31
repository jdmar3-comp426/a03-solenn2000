import {allCarStats} from "./src/medium/medium_2.js"
import mpg_data from "./src/medium/data/mpg_data.js";
import {getStatistics} from "./src/medium/medium_1.js"

let city = mpg_data.map(({ city_mpg }) => city_mpg);
console.log(getStatistics(city)["mean"])
