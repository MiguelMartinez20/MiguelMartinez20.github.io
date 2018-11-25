var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);
        var dog = response;

        var output = '';
        for (var i = 0; i < dog.length; i++) {
            output += '<article>' + '<h5><b>'+dog[i].name+'</h5></b>' + 
            '<p><b>Raza: </b>' +dog[i].race+'</p>' + '<p><b>Description: </b>' +dog[i].description+'</p>' + '<p><b>Estado: </b>' +dog[i].state+'</p>'+'</article>'; 
        }

        document.getElementById('listado').innerHTML = output;
    }
};

xhttp.open("GET", "https://misperrisapi.pythonanywhere.com/adopcion/dogs/?format=json", true);
xhttp.send();
