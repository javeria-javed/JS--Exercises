var alien_color = "red";
if (alien_color == "green")
{ var element = document.getElementById("demo");
element.innerHTML = "you just scored 5 points";
} else if (alien_color !== "green")
{ var element = document.getElementById("demo");
element.innerHTML = "you earned 10 points";
}
