function comboState() {    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://misperrisapi.pythonanywhere.com/adopcion/dogs/?format=json", true);
    xhttp.send();

    xhttp.onload = function(){
        var estado = document.getElementById("estado").selectedIndex;
        estado = document.getElementsByTagName("option")[estado].value;
    
        console.log(estado);
    
        var division = document.getElementById("listado");
        while (division.firstChild) {
            division.removeChild(division.firstChild);
        }    

        var response = JSON.parse(xhttp.responseText);
        var dog = response;
        
        var output = '';
        for (var i = 0; i < dog.length; i++) {

            if(dog[i].state == estado){
                output += '<article>' + '<h5><b>'+dog[i].name+'</h5></b>' + '<img src="'+dog[i].photo+'" alt="'+i+'">' +
                '<p><b>Raza: </b>' +dog[i].race+'</p>' + '<p><b>Description: </b>' +dog[i].description+'</p>' + '<p><b>Estado: </b>' +dog[i].state+'</p>'+'</article>';         
            }
            
            if(estado == "Todos"){
                output += '<article>' + '<h5><b>'+dog[i].name+'</h5></b>' + '<img src="'+dog[i].photo+'" alt="'+i+'">' +
                '<p><b>Raza: </b>' +dog[i].race+'</p>' + '<p><b>Description: </b>' +dog[i].description+'</p>' + '<p><b>Estado: </b>' +dog[i].state+'</p>'+'</article>';               
            }
        }

        document.getElementById('listado').innerHTML = output;
    };

    var estado = document.getElementById("estado").selectedIndex;
    estado = document.getElementsByTagName("option")[estado].value;

    localStorage.setItem("SaveState", estado)
}

function Load(){
    var state = localStorage.getItem("SaveState", estado)

    if(state == "Todos")
    {
        document.getElementById("estado").selectedIndex = "0";
    }
    if(state == "Disponible")
    {
        document.getElementById("estado").selectedIndex = "1";
    }
    if(state == "Rescatado")
    {
        document.getElementById("estado").selectedIndex = "2";
    }
    if(state == "Adoptado")
    {
        document.getElementById("estado").selectedIndex = "3";
    }
}

