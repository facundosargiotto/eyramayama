$('#containerProfesorado').hide();
$('#containerEscuela').hide();


$('#btnEscuela').click(mostrarEscuela);
$('#btnProfesorado').click(mostrarProfesorado);
$('#cerrarProfesorado').click(cerrarProfesorado);
$('#cerrarEscuela').click(cerrarEscuela)


function mostrarEscuela() {
    $('#containerEscuela').slideDown(500);
}

function mostrarProfesorado() {
    $('#containerProfesorado').slideDown(500);
}

function cerrarProfesorado() {
    $('#containerProfesorado').slideUp(500)
}

function cerrarEscuela() {
    $('#containerEscuela').slideUp(500)
}