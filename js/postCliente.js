var formulario = document.getElementById("formulario_2")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('https://liftup.pythonanywhere.com/cliente/', {
        method : 'POST',
        body : datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Push.create("Nuevo Cliente",{
                body: "Se ha uncluido a un nuevo cliente, ¡Inicia sesión para revisar sus datos!",
                icon: "images/icon192x192.png",
                timeout: 8000,
                onClick: function(){                  
                    window.location.replace("https://miguelmartinez20.github.io/login.html");
                    this.close();
                }
            });
        })
})