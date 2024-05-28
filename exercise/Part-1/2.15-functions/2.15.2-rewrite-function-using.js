/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.
-----------------------------------------------
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
-----------------------------------------------
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/
function checkAgeFisrt(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

function checkAgeSecond(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }
  
let getUserAge = prompt('what is your age');
checkAgefisrt(getUserAge);
checkAgeSecond(getUserAge);
