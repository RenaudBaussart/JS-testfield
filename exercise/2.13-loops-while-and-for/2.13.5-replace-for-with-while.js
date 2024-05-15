/*
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let loopToken = 0;
do{
    loopToken++;
    alert( loopToken );
}while(loopToken <3)