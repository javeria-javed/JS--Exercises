function magicians(array)
{  
    for (var i=0; i<array.length; i++)
    array[i]= array[i] + " great" ;
    return array;

}

var namesM = ["junaid" , "rizwan" , "shiraz"];
 var narray = magicians(namesM);
 
 show_magicians (narray);

 function show_magicians(showing)
 {
    var element = document.getElementById("demo");
    element.innerHTML += "updated Magicians are : " + showing ;
 
}