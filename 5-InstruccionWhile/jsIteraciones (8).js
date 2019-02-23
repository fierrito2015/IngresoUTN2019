function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta="si";
	while (respuesta =="si")
	{
		var numero = parseInt(prompt("Ingrese un Numero"));
		if (numero >=0)
		{
			positivo=positivo + numero;
			respuesta=prompt("Desea Ingresar Otro Numero?").toLowerCase();

		}
		else
		{
			negativo=negativo*numero;
			respuesta= prompt("Desea Ingresar Otro Numero?").toLowerCase();

		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN