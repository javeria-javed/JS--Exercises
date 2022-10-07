var birds = ["crow","sparrow","parrot"];

for(var i=0; i< birds.length ; i++)
{
  var element = document.getElementById("demo"); 
  element.innerHTML +=  birds[i] + " has beautiful feathers <br/> " ;
}
element.innerHTML += "SO, you see I am a really a bird lover " ;
