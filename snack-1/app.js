// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const listaBici = [
    {
        "nome" : "bici blu",
        "pesoInGrammi" : "660"
    },
    {
        "nome" : "bici verde",
        "pesoInGrammi" : "500"
    },
    {
        "nome" : "bici arancione",
        "pesoInGrammi" : "430"
    },
    {
        "nome" : "bici rossa",
        "pesoInGrammi" : "450"
    },
    {
        "nome" : "bici marrone",
        "pesoInGrammi" : "430"
    },
];


let pesoBiciLeggera = 9999999,
    indiceBiciLeggera;

for ( let i = 0; i < listaBici.length; i++ ) {

    if ( pesoBiciLeggera > listaBici[i].pesoInGrammi ) {
        pesoBiciLeggera = listaBici[i].pesoInGrammi;
        indiceBiciLeggera = i;

    } else if ( pesoBiciLeggera == listaBici[i].pesoInGrammi && typeof indiceBiciLeggera == "object" ) {
        indiceBiciLeggera.push(i);

    } else if ( pesoBiciLeggera == listaBici[i].pesoInGrammi && typeof indiceBiciLeggera != "object" ) {
        indiceBiciLeggera = [indiceBiciLeggera, i];
    }

}



if ( typeof indiceBiciLeggera == "object" ) {

    console.log(`le bici più leggere sono:`)

    for ( let i = 0; i < indiceBiciLeggera.length; i++ ) {

        let {nome, pesoInGrammi} = listaBici[indiceBiciLeggera[i]];
        console.log(`${nome} ${pesoInGrammi} g`);    
    }

} else {
    let {nome, pesoInGrammi} = listaBici[indiceBiciLeggera];
    console.log(`la bici più leggera è: ${nome} ${pesoInGrammi}`);
}