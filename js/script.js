console.log('JS OK');

// Chiedo quantità km e anni e nome dell'utente
const name = document.getElementById('name');
const km = document.getElementById('km');
const age = document.getElementById('age');
const button = document.getElementById('button');
const clearBtn = document.getElementById('clearBtn');

button.addEventListener('click', function () {

    const userName = name.value.trim();
    const userKm = parseInt(km.value);
    const userAge = age.value;

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
    // Calcolo il prezzo del biglietto
    let priceTicket = userKm * 0.21;

    //Applico possibili sconti
    if (userAge === 'minor') {
        priceTicket -= priceTicket * 20 / 100;
    } else if (userAge === 'over') {
        priceTicket -= priceTicket * 40 / 100;
    }

    console.log(userName, userAge, priceTicket.toFixed(2));
})

clearBtn.addEventListener('click', function () {
    name.value = '';
    km.value = '';
    age.value = 'choose';
})