/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numero1;
    var numero2;
    var resto;
    numero1 = document.getElementById("numeroDividendo").value;
    numero2 = document.getElementById("numeroDivisor").value;
    
    
    if (numero2 != 0)
    {
        resto = numero1 % numero2;
        alert ("el resto es " + resto);
    }
    else
    {
        alert("no se puede dividir por 0");
    }
}
