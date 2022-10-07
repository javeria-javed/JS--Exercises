var users = ["junaid","javeria","admin","affira","humna"];

var b = " ";

for(var i =0; i<5 ; i++)
{
if ( users[i]=="admin")
{ var element = document.getElementById("demo");
element.innerHTML += "<br/> Hi admin. Would tou like to see status report?" ;
} else
{var element = document.getElementById("demo");
element.innerHTML += " <br/>Hi " + users[i] + ", welcome again " ;}

}




