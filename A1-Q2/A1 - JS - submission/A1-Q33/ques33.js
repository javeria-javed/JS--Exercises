var nums = [1,2,3,4,5,6,7,8,9];

for(var i=0; i< nums.length ; i++)
{
  var element = document.getElementById("demo");   


 if (i == 0)
{ 
element.innerHTML += "<br/>" + nums[0] +"st " ;
} else if(i==1)
{
element.innerHTML += "<br/>" + nums[1]+ "nd " ;
}else if(i==2)
{
element.innerHTML += "<br/>" + nums[2]+ "rd " ;
}else 
{
element.innerHTML += "<br/>" + nums[i]+ "th" ;
}
}






