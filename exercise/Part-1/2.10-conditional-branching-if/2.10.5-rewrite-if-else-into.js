/*
For readability, it’s recommended to split the code into multiple lines.
-----------------------------------
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
------------------------------------
*/
let login = prompt('are you a Employee or the Director');
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'please enter a login' : 'not a correct login';
    alert(message);