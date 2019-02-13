function Mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;

    if (edad>12 && edad<18 )
    {
     alert ("Sos un adolescente");
    }
    else 
    {
        if (edad>17)
        {
           alert("Sos mayor de edad");

        }
        else
        {
            alert("Sos un niño");
        }
    }
    //tomo la edad  






}//FIN DE LA FUNCIÓN
