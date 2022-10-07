var pizza = ["BBQ","Tandoori","scallian"];

for(var i=0; i< pizza.length ; i++)
{
  var element = document.getElementById("demo"); 
  element.innerHTML += "I like " + pizza[i] + " pizza <br/> " ;
}
element.innerHTML += "SO, you see I am a great pizza lover " ;
