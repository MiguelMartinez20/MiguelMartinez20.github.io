var formulario = document.getElementById("formulario_1")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    console.log(datos.get('horainicio'))

    fetch('http://liftup.pythonanywhere.com/forma/', {
        method : 'POST',
        body : datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
})