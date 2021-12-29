/**
 * AUFGABE: 
 * Das Maximum-Summen-Subarray-Problem besteht darin, 
 * die maximale Summe einer zusammenhängenden Teilsequenz 
 * in einem Array oder einer Liste von ganzen Zahlen zu finden:
 * 
 * Der einfachste Fall ist, wenn die Liste nur aus 
 * positiven Zahlen besteht und die Höchstsumme die Summe 
 * des gesamten Arrays ist. Wenn die Liste nur aus negativen 
 * Zahlen besteht, wird stattdessen 0 zurückgegeben.
 * 
 * Eine leere Liste wird als Liste mit der größten Summe Null betrachtet. 
 * Beachten Sie, dass die leere Liste oder das leere Array auch 
 * eine gültige Unterliste/ein gültiges Unterarray ist.
 */

const maxSequence = function (arr) {

    if (arr.length === 0) return 0;
    let temp = 0;
    let max = 0;

    arr.forEach(a => {
        temp = Math.max(a, currentSum + a)
        max = Math.max(maxSum, currentSum)
    })

    return max;
}


// TEST 
console.log(6, maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
