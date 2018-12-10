var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://liftup.pythonanywhere.com/cliente/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var division = document.getElementById("ClientesContenedor")
    
    while (division.firstChild) {
        division.removeChild(division.firstChild);
    }    

    var response = JSON.parse(xhttp.responseText);
    var cliente = response;
    
    var output = '';

    for (var i = 0; i < cliente.length; i++) {
            output +=   '<br><br><article>' + '<h3><b>'+cliente[i].nombre+'</h3></b>' + '<p><b>Dirección: </b>' +cliente[i].direccion+'</p>'
                        +'<p><b>Ciudad: </b>' +cliente[i].ciudad+'</p>'+'<p><b>Comuna: </b>' +cliente[i].comuna+'</p>'
                        +'<p><b>Teléfono: </b>' +cliente[i].telefono+'</p>'+'<p><b>Email: </b>' +cliente[i].email+'</p>'+'</article>';                   
    }

    document.getElementById('ClientesContenedor').innerHTML = output;
};

