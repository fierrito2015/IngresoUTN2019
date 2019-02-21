function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero1;
	var numero2
	
	var respuesta="si";
	while (positivo>=0 && respuesta =="si")
	{
		numero1 = parseInt(prompt("Ingrese un numero: "));
		positivo = positivo + numero1;
		respuesta = prompt("Desea seguir ingresando numeros?").toLowerCase();
	}
	while (negativo<1 && respuesta == "si")
	{
		numero2 = parseInt(prompt("Ingrese un numero: "));
		negativo = negativo * numero2;
		respuesta = prompt("Desea seguir ingresando numeros?").toLowerCase();

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN