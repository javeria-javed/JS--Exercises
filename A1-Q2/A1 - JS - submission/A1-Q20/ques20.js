
var myList = ["Canada" , "Turkey" , "Australia" , "UAE" , "USA"];
var listing = " ";
listing = "<ul>";
for ( var i=0; i < myList.length; i++)
{
listing +="<li>" + myList[i] + "</li>";
}
listing +="</ul>";
var element = document.getElementById("demo");
element.innerHTML = "here is my list of array elements : " + listing;



