// Partendo dall'esercizio del biglietto del treno, aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente
// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.



// creo i due bottoni che permetteranno la creazione e il reset del biglietto
var sendButton = document.getElementById('send-buton')
var deleteButton = document.getElementById('delete-button')


//creo il biglietto
sendButton.addEventListener('click',function(){
    var costoKm = 0.21;
    var chilometriNum = parseInt(document.getElementById('km-da-percorrere').value);
    var prezzoBiglietto = (chilometriNum * costoKm );
    var prezzofinale

    var nomeUtente = document.getElementById('nome-utente').value;
    var eta = document.getElementById('etá').value
//imposto gli sconti basati sullétá dell'utente
    if( eta == 'minorenne' ){
        prezzofinale = prezzoBiglietto - prezzoBiglietto * 0.20
    }else if( eta == 'over65'){
        prezzofinale = prezzoBiglietto - prezzoBiglietto * 0.40
    }else{
        prezzofinale = prezzoBiglietto
    }

//per far comparire il biglietto a schermo
    document.getElementById('biglietto').className = '';

//inserisco nel biglietto i dati forniti dall'utente
    document.getElementById('nome').innerHTML = nomeUtente
    document.getElementById('offerta').innerHTML = eta

    if( eta != '' && chilometriNum != '' ){
        document.getElementById('carrozza').innerHTML = getRndInteger(1,10);
        document.getElementById('codice').innerHTML = getRndInteger(90000,99999);
        document.getElementById('costo').innerHTML = prezzofinale + ' $';
    }
    
})

//reset del biglietto
deleteButton.addEventListener('click',function(){
 
    document.getElementById('biglietto').className = 'void';
    azzeraForm('nome-utente');
    azzeraForm('km-da-percorrere');
    azzeraForm('etá');
    azzeraForm('nome');
    azzeraForm('offerta');
    azzeraBiglietto('carrozza');
    azzeraBiglietto('codice');
    azzeraBiglietto('costo');
})


//funzione per azzerare un inner html
//
function azzeraBiglietto(id){
    document.getElementById(id).innerHTML = '';
}

//funzione per azzerare il valore di un elemento html
//
function azzeraForm(id) { //funzione che attiva il cambio del testo
    document.getElementById(id).value = '';
}

//funzione per generare numeri random
//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}