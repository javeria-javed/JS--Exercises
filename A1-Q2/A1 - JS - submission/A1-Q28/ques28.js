var age = 36;
if (age < 2)
{ var element = document.getElementById("demo");
element.innerHTML = " Baby";
} else if (age >= 2 && age < 4)
{ var element = document.getElementById("demo");
element.innerHTML = "Toddler";
} else if (age >= 4 && age < 13)
{ var element = document.getElementById("demo");
element.innerHTML = "Kid";
}else if (age >= 13 && age < 20)
{ var element = document.getElementById("demo");
element.innerHTML = "Teenager";
}else if (age >= 20 && age < 65)
{ var element = document.getElementById("demo");
element.innerHTML = "Adult";
}else if (age >= 65 )
{ var element = document.getElementById("demo");
element.innerHTML = "Elder";
}
