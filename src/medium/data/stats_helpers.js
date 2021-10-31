export function variance(array, mean) {
    return array.map(function (sample) {
        return Math.pow(mean - sample, 2);
    })
        .reduce(function sum(m, v) {
            m += v;
            return m;
        }, 0) / array.length;
}
export function getSTD(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }
