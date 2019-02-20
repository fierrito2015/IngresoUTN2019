function Mostrar()
{
//tomo el mes 
var mesDelAño
mesDelAño = document.getElementById("mes").value;
switch(mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert ("Se vinene el Invierno");
    break;

    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio!!");
    break;

    case"Septiembre":
    case "Octubre":
    case"Noviembre":
    case"Diciembre":
    alert("Ya pasamos el frio, Ahora CALOR!!");
    break;

}





}//FIN DE LA FUNCIÓN