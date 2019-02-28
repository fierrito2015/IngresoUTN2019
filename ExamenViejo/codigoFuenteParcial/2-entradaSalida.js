//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio
    var precioMasIva;
    var iva
    
    precio = parseFloat(prompt("Ingrese un precio"));
    iva = precio*21/100;
    precioMasIva= precio+iva;
    document.getElementById("importe").value=precioMasIva.toFixed(2);

}

