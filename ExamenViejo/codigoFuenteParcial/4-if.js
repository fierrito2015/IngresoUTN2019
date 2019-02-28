//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
    var numero2;
    var producto;
    var suma;
    var resta;
    numero1 = parseInt(prompt("ingrese el priemro numero"));
    numero2 = parseInt(prompt("ingrese el segundo numero"));

    if (numero1==numero2)
    {
        producto = numero1*numero2;
        document.write("El producto es de: "+ producto);

    }
    else if (numero1>numero2)
    {
        resta = numero1-numero2;
        document.write("la resta es de: "+ resta);

    }
    else
    {
        suma = numero1 + numero2;
        document.write(" la suma es de: "+ suma);
    }


}

