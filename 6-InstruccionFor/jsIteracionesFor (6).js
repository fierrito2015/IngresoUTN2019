function Mostrar()
{
var numero
var contadorPares=0
numero= parseInt(prompt("Ingrese un numero POSITIVO"));
 while (numero<=0||isNaN(numero))
    {
        numero = parseInt(prompt("Error. Ingrese un numero POSITIVO"));
    }
for (var i=1;i<=numero;i++)
{
    
   
    if (i%2==0)
    {
       contadorPares++
       console.log(i);
    }
}
console.log("La cantidad de pares es: "+contadorPares);



}//FIN DE LA FUNCIÓN