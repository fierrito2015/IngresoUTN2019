function mostrar()
{
    var numero;
    var letra;
    var pares=0;
    var impares=0;
    var cantidadCeros=0;
    var acumuladorPos=0;
    var promedio;
    var acumuladorNeg=0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;
    var flag=0;
    var respuesta=true;
    var cantidadPos=0;

    while(respuesta == true)
    {
        numero=parseInt(prompt("Ingrese un numero entre -100 a 100:"));
        while(numero<-100 || numero>100|| isNaN(numero))
        {
            numero=parseInt(prompt("ERROR. Reingrese un numero entre -100 a 100:"));  
        }
        letra = prompt("Ingrese una letra").toLowerCase();
        
        if (numero%2==0)
        {
            pares++;
        }
        else
        {
            impares++;
        }
        if (numero==0)
        {
            cantidadCeros++;
        }
        if (numero>0)
        {
            acumuladorPos=acumuladorPos+numero;
            cantidadPos++;
        }
        else
        {
            acumuladorNeg=acumuladorNeg+numero;
        }
        if (flag==0||numero>maximo)
        {
            maximo=numero;
            letraMax=letra;
        }
        if(flag==0||numero<minimo)
        {
            minimo=numero;
            letraMin=letra;
            flag=1;
        }
        respuesta=confirm("Desea Seguir");
    }
    document.write("La cantidad de números pares es: "+pares+"<br>");
    document.write("La cantidad de números impares es: "+impares+"<br>");
    document.write("La cantidad de ceros es: "+ cantidadCeros+"<br>");
    if (cantidadPos!=0)
    {
        promedio=acumuladorPos/cantidadPos.toFixed(2);
        document.write("El promedio de todos los números positivos ingresados es: "+promedio+"<br>");
    }
    else
    {
        document.write("No se ingresaron Positivos"+"<br>");
    }
    
    document.write("La suma de todos los números negativos es: "+acumuladorPos+"<br>");
    document.write("La suma de todos los números negativos: "+acumuladorNeg+"<br>");
    document.write("El numero Maximo es: "+maximo+" y su letra es: "+letraMax+"<br>");
    document.write("El numero Minimo es: "+minimo+" y su letra es: "+letraMin+"<br>");


}
