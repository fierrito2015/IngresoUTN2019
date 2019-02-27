function Mostrar()
{

	var flag = 0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	
	var respuesta=true;

	while(respuesta==true)
	{ 
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero))
		{
			numero = parseInt(prompt("No es un Numero, Ingrese un Numero"));

		}
		
		if ( flag==0 || numero > maximo )

		{ 
			maximo=numero;
			
			
		}
		if (flag == 0 || numero< minimo)
		{
			minimo = numero;
			flag =1
			

		
	
		}		
		respuesta = confirm("Desea ingresar otro numero ?");
	
	
	}
	document.getElementById ("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN