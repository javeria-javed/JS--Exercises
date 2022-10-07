var current_users = ["JUNAID","javeria","admin","affira","humna"];
var new_users = ["ami","abu","affira","junaid", ];
var finding = " " , lower = " ";
// loop just to convert any uppercase to lower. toLowerCase is not working as it converts array to string
for(var j=0; j< 5 ; j++)
{
  lower =  current_users.map(lusers => {
        return lusers.toLowerCase();
      });
}
console.log(lower);
// loop for finding matching usernames
for(var i=0; i< new_users.length ; i++)
{
    
finding = lower.find(n=> n == new_users[i]);

 
if ( new_users[i] == finding  )
{ var element = document.getElementById("demo");
element.innerHTML += "<br/> username is already used" ;
} else {
    var element = document.getElementById("demo");
element.innerHTML += "<br/> username is available" ;
}
}






