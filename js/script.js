// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).





// Chiedere l'età e il numero di chilometri da percorrere
const ageUser = prompt ('Please enter your age here')
console.log (ageUser)

const kilToGo = prompt ('how many kilometers do you have to travel')
console.log (kilToGo)

let price = 0.21;
let discount = ( (price * kilToGo) * 20 ) / 100; 
console.log (discount)

let secondDiscount = ( ( price * kilToGo ) * 40 ) / 100; 
console.log (secondDiscount)

// Calcolare il prezzo totale del viaggio in base a queste info:
// primo passeggero minore 18 anni = sconto 20%:
if ( ageUser < 18 ) {
    
}

// secondo passeggero età 24 anni km 150 / nessuno sconto = prezzo pieno
// terzo passeggero età 68 anni km 100 / sconto del 40%




// il prezzo del biglietto è definito in base ai km (0.21 € al km)



// va applicato uno sconto del 20% per i minorenni



// va applicato uno sconto del 40% per gli over 65.



// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).