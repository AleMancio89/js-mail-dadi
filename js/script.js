var mailList = ['info@boolean.com', 'service@boolean.com','founder@boolean.com','placement@boolean.com','coaching@boolean.com',]

var insertMail = prompt('Inserisci la tua email per accedere');

var message = "Accesso negato. L'indirizzo email non è presente tra quelli autorizzati";


for (var i = 0; i < mailList.length; i++) {
  if (insertMail == mailList[i]){
    var message = 'Accesso consentito, indirizzo email autorizzato.';
  }
}

console.log(message);
