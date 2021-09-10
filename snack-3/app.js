
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// input: array to cut, a (index where to start), b (index where to end)
// output: a new array with only the elements between a and b (without a and b)
function cutArray(array, a, b) {

    // validation
    if ( a >= b || a < 0 || b >= array.length || isNaN(a + b)) {
        return null;
    }

    return array.filter( (elm, index) => index > a && index < b );
}

const arrayProva = [1,2,3,4,5,6,7,8,9,10];

console.log( cutArray(arrayProva, 3, 8) );