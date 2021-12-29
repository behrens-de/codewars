/*
John und Mary wollen zwischen einigen Städten A, B, C ... reisen. 
Mary hat auf einem Blatt Papier eine Liste der Entfernungen zwischen 
diesen Städten. ls = [50, 55, 57, 58, 60]. John ist des Fahrens müde 
und sagt zu Mary, dass er nicht mehr als t = 174 Meilen fahren und 
nur 3 Städte besuchen will.

Welche Entfernungen, also welche Städte, werden sie wählen, 
damit die Summe der Entfernungen so groß wie möglich ist, 
um Mary und John zufrieden zu stellen?
*/


function chooseBestSum(t, k, ls) {
    const miles = t || 0;
    const stops = k || 0;
    const list = ls || [];

    let lists = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            for (let k = 0; k < list.length; k++) {
                if (i !== k && k !== j && j !== i) {

                    const myStops = [];
                    myStops.push(list[i]);
                    myStops.push(list[j]);
                    myStops.push(list[k]);

                    const distance = list[i] + list[j] + list[k];

                    lists.push({ distance, myStops })

                }
            }
        }
    }


    lists = lists.filter((l) => {
        return l.distance <= miles
    });

    lists.sort(function(a, b) {
        if (a.distance > b.distance) return -1;
        if (a.distance < b.distance) return 1;
        return 0;
      });

    return lists.length > 0 ? lists[0].distance  : null;
}

// GIBT EIN SYSTEMFEHLER UND ICH WEISS NICHT WARUM :(


// TEST 
var ts = [50, 55, 56, 57, 58]
console.log(163, chooseBestSum(163, 3, ts))

ts = [50]
console.log(null, chooseBestSum(163, 3, ts))

ts = [91, 74, 73, 85, 73, 81, 87]
console.log(228, chooseBestSum(230, 3, ts))