
var myList = ["ami" , "abu" , "Junaid"];
for (var i=0 ; i<3 ; i++)
{
var element = document.getElementById("demo");
element.innerHTML += myList[i] + " you are invited on dinner <br/>";
}
element.innerHTML +=  " Guests please note that " + myList[0] + " won't b there <br/>";
myList[0] = "Affira" ;

// for printing updated list
for (var i=0 ; i<3 ; i++)
{
element.innerHTML += myList[i] + " you are invited on dinner <br/>";
}
element.innerHTML += " Good news is we can have more guests <br/>";

myList.unshift("Humna");     // adding at the begning of array
myList.splice(2, 0, "Irha");   // adding in the middle
myList.push("Khubaib");    // adding at end by append

// for printing updated list
for (var i=0 ; i<6 ; i++)
{
element.innerHTML += myList[i] + " you are invited on dinner <br/>";
}

element.innerHTML += " Bad news is I can have just two guests <br/>";

// removing 4 ppl by pop and printing them message
for (var i=5 ; i>=2 ; i--)
{
element.innerHTML += myList[i] + " you are not invited on dinner <br/>";
myList.pop();
}
// informing remainig two that they are invited
for (var i=0 ; i<2 ; i++)
{
element.innerHTML += myList[i] + " you are invited on dinner <br/>";
}
//removing these two names and priting empty array
myList.pop();
myList.pop();
element.innerHTML += "final content is empty array as shown : " + myList.value;