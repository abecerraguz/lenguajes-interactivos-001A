function confirmaImpresion(){
    window.print();
}

function retrasoSegundos() {
    setTimeout(function() {
        var modal = new bootstrap.Modal(document.getElementById('botonImprimir'));
        modal.show();
    }, 2000);
}
