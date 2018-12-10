function login() {    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://liftup.pythonanywhere.com/tecnico/?format=json", true);
    xhttp.send();

    xhttp.onload = function(){
        console.log("NO Paso") 

        var correo = document.getElementById("id_email").value
        var password_1 = document.getElementById("id_password").value
        var div_1 = document.getElementById("warming")

        console.log(correo) 
        console.log(password_1)   

        var response = JSON.parse(xhttp.responseText);
        var usuario = response;
        var valida = 0

        for (var i = 0; i < usuario.length; i++) {

            if(usuario[i].email == correo && usuario[i].password == password_1){
                window.location.replace("order.html");  
                console.log("Paso")
                valida = 1   
                break;       
            }
            else{
                valida = 0
                console.log("NO Paso")  
                console.log(usuario[i].email)
                console.log(usuario[i].password)     
            }            
        }
        
        if(valida == 0)
        {
            document.getElementById("warming").innerHTML = "Email o Contraseña incorrectos"        
        }
    };
}

