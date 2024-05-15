/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
*/

function powwwa(a,b){
    let result = a;
    for(let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}

let getUserNumber = +prompt('Enter a number you whant to power');
let getUserPower = +prompt('Enter a power for ' + getUserNumber );

if(getUserPower < 0 || null){
    alert('Entered a invalid power')
}
else{
    let result = powwwa(getUserNumber,getUserPower);
    alert(result);
}