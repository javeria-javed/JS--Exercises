function make_city(cty , cntry)
{
var element = document.getElementById("demo");
element.innerHTML += "the city: " + cty + " belongs to country : " + cntry +"</br>";

}
var country = "pakistan"; 
make_city ("karachi" , country);
make_city ("lahore", country);
make_city ("toronto", "canada");