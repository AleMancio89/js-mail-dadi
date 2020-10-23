var ACCESS_GRANTED = "Accesso consentito, indirizzo email autorizzato.";
var ACCESS_DENIED = "Accesso negato. L'indirizzo email non è presente tra quelli autorizzati";
var MESSAGE_WIN = 'Complimenti, HAI VINTO!';
var MESSAGE_LOSE = 'HAI PERSO, prova ancora!';
var MESSAGE_DRAW = 'PAREGGIO, prova ancora!';


var emailList = ['info@boolean.com', 'service@boolean.com','founder@boolean.com','placement@boolean.com','coaching@boolean.com',]
var insertEmail = prompt('Inserisci la tua email per accedere');
var message = ACCESS_DENIED;
var userDice;
var computerDice;

var wrapperEL = document.getElementById('wrapper');

//verifica indirizzo email presente in array

for (var i = 0; i < emailList.length; i++) {
  if (insertEmail == emailList[i]){
    var message = ACCESS_GRANTED;
  }
}

alert(message);

if (message == 'Accesso consentito, indirizzo email autorizzato.'){
  wrapperEL.style.visibility = 'visible';
}

//Comparazione valori dadi al clic del pulsante

var rollEl = document.getElementById('roll');

rollEl.addEventListener('click', function(){

  var userDice = Math.floor(Math.random() * 6) + 1;
  var computerDice =  Math.floor(Math.random() * 6) + 1;

  if (userDice > computerDice){
    alert(MESSAGE_WIN + ' Con un punteggio di: ' + userDice + ' Vs ' + computerDice);
  } else if (userDice == computerDice){
    alert(MESSAGE_DRAW + ' Con un punteggio di: ' + userDice + ' Vs ' + computerDice);
  } else {
    alert(MESSAGE_LOSE + ' Con un punteggio di: ' + userDice + ' Vs ' + computerDice);
  }
});
