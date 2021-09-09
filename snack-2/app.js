
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  

const listaSquadre = [
    {
        "nome" : "sampdoria",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "milan",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "lazio",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "inter",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "roma",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "udinese",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "juventus",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "empoli",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "chievo verona",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome" : "torino",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    
];


for ( let i = 0; i < listaSquadre.length; i++ ) {

    listaSquadre[i].puntiFatti = getRandomArbitrary(1, 100);
    listaSquadre[i].falliSubiti = getRandomArbitrary(1, 100);
}


const listaFalliSubiti = [];

for ( let i = 0; i < listaSquadre.length; i++ ) {

    let {nome, falliSubiti} = listaSquadre[i];
    listaFalliSubiti.push( {nome, falliSubiti} )
}

console.log( `La lista dei falli subiti dalle squadre è:`, listaFalliSubiti );
