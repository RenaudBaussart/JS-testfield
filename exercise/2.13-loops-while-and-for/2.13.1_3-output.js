/*
What is the last value alerted by this code? Why?
----------------
let i = 3;

while (i) {
  alert( i-- );
}
---------------
1 will be print last

------------------------------------------------------------------------------------

For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:
----------------------------
let i = 0;
while (++i < 5) alert( i );
----------------------------
The postfix form i++
----------------------------
let i = 0;
while (i++ < 5) alert( i );
----------------------------
the prefix form will alert 1  2  3  4
the postfix form will alert  1  2  3  4  5  

-------------------------------------------------------------------------------------

For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:
---------------------------------------
for (let i = 0; i < 5; i++) alert( i );
---------------------------------------
The prefix form:
---------------------------------------
for (let i = 0; i < 5; ++i) alert( i );
---------------------------------------
the prefix form will alert 0  1  2  3  4
the postfix form will alert 0  1  2  3  4  
*/
