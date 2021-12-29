/*
AUFGABE:
Vervollständigen Sie die Funktion scramble(str1, str2), die true zurückgibt, 
wenn ein Teil der Zeichen in str1 so umgeordnet werden kann, 
dass er mit str2 übereinstimmt, und andernfalls false.
*/

/*
MEINE LÖSUNG: 
*/

function scramble(str1, str2) {

    let string = str1;
    const word = str2.split('');
    let result = true;

    word.forEach(char => {
        if (string.includes(char)) {
            string = string.replace(char, "_");
        } else {
            result = false;
        }
    });

    return result;
}


/*
INFO: Habe die RUNTIME überschritten da es einen sehr langen Testfall gibt 
*/

/*
OPTIMIERTE LÖSUNG:
function scramble(str1, str2) {
    let index = 0;
    let len = str2.length;
    let savedIndexes = {};
    let isMatch = false;
    while (index < len) {
        let letter = str2[index];
        let startingLetterIndex = (savedIndexes[letter] + 1) || 0;
        let matchIndex = str1.indexOf(letter, startingLetterIndex);

        isMatch = matchIndex > -1;
        if (!isMatch)
            break;
        index++;
        savedIndexes[letter] = matchIndex;
    }

    return isMatch;
}
*/
/*
TEST
*/
console.log('true', scramble('rkqodlw', 'world'));
console.log('true', scramble('cedewaraaossoqqyt', 'codewars'));
console.log('false', scramble('katas', 'steak'));
console.log('true', scramble('scriptjava', 'javascript'));
console.log('true', scramble('scriptingjava', 'javascript'));
console.log('true', scramble('scriptsjava', 'javascripts'));
console.log('false', scramble('jscripts', 'javascript'));
console.log('true', scramble('aabbcamaomsccdd', 'commas'));