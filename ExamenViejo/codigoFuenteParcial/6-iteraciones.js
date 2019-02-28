//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var impVenta;
    var contadorDias=1;
    var flag=0;
    var impMax;
    var impMin;

    while (contadorDias<=7)
    {
        impVenta=parseFloat(prompt("Ingrese el Importe Total de las ventas del Dia " + contadorDias));
        while (impVenta<0||isNaN(impVenta))
        {
            impVenta=parseFloat(prompt("ERROR.Ingrese el Importe Total de las ventas del Dia"));
        }
        if(flag==0||impVenta>impMax)
        {
            impMax=impVenta;
        }
        if (flag==0||impVenta<impMin)
        {
            impMin=impVenta;
            flag = 1;
        }
        contadorDias++;

    }

	document.write("El importe maximo fue de: "+ impMax+ "<br>");
    document.write("El importe minimo fue de: "+ impMin+ "<br>");
}

