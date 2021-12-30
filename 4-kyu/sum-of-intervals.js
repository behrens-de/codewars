/*
Meine Lösung
 */
function sumIntervals(intervals = []) {
    let numb = {};
    
    intervals.forEach(iv => {
        for (let i = iv[0]; i < iv[1]; i++) {
            numb[i] = i;
        }
    });

    return Object.keys(numb).length;
}

/*
TESTs
 */
const sum_of_intervals = sumIntervals;
console.log(sum_of_intervals([[1, 5]]), 4)
console.log(sum_of_intervals([[1, 5], [6, 10]]), 8)
console.log(sum_of_intervals([[1, 5], [1, 5]]), 4)
console.log(sum_of_intervals([[1, 4], [7, 10], [3, 5]]), 7)