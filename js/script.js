console.log('JS OK');

// Chiedo quantità km e anni dell'utente
const kmTrip = parseInt(prompt('Quanti km devi percorrere?', 100).trim());
console.log('km viaggio:', kmTrip);

const userAge = prompt('Quanti anni hai?', 66).trim();
console.log('età:', userAge);

// Calcolo il prezzo del biglietto
let priceTicket = kmTrip * 0.21;
console.log('prezzo biglietto:', priceTicket);

//Applico possibili sconti
if (userAge < 18) {
    priceTicket -= priceTicket * 20 / 100;
    console.log('prezzo biglietto scontato minorenne:', priceTicket);
} else if (userAge > 65) {
    priceTicket -= priceTicket * 40 / 100;
    console.log('prezzo biglietto scontato over:', priceTicket);
}

//Scrivo il risultato
let messagePrice = document.getElementById('message');

// messagePrice.innerText = 'Il prezzo del tuo biglietto è di €' + priceTicket.toFixed(2);
messagePrice.innerHTML = `Il prezzo del tuo biglietto è di <strong> € ${priceTicket.toFixed(2)}</strong>`;