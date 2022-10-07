function make_album(nme , atst , numtracks)
{ var objAlbum = {name : nme , artist : atst , tracks : numtracks};
    return objAlbum ;
}

var element = document.getElementById("demo");

let call1 = make_album("janan" , "hadiqa");
element.innerHTML += "1st object is : " + JSON.stringify(call1) +"</br>";
let call2 = make_album ("qarar", "Ali Haider");
element.innerHTML += "2nd object is : " + JSON.stringify(call2) +"</br>";
let call3 = make_album ("dil dil pak", "Junaid" , 8);
element.innerHTML += "3rd object is : " + JSON.stringify(call3) +"</br>";
