
var myList = ["Canada" , "Turkey" , "Australia" , "UAE" , "USA"];

var element = document.getElementById("demo");
element.innerHTML = "here is my original array : " + myList;


sorted = Array.from(myList); // unusual array copying  so that original remains intact
sorted.sort();
element.innerHTML += "<br/> sorted array is : " + sorted + "<br/> original array remains intact as : " + myList;
sorted.reverse(); // reverse alphabetical order
element.innerHTML += "<br/> Reverse sorted array is : " + sorted + "<br/> original array remains intact as : " + myList;

//reversig sequence of array 
reversed = Array.from(myList);
var requiredOne = " ";
for(var i =4 ; i>=0; i--)
requiredOne += reversed[i];
element.innerHTML += "<br/> Reversed sequenced array is : " + requiredOne + "<br/> original array remains intact as : " + myList;

//sorting original Array
originalsorted = myList.sort();
element.innerHTML += "<br/> sorted array is : " + originalsorted + "<br/> original array is sorted as : " + myList;

//reversing original Array
originalrev = myList.reverse();
element.innerHTML += "<br/> Reversed sorted array is : " + originalrev + "<br/> original array is reverse sorted as : " + myList;

element.innerHTML += "<br/> Total No. of elements is : " + myList.length;


