function mostrar()
{	
    var precio;
    var descuento;
    var precioFinal;
    
    precio=parseFloat(prompt("Ingrese Precio:"));
    descuento=parseFloat(prompt("Ingrese descuento: "));

    precioFinal = precio-(precio*descuento/100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}
