/*
Let’s try 5 array operations.
    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.
*/
let styles =["Jazz"," Blues"]
console.log(styles);
styles.push("Rock-n-Roll")
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = " Classic"
console.log(styles);
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");
console.log(styles);
