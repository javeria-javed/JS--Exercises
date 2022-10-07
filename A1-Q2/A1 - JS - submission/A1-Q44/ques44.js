function sandwitch(array)
{  
    var element = document.getElementById("demo");
element.innerHTML += "Summary of your order is : <br/>" ;

    for (var i=0; i<array.length; i++)
    element.innerHTML += array[i] + "<br/>";
    

}



  sandwitch(["cheese", "jalapino"]);
  sandwitch(["cheese"]);
  sandwitch(["cheese","chicken","bacon"]);