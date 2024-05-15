/*
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?
-------------------------------------
if (-1 || 0) alert( 'first' ); -1 | it return the first true so -1
if (-1 && 0) alert( 'second' ); 0 | it return the first false so 0
if (null || -1 && 1) alert( 'third' ); 1 | it proceed the && first will result with a 1 and result of null || 1 is the first true 1 
--------------------------------------
*/