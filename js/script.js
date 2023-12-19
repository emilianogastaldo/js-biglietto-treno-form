console.log('JS OK');

// Inizializzo le const per i dati utente
const name = document.getElementById('name');
const km = document.getElementById('km');
const age = document.getElementById('age');
// Inizializzo i bottoni
const button = document.getElementById('button');
const clearBtn = document.getElementById('clearBtn');
// Inizializzo i dati da inserire nel biglietto
const ticketMessage = document.getElementById('message');
const ticketName = document.getElementById('ticketName');
const ticketOffer = document.getElementById('ticketOffer');
const ticketWagon = document.getElementById('ticketWagon');
const ticketCP = document.getElementById('ticketCP');
const ticketPrice = document.getElementById('ticketPrice');
const ticketPrev = document.getElementById('ticketPrev');



button.addEventListener('click', function () {

    //Salvo le info dell'utente e do di default il tipo di biglietto
    const userName = name.value.trim();
    const userKm = parseInt(km.value);
    const userAge = age.value;
    let offer = 'Biglietto Standard';

    // Validazione informazioni date dall'utente
    if (userName === '') {
        console.log('sei quiiiii nome');
        return;
    }
    if (isNaN(userKm)) {
        console.log('sei quiiiii km');
        return;
    }
    if (userAge === 'choose') {
        console.log('sei quiiiii età');
        return;
    }

    //Se non ho avuto problemi inizio a generare il biglietto
    // Calcolo il prezzo del biglietto
    let priceTicket = userKm * 0.21;

    //Applico possibili sconti
    if (userAge === 'minor') {
        priceTicket -= priceTicket * 20 / 100;
        offer = 'Biglietto Minorenne';
    } else if (userAge === 'over') {
        priceTicket -= priceTicket * 40 / 100;
        offer = 'Biglietto Over';
    }

    //Creo un numero random per la carrozza
    const wagonNumber = Math.floor(Math.random() * 98999) + 1000;
    //Creo un numero random per il CP
    const cpNumber = Math.floor(Math.random() * 10) + 1;


    //inserisco i dati nel codice HTML
    console.log(userName, userAge, priceTicket.toFixed(2));
    ticketName.innerText = userName;
    ticketOffer.innerText = offer;
    ticketWagon.innerText = wagonNumber;
    ticketCP.innerText = cpNumber;
    ticketPrice.innerText = priceTicket.toFixed(2);
    ticketPrev.classList.remove('d-none');
})

//Creo il button per ripulire tutto
clearBtn.addEventListener('click', function () {
    name.value = '';
    km.value = '';
    age.value = 'choose';
    ticketPrev.classList.add('d-none');
})