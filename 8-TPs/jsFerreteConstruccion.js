/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 var ancho;
 var largo;
 var perimetro;
 var alambre;
 ancho = parseFloat(document.getElementById("Ancho").value);
 largo = parseFloat(document.getElementById("Largo").value);
 perimetro = (2*largo) + (2*ancho);
 alambre = 3 * perimetro;
 alert("la cantidad de alambre necesario es de "+ alambre + "m");
}
function Circulo () 
{
    var radio
    var alambre
    radio = parseFloat(document.getElementById("Radio").value);
    alambre = 2*radio*Math.PI;
    alert("el largo necesario del alambre es de "+alambre.toFixed(2)+"m");
	
}
function Materiales () 

{
    var largo;
    var ancho;
    var cemento;
    var superf;
    var cal;
    ancho = parseFloat(document.getElementById("Ancho").value);
    largo = parseFloat(document.getElementById("Largo").value);
    
    superf = ancho*largo;
    cal = superf *3;
    cemento = superf*2;
    alert ("se necesita "+cal+" bolsas de cal y "+cemento+"  de cemento");
    
	
}