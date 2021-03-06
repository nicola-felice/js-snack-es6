
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function creaClassifica(array, id, parametroConsiderato) {

    let classifica = [];

    for ( let i = 0; i < array.length; i++ ) {

        let squadra = ( [array[i][id], array[i][parametroConsiderato]] );             


        // se classifica è vuota aggiungi il primo elemento
        if ( classifica.length == 0 ) {
            classifica.push(squadra);

        } else {
            // metti l'elemento in classifica quando trovi un punteggio minore a quello della squadra [i]
            for ( let e = 0; e < classifica.length; e++ ) {
                if ( squadra[1] >= classifica[e][1] ) {
                    classifica.splice( e, 0, squadra );
                    break;
                }
            }   

            // se non ci sono punteggi minori aggiungi la squadra [i] in fondo alla classifica
            if ( classifica[i] === undefined ) {
                classifica.push(squadra);
            }      
        }
    }

    return classifica;
}


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

/*
const listaFalliSubiti = [];

for ( let i = 0; i < listaSquadre.length; i++ ) {

    let {nome, falliSubiti} = listaSquadre[i];
    listaFalliSubiti.push( {nome, falliSubiti} );
}

console.log(`i falli subiti dalle squadre sono:`, listaFalliSubiti)
*/


// creo classifica squadre
let classificaSquadre = creaClassifica(listaSquadre, "nome", "puntiFatti");

// stampo a schermo classifica
for ( let i = 0; i < classificaSquadre.length; i++ ) {

    document.querySelector("#classifica").innerHTML += `
        <tr>
            <td>
                <div class="nomeSquadra">${classificaSquadre[i][0]}</div>
            </td>
            <td>
                <div class="punteggio">${classificaSquadre[i][1]}</div>
            </td>
        </tr>
    `;
}


// classifico a seconda di chi ha subito più falli
let classificaFalliSubiti = creaClassifica(listaSquadre, "nome", "falliSubiti");

// stampo a schermo falli subiti 
for ( let i = 0; i < classificaFalliSubiti.length; i++ ) {

    document.querySelector("#falliSubiti").innerHTML += `
        <tr>
            <td>
                <div class="nomeSquadra">${classificaFalliSubiti[i][0]}</div>
            </td>
            <td>
                <div class="punteggio">${classificaFalliSubiti[i][1]}</div>
            </td>
        </tr>
    `;
}
