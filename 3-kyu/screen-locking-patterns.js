/* 
AUFGABE
*/


/* 
MEINE LÖSUNG
*/

let CONNECTIONS = {
    'A': ['B', 'CB', 'D', 'E', 'F', 'GD', 'H', 'IE'],
    'B': ['A', 'C', 'D', 'E', 'F', 'G', 'HE', 'I'],
    'C': ['B', 'AB', 'D', 'E', 'F', 'GE', 'H', 'IF'],
    'D': ['A', 'B', 'C', 'E', 'FE', 'G', 'H', 'I'],
    'E': ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
    'F': ['A', 'B', 'C', 'DE', 'E', 'G', 'H', 'I'],
    'G': ['AD', 'B', 'CE', 'D', 'E', 'F', 'H', 'IH'],
    'H': ['A', 'BE', 'C', 'D', 'E', 'F', 'G', 'I'],
    'I': ['AE', 'B', 'CF', 'D', 'E', 'F', 'GH', 'H']
}


const posibleConnections = (point, visited) => {
    return CONNECTIONS[point].reduce((res, pos) => {
        let [dest, over] = pos.split("")

        if (visited.indexOf(dest) === -1 &&
            (!over || visited.indexOf(over) !== -1)) res.push(dest)
        return res
    }, [])
}

const countPatternsFrom = (pattern, max) => {
    let result = 0
    if (pattern.length > max) return result
    if (pattern.length === max) return result + 1

    let last = pattern.slice(-1)
    let posible = posibleConnections(last, pattern)
    if (pattern.length + 1 === max) return posible.length
    for (newPosition of posible) {
        result += countPatternsFrom(pattern + newPosition, max)
    }
    return result
}




/* 
TESTS
*/

console.log(countPatternsFrom('A', 0), 0);
console.log(countPatternsFrom('A', 10), 0);
console.log(countPatternsFrom('B', 1), 1);
console.log(countPatternsFrom('C', 2), 5);

console.log(countPatternsFrom('D', 3), 37);
console.log(countPatternsFrom('E', 4), 256);
console.log(countPatternsFrom('E', 8), 23280);