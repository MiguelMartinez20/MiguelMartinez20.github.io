function ValidarCorreo() {
    var txtCorreo = document.getElementById("id_correo")
    var validacionEmail = document.getElementById("validacionEmail")
        if(txtCorreo.value.includes("@") && ((txtCorreo.value.includes(".com")) || (txtCorreo.value.includes(".cl")) || (txtCorreo.value.includes(".org")) || (txtCorreo.value.includes(".net")))){
            validacionEmail.innerHTML = ""
        }
        else
        {
            validacionEmail.innerHTML = "Ingrese un Email Valido"
        }
}

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