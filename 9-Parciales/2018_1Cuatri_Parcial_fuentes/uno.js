
 function mostrar ()
{
	var largo;
	var ancho;
	var perimetro;

	largo = parseInt(prompt("Ingrese el Largo: "));
	ancho = parseInt(prompt("Ingrese el Ancho: "));

	perimetro = (largo+ancho)*2;
	alert("el perimetro es "+perimetro+" ms");

}
