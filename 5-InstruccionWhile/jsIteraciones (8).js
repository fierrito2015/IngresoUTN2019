function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta=true;
	while (respuesta ==true)
	{
		numero = parseInt(prompt("Ingrese un Numero"));
		while (isNaN(numero))
		{
			alert("ERROR, eso no es un Numero");
			numero = parseInt(prompt("Ingrese un Numero"));
		}
		if (numero >=0)
		{
			positivo=positivo + numero;
			

		}
		else
		{
			negativo=negativo*numero;
			

		}

			respuesta= confirm("Desea Ingresar Otro Numero?");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN