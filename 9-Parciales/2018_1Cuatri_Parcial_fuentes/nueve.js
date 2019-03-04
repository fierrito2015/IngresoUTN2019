function mostrar()
{
    
    var marca;
    var peso;
    var temperatura;
    var tempPares=0;
    var marcaPeso;
    var cantTemp=0;
    var promedio;
    var acumuladorPeso=0;
    var contadorPeso=0;
    var maximo;
    var minimo;
    var flag=0;
    var respuesta=true;

    while(respuesta==true)
    {
        marca = prompt("Ingrese La marcar del Producto: ");
        peso = parseInt(prompt("Ingrese el peso del producto de 1 a 100g: ")); 
        while( peso<1||peso>100||isNaN(peso)) 
        {
            peso = parseInt(prompt("ERROR. Reingrese el peso del producto: "));
        }
        temperatura=parseInt(prompt("ingrese Temperatura de almacenamiento:"));
        while(temperatura<-30||temperatura>30||isNaN(temperatura))
        {
            temperatura=parseInt(prompt("ERROR. Reingrese Temperatura de almacenamiento:"));
        }
        acumuladorPeso=acumuladorPeso+peso;
        contadorPeso++;
        if(temperatura%2==0)
        {
            tempPares++;
        }
        if(flag==0||peso>maximo)
        {
            maximo=peso;
            marcaPeso=marca;

        }
        if(flag==0||peso<minimo)
        {
            minimo=peso;
            flag=1;
        }
        if(temperatura<0)
        {
            cantTemp++;

        }
        respuesta=confirm("Desea continuar?:");

    }
    
   document.write("La cantidad de temperaturas pares: "+tempPares+"<br>");
   document.write("La marca del producto más pesado es: "+marcaPeso+"<br>");
   document.write(" La cantidad de productos que se conservan a menos de 0 grados son: "+cantTemp+"<br>");
   if (contadorPeso !=0)
   {
       promedio= acumuladorPeso/contadorPeso;
       document.write("El promedio del peso de todos los productos es: "+promedio+"<br>");

   }
   else
   {
    document.write("No se Ingresaron productos: "+"<br>");

   }
   
   document.write("El peso máximo es: "+maximo+"<br>");
   document.write("El peso minimo es :"+minimo+"<br>");
}
