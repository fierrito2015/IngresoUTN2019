function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	var numero;
	var promedio;
	
	while (respuesta == true)
	{
		numero = parseInt (prompt("Ingerese un numero: "));
		while (isNaN(numero))
		{
			alert("ERROR, Ingrese un Numero:");
			numero = parseInt(prompt("Ingrese un Numero: "));
		}
		acumulador = acumulador + numero;
		contador = contador +1 ;
		respuesta =confirm("Desea seguir ingresando numeros?");
		
	}
	promedio = acumulador / contador ;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN