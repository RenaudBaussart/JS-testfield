/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/
let getUserIdentification = prompt("Who's there ?");
if(getUserIdentification == null){
    print('Login canceled')
}
if(getUserIdentification == 'Admin'){
    let getUserPassword = prompt('Enter a password');
    if(getUserPassword == 'TheMaster'){
        print('Welcome')
    }
    if(getUserPassword == null){
        print('Login canceled')
    }
    else{
        print('Wrong password')
    }
}
else{
    print('Who are you?')
}