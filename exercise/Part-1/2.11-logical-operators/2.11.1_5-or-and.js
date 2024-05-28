/*
What is the code below going to output?

alert( null || 2 || undefined ); | 2 | the result will be (false || true || false) so the first true is 2
--------------------------------
What will the code below output?

alert( alert(1) || 2 || alert(3) ); | 1 and after 2 | because alert(1) is going to to return a false but will be read so the aler will be executer but 2 will be selected
--------------------------------
What is this code going to show?

alert( 1 && null && 2 ); | null | and will searche the first false and will return it if their is no false it will return the last true
--------------------------------
What will this code show?

alert( alert(1) && alert(2) ); | 1 and undefined | this will read alert(1) and after that retun a undefined beacaut alert in a alert is read as undefined
--------------------------------
What will the result be?

alert( null || 2 && 3 || 4 ); | 3 | the && will be proced first and will return 3 so it will be (null || 3 || 4) so it will result in 3 tu be return
*/