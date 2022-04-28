/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/

// Parameters: Edge cases?  Empty arrays?  non-integers?
// Return: New array with original values doubled.
// Example cases: [] = []; 
    //[2, 9, 15] = [4, 18, 30]; 
    //[ 5, &, 8, , 62] = [10,16,,124]
//Psuedo: Make function that takes in an array and creates a new array with those values doubled.  
    //likely use Map.


    function maps(array) {
        return array.map(element => element *=2);
    }
//mapped array and then multiplied elements by 2 and return new array


console.log(maps([2,9,15]),[4,18,30]);
console.log(maps([]),[]);
console.log(maps([ 5, , 8, , 62]),[10,16,124]);

