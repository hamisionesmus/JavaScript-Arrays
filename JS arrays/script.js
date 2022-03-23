'use strict';

//Arrays
//There are two ways of representing arrays


//first way
const friends=['Hamisi','Onesmus','Kilumo']
console.log(friends)

//second way
const rivers=new Array('Tana','Limpopo','Congo') //use of new keyword and Array function
console.log(rivers); // prints the array on the console(developer tool)

//To print the individual elements from the array 
console.log(friends[0]); //prints the first element of the array friend
console.log(rivers[1]); //prints the second element of the array
 
//To know the length of the array we use arrayname.length
console.log(friends.length); // prints length of the friends array
console.log(rivers.length); // prints length of the rivers array

//To print the last element using arrayname.length
 console.log(friends[friends.length-1]); // prints last element of friends array
 console.log(rivers[rivers.length-1]); // prints last element of rivers array

//To replace element in an array 
friends[0]='Hamza'; // replaces first element of the friends array
rivers[rivers.length-1]='Hamso'; //replaces last element of the rivers array
console.log(friends,rivers); 

//function with array 
 const calcAge=function(birthYear){
     return 2037-birthYear;
 }
 const years=[1994,1990,1972,1965];
 console.log(calcAge(years[0])); //print first element
 console.log(calcAge(years[1])); // print second element
 console.log(calcAge(years[2])); // print third element
 console.log(calcAge(years[years.length-1])); // print last element

//To present the elements in an array form
console.log(calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[years.length-1]));

