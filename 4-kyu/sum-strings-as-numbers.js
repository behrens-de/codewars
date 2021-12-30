/*
Aufgabe
Gibt die String-Darstellungen von zwei ganzen Zahlen zurück, 
die String-Darstellung der Summe dieser ganzen Zahlen.
*/

/*
MEINE LÖSUNG
*/
function sumStrings(a, b) {
    return String(BigInt(a || 0) + BigInt(b || 0));
}

/* 
INFO: 
BigInt da der Test mit sehr großen zahlen durchgeführt wird 
und parseInt oder Number einen zu kleinen Zahlenraum abdecken
/*
TEST
*/

console.log('579', sumStrings('123', '456'));
