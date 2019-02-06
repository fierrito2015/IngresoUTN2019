/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var suma;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    suma = numero1 + numero2;
    alert ("la suma es "+ suma);
 
}

function restar()
{
    var numero3;
    var numero4;
    var resta;
    numero3 = document.getElementById("numeroUno").value;
    numero4 = document.getElementById("numeroDos").value;
    numero3 = parseInt(numero3);
    numero4 = parseInt(numero4);
    resta = numero3 - numero4;
    alert ("la resta es " + resta);

}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

