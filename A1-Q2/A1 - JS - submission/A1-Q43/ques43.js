function magicians(array)
{  
    for (var i=0; i<array.length; i++)
    array[i]= array[i] + " great" ;
    return array;

}

var namesM = ["junaid" , "rizwan" , "shiraz"];
var namesMu = Array.from(namesM); // special copy of array so its original content remains intact

 var narray = magicians(namesMu);
 show_magicians (namesM); // for printing original array
 show_magicians (narray); // for printing modified array

 function show_magicians(showing)
 {
    var element = document.getElementById("demo");
    element.innerHTML += "updated Magicians are : " + showing +"<br/>" ;
 
}