/*
AUFGABE:
Ein Format für eine geordnete Liste von Ganzzahlen ist die Verwendung 
einer durch Komma getrennten Liste von entweder

einzelnen ganzen Zahlen oder einem Bereich von ganzen Zahlen, 
der durch die Anfangszahl und die Endzahl im Bereich durch einen 
Bindestrich, '-', getrennt ist. Der Bereich umfasst alle ganzen 
Zahlen im Intervall einschließlich beider Endpunkte. Er wird nur 
dann als Bereich betrachtet, wenn er sich über mindestens 3 Zahlen erstreckt. 
Zum Beispiel "12,13,15-17"

Vervollständigen Sie die Lösung so, dass sie eine Liste von Ganzzahlen in 
aufsteigender Reihenfolge annimmt und eine korrekt formatierte Zeichenfolge 
im Bereichsformat zurückgibt.
 */

/*
MEINE LÖSUNG (29.12.2021)
*/

function solution(list) {

    let start = list[0];
    let stop = list[list.length - 1];
    let temp = [];
    let temp2 = [];
    let index = 0;

    for (let i = start; i <= stop; i++) {

        if (i !== list[index]) continue;
        temp.push(list[index]);

        if (list[index + 1] !== i + 1) {
            temp2.push(temp);
            temp = [];
        }
        index++;
    }

    let result = [];
    temp2.forEach(item => {

        if(item.length>=3){
            const format = `${item[0]}-${item[item.length-1]}`
            result.push(format);
        } else {
            item.forEach(i=>{
                result.push(i);  
            })
        }
    });

    return result.join(',');
}



// TEST 
console.log("EXEPT: -6,-3-1,3-5,7-11,14,15,17-20");
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
