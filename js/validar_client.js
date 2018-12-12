// VALIDANDO EL CORREO
function ValidarCorreo() {
    var txtCorreo = document.getElementById("id_correo")
    var validacionEmail = document.getElementById("validacionEmail")
        if(txtCorreo.value.includes("@") && ((txtEmail.value.includes(".com")) || (txtEmail.value.includes(".cl")) || (txtEmail.value.includes(".org")) || (txtEmail.value.includes(".net")))){
            validacionEmail.innerHTML = ""
        }
        else
        {
            validacionEmail.innerHTML = "Ingrese un Email Valido"
        }
}

// VALIDANDO QUE NO SE INGRESEN NUMEROS
function NoNumbers(){
    var numbers = [0,1,2,3,4,5,6,7,8,9,";","+", "-", "?", "¿", 
                    "¡", "!", ".", ",", "/", "#", "$", "%", "(", ")"]
    var txtNombre = document.getElementById("id_nombre")
    var txtCiudad = document.getElementById("id_ciudad")
    var txtComuna = document.getElementById("id_comuna")

    for(let i in numbers){
        txtNombre.value = txtNombre.value.replace(numbers[i], "")
        txtCiudad.value = txtCiudad.value.replace(numbers[i], "")
        txtComuna.value = txtComuna.value.replace(numbers[i], "")
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
    var txtTelefono = document.getElementById("id_telefono")
    txtTelefono.value = txtTelefono.value.toLowerCase()
    for(let i in letters){
        txtTelefono.value = txtTelefono.value.replace(letters[i], "")
    }
}