/*
Aufgabe
Erstellen Sie eine RomanNumerals-Klasse, die eine römische Zahl in 
einen Integer-Wert umwandeln kann und umgekehrt. Sie sollte der API folgen, 
die in den folgenden Beispielen gezeigt wird. Mehrere römische Zahlenwerte 
werden für jede Hilfsmethode getestet.

Moderne römische Ziffern werden geschrieben, indem jede Ziffer separat 
ausgedrückt wird, beginnend mit der am weitesten links stehenden Ziffer, 
wobei alle Ziffern mit einem Wert von Null übersprungen werden. 
In römischen Ziffern wird 1990 wie folgt wiedergegeben: 
1000=M, 900=CM, 90=XC; dies ergibt MCMXC. 2008 wird geschrieben 
als 2000=MM, 8=VIII; oder MMVIII. 1666 verwendet jedes römische 
Symbol in absteigender Reihenfolge: MDCLXVI.
*/

/*
MEINE LÖSUNG
*/
const RomanNumerals = {
    romans: [
        { symbol: 'M', value: 1000 },
        { symbol: 'D', value: 500 },
        { symbol: 'C', value: 100 },
        { symbol: 'L', value: 50 },
        { symbol: 'X', value: 10 },
        { symbol: 'V', value: 5 },
        { symbol: 'I', value: 1 }
    ],

    romansShortner: [
        { oldValue: "DCCCC", newValue: "CM", dezimal: 900 },
        { oldValue: "CCCC", newValue: "CD", dezimal: 400 },
        { oldValue: "LXXXX", newValue: "XC", dezimal: 90 },
        { oldValue: "XXXX", newValue: "XL", dezimal: 40 },
        { oldValue: "VIIII", newValue: "IX", dezimal: 9 },
        { oldValue: "IIII", newValue: "IV", dezimal: 4 },
        // { oldValue: "III", newValue: "IIV", dezimal: 3 }
    ],

    toRoman(number) {
        let temp = number;
        let symbols = [];

        this.romans.forEach(item => {

            while (temp >= item.value) {
                temp = temp - item.value;
                symbols.push(item.symbol);
            }
        });

        let string = symbols.join('');

        this.romansShortner.forEach(s => {
            string = string.replace(s.oldValue, s.newValue);
        })
        return string;
    },

    fromRoman(string){
        let number = 0;
        this.romansShortner.forEach(s => {
            if(string.includes(s.newValue)){
                string = string.replace(s.newValue,'');
                number = number + s.dezimal;
            }
        });

        this.romans.forEach(item => {

            while (string.includes(item.symbol)) {
                string = string.replace(item.symbol,'');
                number = number + item.value;
            }
        });

        return number;
    }
}

/*
INFO:
/*
TEST
*/

//console.log('MMVIII',RomanNumerals.toRoman(2008));

console.log(RomanNumerals.toRoman(15), 'M');
console.log(RomanNumerals.toRoman(11), 'IV');
console.log(RomanNumerals.toRoman(2015), 'IV');
// console.log(RomanNumerals.toRoman(1), 'I');
// console.log(RomanNumerals.toRoman(1990), 'MCMXC');
// console.log(RomanNumerals.toRoman(2008), 'MMVIII');

// console.log(RomanNumerals.fromRoman('MCMXC'), 1990);
// console.log(RomanNumerals.fromRoman('XXI'), 21);
// console.log(RomanNumerals.fromRoman('I'), 1);
// console.log(RomanNumerals.fromRoman('IV'), 4);
// console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
// console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);
XV.XI.MMXV