//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    var perimetro;
    var alambre;
    
    largo = parseInt(document.getElementById("largo").value);
    ancho = parseInt(document.getElementById("ancho").value);
    perimetro = (2*largo) + (2*ancho);
    alambre = perimetro*6;
    alert("Se Necesitan "+ alambre + " m "+ " de alambre");
	
}

