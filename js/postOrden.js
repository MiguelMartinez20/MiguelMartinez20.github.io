var formulario = document.getElementById("formulario_1")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    console.log(datos.get('horainicio'))

    fetch('https://liftup.pythonanywhere.com/forma/', {
        method : 'POST',
        body : datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Push.create("Nueva Orden de Trabajo",{
                body: "Se creo una nueva orden, ¡Inicia sesión para revisarla!",
                icon: "images/icon152x152.png",
                timeout: 4000,
                onClick: function(){                  
                    window.location("https://miguelmartinez20.github.io/login.html");
                    this.close();
                }
            });

        })
})