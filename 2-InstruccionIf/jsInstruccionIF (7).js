function Mostrar()
{
    var edad;
    var estado;

    edad = parseInt(document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil");
    if(edad<18 && estado !="Soltero")
    {
        alert("Sos muy pequeño para ser NO ser soltero");
    }

//tomo la edad  

	


}//FIN DE LA FUNCIÓN