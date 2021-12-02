let userName = prompt ('Inserisci il tuo nome');

document.getElementById('name').innerHTML = userName; 

let userSurname = prompt ('Inserisci il tuo cognome');

document.getElementById('surname').innerHTML = userSurname;

let favoriteColour = prompt ('Il tuo colore preferito');

let passwordSuggerita = userName + userSurname + favoriteColour + 21;

document.getElementById('password').innerHTML = passwordSuggerita; 