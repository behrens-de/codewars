/* 
AUFGABE:
Einfach: Bei einer Zeichenkette aus Wörtern wird die Länge des 
kürzesten Wortes/der kürzesten Wörter zurückgegeben.

String wird nie leer sein, und Sie brauchen 
keine unterschiedlichen Datentypen zu berücksichtigen.
*/

function findShort(s) {

    // alle zeichen ausser buchstaben, zahlen und leerzeichen entfernen
    const string = s.replace(/[^a-z0-9 ]/gi, '');
    // Trennen bei Leerzeichen
    const words = string.split(' ');
    // Sortieren von klein nach groß
    words.sort((a, b) => a.length < b.length ? - 1 : 1);

    return words[0].length || 0;
}

// SHORT COOL VERSION
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

// TEST 

console.log(3, findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(3, findShort("turns out random test cases are easier than writing out basic ones"));
console.log(2, findShort("Let's travel abroad shall we"));
console.log(0, findShort("999"));
console.log(4, findShort("LiteCoin Dogecoin Ripple DarkCoin DarkCoin DarkCoin 21inc Ethereum DarkCoin Waves Dogecoin Mine ProofOfStake Monero Ethereum Ethereum"));
