function Mostrar()
{

	var flag = false;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	
	var respuesta='si';

	while(respuesta!='no')
	{ 
		numero = prompt("ingrese un numero");
		if ( flag==false || numero > maximo )

		{ 
			maximo=numero;
			
		}
		if (flag == flase || numero< minimo)
		{
			minimo = minimo;
			flag == true;

		
	
		}		
		respuesta = prompt("Desea ingresar otro numero ?");
	
	
	}
	document.getElementById ("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN