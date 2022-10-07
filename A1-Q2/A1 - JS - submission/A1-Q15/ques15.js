
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
var element = document.getElementById("demo");
element.innerHTML += myList[i] + " you are invited on dinner <br/>";
}
