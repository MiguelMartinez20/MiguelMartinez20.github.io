var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://liftup.pythonanywhere.com/forma/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var division = document.getElementById("OrdenesContenedor")
    
    while (division.firstChild) {
        division.removeChild(division.firstChild);
    }    

    var response = JSON.parse(xhttp.responseText);
    var orden = response;
    
    var output = '';

    for (var i = 0; i < orden.length; i++) {
            output +=   '<br><br><article>' + '<h3><b>Orden de Trabajo '+ (i+1) +'</h3></b>' + '<p><b>Nombre Cliente: </b>' +orden[i].cliente+'</p>'
                        +'<p><b>Fecha Orden: </b>' +orden[i].fecha+'</p>'+'<p><b>Hora de Inicio: </b>' +orden[i].horaini+'</p>'
                        +'<p><b>Hora de Termino: </b>' +orden[i].horater+'</p>'+'<p><b>Número de Ascensor: </b>' +orden[i].numasc+'</p>'
                        +'<p><b>Modelo Ascensor: </b>' +orden[i].modeloasc+'</p>'+ '<p><b>Fallas: </b>' +orden[i].fallas+'</p>'
                        +'<p><b>Reparación efectuada: </b>' +orden[i].reparacion+'</p>'+'<p><b>Piezas Cambiadas: </b>' +orden[i].piezas+'</p>'
                        +'<p><b>Tecnico Encargado: </b>' +orden[i].tecnico+'</p>'+'</article>';                   
    }

    document.getElementById('OrdenesContenedor').innerHTML = output;
};

