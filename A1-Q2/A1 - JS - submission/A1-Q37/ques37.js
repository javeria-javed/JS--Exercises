function make_shirt(sz , msg)
{
var element = document.getElementById("demo");
element.innerHTML += "size of shit is : " + sz + " , and it prints : " + msg +"</br>";

}
var L = "large" , M = "med"; 
make_shirt (L , "I LOVE JS");
make_shirt (M, "I love JS");
make_shirt (12 , "i am superb");