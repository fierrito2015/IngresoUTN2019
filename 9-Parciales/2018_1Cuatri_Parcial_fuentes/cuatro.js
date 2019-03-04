
function mostrar ()

{
    var numero1;
    var numero2;
    var suma;
    var resta;
    
    
    numero1 = prompt("Ingrese el primero Numero:");
    numero2 = prompt("Ingrese el segundo Numero: ");

    if (numero1==numero2)
    {
        alert(numero1+numero2);
    

    }
    else
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        if (numero1>numero2)
        {
            resta=numero1-numero2;
            alert("la resta es "+resta);

        }
        else
        {
            suma=numero1+numero2;
            if (suma>10)
            {
             alert("la suma es "+suma+" y supero a 10");

            }
            else{
                alert("la suma es :"+suma);
            }
        }
    }

}
