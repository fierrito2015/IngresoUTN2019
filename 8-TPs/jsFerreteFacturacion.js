/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    
    suma = precio1 + precio2 + precio3;
    alert("el monto es de $ " + suma);
}

function Promedio () 

{
    var precio1;
    var precio2;
    var precio3;
    var promedio;
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);
    promedio = (precio1 + precio2 + precio3)/3;
    alert ("el promedio es $ "+ promedio);

	
}
function PrecioFinal ()

{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var iva;
    var total;
    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = precio1 + precio2+ precio3;
    iva = suma * 21 /100;
    total = suma + iva;
    alert ("el precio total con iva es de  $ "+ total); 

}