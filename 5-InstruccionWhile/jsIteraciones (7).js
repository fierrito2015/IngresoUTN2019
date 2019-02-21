function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	var promedio;
	
	while (respuesta == "si")
	{
		numero = parseInt (prompt("Ingerese un numero: "));
		acumulador = acumulador + numero;
		contador = contador +1 ;
		respuesta = prompt("Desea seguir ingresando numeros? si o no ?").toLowerCase();
		
	}
	promedio = acumulador / contador ;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN