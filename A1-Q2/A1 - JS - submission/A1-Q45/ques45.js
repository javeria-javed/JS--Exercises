function cars(mdl,mfacturer,clr ,pr)
{   var myCar = { model: mdl , manufacturer: mfacturer , color: clr , price : pr};
 return myCar;
}

  var car1 = cars(2021, "changan");
  var element = document.getElementById("demo");
  element.innerHTML += "1st car is : "+ JSON.stringify(car1) + "<br/>" ;

  var car2 = cars(2000, "honda","white");
  element.innerHTML += "2nd car is : "+ JSON.stringify(car2) + "<br/>" ;

  var car3 = cars(2110, "toyota","grey" , 2567900);
  element.innerHTML += "3rd car is : "+ JSON.stringify(car3) + "<br/>" ;

  