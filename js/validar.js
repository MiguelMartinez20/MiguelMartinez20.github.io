// VALIDANDO EL CORREO
function ValidarCorreo() {
    var txtEmail = document.getElementById("id_email")
    var validacionCorreo = document.getElementById("validacionCorreo")
        if(txtEmail.value.includes("@") && ((txtEmail.value.includes(".com")) || (txtEmail.value.includes(".cl")) || (txtEmail.value.includes(".org")) || (txtEmail.value.includes(".net")))){
            validacionCorreo.innerHTML = ""
        }
        else
        {
            validacionCorreo.innerHTML = "Ingrese un Email Valido"
        }
}

// VALIDANDO QUE NO SE INGRESEN NUMEROS
function NoNumbers(){
    var numbers = [0,1,2,3,4,5,6,7,8,9,";","+", "-", "?", "¿", 
                    "¡", "!", ".", ",", "/", "#", "$", "%", "(", ")"]
    var txtCliente = document.getElementById("id_cliente")
    var txtTecnico = document.getElementById("id_tecnico")

    for(let i in numbers){
        txtCliente.value = txtCliente.value.replace(numbers[i], "")
        txtTecnico.value = txtTecnico.value.replace(numbers[i], "")
    }
}

// VALIDANDO QUE NO SE INGRESEN LETRAS
function NoLetters(){
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ",", "*", "|", "´", "{", "}", "-"
                ]
    var txtNascensor = document.getElementById("id_nascensor")
    txtNascensor.value = txtNascensor.value.toLowerCase()
    for(let i in letters){
        txtNascensor.value = txtNascensor.value.replace(letters[i], "")
    }
}

function Fecha(){
    
    var fechaini = document.getElementById("id_horaini").value;
    var fechater = document.getElementById("id_horaterm").value;
    console.log(fechaini);
    console.log(fechater);
    
        if(fechaini>fechater)
        {
            console.log("Fecha Invalida");
        }
        else
        {
            console.log("Fecha Valida");
        }
    
    
}













