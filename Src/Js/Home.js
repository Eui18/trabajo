document.addEventListener('DOMContentLoaded', function() {
    var botonesPedido = document.querySelectorAll('.pedido');
    botonesPedido.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var formularioPedido = document.getElementById('cancelar');
            formularioPedido.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var formularioPedido = document.getElementById('pedido-form');

    formularioPedido.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('¡Pedido realizado con éxito!');
        formularioPedido.reset()
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var formularioCancelacion = document.getElementById('cancelacion-form');

    formularioCancelacion.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Cancelación enviada correctamente!');
        formularioCancelacion.reset();
    });
});

