/*
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:
----------------
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
----------------
*/
function WhoIsLess(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}