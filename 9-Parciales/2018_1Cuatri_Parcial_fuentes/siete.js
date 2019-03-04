function mostrar()
{
 var nota;
 var sexo;
 var contadorVarones=0;
 var contador=0;
 var sexoNotaBaja;
 var minimaNota;
 var acumuladorNotas=0;
 var promedio;
 var flag=0;

 do
 {
     nota=parseInt(prompt("Ingrese la nota:"));
     while (nota<0 || nota>10 || isNaN(nota))
     {
         nota=parseInt(prompt("Error. Reingrese Nota"));
     }
     sexo = prompt("Ingrese F o M").toLowerCase();
     while (sexo!="f"&&sexo!="m")
     {
        sexo = prompt("Error. Reingrese F o M").toLowerCase();
     }
     acumuladorNotas=acumuladorNotas+nota;
     
     if(flag==0||nota<minimaNota)
     {
         minimaNota=nota;
         sexoNotaBaja=sexo;
         flag=1
     }
     if (nota>=6 && sexo=="m")
     {
         contadorVarones++;

     }
     contador++;
     
 }while(contador<5);
 promedio=acumuladorNotas/contador;
alert("El promedio de las notas totales es: "+promedio);
alert("La nota más baja es: " + minimaNota+ " y el sexo de esa persona es: "+sexoNotaBaja);
alert("La cantidad de varones que su nota haya sido mayor o igual a 6: "+ contadorVarones)

}
