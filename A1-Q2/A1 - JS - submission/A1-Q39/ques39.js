function make_city(cty , cntry)
{ return "\"" + cty + "," + cntry + "\"" ;
}

var element = document.getElementById("demo");
var country = "pakistan"; 
let call1 = make_city ("karachi" , country);
element.innerHTML += "1st pair is : " + call1 +"</br>";
let call2 = make_city ("lahore", country);
element.innerHTML += "2nd pair is : " + call2 +"</br>";
let call3 = make_city ("toronto", "canada");
element.innerHTML += "3rd pair is : " + call3 +"</br>";
