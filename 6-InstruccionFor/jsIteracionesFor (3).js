function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
while(isNaN(repeticiones))
{
    repeticiones = parseInt(prompt("Error. ingrese el número de repeticiones"));
}
for(var i=0;i<repeticiones;i++)
{
    alert("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN