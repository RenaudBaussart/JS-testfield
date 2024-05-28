/*
Rewrite this if using the conditional operator '?':
-------------------
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
-------------------
*/
let getUserPromptA = +prompt('enter a figure');
let getUserPromptB = +prompt('enter a figure');
let result = (getUserPromptA + getUserPromptB < 4) ? 'Below': 'over';
alert(result);