/*
Aufgabe
https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript
*/


/*
Meine Lösung
*/

function hamming(number) {
    let args = [], i, j, k;
    args[0] = 1, i = j = k = 0;

    for (let itterator = 1; itterator < number; itterator++) {
        args[itterator] = Math.min(args[i] * 2, args[j] * 3, args[k] * 5);
        if (args[itterator] === args[i] * 2)  i++;
        if (args[itterator] === args[j] * 3)  j++;
        if (args[itterator] === args[k] * 5)  k++;
    }
    return args[number - 1];
}

/*
TEST
*/


console.log(hamming(1) == 1, "hamming(1) should be 1");
console.log(hamming(2) == 2, "hamming(2) should be 2");
console.log(hamming(3) == 3, "hamming(3) should be 3");
console.log(hamming(4) == 4, "hamming(4) should be 4");
console.log(hamming(5) == 5, "hamming(5) should be 5");
console.log(hamming(6) == 6, "hamming(6) should be 6");
console.log(hamming(7) == 8, "hamming(7) should be 8");
console.log(hamming(8) == 9, "hamming(8) should be 9");
console.log(hamming(9) == 10, "hamming(9) should be 10");
console.log(hamming(10) == 12, "hamming(10) should be 12");
console.log(hamming(11) == 15, "hamming(11) should be 15");
console.log(hamming(12) == 16, "hamming(12) should be 16");
console.log(hamming(13) == 18, "hamming(13) should be 18");
console.log(hamming(14) == 20, "hamming(14) should be 20");
console.log(hamming(15) == 24, "hamming(15) should be 24");
console.log(hamming(16) == 25, "hamming(16) should be 25");
console.log(hamming(17) == 27, "hamming(17) should be 27");
console.log(hamming(18) == 30, "hamming(18) should be 30");
console.log(hamming(19) == 32, "hamming(19) should be 32");